
import './App.css'
import Banner from './components/Banner/Banner'
import Blog from './components/Blog/Blog'
import Header from './components/Header/Header'
import LearnMore from './components/LearnMore/LearnMore'
import Logos from './components/Logos/Logos'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'
import Supplier from './components/Supplier/Supplier'

function App() {

  return (
    <>
    <Header></Header>
    <Navbar></Navbar>
    <Banner></Banner>
    <Supplier></Supplier>
    <Services></Services>
    <LearnMore></LearnMore>
    <Logos></Logos>
    <Blog></Blog>
      
    </>
  )
}

export default App
