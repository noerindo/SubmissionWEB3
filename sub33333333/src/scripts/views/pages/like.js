import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';
import './empty';

const Like = {
  async render() {
    return `
          <h2 class="content__heading">Your Liked Resto</h2>
          <div id="restos" class="restos">
     
        </div> 
     `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#restos');
    if (restos.length > 0) {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestoItemTemplate(resto);
      });
    } else {
      document.querySelector('#restos').innerHTML = '<empty-favorite></empty-favorite>';
    }
  },
};

export default Like;
