import { useEffect, useState } from 'react';

function useCancelable(getCancelable, fn) {
  const [flag, repeat] = useState(true);

  useEffect(() => {
    const cancelable = getCancelable();

    cancelable.then(fn).catch(console.error);

    return cancelable.cancel;
  }, [flag]);

  return () => repeat(flag => !flag);
}

export default useCancelable;
