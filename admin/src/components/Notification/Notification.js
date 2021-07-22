import styled from 'styled-components'

const StyledDiv = styled.div`
    position: fixed;
    top: calc(var(--base-unit) + 4rem);
    right: calc(var(--base-unit) + 15px); // for scrollbar
    width: 22rem;
    background-color: ${props =>
        props.look === 'red'
            ? 'var(--red);'
            : props.look === 'green'
            ? 'var(--green);'
            : 'var(--gray-30);'}
    z-index: 100;
    border-radius: var(--radius);
    opacity: 0.95;
    box-shadow: var(--box-shadow-sm);
    animation: 0.2s ease-out forwards fadeDown;
`

const StyledP = styled.p`
    color: var(--gray-20);
    margin: var(--base-spacing);
    font-size: var(--small-font-size);
    font-weight: 600;
`

export default function Notification({ notification }) {
    return (
        <StyledDiv look={notification.style}>
            <StyledP>{notification.text}</StyledP>
        </StyledDiv>
    )
}
