import { Button } from "@mui/material";
import PropTypes from "prop-types";

function BaseButton({ variant, children, color, ...props }) {
  return (
    <Button variant={variant} color={color} {...props}>
      {children}
    </Button>
  );
}

BaseButton.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string
};

export default BaseButton;
