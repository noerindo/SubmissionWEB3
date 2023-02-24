import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
// eslint-disable-next-line no-unused-vars
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="content">
      <div id="resto" class="resto"></div>
      <div id="likeButtonContainer"></div>
      </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        description: resto.description,
        rating: resto.rating,
        city: resto.city,
      },
    });
  },
};

export default Detail;
