import Backlog from "./backlog";
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
const GameCard = (props) => {
  let handlePlatformIcons = (platform, index) => {
    switch (platform) {
      case "PlayStation":
        return <BsPlaystation key={(platform, index)} />;
        break;
      case "Xbox":
        return <BsXbox key={(platform, index)} />;
        break;
      case "Nintendo":
        return <BsNintendoSwitch key={(platform, index)} />;
        break;
      case "iOS":
        return <BsApple key={(platform, index)} />;
        break;
      case "Apple Macintosh":
        return <BsApple key={(platform, index)} />;
        break;
      case "Android":
        return <BsAndroid key={(platform, index)} />;
        break;
      case "PC":
        return <BsWindows key={(platform, index)} />;
        break;
      case "Linux":
        return <DiLinux key={(platform, index)} />;
        break;
    }
  };

  let handleMetacritic = (score) => {
    if (score > 74) {
      return <p className="bg-green-600 text-secondary px-1 ">{score}</p>;
    } else if (score < 75 && score > 49) {
      return <p className="bg-primary text-secondary px-1">{score}</p>;
    } else if (score < 50 && score !== null) {
      return <p className="bg-red-700 text-secondary px-1">{score}</p>;
    } else if (score == null) {
      return (
        <p className="bg-gray-500 text-secondary text-xs font-extrabold px-0.5 py-1.5">
          N/A
        </p>
      );
    }
  };

  return (
    <Card className="flex-row col-span-4 md:col-span-2 xl:col-span-1 gap-2 rounded-none bg-card shadow-2xl">
      <CardHeader>
        <CardTitle className="text-2xl">{props.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-2 items-center">
          <p>Average playtime: {props.playtime} hours</p>
          {handleMetacritic(props.metacritic)}
        </div>
        <img
          src={props.background_image}
          className=" w-full aspect-video object-cover "
          alt={props.name}
        />
        <div className="flex space-x-2  items-center">
          <p>Release Date: {props.released}</p>
          {props.platforms &&
            props.platforms.map((plat, index) => {
              return handlePlatformIcons(plat.platform.name, index);
            })}
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={(e) => {
            let gameName =
              e.target.parentElement.parentElement.firstChild.innerText;
            if (!props.backlog.includes(gameName)) {
              props.setBacklog(props.backlog.concat(gameName));
              localStorage.setItem("backlog", props.backlog.concat(gameName));
            }
          }}
        >
          Add to Backlog
        </Button>
      </CardFooter>
    </Card>
  );
};
export default GameCard;
