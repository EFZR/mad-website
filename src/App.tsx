import Header from "@components/Header";
import Hero from "@components/Hero";
import About from "@components/About";
import Members from "@components/Members";
import Events from "@components/Events";
import Form from "@components/Form";
import Footer from "@components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Members />
        <Events />
        <Form />
      </main>
      <Footer />
    </>
  );
}
