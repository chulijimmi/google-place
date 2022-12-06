import { Box, useTheme } from "@mui/material";

function BaseBox({ children, ...props }) {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.paper }} {...props}>
      {children}
    </Box>
  );
}

export default BaseBox;
