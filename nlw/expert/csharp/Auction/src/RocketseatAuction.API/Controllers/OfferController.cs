using Microsoft.AspNetCore.Mvc;
using RocketseatAuction.API.Comunication.Requests;
using RocketseatAuction.API.Filters;
using RocketseatAuction.API.UseCases.Offers.CreateOffer;

namespace RocketseatAuction.API.Controllers;

// [ServiceFilter(typeof(AuthenticationUserAttribute))] - all endpoints needs auth
public class OfferController : RocketseatAuctionBaseController
{
    [HttpPost]
    [Route("{itemId}")]
    [ServiceFilter(typeof(AuthenticationUserAttribute))] // just this endpoint needs auth
    public IActionResult CreateOffer(
        [FromRoute] int itemId, 
        [FromBody] RequestCreateOfferJson request,
        [FromServices] CreateOfferUseCase useCase // comes from dependency injection
    )
    {
        var id = useCase.Execute(itemId, request);
        return Created(string.Empty, id);
    }
}
