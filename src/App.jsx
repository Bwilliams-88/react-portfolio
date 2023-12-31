// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/NavTabs';
import Header from './components/UI/Header';
import Footer from './components/UI/Footer';
import "./components/styles/input.css";

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
