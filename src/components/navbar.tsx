import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import AvatarMenu from "./avatar-menu";

const Navbar = () => {
  return (
    <NavigationMenu className="sticky min-w-full justify-between  px-4 bg-background shadow-2xl ">
      <NavigationMenuList className="cursor-pointer space-x-0">
        <NavigationMenuItem className="flex">
          <ModeToggle />
          <Input
            type="text"
            placeholder="Search..."
            className="w-50"
          />
        </NavigationMenuItem>
        <NavigationMenuLink className="text-primary  hover:bg-secondary p-4 transition-colors">
          <a>Forum</a>
        </NavigationMenuLink>
        <NavigationMenuLink className="text-primary hover:bg-secondary p-4">
          <a>Stats</a>
        </NavigationMenuLink>
        <NavigationMenuLink className="text-primary hover:bg-secondary p-4">
          <a>Submit</a>
        </NavigationMenuLink>
      </NavigationMenuList>
      <AvatarMenu />
    </NavigationMenu>
  );
};

export default Navbar;
