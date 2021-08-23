import styled from "styled-components";

const StyledPage = styled.main`
    overflow-y: scroll;
    min-height: calc(100vh - 4rem);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    ${(props) => props.padTop && "padding-top: var(--base-spacing);"}
    ${(props) => props.pad && `padding-left: var(--base-spacing);`}
    ${(props) => props.pad && `padding-right: var(--base-spacing);`}
    padding-bottom: var(--lg-spacing);
    background-color: var(--gray-20);
`;

export default function Page({ children, padTop, pad }) {
  return (
    <StyledPage padTop={padTop} pad={pad}>
      {children}
    </StyledPage>
  );
}
