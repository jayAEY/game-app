import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fmegamitensei%2Fimages%2F6%2F64%2FP5_portrait_of_Morgana.png%2Frevision%2Flatest%3Fcb%3D20170310074539&sp=1699546592Tb94a3808a8e10106df967697468a91fb8f191a7a57ea28a02b81954d1f99ea0d"
              alt="Avatar"
            />
            <AvatarFallback>PP</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-56"
        align="end"
        forceMount
      >
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">Teddie</p>
            <p className="text-xs leading-none text-muted-foreground">
              Teddie@SEES.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Games</DropdownMenuItem>
          <DropdownMenuItem>Reviews</DropdownMenuItem>
          <DropdownMenuItem>Collections</DropdownMenuItem>
          <DropdownMenuItem>Stats</DropdownMenuItem>
          <DropdownMenuItem>Friends (0)</DropdownMenuItem>
          <DropdownMenuItem>Messages (0)</DropdownMenuItem>
          <DropdownMenuItem>Options</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
