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
  background-color: var(--gray-20);
  border: 2px solid var(--gray-30);
  border-radius: var(--radius);
  right: var(--base-spacing);
  bottom: var(--base-unit);
  position: fixed;
`;

export default function Inventory({ inv, token, setInv }) {
  const [searchValue, setSearchValue] = useState("");
  const [invToShow, setInvToShow] = useState(inv);

  const invIncludes = (str) => {
    setInvToShow(inv.filter((item) => {
      const testStrings = [
        item.name["en"].toLowerCase(),
        item.prefix,
        item.size,
        item.color,
      ];
      for (const testStr of testStrings) {
        if (testStr.includes(str)) {
          return true;
        }
      }
      return false;
    }));
  };

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    if (event.target.value === "") {
      setInvToShow(inv);
    } else {
      invIncludes(event.target.value.toLowerCase());
    }
  };

  useEffect(() => {
    if (searchValue.length) {
      invIncludes(searchValue.toLowerCase());
    } else setInvToShow(inv);
  }, [searchValue]);

  return (
    <Page>
      <StyledLabel>
        <input type="search" value={searchValue} onChange={handleSearch} />
      </StyledLabel>
      <List>
        {invToShow &&
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
