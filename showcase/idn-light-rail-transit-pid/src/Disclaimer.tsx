import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Disclaimer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("disclaimer_acknowledged");
    if (!hasSeen || hasSeen == "false") {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("disclaimer_acknowledged", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <Backdrop>
      <Modal>
        <ModalHeader>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFAE00"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "12px" }}
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
            <line x1="12" y1="9" x2="12" y2="13"></line>
            <line x1="12" y1="17" x2="12.01" y2="17"></line>
          </svg>
          <Title>Unofficial Project</Title>
        </ModalHeader>
        <ModalBody>
          <Text>
            This is a personal project created for{" "}
            <strong>educational purposes only</strong>.
          </Text>
          <Text>
            It is <strong>not</strong> affiliated with, endorsed by, or
            maintained by the official trademark holder.
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>I Understand</Button>
        </ModalFooter>
      </Modal>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Nunito Sans", -apple-system, sans-serif;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

const Modal = styled.div`
  overflow: hidden;

  display: flex;
  flex-direction: column;
  margin: 20px;
  width: 100%;
  max-width: 420px;

  background-color: white;
  border-radius: 5px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1);
`;

const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 20px;

  background-color: #f6f9fc;
  border-bottom: 1px solid #eaeef3;
`;
const ModalBody = styled.header`
  padding: 20px;

  font-size: 14px;
  line-height: 1.5;

  color: #555;
`;
const ModalFooter = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 12px 20px;

  background-color: white;
`;

const Title = styled.h3`
  margin: 0;

  font-size: 16px;
  font-weight: 700;

  color: #2e3438;
`;
const Button = styled.button`
  padding: 8px 16px;

  font-size: 14px;
  font-weight: 700;

  color: white;
  background-color: #1ea7fd;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;

  transition: background 0.2s ease;

  &:hover {
    background-color: #1992d4;
  }
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 12px;
`;
