import React, { useContext } from 'react'
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { StockInfoContext } from '../../contexts/StockInfoContext'
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';

const useStyles = makeStyles((theme) => ({
    darkCardBackground: {
        // backgroundColor:"rgb(50,50,50)",
        padding: "1rem"
    },
    statsCard: {
        backgroundColor: "rgb(50,50,50)",
    },
    stockInfoCard: {
        padding: theme.spacing(1),
        border: "4px solid rgba(253,216,53, 0.4)"
    },
    greenStockPrice: {
        color: "rgb(57,255,20)"
    },
    redStockPrice: {
        color: "rgb(255, 7, 58)"
    },
}));

export default function StockInfo() {
    const classes = useStyles();
    const [stockInfo, dispatchStockInfo] = useContext(StockInfoContext)

    function findPercentChange() {
        let percentDifference = 0
        if (stockInfo.stockPrice.c !== 0) {
            percentDifference = ((stockInfo.stockPrice.c - stockInfo.stockPrice.pc) / stockInfo.stockPrice.pc) * 100
            percentDifference = (Math.round(percentDifference * 100) / 100).toFixed(2);
        }
        return (percentDifference)
    }

    return (
        <Box m={3}>
            <Card className={classes.stockInfoCard}>



                <Grid container spacing={4}>
                    {/* <Grid item sm={12}>
                    <Card>
                        <CardContent>
                            <Typography>
                                Stock Chart
                    </Typography>
                        </CardContent>
                    </Card>

                </Grid> */}
                    <Grid item container spacing={3} justify="center" alignItems="stretch" sm={12}>


                        <Grid item sm={12} >
                            <Card className={classes.darkCardBackground} >



                                {stockInfo.targetPrice ?
                                    <Grid container spacing={3} alignItems="stretch">
                                        <Grid item justify="space-between" container sm={12}>
                                            <Grid item sm={8}>
                                                <Typography variant="h4" align="left">
                                                    {stockInfo.stockSummary.Name}
                                                </Typography>

                                            </Grid>
                                            <Grid item sm={4}>
                                                <Typography variant="h4" align="right"
                                                    className={(stockInfo.stockPrice.c > stockInfo.stockPrice.pc) ?
                                                        classes.greenStockPrice : classes.redStockPrice
                                                    } >
                                                    {stockInfo.stockPrice.c}{" "}
                                                    <Typography component="span" className={(stockInfo.stockPrice.c > stockInfo.stockPrice.pc) ?
                                                        classes.greenStockPrice : classes.redStockPrice
                                                    }>
                                                        {findPercentChange() >= 0 ? `+${findPercentChange()}%` : `${findPercentChange()}%`}
                                                    </Typography>
                                                </Typography>

                                            </Grid>
                                        </Grid>
                                        <Grid item>
                                            <Card className={classes.statsCard} >
                                                <CardHeader title={stockInfo.targetPrice.symbol}>
                                                    <Typography variant="h6">
                                                        {`${stockInfo.targetPrice.symbol}`}

                                                    </Typography>
                                                </CardHeader>
                                            </Card>
                                        </Grid>


                                        <Grid item>
                                            <Card className={classes.statsCard}>
                                                <CardContent>
                                                    {`Target High: ${stockInfo.targetPrice.targetHigh}`}
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item>
                                            <Card className={classes.statsCard}>
                                                <CardContent>
                                                    {`Target Low: ${stockInfo.targetPrice.targetLow}`}
                                                </CardContent>
                                            </Card>

                                        </Grid>
                                        <Grid item className={classes.darkCardBackground}>
                                            <Card className={classes.statsCard}>
                                                <CardContent>
                                                    {`Last Updated: ${stockInfo.targetPrice.lastUpdated}`}
                                                </CardContent>
                                            </Card>

                                        </Grid>
                                    </Grid>

                                    : <Typography>"No Description Available"</Typography>}


                            </Card>
                        </Grid>
                        <Grid item sm={12}>
                            <Card>

                                <CardContent>
                                    <Typography>
                                        {/* if there is stock info and a stock summary then show the stock summary description */}

                                        {stockInfo.stockSummary.Description ? stockInfo.stockSummary.Description : "No Description Available"}

                                    </Typography>
                                </CardContent>

                            </Card>
                        </Grid>

                    </Grid>
                </Grid>
            </Card>
        </Box>
    )
}
