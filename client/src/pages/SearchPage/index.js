import React, { useContext } from 'react'
import Search from "../../components/Search"
import Nav from '../../components/nav'
import StockInfo from "../../components/StockInfo"
import { StockInfoContext } from '../../contexts/StockInfoContext'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
   loader: {
        color:"rgba(21,244,238)",
        margin: "30px"
    }
}));


export default function SearchPage() {
    const classes = useStyles();
    const [stockInfo, dispatchStockInfo] = useContext(StockInfoContext)
  
    return (
        <div>
            <Nav />
            <Search />
            {stockInfo.isLoading ?

                <Grid container justify="center">
                    <Grid item>
                        <CircularProgress size={50} className={classes.loader}/>
                    </Grid>
                </Grid>
                :
                <StockInfo />

            }
        </div>
    )
}
