import { useEffect, useState } from "react";
import InventoryItem from "./InventoryItem.js";
import Spinner from "../Icons/Spinner.js";
import Page from "../Containers/Page.js";
import List from "../Containers/List.js";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: flex;
  gap: var(--base-spacing);
  align-items: center;
  padding: var(--base-unit);
  background-color: var(--dgray-80);
  border-radius: var(--radius);
  right: var(--base-spacing);
  bottom: var(--base-unit);
  position: fixed;
  box-shadow: var(--box-shadow-sm);
`;

export default function Inventory({ inv, token, setInv }) {
  const [searchValue, setSearchValue] = useState("");
  const invToShow = inv.filter((item) => {
    if (!searchValue) return true;
    const testStrings = [
      item.name["en"].toLowerCase(),
      item.prefix,
      item.size,
      item.color,
    ];
    for (const testStr of testStrings) {
      if (testStr.includes(searchValue.toLowerCase())) {
        return true;
      }
    }
    return false;
  });

  const handleSearch = (event) => setSearchValue(event.target.value);

  return (
    <Page>
      <StyledLabel>
        <input type="search" value={searchValue} onChange={handleSearch} />
      </StyledLabel>
      <List>
        {inv &&
          invToShow.map((item) => (
            <InventoryItem
              item={item}
              key={item.id}
              token={token}
              setInv={setInv}
            />
          ))}
        {!inv && (
          <li id="spinner" className="spinner">
            <Spinner />
          </li>
        )}
      </List>
    </Page>
  );
}
