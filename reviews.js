const topReviews = [
  {
    name: "Harper J.",
    role: "⭐⭐⭐⭐⭐",
    message: "The craftsmanship is beautiful and my kids adore their new toys. Highly recommend!"
  },
  {
    name: "Lucas P.",
    role: "⭐⭐⭐⭐⭐",
    message: "Wonderful experience from start to finish. The toys are sturdy and safe."
  },
  {
    name: "Ava S.",
    role: "⭐⭐⭐⭐⭐",
    message: "Customer service was so friendly and helpful. The packaging was adorable too!"
  }
];

const bottomReviews = [
  {
    name: "Mason W.",
    role: "⭐⭐⭐⭐⭐",
    message: "These toys are truly heirloom quality. I’ll be buying more for gifts!"
  },
  {
    name: "Ella K.",
    role: "⭐⭐⭐⭐⭐",
    message: "Fast shipping and the toys exceeded my expectations. Thank you Little Bird!"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const topRow = document.getElementById('reviewRowTop');
  const bottomRow = document.getElementById('reviewRowBottom');

  const render = (list, container) => {
    container.innerHTML = '';
    list.forEach(review => {
      const col = document.createElement('div');
      col.className = 'review-card col-md-4';
      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body text-center">
            <h5 class="card-title mb-1">${review.name}</h5>
            <p class="review-role mb-2">${review.role}</p>
            <p class="small text-muted mb-0">${review.message}</p>
          </div>
        </div>
      `;
      container.appendChild(col);
    });
  };

  if (topRow && bottomRow) {
    render(topReviews, topRow);
    render(bottomReviews, bottomRow);
  }
});