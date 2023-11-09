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
              src="https://shorturl.at/kPW46"
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
          <DropdownMenuItem>"Friends(0)"</DropdownMenuItem>
          <DropdownMenuItem>"Messages(0)"</DropdownMenuItem>
          <DropdownMenuItem>Options</DropdownMenuItem>
          <DropdownMenuItem>Log Out</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
