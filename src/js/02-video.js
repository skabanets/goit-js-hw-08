import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

let videoplayerCurrentTime =
  localStorage.getItem('videoplayer-current-time') || 0;

player.setCurrentTime(videoplayerCurrentTime);

const onPlay = ({ seconds }) =>
  localStorage.setItem('videoplayer-current-time', `${Math.floor(seconds)}`);

const setVideoCurrentTime = throttle(onPlay, 1000);

player.on('timeupdate', setVideoCurrentTime);
