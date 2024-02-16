import { title } from "process";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  BsWindows,
  BsPlaystation,
  BsXbox,
  BsNintendoSwitch,
  BsApple,
  BsAndroid,
} from "react-icons/bs";
import { DiLinux } from "react-icons/di";
import { SiNintendo } from "react-icons/si";
const GameCard = (props) => {
  let handlePlatformIcons = (platform, index) => {
    switch (platform) {
      case "PlayStation":
        return (
          <BsPlaystation
            key={(platform, index)}
            title="Playstation"
          />
        );
        break;
      case "Xbox":
        return (
          <BsXbox
            key={(platform, index)}
            title="Xbox"
          />
        );
        break;
      case "Nintendo":
        return (
          <SiNintendo
            key={(platform, index)}
            title="Nintendo"
          />
        );
        break;
      case "iOS":
        return (
          <BsApple
            key={(platform, index)}
            title="iOS"
          />
        );
        break;
      case "Apple Macintosh":
        return (
          <BsApple
            key={(platform, index)}
            title="MacOS"
          />
        );
        break;
      case "Android":
        return (
          <BsAndroid
            key={(platform, index)}
            title="Android"
          />
        );
        break;
      case "PC":
        return (
          <BsWindows
            key={(platform, index)}
            title="PC"
          />
        );
        break;
      case "Linux":
        return (
          <DiLinux
            key={(platform, index)}
            title="Linux"
          />
        );
        break;
    }
  };

  let handleMetacritic = (score) => {
    if (score > 74) {
      // return <p className="bg-green-600 text-secondary px-1 ">{score}</p>;
      return (
        <p className="bg-green-600 text-s font-extrabold px-1 text-white">
          {score}
        </p>
      );
    } else if (score < 75 && score > 49) {
      return (
        <p className="bg-primary text-s font-extrabold px-1 text-white">
          {score}
        </p>
      );
    } else if (score < 50 && score !== null) {
      return (
        <p className="bg-red-700 text-s font-extrabold px-1 text-white">
          {score}
        </p>
      );
    } else if (score == null) {
      return (
        <p className="bg-gray-500 text-secondary text-xs tracking-tighter font-extrabold px-0.5 py-1">
          N/A
        </p>
      );
    }
  };

  function addGame(game) {
    let gameName = game.target.parentElement.parentElement.firstChild.innerText;
    if (!props.backlog.includes(gameName)) {
      props.setBacklog(props.backlog.concat(gameName));
      localStorage.setItem("backlog", props.backlog.concat(gameName));
      props.setBacklogOpen(true);
    } else if (props.backlog.includes(gameName)) {
      props.setAlertOpen(true);
      props.setAlertMessage(`${gameName} is already in backlog`);
    }
  }

  return (
    <Card className="flex-row col-span-4 md:col-span-2 xl:col-span-1 gap-2 rounded-none bg-card shadow-2xl border-secondary-foreground/15">
      <CardHeader>
        <CardTitle className="text-3xl font-extrabold tracking-tight -mb-2">
          {props.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 font-medium ">
        <div className="flex-row mb-6 items-center">
          <p>Average playtime: {props.playtime} hours</p>
          <p>User Rating: {props.rating}/5</p>
          <div className="flex gap-2">
            Metacritic: {handleMetacritic(props.metacritic)}
          </div>
        </div>
        <img
          src={props.background_image}
          className=" w-full aspect-video object-cover "
          alt={props.name}
        />
        <div className="flex space-x-2 items-center">
          <p>Release Date: {props.released}</p>
          {props.platforms &&
            props.platforms.map((plat, index) => {
              return handlePlatformIcons(plat.platform.name, index);
            })}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={(e) => addGame(e)}>Add to Backlog</Button>
      </CardFooter>
    </Card>
  );
};
export default GameCard;
