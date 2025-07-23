import type { FC, ChangeEvent } from "react";
import SearchBar from "@mui/icons-material/Search";

import {
  SearchNavBar,
  SearchIconWrapper,
  StyledInputBase,
} from "./styles/searchStyle";

interface SearchProps {
  value: string;
  onChangeData: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Search: FC<SearchProps> = ({ value, onChangeData }) => {
  return (
    <div>
      <SearchNavBar>
        <SearchIconWrapper>
          <SearchBar />
        </SearchIconWrapper>
        <StyledInputBase
          className="search__input"
          type="text"
          placeholder="Search"
          value={value}
          onChange={onChangeData}
        />
      </SearchNavBar>
    </div>
  );
};

export default Search;
