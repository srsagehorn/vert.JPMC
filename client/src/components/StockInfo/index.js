import React, { useState, useContext } from 'react'
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
    darkCardBackground:{
        // backgroundColor:"rgb(50,50,50)",
        padding:"1rem"
    },
    statsCard:{
       backgroundColor:"rgb(50,50,50)",
    }
}));

export default function StockInfo() {    
    const classes = useStyles();
    const [stockInfo, dispatchStockInfo] = useContext(StockInfoContext)
    return (
        <Box m={1}>

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


                    <Grid item sm={6} >
                        <Card className={classes.darkCardBackground} >



                            {stockInfo.targetPrice ?
                                <Grid container spacing ={3}>
                                    <Grid item sm={12}>
                                        <Typography variant="h4" align="center">
                                            {stockInfo.stockSummary.Name}
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.darkCardBackground}>
                                    <Card className={classes.statsCard}>
                                        <CardContent>
                                        {`Last Updated: ${stockInfo.targetPrice.lastUpdated}`}
                                        </CardContent>
                                    </Card>

                                    </Grid>
                                    <Grid item>
                                    <Card className={classes.statsCard}>
                                    <CardContent>
                                        {`symbol: ${stockInfo.targetPrice.symbol}`}
                                        </CardContent>
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
                                </Grid>

                                : <Typography>"No Description Available"</Typography>}


                        </Card>
                    </Grid>
                    <Grid item sm={6}>
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
        </Box>
    )
}
