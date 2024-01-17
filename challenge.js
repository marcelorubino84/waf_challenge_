function cheapestOfferCalculator(cart) 
{
  const basePrice = 8;
  const discounts = [0, 0.05, 0.1, 0.2, 0.25];

    const bookCounts = {};

    cart.forEach((book) => {
      bookCounts[book] = (bookCounts[book] || 0) + 1;
    });


    
}