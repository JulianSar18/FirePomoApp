import logo from './logo.svg'
import './App.css'
import { Banner } from './Banner'
import { Auth } from './Auth'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Banner/>
        <Auth/>
      </header>
    </div>
  )
}

export default App
