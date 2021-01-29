import React from "react";
import { NotifWrap } from "./NotificationStyled";

const Notification = ({ message }) => (
  <NotifWrap>
    <p>{message}</p>
  </NotifWrap>
);

export default Notification;
