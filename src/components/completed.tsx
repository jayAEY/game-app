import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Completed = (props) => {
  function selectGame(elem) {
    if (elem.children[0]) {
      elem.children[0].checked == true
        ? (elem.children[0].checked = false)
        : (elem.children[0].checked = true);
    }
  }

  function markAsCompleted(button) {
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
        game.lastChild.checked == true &&
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
          className="absolute px-2 py-0"
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
                      "completedLi flex p-4 gap-1 border justify-between hover:bg-secondary"
                    }
                    onClick={(e) => selectGame(e.target)}
                    key={`${game} ${index}`}
                  >
                    {game}
                    <input
                      type="checkbox"
                      className="accent-primary border-none"
                    ></input>
                  </li>
                );
              })}
          </ol>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <Button
          onClick={(e) => {
            markAsCompleted(e.target);
          }}
        >
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Completed;
