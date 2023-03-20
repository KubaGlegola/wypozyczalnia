import './global-styles/App.scss'
import Footer from './components/Footer/Footer'
import Header from './components/header/Header'
import HomePage from './pages/homePage/HomePage'

function App() {

  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
