import styled from 'styled-components'
import MediumHeader from '../Text/MediumHeader.js'
import DeleteButton from '../Buttons/DeleteButton.js'
import { useState } from 'react'
import { deleteMessage } from '../../services/services.js'

const StyledLi = styled.li`
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    gap: var(--lg-spacing);
    padding: var(--base-spacing);
    width: 100%;
    border-left: 0.5rem solid;
    border-right: 0.5rem solid;
    border-bottom: 1px solid;
    border-top: 1px solid;
    border-color: var(--gray-30);

    &:hover {
        background-color: var(--gray-20);
    }
`

const StyledDiv = styled.div`
    display: flex;
    width: 20vw;
    flex-flow: column nowrap;
`

const StyledActions = styled.div`
    display: flex;
    justify-content: flex-end;
    flex-grow: 1;
`

const StyledText = styled.p`
    max-width: 75ch;
`

const StyledA = styled.a`
    text-decoration: none;
    padding: var(--base-unit);
    color: var(--link);

    &:hover,
    &:focus {
        text-decoration: none !important;
        color: var(--link-hover);
    }
`

export default function Message({
    message,
    setShowModal,
    setMessages,
    token,
    notify,
}) {
    const [showFull, setShowFull] = useState(false)
    const handleDeleteSuccess = ({ data }) => {
        setMessages(messages => messages.filter(m => m.id !== message.id))
        notify(`${data.response}: Deleted ${message.name}'s message`, 'red')
    }
    const handleDeleteFailure = ({ data }) => notify(`${data.error}`, 'red')
    const handleDelete = () => {
        setShowModal({
            heading: 'Confirm deletion',
            text: `Delete ${message.name}'s message?'`,
            color: 'danger',
            btnText: 'Delete',
            ok: choice => {
                if (choice)
                    deleteMessage(message.id, token)
                        .then(handleDeleteSuccess)
                        .catch(handleDeleteFailure)
            },
        })
    }

    return (
        <StyledLi>
            <StyledDiv>
                <MediumHeader>{message.name}</MediumHeader>
                <a href={`mailto:${message.email}`}>{message.email}</a>
            </StyledDiv>
            <StyledText>
                {showFull ? message.message : message.message.substring(0, 140)}
                {message.message.length > 140 && (
                    <StyledA
                        href="#"
                        onClick={() => setShowFull(state => !state)}
                    >
                        {showFull ? '(less)' : '... (more)'}
                    </StyledA>
                )}
            </StyledText>
            <StyledActions>
                <DeleteButton onClick={() => handleDelete()} />
            </StyledActions>
        </StyledLi>
    )
}
