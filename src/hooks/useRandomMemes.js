import { useState, useEffect } from 'react';

import useCancelable from './useCancelable';
import { getRandomMemes } from '../utils';

function useRandomMemes(initial) {
  const [memes, setMemes] = useState(initial);

  const repeat = useCancelable(getRandomMemes, memes => setMemes(memes.data));

  useEffect(repeat, []);

  return memes;
}

export default useRandomMemes;
