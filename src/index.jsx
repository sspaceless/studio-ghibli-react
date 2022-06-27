import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { FirebaseAppProvider } from 'reactfire';

import App from './App';
import store from './store';
import { FIREBASE_CONFIG } from './config';

ReactDOM.render(
  <Provider store={store}>
    <FirebaseAppProvider firebaseConfig={FIREBASE_CONFIG}>
      <App />
    </FirebaseAppProvider>
  </Provider>,
  document.getElementById('root'),
);
