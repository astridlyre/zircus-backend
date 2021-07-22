import Page from '../Containers/Page.js'
import List from '../Containers/List.js'
import Message from './Message.js'

export default function Messages({
    messages,
    setShowModal,
    setMessages,
    token,
    notify,
}) {
    return (
        <Page>
            <List gap={true}>
                {messages &&
                    messages.map(message => (
                        <Message
                            notify={notify}
                            token={token}
                            setMessages={setMessages}
                            key={message.id}
                            message={message}
                            setShowModal={setShowModal}
                        />
                    ))}
            </List>
        </Page>
    )
}
