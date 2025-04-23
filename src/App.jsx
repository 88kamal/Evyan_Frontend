import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NoPage from "./pages/NoPage";
import MyState from "./context/myState";
import ServicePage from "./pages/ServicePage";
import ScrollTop from "./components/scrollTop";

function App() {
  return (
    <MyState>
      <Router>
        <ScrollTop/>
       <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="/about" element={ <AboutPage/> } />
        <Route path="/contact" element={ <ContactPage/> } />
        <Route path="/services" element={ <ServicePage/> } />
        <Route path="/*" element={ <NoPage/> } />
       </Routes>
      </Router>
    </MyState>
  )
}

export default App