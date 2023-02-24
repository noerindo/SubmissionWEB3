import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },
  _onMessageHandler(message) {
    console.log(message.data);
    // eslint-disable-next-line no-undef
    NotificationHelper.sendNotification({
      // eslint-disable-next-line no-undef
      title: `${movie.title} is on cinema!`,
      options: {
        // eslint-disable-next-line no-undef
        body: restaurant.overview,
        // eslint-disable-next-line no-undef
        image: `${CONFIG.BASE_IMAGE_URL + restaurant.poster_path}`,
      },
    });
  },
};

export default WebSocketInitiator;
