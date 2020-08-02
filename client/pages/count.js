import React, { useContext } from 'react';

import Container from 'components/Container';
import Button from 'components/Button';
import * as Text from 'components/Text';

// stores
import { observer } from 'mobx-react-lite';
import CountStore from 'stores/Count';

const CountPage = observer(() => {
  const countStore = useContext(CountStore);

  return (
    <Container>
      <Text.FontSize24>{countStore.number}</Text.FontSize24>
      <div>
        <Button onClick={countStore.increase}>+</Button>
        <Button onClick={countStore.decrease}>-</Button>
      </div>
    </Container>
  );
});

export default CountPage;
