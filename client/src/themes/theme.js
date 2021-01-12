import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';



const theme = createMuiTheme({
  palette: {
      type: "dark",
      background: "rgb(10,10,10)",
      divider:"rgba(10, 150, 100, 0.2)"
  },
});

export default theme