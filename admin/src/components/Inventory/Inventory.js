import { useState } from "react";
import { updateItem } from "../../services/services.js";
import InventoryItem from "./InventoryItem.js";
import Spinner from "../Icons/Spinner.js";
import Page from "../Containers/Page.js";
import List from "../Containers/List.js";
import Button from "../Button.js";
import styled from "styled-components";

const StyledTextArea = styled.div`
  display: flex;
  gap: var(--base-spacing);
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: var(--base-unit);
`;

const StyledPrefixes = styled.ul`
  display: flex;
  gap: var(--base-spacing);

  li {
    margin: var(--base-spacing) 0;
    }
  }
`;

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

export default function Inventory({ inv, setInv }) {
  const [searchValue, setSearchValue] = useState("");
  const [descriptionToEdit, setDescriptionToEdit] = useState(null);
  const invToShow = inv.filter(item => {
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

  const prefixes = inv.reduce((acc, item) => {
    if (!acc.hasOwnProperty(item.prefix)) {
      acc[item.prefix] = item.description;
    }
    return acc;
  }, {});

  const handleSearch = event => setSearchValue(event.target.value);
  const updateDescription = async (prefix, description) => {
    try {
      for await (const item of inv.filter(item => item.prefix === prefix)) {
        await updateItem({
          ...item,
          description,
        });
      }
      setDescriptionToEdit(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Page>
      <StyledPrefixes>
        {prefixes &&
          Object.entries(prefixes).map(([prefix, description]) => (
            <li title={`Edit ${prefix}'s description`}>
              <Button
                attributes={{
                  onClick: () => setDescriptionToEdit({ prefix, description }),
                }}
                text={prefix}
                variant="outline"
              />
            </li>
          ))}
      </StyledPrefixes>
      {descriptionToEdit && (
        <StyledTextArea>
          <textarea
            value={descriptionToEdit.description}
            onChange={event =>
              setDescriptionToEdit({
                ...descriptionToEdit,
                description: event.target.value,
              })
            }
          ></textarea>
          <StyledButtonContainer>
            <Button
              text="save"
              variant="dgray-80"
              attributes={{
                onClick: () =>
                  updateDescription(
                    descriptionToEdit.prefix,
                    descriptionToEdit.description
                  ),
              }}
            />
            <Button
              text="cancel"
              variant="outline"
              attributes={{ onClick: () => setDescriptionToEdit(null) }}
            />
          </StyledButtonContainer>
        </StyledTextArea>
      )}
      <StyledLabel>
        <input type="search" value={searchValue} onChange={handleSearch} />
      </StyledLabel>
      <List>
        {inv &&
          invToShow.map(item => (
            <InventoryItem item={item} key={item.id} setInv={setInv} />
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
