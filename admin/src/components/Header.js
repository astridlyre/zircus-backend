import styled from 'styled-components'

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: var(--dgray-80);
    padding: var(--base-spacing);
`

const StyledH3 = styled.h3`
    color: var(--invert-text-color);
`

export default function Header({ text, logout }) {
    return (
        <StyledHeader>
            <StyledH3>{text}</StyledH3>
            <button
                className="button light outline"
                type="button"
                onClick={logout}
            >
                logout
            </button>
        </StyledHeader>
    )
}
