import fetch from 'node-fetch';
import dotenv from 'dotenv';

import { kargin } from '../config';

dotenv.config();

const { GIPHY_API_KEY, IMGUR_CLIENT_ID } = process.env;

// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325

const makeCancelable = promise => {
  let hasCanceled_ = false;

  const wrappedPromise = new Promise((resolve, reject) => {
    promise.then(val => hasCanceled_ ? reject('operation is manually canceled') : setTimeout(_ => resolve(val), 1000));
    promise.catch(reject);
  });

  return (wrappedPromise.cancel = _ => (hasCanceled_ = true), wrappedPromise);
};

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

export {
  pickRandom,
  getRandomGif,
  getRandomMemes,
  getRandomJoke,
  getRandomKargin,
  makeCancelable,
};
