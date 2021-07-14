import styled from 'styled-components'

const StyledFiltersContainer = styled.div`
    position: fixed;
    right: calc(var(--base-unit) + 15px);
    top: calc(4rem + var(--base-unit));
    height: 4rem;
    padding: var(--base-unit) calc(var(--base-unit) * 2);
    background-color: var(--gray-10);
    border-radius: var(--radius);
    border: 2px solid var(--gray-20);
    display: flex;
    align-items: center;
    gap: var(--base-unit);
`

const StyledFilters = styled.div`
    display: flex;
    gap: var(--base-unit);
`

const StyledH3 = styled.h3`
    font-size: 1rem;
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
                            key={filter.text}
                        >
                            {filter.text}
                        </StyledButton>
                    ))}
            </StyledFilters>
        </StyledFiltersContainer>
    )
}
