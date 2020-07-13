import fetch from 'node-fetch';
import dotenv from 'dotenv';

import { kargin } from 'config';

dotenv.config();

const { GIPHY_API_KEY, IMGUR_CLIENT_ID } = process.env;

const pickRandom = array => array[Math.round(Math.random() * array.length)];

const getRandomGif = () => makeCancelable(
  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`)
    .then(res => res.json())
);

const getRandomMemes = () => makeCancelable(
  fetch('https://api.imgur.com/3/g/memes', { headers: { Authorization: `Client-ID ${IMGUR_CLIENT_ID}` } })
    .then(res => res.json())
);

const getRandomJoke = () => makeCancelable(
  fetch('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } })
    .then(res => res.json())
);

const getRandomKargin = () => `https://www.youtube.com/watch?v=${pickRandom(kargin)}`;

// The source (has been changed) of this utility is https://github.com/facebook/react/issues/5465#issuecomment-157888325

const fireReject = reject => reject('operation is manually canceled');

const makeCancelable = promise => {
  let _reject = null;
  let _hasCanceled = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    _hasCanceled && fireReject(reject);
    _reject = reject;

    promise.then(resolve);
    promise.catch(reject);
  });

  wrappedPromise.cancel = () => {
    _hasCanceled = true;
    _reject && fireReject(_reject);
  };

  return wrappedPromise;
};

export {
  pickRandom,
  getRandomGif,
  getRandomMemes,
  getRandomJoke,
  getRandomKargin,
  makeCancelable,
};
