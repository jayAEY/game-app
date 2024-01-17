import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import AvatarMenu from "./avatar-menu";
import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";

const Navbar = (props) => {
  let handleSearch = () => {
    let searchInput = document.querySelector("#searchInput");
    props.setSearch(searchInput.value);
  };
  return (
    <NavigationMenu className="sticky min-w-full justify-between  px-4 bg-background shadow-2xl ">
      <NavigationMenuList className="cursor-pointer space-x-0">
        <NavigationMenuLink className="flex">
          <ModeToggle />
          <Input
            onKeyUp={(e) => e.key == "Enter" && handleSearch()}
            type="text"
            placeholder="Search..."
            className="w-50"
            id="searchInput"
          />
          <Button
            onClick={(e) => handleSearch()}
            variant="outline"
            size="icon"
            className="hover:text-primary"
          >
            <IoSearch className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
          </Button>
        </NavigationMenuLink>
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
      <AvatarMenu
        setBacklogOpen={props.setBacklogOpen}
        setCompletedOpen={props.setCompletedOpen}
      />
    </NavigationMenu>
  );
};

export default Navbar;
