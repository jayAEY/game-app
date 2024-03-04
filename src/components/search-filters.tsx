// name, released, added, created, updated, rating, metacritic.
// reverse the sort order adding a hyphen, for example: -released.
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  PiSortAscendingDuotone,
  PiSortDescendingDuotone,
} from "react-icons/pi";
const SearchFilters = (props) => {
  function changeFilter(button) {
    let filter = button.innerText.toLowerCase();
    filter == "user rating" && (filter = "rating");
    props.setSearchFilter(filter);
  }

  return (
    props.search.length > 0 && (
      <section
        id="search-filters"
        className="flex items-center flex-wrap px-10 py-4 shadow-lg border-b"
      >
        <ToggleGroup
          type="single"
          variant={"outline"}
          defaultValue="relevance"
          value={props.searchFilter}
          className="flex flex-wrap justify-normal gap-1"
        >
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="relevance"
            aria-label="relevance"
            size="sm"
          >
            Relevance
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="released"
            aria-label="released"
            size="sm"
          >
            Released
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="rating"
            aria-label="rating"
            size="sm"
          >
            User Rating
          </ToggleGroupItem>
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="metacritic"
            aria-label="metacritic"
            size="sm"
          >
            Metacritic
          </ToggleGroupItem>
          {props.sortOrder == "ascending" ? (
            <PiSortAscendingDuotone
              className="h-5 w-5 cursor-pointer fill-primary hover:fill-secondary-foreground"
              onClick={() => props.setSortOrder("descending")}
            />
          ) : (
            <PiSortDescendingDuotone
              className="h-5 w-5 cursor-pointer fill-primary hover:fill-secondary-foreground"
              onClick={() => props.setSortOrder("ascending")}
            />
          )}
        </ToggleGroup>
      </section>
    )
  );
};

export default SearchFilters;
