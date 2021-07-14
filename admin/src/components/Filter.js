import styled from 'styled-components'

const StyledFiltersContainer = styled.div`
    position: fixed;
    right: var(--base-spacing);
    top: calc(3.5rem + var(--base-spacing));
    height: 6rem;
    margin-left: var(--base-spacing);
    padding: var(--base-spacing);
    background-color: var(--gray-10);
    border-radius: var(--big-radius);
    border: 2px solid var(--gray-20);
    display: flex;
    align-items: center;
    gap: 1rem;
`

const StyledFilters = styled.div`
    display: flex;
    gap: 1rem;
`

const StyledH3 = styled.h3`
    font-size: 1.125rem;
`

const StyledButton = styled.button`
    border-color: ${props =>
        props.active ? 'var(--green)' : 'var(--gray-50)'};
    &:hover,
    &:focus {
        background-color: var(--gray-20);
        color: var(--dgray-90);
    }
`

export default function Filter({ filters }) {
    return (
        <StyledFiltersContainer>
            <StyledH3>Show</StyledH3>
            <StyledFilters>
                {filters &&
                    filters.map(filter => (
                        <StyledButton
                            type="button"
                            className="button outline"
                            active={filter.active}
                            onClick={filter.setActive}
                        >
                            {filter.text}
                        </StyledButton>
                    ))}
            </StyledFilters>
        </StyledFiltersContainer>
    )
}
