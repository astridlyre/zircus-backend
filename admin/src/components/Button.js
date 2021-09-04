import styled from "styled-components";

const StyledButton = styled.button`
  padding: var(--base-unit) var(--base-spacing);
  font-size: 0.9rem;
  font-weight: 600;
  color: ${props =>
    props.variant === "outline" ? "var(--dgray-80)" : "var(--gray-05)"};
  background-color: ${props =>
    props.variant === "outline" ? "transparent" : `var(--${props.variant})`};
  border: 2px solid
    ${props =>
      props.variant === "outline"
        ? "var(--dgray-80)"
        : `var(--${props.variant})`};
  border-radius: var(--radius);

  &:hover,
  &:focus {
    cursor: pointer;
    background-color: ${props =>
      props.variant === "outline"
        ? "var(--dgray-80)"
        : `var(--${props.variant})`};
    color: var(--gray-05);
  }
`;

export default function Button({ attributes, text, variant }) {
  return (
    <StyledButton {...attributes} variant={variant}>
      {text}
    </StyledButton>
  );
}
