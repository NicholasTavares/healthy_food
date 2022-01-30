import Footer from "./components/Footer";
import BestRecipes from "./sections/BestRecipes";
import BestServices from "./sections/BestServices";
import Blog from "./sections/Blog";
import Home from "./sections/Home";
import Membership from "./sections/Membership";

function App() {
  return (
    <main style={{display: 'flex', flexDirection: 'column'}}>
      <Home />
      <BestRecipes />
      <BestServices />
      <Blog />
      <Membership />
      <Footer />
    </main>
  );
}

export default App;
