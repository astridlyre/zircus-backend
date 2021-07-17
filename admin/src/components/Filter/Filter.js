import styled from 'styled-components'
import Label from '../Text/Label.js'

const StyledFiltersContainer = styled.div`
    position: fixed;
    right: calc(var(--base-unit) + 15px);
    bottom: var(--base-unit);
    height: 3rem;
    padding: var(--base-unit) calc(var(--base-unit) * 2);
    background-color: var(--dgray-90);
    border-radius: var(--radius);
    border: 2px solid var(--gray-20);
    display: flex;
    align-items: center;
    gap: var(--base-unit);
    color: var(--gray-10);
`

const StyledFilters = styled.div`
    display: flex;
    gap: var(--base-spacing);
`

export default function Filter({ filters }) {
    return (
        <StyledFiltersContainer>
            <StyledFilters>
                {filters &&
                    filters.map((filter, i) => (
                        <Label
                            htmlFor={`filter-${i}`}
                            key={filter.text}
                            active={filter.active}
                        >
                            {filter.text}
                            <input
                                checked={filter.active}
                                onChange={filter.setActive}
                                type="checkbox"
                                id={`filter-${i}`}
                            />
                        </Label>
                    ))}
            </StyledFilters>
        </StyledFiltersContainer>
    )
}
