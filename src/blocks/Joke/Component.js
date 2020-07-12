import React, { useState, useEffect } from 'react';

import { Text, Button, ButtonGroup } from '@urban-bot/core';

import Loading from '../../components/Loading';
import useRandomJoke from '../../hooks/useRandomJoke';
import { messages } from '../../config';

function Joke() {
  const [jokeData, getJoke] = useRandomJoke(null);

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
          <Button onClick={getJoke}>{messages.oneMore}</Button>
        </ButtonGroup>
      </>
    ) : <Loading />;
}

export default Joke;
