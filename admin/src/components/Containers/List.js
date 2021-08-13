import styled from "styled-components";

const StyledList = styled.ul`
    display: flex;
    flex-flow: column nowrap;
    max-width: var(--screen-lg);
    width: 100%;
    ${(props) => (props.gap ? "gap: var(--base-spacing);" : "")}
`;
export default function List({ gap, children }) {
  return <StyledList gap={gap}>{children}</StyledList>;
}
