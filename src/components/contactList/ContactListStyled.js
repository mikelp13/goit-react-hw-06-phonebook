import styled from "styled-components";
import { Button } from "../contactForm/ContactFormStyled";

export const Wrapper = styled.div`
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 3px;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .ContactList-item-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .ContactList-item-enter-active {
    opacity: 1;
    transform:translateX(0);
    transition: all 250ms linear;
  }

  .ContactList-item-exit {
    opacity: 1;
    transform: translateX(0);
  }

  .ContactList-item-exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: all 250ms linear;
  }
`;

export const DelButton = styled(Button)`
  width:35px;
  height:35px;
  font-size: 20px;
  background-color:#F1392D;
  line-height: 17px;

  &:hover{
    background-color:#d71b0e
  }
`;

