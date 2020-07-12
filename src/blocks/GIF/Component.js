import React, { useState, useEffect } from 'react';

import { Video, Button, ButtonGroup } from '@urban-bot/core';

import Loading from '../../components/Loading';
import useRandomGif from '../../hooks/useRandomGif';
import { messages } from '../../config';

function GIF() {
  const [gif, getGif] = useRandomGif(null);

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
          <Button onClick={getGif}>{messages.oneMore}</Button>
        </ButtonGroup>
      </>
    ) : <Loading />;
}

export default GIF;
