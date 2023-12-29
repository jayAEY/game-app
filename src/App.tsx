import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";
import GameCard from "./game-card";
import Backlog from "./backlog";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [backlog, setBacklog] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const initialData = await fetch(
        `https://api.rawg.io/api/games?key=${
          import.meta.env.VITE_RAWG
        }&ordering=-metacritic`
      );
      const searchData = await fetch(
        `https://rawg.io/api/games?key=${
          import.meta.env.VITE_RAWG
        }&search=${search}`
      );
      let json;
      // await new Promise((resolve) => setTimeout(resolve, 2000));
      if (search == "") {
        json = await initialData.json();
      } else if (search != "") {
        json = await searchData.json();
      }
      setData(json.results);
      setIsLoading(false);
    };
    fetchData().catch(console.error);
  }, [search]);

  useEffect(() => {
    localStorage.getItem("backlog") &&
      setBacklog(localStorage.getItem("backlog")?.split(","));
  }, [backlog]);

  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <Navbar setSearch={setSearch} />
      <main className="flex flex-col items-center">
        {/* <main className="grid p-10 min-h-screen grid-cols-4 gap-4 bg-secondary"> */}
        <Backlog
          backlog={backlog}
          setBacklog={setBacklog}
        />

        <section className="grid p-10 min-h-screen grid-cols-4 gap-4 bg-secondary">
          {data.map((game, index) => {
            if (game.background_image) {
              return (
                <GameCard
                  name={game.name}
                  platforms={game.parent_platforms}
                  released={game.released}
                  metacritic={game.metacritic}
                  background_image={game.background_image}
                  playtime={game.playtime}
                  key={index}
                  backlog={backlog}
                  setBacklog={setBacklog}
                />
              );
            }
          })}
        </section>
      </main>
    </ThemeProvider>
  );
}

export default App;
