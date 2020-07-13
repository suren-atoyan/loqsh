import React from 'react';

import { Text, Button, ButtonGroup } from '@urban-bot/core';

import _routes from 'routes';
import { messages, greetingEmoji } from 'config';
import { pickRandom } from 'utils';

function Greeting() {
  // we don't do this out of the function
  // because of the strange build system of the environment
  // it fails, because the imported staff becomes available after 🤷‍♂️
  const routes = _routes.slice(2, _routes.length - 1); // cut the root and the "not found"

  return (
    <>
      <Text>{pickRandom(messages.greetings)} {greetingEmoji}</Text>
      <ButtonGroup
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
