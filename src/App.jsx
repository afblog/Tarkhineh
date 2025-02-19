import React from 'react'
import Home from './pages/Home'
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import LostPassword from './pages/LostPassword'
import EnterCode from './pages/EnterCode'
import NewPassword from './pages/NewPassword'
import Branch from './pages/Branch'
import Menu from './pages/Menu'
import Franchise from './pages/Franchise'
import About from './pages/About'
import SearchProducts from './pages/SearchProducts'
import ShoppingCart from './pages/ShoppingCart'
import Profile from './pages/Profile'
import Contact from './pages/Contact'
import { GlobalContextProvider } from './Contexts/GlobalContext'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

export default function App() {

  return (
    <GlobalContextProvider>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/branch' element={<Branch />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/franchise' element={<Franchise />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-us' element={<Contact />} />
        <Route path='/searchbar' element={<SearchProducts />} />
        <Route path='/shoppingcart' element={<ShoppingCart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SingUp />} />
        <Route path='/lost-password' element={<LostPassword />} />
        <Route path='/lost-password/enter-code' element={<EnterCode />} />
        <Route path='/lost-password/new-password' element={<NewPassword />} />
      </Routes>
    </GlobalContextProvider>
  )
}

