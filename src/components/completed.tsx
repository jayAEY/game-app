import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";

const Completed = (props) => {
  function removeCompleted(button) {
    let allGames = document.querySelectorAll(".completedLi");
    let currentCompleted = [];
    if (localStorage.getItem("completed").length > 0) {
      currentCompleted = localStorage.getItem("completed").split(",");
    }
    let toRemove = [];
    let newCompleted = [];

    allGames.forEach((game) => {
      let gameName = game.innerText;
      if (
        game.lastChild.attributes["data-state"].nodeValue == "checked" &&
        toRemove.includes(gameName) == false
      ) {
        toRemove = toRemove.concat(gameName);
      }
    });

    newCompleted = currentCompleted.filter((game) => !toRemove.includes(game));
    localStorage.setItem("completed", newCompleted);
    props.setCompleted(newCompleted);
  }

  return (
    <Card className="rounded-none shadow-2xl lg:col-span-2 lg:col-start-2 col-span-4 row-span-1 max-h-min">
      <CardHeader className="flex justify-center">
        <CardTitle className="text-center text-4xl font-extrabold tracking-tight">
          Completed
        </CardTitle>
        <Button
          className="absolute px-3"
          onClick={() => props.setCompletedOpen(false)}
        >
          ✖
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 text-foreground/70">
        <div className="flex flex-col space-y-4 items-center">
          <ol className="list-decimal w-10/12">
            {props.completed &&
              props.completed.map((game, index) => {
                return (
                  <li
                    className={
                      "completedLi flex p-4 gap-1 border justify-between items-center hover:bg-secondary"
                    }
                    key={`${game} ${index}`}
                  >
                    <label
                      htmlFor={game}
                      className="cursor-pointer"
                    >
                      {game}
                    </label>
                    <Checkbox id={game} />
                  </li>
                );
              })}
          </ol>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <Button
          onClick={(e) => {
            removeCompleted(e.target);
          }}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Completed;
