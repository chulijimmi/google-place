import { Typography } from "@mui/material";
import PropTypes from "prop-types";

function BaseTypography({ children, variant, ...props }) {
  return (
    <Typography variant={variant} {...props} gutterBottom>
      {children}
    </Typography>
  );
}

BaseTypography.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string
};

export default BaseTypography;
