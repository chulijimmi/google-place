import { InputBase } from "@mui/material";
import PropTypes from "prop-types";

function BaseInput({ placeholder, inputProps, ...props }) {
  return (
    <InputBase placeholder={placeholder} inputProps={inputProps} {...props} />
  );
}

BaseInput.propTypes = {
  placeholder: PropTypes.string,
  inputProps: PropTypes.object
};

export default BaseInput;
