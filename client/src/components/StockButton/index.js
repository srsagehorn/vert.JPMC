import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1),
        

    },
    form: {
        // maxWidth:"40%",

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

                <form onSubmit={onSubmit}>
            <Grid container justify="center" spacing={3}>
                    {/* <Paper> */}
                      

                        <Grid item container xs={7} justify="center" alignItems="center" align="center" spacing={2}>
                            <Grid item xs={3}>
                        
                                <TextField inputRef={register} name="numberOfShares" size="small" id="outlined-basic" label="Number of shares" variant="outlined" />
                             
                            </Grid>
                            <Grid item xs={3}>
                             
                                <Button variant="outlined" color="primary" type="submit" >
                                    Track Change
                    </Button>

                             
                            </Grid>

                        </Grid>
                   
                    {/* </Paper> */}
            </Grid>
                </form>


        </div>
    )
}
