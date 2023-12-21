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
    "Baldur's Gate III",
    "The Guy Game",
    "Super Mario Odyssey",
    "Perfect Dark",
    "Metroid Prime",
  ];
  return (
    // <Card className="flex-row bg-gray-300 p-20 col-span-4 md:col-span-2 xl:col-span-1 gap-2 rounded-none bg-card shadow-2xl">
    // <Card className="flex flex-col w-96 content-center justify-center sm:m-20">
    // <Card className="flex flex-col w-96 content-center items-center justify-self-center m-20">
    <Card className="md:max-w-xl">
      <CardHeader>
        <CardTitle className=" text-center text-2xl">Backlog</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-x-2 items-center">
          <ol className="list-decimal">
            {backlogExample.map((game, index) => {
              return <li className="border">{game}</li>;
            })}
          </ol>
          <p>
            {/* Average playtime:hours Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Integer finibus lacinia nulla, vel facilisis enim
            sodales at. Aenean ex tortor, dictum quis dolor sit amet, bibendum
            ullamcorper elit. Ut aliquam lectus magna, eu eleifend risus
            placerat non. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Nulla facilisi. Nullam consequat
            molestie nunc et rhoncus. Quisque lorem ex, luctus ac mauris in,
            tempor rutrum leo. Proin orci justo, elementum sed ex nec, congue
            porttitor ex. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Quisque quis luctus nisi. Vivamus porttitor erat nec leo
            facilisis, sit amet accumsan lacus viverra. Maecenas lobortis est
            sed placerat convallis. Curabitur rhoncus nisi semper, lobortis ante
            quis, porttitor dui. Donec convallis, risus nec efficitur
            pellentesque, enim magna efficitur leo, a facilisis urna ipsum ut
            libero. Vestibulum ut diam enim. Maecenas vel dictum augue. Mauris
            porttitor nisi eleifend ante malesuada, a gravida sapien facilisis.
            Sed felis diam, efficitur vel suscipit ut, luctus at enim. In auctor
            nisi ut enim rhoncus, ut eleifend magna tristique. Curabitur eget
            odio ligula. Ut a felis eu metus fermentum malesuada. Cras id
            sollicitudin risus. Vestibulum eget turpis lacus. Etiam placerat
            lacinia mauris, eget viverra dui volutpat ac. Aliquam ut ex ut felis
            vestibulum malesuada. Sed eleifend venenatis sollicitudin. Phasellus
            ullamcorper interdum eros, et interdum ante pharetra nec. Sed sed
            lorem vitae eros facilisis vulputate. Suspendisse eget viverra
            turpis. Nullam nulla eros, varius ac laoreet vel, pellentesque sed
            quam. In vehicula lacus sit amet faucibus hendrerit. Aenean mollis
            urna id tellus vestibulum faucibus. Nunc interdum cursus aliquam.
            Fusce convallis scelerisque orci, in sodales ipsum laoreet sed.
            Donec sit amet odio vel nulla condimentum vulputate. Vivamus in
            mauris euismod, sollicitudin tortor at, ultricies elit. Vivamus
            volutpat dictum leo eget efficitur. Maecenas condimentum, tortor at
            efficitur rutrum, lectus risus lobortis dui, a consectetur ligula
            arcu at justo. Vestibulum id accumsan libero. Integer placerat
            pellentesque magna et ultricies. Vivamus cursus rutrum orci, vitae
            tincidunt est venenatis at. Nullam vulputate arcu ut libero laoreet
            convallis. Donec id odio ultrices, condimentum lacus eu, suscipit
            massa. Ut cursus vestibulum lacus at commodo. Suspendisse et aliquet
            odio. Mauris dignissim bibendum enim sed fringilla. Pellentesque vel
            nisl sit amet dolor mollis imperdiet. */}
          </p>
          {/* {handleMetacritic(props.metacritic)} */}
          {/* </div> */}
          {/* <img
          src={props.background_image}
          className=" w-full aspect-video object-cover "
          alt={props.name}
        /> */}
          {/* <div className="flex space-x-2  items-center"> */}
          {/* <p>Release Date: {props.released}</p> */}
          {/* {props.platforms &&
            props.platforms.map((plat, index) => {
              return handlePlatformIcons(plat.platform.name, index);
            })} */}
        </div>
      </CardContent>
      <CardFooter>{/* <Button>Add to Backlog</Button> */}</CardFooter>
    </Card>
  );
};
export default Backlog;
