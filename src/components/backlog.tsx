import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useState } from "react";

const Backlog = (props) => {
  const [selected, setSelected] = useState([]);

  // let backlogExample = [
  //   "The Legend of Zelda: Ocarina of Time",
  //   "The Legend of Dragoon",
  //   "Soulcalibur",
  //   "Baldur's Gate XIII",
  //   "The Guy Game",
  //   "Super Mario Odyssey",
  //   "Perfect Dark",
  //   "Metroid Prime",
  // ];

  function selectGame(elem) {
    if (elem.children[0]) {
      elem.children[0].checked == true
        ? (elem.children[0].checked = false)
        : (elem.children[0].checked = true);
    }
  }

  function markAsCompleted(button) {
    let allGames = document.querySelectorAll("li");
    console.log(allGames.length);
    for (let i = 0; i < allGames.length; i++) {
      if (allGames[i].lastChild.checked == true) {
        setSelected(selected.concat(allGames[i].innerText));
      }
    }
    // allGames.forEach((e) => {
    //   if (e.lastChild.checked == true) {
    //     setSelected(selected.concat(e.innerText));
    //   }
    // });
  }

  return (
    // <Card className=" col-span-full lg:col-span-2 lg:col-start-2 m-20 rounded-none  shadow-2xl">
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
                      "flex  p-4 gap-1 border justify-between hover:bg-secondary"
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
            console.log(selected);
          }}
        >
          Mark as completed
        </Button>
      </CardFooter>
    </Card>
  );
};
export default Backlog;
