document.getElementById('send-button').addEventListener('click', () => {
            // Hide feedback form and show thank-you message
            document.getElementById('feedback-card').classList.add('d-none');
            document.getElementById('thank-you-card').classList.remove('d-none');
        });

const products = [
    {
 name: "Wooden Train",
 price: 24.99,
 image: "train.jpg",
  description: "Handcrafted birch train with wheels."
  },
    {
    name: "Plush Bear",
     price: 19.99,
    image: "bear.jpg",
    description: "Soft and cuddly bear perfect for all ages."
      },
{
    name: "Puzzle Blocks",
 price: 14.99,
 image: "blocks.jpg",
  description: "Colorful puzzle blocks to stimulate creativity."
   }
        ];

  products.forEach(product => {
document.write(`
   <div class="product-card">
  <figure>
  <img src="${product.image}" alt="${product.name}">
     <figcaption>${product.name}</figcaption>
         </figure>
   <p>${product.description}</p>
     <p><strong>$${product.price.toFixed(2)}</strong></p>
                            </div>
             `);
   });

const reviews = [
        {
       name: "Samantha",
        review: "Beautiful craftsmanship!",
       rating: 5
   },
       {
           name: "Michael",
         review: "My kids love it!",
     rating: 4
     },
        {
        name: "Jessica",
       review: "High quality and safe for toddlers.",
     rating: 5
   }
   ];

   reviews.forEach(review => {
                        document.write(`
                            <article>
                                <h4>${review.name}</h4>
                                <p>${review.review}</p>
                                <p class="rating">${"★".repeat(review.rating)}</p>
                            </article>
                        `);
                    });