
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './screens/HomePage';


function App() {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
}
export default App;
