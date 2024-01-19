// name, released, added, created, updated, rating, metacritic.
// reverse the sort order adding a hyphen, for example: -released.
// import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";

const SearchFilters = (props) => {
  return (
    props.search.length > 0 && (
      <section
        id="search-filters"
        className="flex items-center bg-secondary px-10 py-4 z-50"
      >
        <Badge>Name</Badge>
        <Badge
          variant="outline"
          className="border-white"
        >
          Released
        </Badge>
        {/* <Separator orientation="vertical" /> */}

        <Badge
          variant="outline"
          className="border-white"
        >
          Added
        </Badge>
        {/* <Separator orientation="vertical" /> */}

        <Badge
          variant="outline"
          className="border-white"
        >
          Created
        </Badge>
        {/* <Separator orientation="vertical" /> */}

        <Badge
          variant="outline"
          className="border-white"
        >
          Updated
        </Badge>
        {/* <Separator orientation="vertical" /> */}

        <Badge
          variant="outline"
          className="border-white"
        >
          Rating
        </Badge>
        {/* <Separator orientation="vertical" /> */}

        <Badge
          variant="outline"
          className="border-white"
        >
          Metacritic
        </Badge>

        {/* <Separator orientation="vertical" /> */}
      </section>
    )
  );
};

export default SearchFilters;
