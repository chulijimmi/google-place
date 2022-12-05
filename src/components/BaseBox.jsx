import { Box, useTheme } from "@mui/material";

function BaseBox({ children }) {
  const theme = useTheme();
  return (
    <Box sx={{ backgroundColor: theme.palette.background.paper }}>
      {children}
    </Box>
  );
}

export default BaseBox;
