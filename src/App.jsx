import BestRecipes from "./sections/BestRecipes";
import Home from "./sections/Home";

function App() {
  return (
    <main style={{display: 'flex', flexDirection: 'column'}}>
      <Home />
      <BestRecipes />
    </main>
  );
}

export default App;
