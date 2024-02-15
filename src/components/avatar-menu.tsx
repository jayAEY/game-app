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

const AvatarMenu = (props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-8 w-8 rounded-full"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="http://vignette1.wikia.nocookie.net/megamitensei/images/b/be/Morgana_All_Out.png/revision/latest?cb=20170225132542"
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
        <DropdownMenuLabel>
          <div className="flex flex-col font-normal space-y-1">
            <p className="text-sm font-medium leading-none">Teddie</p>
            <p className="text-xs leading-none text-muted-foreground">
              Teddie@SEES.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* <DropdownMenuItem>Profile</DropdownMenuItem> */}
          <DropdownMenuItem
            onClick={() => {
              props.setBacklogOpen(true);
            }}
          >
            Backlog
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              props.setCompletedOpen(true);
            }}
          >
            Completed
          </DropdownMenuItem>
          {/* <DropdownMenuItem>Reviews</DropdownMenuItem>
          <DropdownMenuItem>Collections</DropdownMenuItem>
          <DropdownMenuItem>Stats</DropdownMenuItem>
          <DropdownMenuItem>Friends (0)</DropdownMenuItem>
          <DropdownMenuItem>Messages (0)</DropdownMenuItem>
          <DropdownMenuItem>Options</DropdownMenuItem> */}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AvatarMenu;
