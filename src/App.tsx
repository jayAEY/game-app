import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";
import GameCard from "./components/game-card";
import Backlog from "./components/backlog";
import { Button } from "./components/ui/button";
import Completed from "./components/completed";
import { useEffect, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./components/ui/alert-dialog";

function App() {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  const [alertOpen, setAlertOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [backlog, setBacklog] = useState([]);
  const [backlogOpen, setBacklogOpen] = useState(false);

  const [completed, setCompleted] = useState([]);
  const [completedOpen, setCompletedOpen] = useState(false);

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

  useEffect(() => {
    localStorage.getItem("completed") &&
      setCompleted(localStorage.getItem("completed")?.split(","));
  }, [backlog]);

  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      <Navbar
        setSearch={setSearch}
        backlogOpen={backlogOpen}
        setBacklogOpen={setBacklogOpen}
        setCompletedOpen={setCompletedOpen}
      />
      <main>
        <AlertDialog open={alertOpen}>
          <AlertDialogContent>
            <AlertDialogTitle className="text-center">
              {alertMessage}
            </AlertDialogTitle>
            <AlertDialogAction onClick={() => setAlertOpen(false)}>
              Okay
            </AlertDialogAction>
          </AlertDialogContent>
        </AlertDialog>
        {(backlogOpen === true || completedOpen === true) && (
          <section className="grid p-10 pb-0 grid-cols-4  gap-4 bg-secondary justify-around">
            {backlogOpen === true && (
              <Backlog
                backlog={backlog}
                setBacklog={setBacklog}
                setBacklogOpen={setBacklogOpen}
                setCompleted={setCompleted}
                setAlertOpen={setAlertOpen}
                setAlertMessage={setAlertMessage}
              />
            )}
            {completedOpen === true && (
              <Completed
                backlog={backlog}
                completed={completed}
                setCompleted={setCompleted}
                setCompletedOpen={setCompletedOpen}
              />
            )}
          </section>
        )}
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
                  setBacklogOpen={setBacklogOpen}
                  setAlertOpen={setAlertOpen}
                  setAlertMessage={setAlertMessage}
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
