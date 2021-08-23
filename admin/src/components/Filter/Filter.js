import { useState } from "react";
import styled from "styled-components";
import Label from "../Text/Label.js";
import FilterIcon from "./FilterIcon.js";

const StyledFiltersContainer = styled.div`
    padding: var(--base-unit) calc(var(--base-unit) * 2);
    background-color: var(--dgray-90);
    border-radius: var(--radius);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: var(--base-spacing);
    height: 3rem;
    color: var(--gray-10);
    box-shadow: var(--box-shadow-sm);
`;

const StyledFilters = styled.div`
    display: flex;
    gap: var(--base-spacing);
`;

const StyledButton = styled.button`
  background: var(--dgray-80);
  border-radius: var(--radius);
  color: var(--gray-10);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  box-shadow: var(--box-shadow-sm);

  :hover {
    background-color: var(--dgray-50);
  }

  svg {
    margin-left: 0.45rem;
  }
`;

const StyledContainer = styled.div`
    position: fixed;
    right: calc(var(--base-spacing) + 15px);
    bottom: var(--base-spacing);
    display: flex;
    align-items: center;
    gap: var(--base-unit);
`;

export default function Filter({ filters, dateStart, dateEnd }) {
  const [showFilters, setShowFilters] = useState(false);
  return (
    <StyledContainer>
      <StyledButton
        onClick={() => setShowFilters((state) => !state)}
        title="Show / hide filters"
      >
        <FilterIcon />
      </StyledButton>
      {showFilters &&
        <StyledFiltersContainer>
          <Label htmlFor="dateStart">
            <span>date start</span>
            <input {...dateStart} id="dateStart" />
          </Label>
          <Label htmlFor="dateEnd">
            <span>date end</span>
            <input {...dateEnd} id="dateEnd" />
          </Label>
          <StyledFilters>
            {filters &&
              filters.map((filter, i) => (
                <Label
                  htmlFor={`filter-${i}`}
                  key={filter.text}
                  active={filter.active}
                >
                  {filter.text}
                  <input
                    checked={filter.active}
                    onChange={filter.setActive}
                    type="checkbox"
                    id={`filter-${i}`}
                  />
                </Label>
              ))}
          </StyledFilters>
        </StyledFiltersContainer>}
    </StyledContainer>
  );
}
