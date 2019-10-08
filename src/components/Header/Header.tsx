import AppBar from "@material-ui/core/AppBar";
import { purple } from "@material-ui/core/colors";
import {
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme
} from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import nativeClasses from "./Header.module.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
);

function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root + ", " + nativeClasses.Header}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            برنامه بخور نخور خونه ما
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "B Koodak",
      "Roboto",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  },
  palette: {
    primary: {
      main: "#607d8b"
    },
    secondary: purple
  }
});

export default function FontAssignHandler() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonAppBar />
    </ThemeProvider>
  );
}
