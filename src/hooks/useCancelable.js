import { useEffect, useRef, useCallback } from 'react';

function useCancelable(getCancelable, fn) {
  const ref = useRef(null);

  const repeat = useCallback(() => {
    const cancelable = getCancelable();

    ref.current = cancelable;

    cancelable.then(fn).catch(console.error);
  }, [getCancelable, fn]);

  useEffect(() => ref.current?.cancel, []);

  return repeat;
}

export default useCancelable;
