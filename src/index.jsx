import ReactDOM from 'react-dom';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';
import { FIREBASE_CONFIG } from './config';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={FIREBASE_CONFIG}>
    <App />
  </FirebaseAppProvider>,
  document.getElementById('root'),
);
