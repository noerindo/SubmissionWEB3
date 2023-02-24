import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const NowHome = {
  async render() {
    return `
    
      <div class="content">
     
      <h2>Jelajahi Restaurant</h2>
      <div id="restaurants" class="restaurant"> 
      
      </div>
    
    </div>
    
  `;
  },

  async afterRender() {
    const restaurants = await TheRestoDbSource.nowHomerestos();
    const restosContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restosContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default NowHome;
