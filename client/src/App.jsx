import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./pages/home"
import About from "./pages/about"
import SignIn from "./pages/signIn"
import SignUp from "./pages/signUp"
import Profile from "./pages/profile"
import Header from './components/header';
function App() {
  return (
 
   <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
   </BrowserRouter>
  )
}

export default App
