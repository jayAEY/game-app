import { Check } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";

const Backlog = (props) => {
  function selectGame(elem) {
    if (elem.children[0]) {
      elem.children[0].checked == true
        ? (elem.children[0].checked = false)
        : (elem.children[0].checked = true);
    }
  }

  function markAsCompleted(button) {
    let allGames = document.querySelectorAll(".backlogLi");
    let currentBacklog = localStorage.getItem("backlog")?.split(",");
    let currentCompleted = [];
    if (localStorage.getItem("completed")) {
      currentCompleted = localStorage.getItem("completed").split(",");
    }
    let toRemove = [];
    let newBacklog = [];

    allGames.forEach((game) => {
      let gameName = game.innerText;
      console.log(game.lastChild.attributes["data-state"].nodeValue);
      // console.log(game.checkbo)
      if (
        // game.lastChild.checked == true &&
        game.lastChild.attributes["data-state"].nodeValue == "checked" &&
        toRemove.includes(gameName) == false &&
        currentCompleted.includes(gameName) == false
      ) {
        toRemove = toRemove.concat(gameName);
      } else if (
        // game.lastChild.checked == true &&
        game.lastChild.attributes["data-state"].nodeValue == "checked" &&
        toRemove.includes(gameName) == false &&
        currentCompleted.includes(gameName) == true
      ) {
        // alert(`${gameName} has already been marked as completed`);
        props.setAlertOpen(true);
        props.setAlertMessage(
          `${gameName} has already been marked as completed`
        );
        toRemove = toRemove.concat(gameName);
      }
    });

    newBacklog = currentBacklog.filter((game) => !toRemove.includes(game));
    localStorage.setItem("backlog", newBacklog);
    props.setBacklog(newBacklog);
    toRemove.map((game) => {
      console.log(game);
      if (!currentCompleted.includes(game)) {
        currentCompleted = currentCompleted.concat(game);
      }
    });

    localStorage.setItem("completed", currentCompleted);
    props.setCompleted(currentCompleted);
  }

  return (
    <Card className="rounded-none shadow-2xl lg:col-span-2 lg:col-start-2 col-span-4 row-span-1  max-h-min">
      <CardHeader className="flex justify-center">
        <CardTitle className="text-center text-4xl font-extrabold tracking-tight">
          Backlog
        </CardTitle>
        <Button
          className="absolute px-2 py-0"
          onClick={() => props.setBacklogOpen(false)}
        >
          ✖
        </Button>
      </CardHeader>
      <CardContent className="space-y-4 text-foreground/70">
        <div className="flex flex-col space-y-4 items-center">
          <ol className="list-decimal w-10/12">
            {props.backlog &&
              props.backlog.map((game, index) => {
                return (
                  <li
                    className={
                      "backlogLi flex p-4 gap-1 border justify-between hover:bg-secondary"
                    }
                    onClick={(e) => selectGame(e.target)}
                    key={`${game} ${index}`}
                  >
                    {game}
                    <Checkbox />
                    {/* <input
                      type="checkbox"
                      // className="accent-primary border-none"
                      className="border-border"
                    ></input> */}
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
          Mark as completed
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Backlog;
