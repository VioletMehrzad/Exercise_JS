const product = {
    name: "Iphone 14 Pro",
    brand: "Apple",
    type: "Smart Phone",
    category: "Phone",
    id: "1234",
    price: "999 $",
    color: "Silver",
    addToCart: function() {
        shoppingCart.push(this)
    },
    removeCart: function() {
        const productIndex = shoppingCart.indexOf(this)
        shoppingCart.splice(productIndex, 1)
    }
}

const shoppingCart = []

product.addToCart()
product.removeCart()

console.log(shoppingCart)


