import React, { useState } from 'react';

import { Image, Button, ButtonGroup } from '@urban-bot/core';

import Loading from 'components/Loading';
import useRandomMemes from 'hooks/useRandomMemes';
import { messages } from 'config';

function Meme() {
  const memes = useRandomMemes(null);
  const [currentIndex, setIndex] = useState(0);

  function next() {
    // it's not possible to disable buttons 🙁
    // so, we need to check that case manually
    setIndex(index => index === memes.length ? memes.length : index + 1);
  }

  function prev() {
    // it's not possible to disable buttons 🙁
    // so, we need to check that case manually
    setIndex(index => index === 0 ? 0 : index - 1);
  }

  return memes
    ? (
      <>
        <Image
          isNewMessageEveryRender={false}
          file={memes[currentIndex].link}
        />
        <ButtonGroup
          disableNotification
          isNewMessageEveryRender={false}
          title={messages.more}
        >
          <Button onClick={prev}>Prev</Button>
          <Button onClick={next}>Next</Button>
        </ButtonGroup>
      </>
    ) : <Loading />;
}

export default Meme;
