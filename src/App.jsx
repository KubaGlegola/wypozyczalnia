import './global-styles/App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import {Outlet} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
