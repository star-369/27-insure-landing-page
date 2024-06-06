import Header from "./components/Header";
import AdvantageSection from "./components/AdvantageSection";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden xl:px-32">
        <AdvantageSection />
        <Banner />
      </main>
      <Footer />
    </>
  );
}
