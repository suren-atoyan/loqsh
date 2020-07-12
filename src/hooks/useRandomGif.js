import { useState } from 'react';

import useCancelable from './useCancelable';
import { getRandomGif } from '../utils';

function useRandomGif(initial) {
  const [gif, setGif] = useState(initial);

  const repeat = useCancelable(getRandomGif, setGif);

  return [gif, repeat];
}

export default useRandomGif;
