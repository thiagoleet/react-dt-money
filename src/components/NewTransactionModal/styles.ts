import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme["gray-800"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background-color: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 3.625rem;
      border: 0;
      border-radius: 6px;
      background-color: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme.white};
      margin-top: 1.5rem;
      padding: 0 1.25rem;
      cursor: pointer;

      &:hover {
        background-color: ${({ theme }) => theme["green-700"]};
        transition: background-color 0.2s;
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 0;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-500"]};

  &:hover {
    color: ${({ theme }) => theme["gray-300"]};
    transition: color 0.2s;
  }
`;

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButtonProps {
  $variant: "income" | "outcome";
}

export const TransactionTypeButton = styled(
  RadioGroup.Item
)<TransactionTypeButtonProps>`
  background-color: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["gray-100"]};
  border: 0;
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  cursor: pointer;

  svg {
    color: ${(props) =>
      props.$variant === "income"
        ? props.theme["green-300"]
        : props.theme["red-300"]};
  }

  &[data-state="unchecked"]:hover {
    background-color: ${({ theme }) => theme["gray-600"]};
    transition: background-color 0.2s;
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme.white};
    background-color: ${(props) =>
      props.$variant === "income"
        ? props.theme["green-500"]
        : props.theme["red-500"]};

    svg {
      color: ${({ theme }) => theme.white};
    }
  }
`;
