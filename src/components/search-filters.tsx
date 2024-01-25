// name, released, added, created, updated, rating, metacritic.
// reverse the sort order adding a hyphen, for example: -released.
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useEffect, useState } from "react";
import {
  PiSortAscendingDuotone,
  PiSortDescendingDuotone,
} from "react-icons/pi";
const SearchFilters = (props) => {
  // const [sortOrder, setSortOrder] = useState("ascending");

  function changeFilter(button) {
    let filter = button.innerText.toLowerCase();
    if (filter == "user rating") filter = "rating";
    props.setSearchFilter(filter);
  }

  // useEffect(() => {
  //   if (sortOrder == "descending") {
  //     props.setSearchFilter(`-${props.searchFilter}`);
  //   }
  // }, [sortOrder]);

  return (
    props.search.length > 0 && (
      <section
        id="search-filters"
        className="flex items-center px-10 py-4 justify-between bg-background shadow-lg border-b"
      >
        <ToggleGroup
          type="single"
          variant={"outline"}
          defaultValue="relevance"
          value={props.searchFilter}
        >
          <ToggleGroupItem
            onClick={(e) => changeFilter(e.target)}
            value="relevance"
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
        {props.sortOrder == "ascending" ? (
          <PiSortAscendingDuotone
            className="cursor-pointer hover:fill-primary"
            onClick={() => props.setSortOrder("descending")}
          />
        ) : (
          <PiSortDescendingDuotone
            className="cursor-pointer hover:fill-primary"
            onClick={() => props.setSortOrder("ascending")}
          />
        )}
      </section>
    )
  );
};

export default SearchFilters;
