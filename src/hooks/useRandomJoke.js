import { useState, useEffect } from 'react';

import useCancelable from 'hooks/useCancelable';
import { getRandomJoke } from 'utils';

function useRandomJoke(initial) {
  const [joke, setJoke] = useState(initial);

  const repeat = useCancelable(getRandomJoke, setJoke);

  useEffect(repeat, []);

  return [joke, repeat];
}

export default useRandomJoke;
