// name, released, added, created, updated, rating, metacritic.
// reverse the sort order adding a hyphen, for example: -released.
// import { Separator } from "./ui/separator";
// import { Badge } from "./ui/badge";
// import { buttonVariants } from "./ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const SearchFilters = (props) => {
  let nameButton = document.querySelector("#name");

  // console.log(nameBadge);
  function changeFilter(button) {
    console.log(button.innerText.toLowerCase());
    props.setSearchFilter(button.innerText.toLowerCase());
    // console.log(props.searchFilter);
    // console.log(button.attributes);
  }

  return (
    props.search.length > 0 && (
      <section
        id="search-filters"
        className="flex items-center px-10 py-4 gap-2 bg-background shadow-lg border-b"
      >
        <ToggleGroup
          type="single"
          variant={"outline"}
          defaultValue="name"
        >
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="name"
          >
            Name
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="released"
          >
            Released
          </ToggleGroupItem>
          {/* <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="added"
          >
            Added
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="created"
          >
            Created
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="updated"
          >
            Updated
          </ToggleGroupItem> */}
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="rating"
          >
            Rating
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="metacritic"
          >
            Metacritic
          </ToggleGroupItem>
        </ToggleGroup>
        {/* <Separator orientation="vertical" /> */}
        {/* 
        <Badge
          id="name"
          variant="default"
          className="rounded-lg"
          onClick={(e) => changeFilter(e)}
        >
          Name
        </Badge>
        <Badge
          variant="outline"
          className=" rounded-lg"
        >
          Released
        </Badge>
        <Badge
          variant="outline"
          className="bg-background rounded-lg"
        >
          Added
        </Badge>
        <Badge
          variant="outline"
          className="bg-background rounded-lg"
        >
          Created
        </Badge>
        <Badge
          variant="outline"
          className="bg-background rounded-lg"
        >
          Updated
        </Badge>
        <Badge
          variant="outline"
          className="bg-background rounded-lg"
        >
          Rating
        </Badge>
        <Badge
          variant="outline"
          className="bg-background rounded-lg"
        >
          Metacritic
        </Badge>

        <Separator orientation="vertical" /> */}
      </section>
    )
  );
};

export default SearchFilters;
