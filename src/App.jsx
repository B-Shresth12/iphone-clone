import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import Features from "./components/Features";
import Chip from "./components/Chip";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <Chip />
      <Footer />
    </main>
  );
}
