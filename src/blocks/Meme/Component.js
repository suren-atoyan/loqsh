import React, { useState, useEffect } from 'react';

import { Text, Image, Button, ButtonGroup } from '@urban-bot/core';

import Loading from '../../components/Loading';
import { getRandomMemes } from '../../utils';
import { messages } from '../../config';

function Meme() {
  const [memes, setMemes] = useState(null);
  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    setRandomMeme();
  }, []);

  function setRandomMeme() {
    getRandomMemes().then(memes => setMemes(memes.data));
  }

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
