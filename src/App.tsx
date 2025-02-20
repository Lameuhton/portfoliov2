import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { LegalNotice } from "./pages/LegalNotice";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal" element={<LegalNotice />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
