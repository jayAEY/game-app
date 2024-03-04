import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";
import { Input } from "./ui/input";
import AvatarMenu from "./avatar-menu";
import { IoSearch } from "react-icons/io5";
import { Button } from "./ui/button";

const NavBar = (props) => {
  let handleSearch = () => {
    let searchInput = document.querySelector("#searchInput");
    props.setSearch(searchInput.value.trim());
  };
  return (
    <NavigationMenu className="sticky justify-between px-10 py-4 bg-background shadow-lg border-b ">
      <NavigationMenuList className="cursor-pointer space-x-0">
        <NavigationMenuLink className="flex">
          <ModeToggle />
          <Input
            onKeyUp={(e) => e.key == "Enter" && handleSearch()}
            type="text"
            placeholder="Search..."
            className="w-40"
            id="searchInput"
            aria-label="search query"
          />
          <Button
            onClick={handleSearch}
            variant="outline"
            size="icon"
            className="hover:text-primary"
          >
            <IoSearch className="absolute h-[1.2rem] w-[1.2rem] transition-all" />
          </Button>
        </NavigationMenuLink>
      </NavigationMenuList>
      <AvatarMenu
        setBacklogOpen={props.setBacklogOpen}
        setCompletedOpen={props.setCompletedOpen}
      />
    </NavigationMenu>
  );
};

export default NavBar;
