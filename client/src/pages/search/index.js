import React, { useContext } from 'react'
import Search from "../../components/Search"
import StockInfo from "../../components/StockInfo"
import StockButton from "../../components/StockButton"
import { StockInfoContext } from '../../contexts/StockInfoContext'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../themes/theme"
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";



const useStyles = makeStyles((theme) => ({
    loader: {
        color: "rgba(21,244,238)",
        margin: "30px"
    }
}));


export default function SearchPage() {
    const classes = useStyles();
    const [stockInfo, dispatchStockInfo] = useContext(StockInfoContext)

    return (


        <ThemeProvider theme={theme}>
          
            <Search />
            <StockButton />
        
            <Grid container justify="center">
                {stockInfo.isLoading ?

                    <Grid item>
                        <CircularProgress size={50} className={classes.loader} />
                    </Grid>
                    :
                    ((Object.keys(stockInfo.stockSummary).length === 0) ?
                        (
                            <Grid container justify="center" >
                                <Grid item lg={6} md={6} style={{ margin: "3rem" }} >
                                    <Card>
                                        <CardMedia
                                            component="img"
                                            //   alt={`${title}`}
                                            height="100%"
                                            image="https://media.gettyimages.com/vectors/stock-market-candlestick-financial-analysis-abstract-vector-id942840398?s=2048x2048"
                                        //   title={`${title}`}
                                        />
                                    </Card>
                                </Grid>
                            </Grid>) 
                            :

                        (<>
                        
                            <StockInfo />
                        </>)
                        )
                }
            </Grid>
        </ThemeProvider>

    )
}
