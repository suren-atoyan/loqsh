import { useState, useEffect } from 'react';

import useCancelable from 'hooks/useCancelable';
import { getRandomGif } from 'utils';

function useRandomGif(initial) {
  const [gif, setGif] = useState(initial);

  const repeat = useCancelable(getRandomGif, setGif);

  useEffect(repeat, []);

  return [gif, repeat];
}

export default useRandomGif;
