import React, { useState, useEffect } from 'react';

import { Video, Button, ButtonGroup } from '@urban-bot/core';

import Loading from '../../components/Loading';
import { getRandomGIF } from '../../utils';
import { messages } from '../../config';

function GIF() {
  const [gif, setGif] = useState(null);

  useEffect(() => {
    setRandomGIF();
  }, []);

  function setRandomGIF() {
    getRandomGIF().then(gif => setGif(gif));
  }

  return gif
    ? (
      <>
        <Video
          isNewMessageEveryRender={false}
          file={gif.data.image_mp4_url}
        />
        <ButtonGroup
          isNewMessageEveryRender={false}
          title={messages.more}
        >
          <Button onClick={setRandomGIF}>{messages.oneMore}</Button>
        </ButtonGroup>
      </>
    ) : <Loading />;
}

export default GIF;
