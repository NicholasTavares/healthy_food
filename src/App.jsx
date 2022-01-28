import BestRecipes from "./sections/BestRecipes";
import BestServices from "./sections/BestServices";
import Blog from "./sections/Blog";
import Home from "./sections/Home";

function App() {
  return (
    <main style={{display: 'flex', flexDirection: 'column'}}>
      <Home />
      <BestRecipes />
      <BestServices />
      <Blog />
    </main>
  );
}

export default App;
