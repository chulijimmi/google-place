import { ThemeProvider } from "@mui/material";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import theme from "../../config/theme";

function SettingTheme({ children, themeName }) {
  return (
    <ThemeProvider
      theme={themeName === "light" ? theme.lightTheme : theme.darkTheme}
    >
      {children}
    </ThemeProvider>
  );
}

const mapState = (state) => ({ themeName: state.setting.theme.name });

SettingTheme.propTypes = {
  children: PropTypes.node,
  themeName: PropTypes.string
};

export default connect(mapState)(SettingTheme);
