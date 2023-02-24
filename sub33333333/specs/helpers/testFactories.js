import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-idb';
const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestos: FavoriteRestoIdb,
    resto,
  });
};
 
export { createLikeButtonPresenterWithResto }; 