import styled from 'styled-components'

const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    gap: var(--base-unit);
    user-select: none;
    margin: 0;
`

export default function Label({ props, children }) {
    return <StyledLabel {...props}>{children}</StyledLabel>
}
