import { FilterContainer, FilterLabel, FilterInput } from "./Filter.styled";

export const Filter = ({ filterValue, onChange }) => {
    return (
      <FilterContainer>
        <FilterLabel>Find contacts by name:</FilterLabel>
        <FilterInput
          type="text"
          value={filterValue}
          onChange={onChange}
          placeholder="Enter name"
        />
      </FilterContainer>
    );
  };