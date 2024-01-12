import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useEffect, useState } from "react";

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
      if (
        game.lastChild.checked == true &&
        toRemove.includes(game.innerText) == false
      ) {
        toRemove = toRemove.concat(game.innerText);
      }
    });

    newBacklog = currentBacklog.filter((game) => !toRemove.includes(game));
    localStorage.setItem("backlog", newBacklog);
    localStorage.setItem("completed", currentCompleted.concat(toRemove));
    props.setBacklog(newBacklog);
  }

  return (
    <Card className="m-14 w-5/6 max-w-6xl rounded-none shadow-2xl">
      <CardHeader className="flex justify-center">
        <CardTitle className="text-center text-2xl">Backlog</CardTitle>
        <Button
          className="absolute px-2 py-0"
          onClick={() => props.setBacklogOpen(false)}
        >
          ✖
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col  space-y-4 items-center">
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
          Mark as completed
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Backlog;
