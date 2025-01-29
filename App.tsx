import React from 'react';
import {Provider} from 'react-redux';

import {NavigationScreens} from './src';

import {store} from './src/redux/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationScreens />
    </Provider>
  );
}

export default App;
