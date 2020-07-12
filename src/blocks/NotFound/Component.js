import React from 'react';

import { Text, useRouter } from '@urban-bot/core';
import { messages } from '../../config';

function NotFound() {
  const { activePath } = useRouter();

  return (
    <Text>
      {messages.notFound}
      <br />
      <b>{activePath}</b> {messages.surprisedQuestion}
    </Text>
  );
}

export default NotFound;
