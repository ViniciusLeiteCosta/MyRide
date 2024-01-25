import './App.css'
import Navbar from "./components/navbar/Navbar"
import BestCarSection from './components/bestCarSection/BestCarSection'
import BookingSection from './components/bookingSection/BookingSection'
import Form from './components/form/Form'
import Footer from './components/footer/Footer'

function App() {
  return (
      <div>
        <Navbar />
        <BookingSection />
        <BestCarSection />
        <Form />
        <Footer />
      </div>
  )
}

export default App
