using Bogus;
using Bogus.DataSets;
using FluentAssertions;
using Moq;
using RocketseatAuction.API.Contracts;
using RocketseatAuction.API.Entities;
using RocketseatAuction.API.Enums;
using RocketseatAuction.API.UseCases.Auctions.GetCurrent;
using Xunit;

namespace UseCase.Test.Auctions.GetCurrent;
public class GetCurrentAuctionUseCaseTest
{
    [Fact]
    public void Success()
    {
        // arrange -> vars/dependencies declarations
        //var auctionEntity = new Auction
        //{
        // Id = 6,
        // Name = "Foo",
        // Starts = DateTime.Now,
        // Ends = DateTime.Now,
        //};
        var auctionEntity = new Faker<Auction>()
            .RuleFor(auction => auction.Id, faker => faker.Random.Number(1, 10))
            .RuleFor(auction => auction.Name, f => f.Lorem.Word())
            .RuleFor(auction => auction.Starts, f => f.Date.Past())
            .RuleFor(auction => auction.Ends, f => f.Date.Future())
            .RuleFor(auction => auction.Items, (f, auction) => new List<Item>
            {
                new Item
                {
                    Id = f.Random.Number(1, 700),
                    Name = f.Commerce.ProductName(),
                    Brand = f.Commerce.Department(),
                    BasePrice = f.Random.Decimal(50, 1000),
                    Condition = f.PickRandom<Condition>(),
                    AuctionId = auction.Id
                }
            }).Generate();

        var mock = new Mock<IAuctionRepository>();
        mock.Setup(i => i.GetCurrent()).Returns(auctionEntity);

        var useCase = new GetCurrentAuctionUseCase(mock.Object);

        // act
        var auction = useCase.Execute();

        // assert
        //Assert.NotNull(auction);
        auction.Should().NotBeNull();
        auction.Id.Should().Be(auctionEntity.Id);
        auction.Name.Should().Be(auctionEntity.Name);
        auction.Items.Count.Should().Be(1);
    }
}
