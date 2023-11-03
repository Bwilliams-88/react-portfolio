// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/UI/Header';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;