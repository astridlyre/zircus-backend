import styled from "styled-components";
import MediumHeader from "../Text/MediumHeader.js";
import DeleteButton from "../Buttons/DeleteButton.js";
import { useState } from "react";
import { deleteMessage } from "../../services/services.js";

const StyledLi = styled.li`
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: var(--md-spacing);
  padding: var(--base-spacing);
  width: 100%;
  background-color: var(--gray-10);
  border: 2px solid var(--gray-30);

  &:hover {
    background-color: var(--gray-05);
  }
`;

const StyledDiv = styled.div`
  display: flex;
  max-width: 22vw;
  width: 100%;
  flex-flow: column nowrap;
`;

const StyledActions = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: flex-end;
  flex-grow: 1;
`;

const StyledText = styled.p`
  max-width: 75ch;
  width: 100%;
`;

const StyledA = styled.a`
  text-decoration: none;
  padding: var(--base-unit);
  color: var(--link);

  &:hover,
  &:focus {
    text-decoration: none !important;
    color: var(--link-hover);
  }
`;

export default function Message({
  message,
  setShowModal,
  setMessages,
  notify,
}) {
  const [showFull, setShowFull] = useState(false);
  const handleDeleteSuccess = ({ response }) => {
    setMessages(messages => messages.filter(m => m.id !== message.id));
    notify(`${response}: Deleted ${message.name}'s message`, "red");
  };
  const handleDeleteFailure = ({ error }) => notify(`${error}`, "red");
  const handleDelete = () => {
    setShowModal({
      heading: "Confirm deletion",
      text: `Delete ${message.name}'s message?'`,
      color: "danger",
      btnText: "Delete",
      ok: choice => {
        if (choice) {
          deleteMessage(message.id)
            .then(handleDeleteSuccess)
            .catch(handleDeleteFailure);
        }
      },
    });
  };

  return (
    <StyledLi>
      <StyledDiv>
        <MediumHeader>{message.name}</MediumHeader>
        <a href={`mailto:${message.email}`}>{message.email}</a>
      </StyledDiv>
      <StyledText>
        {showFull ? message.message : message.message.substring(0, 140)}
        {message.message.length > 140 && (
          <StyledA href="#" onClick={() => setShowFull(state => !state)}>
            {showFull ? "(less)" : "... (more)"}
          </StyledA>
        )}
      </StyledText>
      <StyledActions>
        <DeleteButton onClick={() => handleDelete()} />
      </StyledActions>
    </StyledLi>
  );
}
