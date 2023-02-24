import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurant) => `
<h3 class="resto1__name">${restaurant.name}</h3>
<p class="resto1__address">${restaurant.address}</p>

<div class="resto1__info">
<img class="lazyload" class="resto_list__image" tabIndex="0" data-src="${CONFIG.BASE_IMAGE}${restaurant.pictureId}"alt="image ${restaurant.name}" >
      
  <div class="resto1_detailed_info">
      <p>Rating: ${restaurant.rating} </p>
      <p tabIndex="0">Kota: ${restaurant.city}</p>
      <p>Categories: ${restaurant.categories.map((category) => category.name).join(', ')} </p>
      <p tabIndex="0">${restaurant.description}</p>
      <p>Food: </p> 
      <p>${restaurant.menus.foods.map((food) => food.name).join(', ')} </p>
      <p>Drink: </p>
      <p>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')} </p>
  </div>
  
</div>

  <h2 class="customer_review_tag">Customer Reviews</h2>

<div class="customer_reviews">
  ${restaurant.customerReviews.map((review) => `
  <div class="resto1InfoList">
      <p>"${review.review}" - ${review.name}</p>
  
      <p class="date-review">${review.date}</p>
  </div>
  `).join('')}
</div>
`;

const createRestoItemTemplate = (restaurant) => `
<div class="resto__card">
<a href="${`/#/detail/${restaurant.id}`}" tabIndex="0" class="card-linkresto">
<article id="${restaurant.id}"  tabindex="0">
<img class="lazyload" class="resto_list__image" tabIndex="0" data-src="${CONFIG.BASE_IMAGE}${restaurant.pictureId}"alt="image ${restaurant.name}" >
    <div class="resto_list__content">
          <p >${restaurant.name}</p>
          <p tabIndex="0">Kota: ${restaurant.city}</p>
          <div class="restoinfo">
          <p  color ="white" >${restaurant.description.slice(0, 300)}</p> </div>
          </div>
</article>
</a>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate, createRestoDetailTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};
