import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import AvatarMenu from "./avatar-menu";

const Navbar = (props) => {
  let handleChange = (search) => {
    props.setSearch(search);
  };

  return (
    <NavigationMenu className="sticky min-w-full justify-between  px-4 bg-background shadow-2xl ">
      <NavigationMenuList className="cursor-pointer space-x-0">
        <NavigationMenuItem className="flex">
          <ModeToggle />
          <Input
            onChange={(e) => handleChange(e.target.value)}
            type="text"
            placeholder="Search..."
            className="w-50"
          />
        </NavigationMenuItem>
        <NavigationMenuLink
          href=""
          className="hover:bg-secondary p-4 transition-colors"
        >
          Forum
        </NavigationMenuLink>
        <NavigationMenuLink
          href=""
          className="hover:bg-secondary p-4"
        >
          Stats
        </NavigationMenuLink>
        <NavigationMenuLink
          href=""
          className=" hover:bg-secondary p-4"
        >
          Submit
        </NavigationMenuLink>
      </NavigationMenuList>
      <AvatarMenu setBacklogOpen={props.setBacklogOpen} />
    </NavigationMenu>
  );
};

export default Navbar;
