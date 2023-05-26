import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(STORAGE_KEY, seconds);
  }, 1000)
);

const seconds = localStorage.getItem(STORAGE_KEY) || 0;

player
  .setCurrentTime(seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    console.log(error);
  });
