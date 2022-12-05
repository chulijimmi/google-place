import { Button } from "@mui/material";
import PropTypes from "prop-types";

function BaseButton({ variant, text, color }) {
  return (
    <Button variant={variant} color={color}>
      {text}
    </Button>
  );
}

BaseButton.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string
};

export default BaseButton;
