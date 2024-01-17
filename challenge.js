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
        // This needs to be completed
        // Probably a conditional statement could be used here to increment the book count.
      }
    }
}