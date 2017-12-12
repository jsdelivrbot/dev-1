var shopper = {
    personShopping: "Mr.Bee",
    age: 15,
    likesShopping: true,
    ageName: function() {
        return this.personShopping + " likes to shop = " + this.likesShopping;
    },
    shoppingCart: ["apples", "dogg", "oranges"]




};
shopper.ageName();
console.log(shopper.ageName());