// name, released, added, created, updated, rating, metacritic.
// reverse the sort order adding a hyphen, for example: -released.
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const SearchFilters = (props) => {
  function changeFilter(button) {
    let filter = button.innerText.toLowerCase();
    filter == "metacritic"
      ? props.setSearchFilter(`-${filter}`)
      : props.setSearchFilter(`${filter}`);
    // props.setSearchFilter(`-${button.innerText.toLowerCase()}`);
    // console.log(button.value);
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
          defaultValue="Relevance"
        >
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="Relevance"
          >
            Relevance
          </ToggleGroupItem>
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
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="rating"
          >
            User Rating
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="metacritic"
          >
            Metacritic
          </ToggleGroupItem>
        </ToggleGroup>
      </section>
    )
  );
};

export default SearchFilters;
