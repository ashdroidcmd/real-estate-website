import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Profile from './components/Profile'
import Features from './components/Features'
import ListingSearch from './components/ListingSearch'
import Gallery from './components/Gallery'
import Services from './components/Services'
import ContactDetails from './components/ContactDetails'
import Footer from './components/Footer'
// Fonts - Cinzels titles, Source Sans Pro - Body and Details

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Profile />
    <Features />
    <ListingSearch />
    <Gallery />
    <Services />
    <ContactDetails />
    <Footer />
    </>
  )
}

export default App
