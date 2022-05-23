import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import App from './App';
import { FIREBASE_CONFIG } from './config';
import './index.css';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={FIREBASE_CONFIG}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseAppProvider>,
  document.getElementById('root'),
);
