import React, { useState } from 'react';

import { Text, ButtonGroup, Button } from '@urban-bot/core';

import { getRandomKargin } from 'utils';
import { messages } from 'config';

function Kargin() {
  const [randomKarginUrl, setRandomKarginUrl] = useState(() => getRandomKargin());

  function setRandomKargin() {
    setRandomKarginUrl(getRandomKargin());
  }

  return (
    <>
      <Text isNewMessageEveryRender={false}>
        {randomKarginUrl}
      </Text>
      <ButtonGroup
        disableNotification
        isNewMessageEveryRender={false}
        title={messages.more}
      >
        <Button onClick={setRandomKargin}>{messages.oneMore}</Button>
      </ButtonGroup>
    </>
  );
}

export default Kargin;
