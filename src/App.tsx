import { Search } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { Input } from "./components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import AvatarMenu from "./components/avatar-menu";

function App() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      storageKey="vite-ui-theme"
    >
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuLink>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu> */}
      <NavigationMenu className="flex w-screen justify-items-center space-x-6">
        <ModeToggle />
        <Input
          type="text"
          placeholder="Search.."
          className="w-60 flex"
        />
        <NavigationMenuList className="cursor-pointer">
          <NavigationMenuLink className="hover:text-primary">
            <a>Forum</a>
          </NavigationMenuLink>
          <NavigationMenuLink className="hover:text-primary">
            <a>Stats</a>
          </NavigationMenuLink>
          <NavigationMenuLink className="hover:text-primary">
            <a>Submit</a>
          </NavigationMenuLink>
        </NavigationMenuList>
        <AvatarMenu></AvatarMenu>
      </NavigationMenu>
    </ThemeProvider>
  );
}

export default App;
