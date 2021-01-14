import { createMuiTheme, rgbToHex } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';



const theme = createMuiTheme({
 
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: 'rgb(7, 202, 231)'
    },
    //   background: {
    //     paper: "rgba(40,40,40, 0.5)",
    //     default: "rgba(20,20,20)"
    //   },
      type: "dark",
      // divider:"rgba(0,144,138, 0.1)",
      // action:{
      //   selected: 'rgba(50,50,50)'
      // }
  },
});

export default theme