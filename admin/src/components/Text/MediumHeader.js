import styled from "styled-components";

const StyledText = styled.h3`
    font-size: 1.125rem;
    font-weight: 700;
    display: block;
    margin-bottom: var(--base-unit);
    font-style: normal;
`;

export default function MediumHeader({ children }) {
  return <StyledText>{children}</StyledText>;
}
