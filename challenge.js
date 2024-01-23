function cheapestOfferCalculator(cart) 
{
  const basePrice = 8;
  const discounts = [0, 0.05, 0.1, 0.2, 0.25];

    const bookCounts = {};

    cart.forEach((book) => {
      bookCounts[book] = (bookCounts[book] || 0) + 1;
    });

    let totalPrice = 0;
    
    while (Object.values(bookCounts).some(count => count > 0)) {
      let differentBooks = 0;

      for (const book in bookCounts) {
        if (bookCounts[book] > 0) {
          differentBooks++;
          bookCounts[book]--;
        }
      }

      totalPrice += differentBooks * basePrice * (1 - discounts[differentBooks - 1]);
    }
    return totalPrice;
}

//Checking for shopping cart input (numbers of books and volumes)
const shoppingCart = [1, 2, 3];

const cheapestOffer = cheapestOfferCalculator(shoppingCart);

console.log("The cheapest combination is: ", cheapestOffer.toFixed(2) + "€");