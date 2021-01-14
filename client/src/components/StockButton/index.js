import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        // display: 'flex',
    },
    form:{
        // maxWidth:"40%",
        margin:"0 auto"
    }
}));

export default function StockButton() {
    const classes = useStyles();
    const { handleSubmit, register } = useForm();

    const onSubmit = handleSubmit(async (data) => {

        // dispatchStockInfo({ type: 'API_FETCH_INIT' })

        // try {
        //     const stockSummary = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${data.symbol}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API_KEY}`);
        //     await console.log(`test ${stockSummary}`)

        //     dispatchStockInfo(
        //         {
        //             type: 'API_FETCH_SUCCESS',
        //             payload: {
        //                 targetPrice: {
        //                     ...targetPrice.data
        //                 },
        //                 stockSummary: {
        //                     ...stockSummary.data
        //                 }
        //             }
        //         }
        //     )

        // } catch (error) {
        //     console.log("error fetching stock data")
        //     dispatchStockInfo({ type: 'API_FETCH_FAILURE' })
        // }

    });


    return (
        <div>
            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                <Paper>
                {/* <CardContent> */}
                <Grid item container justify="center" sm={3} alignItems="center">
                    <Grid item>
                        <TextField inputRef={register} name="numberOfShares" size="small" id="outlined-basic" label="Number of shares" variant="outlined" />
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" color="primary" className={classes.root} type="submit">
                            Track Stock Price
                    </Button>
                    </Grid>


                </Grid>
                {/* </CardContent> */}
                </Paper>
            </form>
        </div>
    )
}
