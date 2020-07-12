import { useState } from 'react';

import useCancelable from './useCancelable';
import { getRandomMemes } from '../utils';

function useRandomMemes(initial) {
  const [memes, setMemes] = useState(initial);

  useCancelable(getRandomMemes, memes => setMemes(memes.data));

  return memes;
}

export default useRandomMemes;
