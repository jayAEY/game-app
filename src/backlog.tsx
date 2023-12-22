import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import {
  BsWindows,
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsApple,
  BsAndroid,
} from "react-icons/bs";
import { DiLinux } from "react-icons/di";
const Backlog = (props) => {
  let backlogExample = [
    "The Legend of Zelda: Ocarina of Time",
    "The Legend of Dragoon",
    "Soulcalibur",
    "Baldur's Gate XIII",
    "The Guy Game",
    "Super Mario Odyssey",
    "Perfect Dark",
    "Metroid Prime",
  ];

  function selectGame(elem) {
    if (elem.children[0]) {
      elem.children[0].checked == true
        ? (elem.children[0].checked = false)
        : (elem.children[0].checked = true);
    }
  }

  return (
    // <Card className=" col-span-full lg:col-span-2 lg:col-start-2 m-20 rounded-none  shadow-2xl">
    <Card className="m-14 w-5/6 max-w-6xl rounded-none shadow-2xl">
      <CardHeader>
        <CardTitle className=" text-center text-2xl">Backlog</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-col  space-y-4 items-center">
          <ol className="list-decimal w-10/12">
            {backlogExample.map((game, index) => {
              return (
                <li
                  className={
                    "flex  p-4 gap-1 border justify-between hover:bg-secondary"
                  }
                  onClick={(e) => selectGame(e.target)}
                  key={`${game} ${index}`}
                >
                  {game}{" "}
                  <input
                    type="checkbox"
                    className="accent-primary border-none"
                  ></input>
                </li>
              );
            })}
          </ol>
          <Button>Mark as completed</Button>
        </div>
      </CardContent>
      <CardFooter>{/* <Button>Add to Backlog</Button> */}</CardFooter>
    </Card>
  );
};
export default Backlog;
