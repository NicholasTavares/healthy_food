import BestRecipes from "./sections/BestRecipes";
import BestServices from "./sections/BestServices";
import Home from "./sections/Home";

function App() {
  return (
    <main style={{display: 'flex', flexDirection: 'column'}}>
      <Home />
      <BestRecipes />
      <BestServices />
    </main>
  );
}

export default App;
