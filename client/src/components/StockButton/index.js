import React, {useContext} from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import {StockInfoContext} from '../../contexts/StockInfoContext'

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
    const [stockInfo, dispatchStockInfo] = useContext(StockInfoContext)

    const onSubmit = handleSubmit(async (data) => {
        // getting today's data
        var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = yyyy + '/' + mm + '/' + dd;


//         console.log(`This is the data ${JSON.stringify(data)}`)
//         console.log(`This is the stock info ${JSON.stringify(stockInfo)}`)

//         const dataObject = {
//                     quantity: data.quantity,
//                     userId: "ASDSAGCXG",
//                     timestamp: today,
//                     stockCode: stockInfo.stockSummary.Symbol,
//                     value: 3.29
//                 }
//         console.log(JSON.stringify(dataObject))
          
        const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/api/request',
            data: {
                quantity: data.quantity,
                userId: "ASDSAGCXG",
                timestamp: today,
                stockCode: stockInfo.stockSummary.Symbol,
                value: 3.29
            }
          });
   
        
        // const response = await axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/api/request',
        //     data: {
        //         quantity: 0.1,
        //         userId: "ASDSAGCXG",
        //         timestamp: "2017-06-15",
        //         stockCode: "AAPL",
        //         value: 3.29
        //     }
        //   });
    })


    return (
        <div>

                <form onSubmit={onSubmit}>
            <Grid container justify="center" spacing={3}>
                    {/* <Paper> */}
                      

                        <Grid item container xs={7} justify="center" alignItems="center" align="center" spacing={2}>
                            <Grid item xs={3}>
                        
                                <TextField inputRef={register} name="quantity" size="small" id="outlined-basic" label="Number of shares" variant="outlined" />
                             
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
