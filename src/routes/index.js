import Greeting from 'blocks/Greeting';

import GIF from 'blocks/GIF';
import Meme from 'blocks/Meme';
import Joke from 'blocks/Joke';
import Kargin from 'blocks/Kargin';

import NotFound from 'blocks/NotFound';

const routes = [
  {
    exact: true,
    component: Greeting,
    path: '/',
  },
  {
    exact: true,
    component: Greeting,
    path: '/start',
  },
  {
    exact: true,
    component: Meme,
    path: '/meme',
  },
  {
    exact: true,
    component: Joke,
    path: '/joke',
  },
  {
    exact: true,
    component: GIF,
    path: '/gif',
  },
  {
    exact: true,
    component: Kargin,
    path: '/kargin',
  },
  {
    component: NotFound,
    path: /.+/,
  },
];

export default routes;
