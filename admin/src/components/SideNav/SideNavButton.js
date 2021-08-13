import styled from "styled-components";

const StyledButton = styled.button`
    flex-grow: 1;
    display: flex;
    align-items: center;
    ${(props) => props.showFull && "gap: calc(var(--base-unit) * 1.5);"}
    justify-content: ${(props) => (props.showFull ? "left" : "center")};
    ${(props) => !props.showFull && "padding: var(--input-padding);"}

    svg {
        height: 1.25rem;
    }
`;
export default function SideNavButton({
  showFull,
  active,
  page,
  num,
  setPage,
  children,
}) {
  return (
    <StyledButton
      showFull={showFull}
      className={page === active ? "button" : "button outline"}
      onClick={() => setPage(active)}
    >
      {children}
      {showFull && `${active} ${num ? `(${num})` : ""}`}
    </StyledButton>
  );
}
