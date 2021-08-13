import { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledBlur = styled.div`
    ${(props) => props.showModal && "filter: blur(0.25rem)"};
`;

const StyledBlock = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    position: fixed;
`;

const StyledModal = styled.section`
    position: fixed;
    display: flex;
    flex-flow: column nowrap;
    gap: 1rem;
    backgroud-color: var(--gray-90);
    top: calc(25%);
    left: calc(50% - 15rem);
    width: 30rem;
    min-height: 15rem;
    background-color: var(--gray-10);
    border-radius: var(--big-radius);
    border: 2px solid var(--dgray-90);
    padding: var(--base-spacing);
`;

const StyledText = styled.p`
    flex-grow: 1;
`;

const StyledButtons = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    gap: 1rem;
`;

const StyledButton = styled.button`
    flex-grow: 1;
`;

export default function Modal({ children, showModal, setShowModal }) {
  const cancelBtn = useRef();

  const ok = () => {
    showModal.ok(true);
    setShowModal(null);
  };
  const cancel = () => {
    showModal.ok(false);
    setShowModal(null);
  };

  useEffect(() => {
    showModal && cancelBtn.current.focus();
  });

  return (
    <div>
      <StyledBlur showModal={showModal}>
        {children}
        {showModal && <StyledBlock></StyledBlock>}
      </StyledBlur>
      {showModal && (
        <StyledModal>
          <h2>{showModal.heading}</h2>
          <StyledText>{showModal.text}</StyledText>
          <StyledButtons>
            <StyledButton
              className={`${showModal.color} button`}
              type="button"
              onClick={ok}
            >
              {showModal.btnText || "Ok"}
            </StyledButton>
            <StyledButton
              className="button outline"
              type="button"
              onClick={cancel}
              ref={cancelBtn}
            >
              Cancel
            </StyledButton>
          </StyledButtons>
        </StyledModal>
      )}
    </div>
  );
}
