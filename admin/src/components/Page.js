import styled from 'styled-components'

const StyledPage = styled.main`
    overflow-y: scroll;
    min-height: calc(100vh - 4rem);
    ${props => props.padTop && 'padding-top: var(--base-spacing);'}
    ${props => props.pad && `padding: var(--base-spacing);`}
`

export default function Page({ children, padTop, pad }) {
    return (
        <StyledPage padTop={padTop} pad={pad}>
            {children}
        </StyledPage>
    )
}
