using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using RocketseatAuction.API.Contracts;

namespace RocketseatAuction.API.Filters;

public class AuthenticationUserAttribute : AuthorizeAttribute, IAuthorizationFilter

{
    private readonly IUserRepository _repository;
    public AuthenticationUserAttribute(IUserRepository repository) => _repository = repository;

    void IAuthorizationFilter.OnAuthorization(AuthorizationFilterContext context)
    {
        try
        {
            var token = TokenOnRequest(context.HttpContext);
            var email = FromBase64ToString(token);
            var exist = _repository.ExistUserWithEmail(email);

            if (exist == false)
            {
                context.Result = new UnauthorizedObjectResult("E-mail not valid.");
            }
        }
        catch (Exception ex) 
        {
            context.Result = new UnauthorizedObjectResult(ex.Message);
        }
    }

    private string TokenOnRequest(HttpContext context)
    {
        var authentication = context.Request.Headers.Authorization.ToString();
        if (string.IsNullOrEmpty(authentication))
        {
            throw new Exception("Token is missing.");
        }
        // Bearer Y3Jpc3RpYW5vQGNyaXN0aWFuby5jb20=
        // authentication[7] = just char on position 7 (Y)
        // authentication[7..] = start from position 7 and get all rest from right (Y3Jpc3RpYW5vQGNyaXN0aWFuby5jb20=)
        return authentication["Bearer ".Length..];
    }

    private string FromBase64ToString(string base64)
    {
        var data = Convert.FromBase64String(base64);
        return System.Text.Encoding.UTF8.GetString(data);
    }
}
