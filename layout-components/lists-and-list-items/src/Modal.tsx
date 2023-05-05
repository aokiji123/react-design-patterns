import React, {ReactNode, useState} from 'react';
import styled from 'styled-components';

interface IModal {
  children: ReactNode;
}

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

export const Modal: React.FC<IModal> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <button onClick={() => setIsVisible(true)}>Show modal</button>
      {isVisible && (
        <ModalWrapper onClick={() => setIsVisible(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsVisible(false)}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalWrapper>
      )}
    </>
  )
}
