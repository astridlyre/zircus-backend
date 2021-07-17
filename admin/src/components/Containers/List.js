import styled from 'styled-components'

const StyledList = styled.ul`
    max-width: var(--screen-lg);
`
export default function List({ children }) {
    return <StyledList>{children}</StyledList>
}
