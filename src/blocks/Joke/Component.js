import React, { useState, useEffect } from 'react';

import { Text, Button, ButtonGroup } from '@urban-bot/core';

import Loading from '../../components/Loading';
import { getRandomJoke } from '../../utils';
import { messages } from '../../config';

function Joke() {
  const [jokeData, setJokeData] = useState(null);

  useEffect(() => {
    setRandomJoke();
  }, []);

  function setRandomJoke() {
    getRandomJoke().then(joke => setJokeData(joke));
  }

  return jokeData
    ? (
      <>
        <Text isNewMessageEveryRender={false}>
          {jokeData.joke}
        </Text>
        <ButtonGroup
          isNewMessageEveryRender={false}
          title={messages.more}
        >
          <Button onClick={setRandomJoke}>{messages.oneMore}</Button>
        </ButtonGroup>
      </>
    ) : <Loading />;
}

export default Joke;
