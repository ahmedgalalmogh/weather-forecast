import React from "react";
import { NotFoundStack,NotFountText } from "./styles";

const NotFound = () => {
  return (
    <NotFoundStack>
      <img height='50%' src='/static/emptyIcon.png' />
      <NotFountText variant='h4'>404 NOT FOUND</NotFountText>
    </NotFoundStack>
  );
};
export default NotFound;
