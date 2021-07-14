import styled from 'styled-components'
import UserIcon from './UserIcon.js'

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
    font-size: 1.25rem;
    flex-grow: 1;
`

const StyledName = styled.span`
    display: flex;
    align-items: center;
    gap: var(--base-unit);
    color: var(--gray-10);
    margin-right: var(--base-spacing);

    svg {
        height: 1rem;
    }
`

export default function Header({ text, logout, user }) {
    return (
        <StyledHeader>
            <StyledH3>{text}</StyledH3>
            <StyledName>
                <UserIcon /> {user.split(' ')[0]}
            </StyledName>
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
