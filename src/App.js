import Layout from './components/Layout';
import Routes from './Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './css/App.css';

function App() {
  return (
    <Layout>
      <ToastContainer />
      <Routes />
    </Layout>
  );
}

export default App;
