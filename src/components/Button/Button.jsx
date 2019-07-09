import React from "react";

import { CustomButtonContainer } from "./StyledButton";

const Button = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default Button;
