import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  margin: 0 auto;

  h1 {
    color: #3645ab;
  }

  .phonebook-title-appear {
    transform: translateX(-100%);
  }
  .phonebook-title-appear-active {
    transform: translateX(0);
    transition: transform 500ms linear;
  }


  .filter-enter {
    opacity: 0;
    transform: scale(0.1);
  }

  .filter-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 500ms linear;
  }

  .filter-exit {
    opacity: 1;
    transform: scale(0.1);
  }

  .filter-exit-active {
    opacity: 0;
    transform: scale(0);
    transition: all 500ms linear;
  }


  .Notification-enter {
    transform: translateX(100%);
  }

  .Notification-enter-active {
    transform: translateX(0);
    transition: transform 250ms linear;
  }

  .Notification-exit {
    transform: translateX(0);
  }

  .Notification-exit-active {
    transform: translateX(300%);
    transition: transform 250ms linear;
  }
`;
