using Bogus;
using FluentAssertions;
using Moq;
using RocketseatAuction.API.Comunication.Requests;
using RocketseatAuction.API.Contracts;
using RocketseatAuction.API.Entities;
using RocketseatAuction.API.Services;
using RocketseatAuction.API.UseCases.Offers.CreateOffer;
using Xunit;

namespace UseCase.Test.Offers.CreateOffer;
public class CreateOfferUseCaseTest
{
    [Theory]
    [InlineData(1)] // not exec in order
    [InlineData(2)]
    [InlineData(3)]
    public void Success(int itemId)
    {
        var req = new Faker<RequestCreateOfferJson>().RuleFor(req => req.Price, f => f.Random.Decimal(50, 1000)).Generate();
        var offerRepository = new Mock<IOfferRepository>();
        var loggedUser = new Mock<ILoggedUser>();
        loggedUser.Setup(i => i.User()).Returns(new User());
        var useCase = new CreateOfferUseCase(loggedUser.Object, offerRepository.Object);

        var act = () => useCase.Execute(itemId, req);

        act.Should().NotThrow();
    }
}
