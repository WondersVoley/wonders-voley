
import Header from "./components/Header";
import Home from "./pages/Home";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header home />
      <Home />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;

