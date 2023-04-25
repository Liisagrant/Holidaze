import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Router from './routes/Router';
import './index.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
