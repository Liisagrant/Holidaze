import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Router from './routes/Router';
import './index.css';
import { useSelector } from 'react-redux';
import SpinnerComponent from './Global/SpinnerComponent';

function App() {
  const { isLoading } = useSelector((state) => state.loader);
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Router />
          {isLoading && <SpinnerComponent />}
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
