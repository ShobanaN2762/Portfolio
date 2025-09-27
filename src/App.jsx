import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/Hero";
import { ShowcaseSection } from "./sections/ShowcaseSection";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
    </>
  );
};

export default App;
