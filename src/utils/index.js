import fetch from 'node-fetch';
import dotenv from 'dotenv';

import { kargin } from '../config';

dotenv.config();

const { GIPHY_API_KEY, IMGUR_CLIENT_ID } = process.env;

const pickRandom = array => array[Math.round(Math.random() * array.length)];

const getRandomGIF = () => fetch(`https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}`)
  .then(res => res.json());

const getRandomMemes = () => fetch('https://api.imgur.com/3/g/memes', { headers: { Authorization: `Client-ID ${IMGUR_CLIENT_ID}` } })
  .then(res => res.json());

const getRandomJoke = () => fetch('https://icanhazdadjoke.com', { headers: { Accept: 'application/json' } })
  .then(res => res.json());

const getRandomKargin = () => `https://www.youtube.com/watch?v=${pickRandom(kargin)}`;

export { pickRandom, getRandomGIF, getRandomMemes, getRandomJoke, getRandomKargin };
