import React from 'react';

import { Text, Button, ButtonGroup } from '@urban-bot/core';

import _routes from 'routes';
import { messages, greetingEmoji } from 'config';
import { pickRandom } from 'utils';

function Greeting() {
  // the imported staff is somehow not available out of the function
  // because of the strange build system of the environment 🤷‍♂️

  const routes = _routes.slice(2, _routes.length - 1); // cut the root and the "not found"

  return (
    <>
      <Text>{pickRandom(messages.greetings)} {greetingEmoji}</Text>
      <ButtonGroup
        disableNotification
        isReplyButtons
        isResizedKeyboard
        title={messages.whatsup}
      >
        {
          routes.map(route => (
            <Button
              key={route.path}
            >
              {route.path}
            </Button>
          ))
        }
      </ButtonGroup>
    </>
  );
}

export default Greeting;
