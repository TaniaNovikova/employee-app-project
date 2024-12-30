import styled from "@emotion/styled";

export const UserDataFormContainer = styled("form")`
  display: flex;
  flex-direction: column;
  width: 590px;
  min-height: 450px;
  max-height: fit-content;
  border: 1px solid #000000;
  padding: 60px;
  border-radius: 4px;
  background-color: white;
  gap: 30px;
`;

export const InputContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ButtonContainer = styled("div")`
  height: 70px;
`;

export const ModalButton = styled.button`
  background-color: #dfede8;
  color: #1e3c3a;
  height: 50px;
  width: 100%;
  font-size: 22px;
  border: 1px solid transparent;
  cursor: pointer;
`;
