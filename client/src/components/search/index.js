import React, { useState, useContext } from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { matchSorter } from 'match-sorter';
import { useForm } from 'react-hook-form';
import {StockInfoContext} from '../../contexts/StockInfoContext'

//Material UI built in way of custom styling
const useStyles = makeStyles((theme) => ({
    input: {
        margin: theme.spacing(2)
    }
}));

//Necessary for fuzzy matching with match-sorter
const filterOptions = (options, { inputValue }) =>
    matchSorter(options, inputValue);

export default function Search() {
    const classes = useStyles();
    //autcomplete search ticker options
    const [tickerOptions, setTickerOptions] = useState([])
    //React-Hook-Form
    const { handleSubmit, register } = useForm();

    const [stockInfo, dispatchStockInfo] = useContext(StockInfoContext)

    const onSubmit = handleSubmit(async (data) => {
        //get rid of hyphen and isolate ticker symbol in string
        if (data.symbol.indexOf("-") !== -1) {
            var array = data.symbol.split("-");
            data.symbol = array[0].trim().toLowerCase();
        }
        dispatchStockInfo({type:'API_FETCH_INIT'})
       

        try{
            const stockSummary = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${data.symbol}&apikey=${process.env.REACT_APP_ALPHA_VANTAGE_API_KEY}`);
            await console.log(`test ${stockSummary}`)

            const targetPrice = await axios.get(`https://finnhub.io/api/v1/stock/price-target?symbol=${data.symbol}&token=${process.env.REACT_APP_FINNHUB_API_KEY}`);
            await console.log(targetPrice)

            await setTimeout(function(){
                dispatchStockInfo(
                    {type:'API_FETCH_SUCCESS',
                    payload:{
                        targetPrice: {
                            ...targetPrice.data
                        },
                        stockSummary:{
                            ...stockSummary.data
                        }
                    }
                }
            )
           }, 2000)

        } catch(error){
            console.log("error fetching stock data") 
            dispatchStockInfo({type:'API_FETCH_FAILURE'})
        }

    });

    const handleChange = async (value) => {
        if (value) {
            try {
                const response = await axios.get(
                    //List of Tickers(2019) https://github.com/yashwanth2804/TickerSymbol
                    `https://ticker-2e1ica8b9.now.sh/keyword/${value}`
                );
                console.log(response)
                setTickerOptions(response.data)
            } catch (error) {
                console.log("autocomplete not working at the moment")
            }
        }

    }


    return (
        <div>

            <Grid container justify="center">
                <Grid item xs={6} >
                    <Card>
                        <form onSubmit={onSubmit}>
                            <Autocomplete
                                type="submit"
                                //filter option used for fuzzy matching with match-sorter, see MU docs on autocomplete
                                filterOptions={filterOptions}
                                id="ticker-symbol-request"
                                freeSolo
                                className={classes.input}
                                onInputChange={(event, newInputValue) => {
                                    handleChange(newInputValue)
                                }}
                                options={tickerOptions.map((option) => `${option.symbol}  -  ${option.name.length < 35 ? option.name : option.name.substring(0, 35) + "..."}`)}

                                renderInput={(params) => (
                                    <TextField {...params}
                                        label="Search Ticker Symbol"
                                        inputRef={register}
                                        name="symbol"
                                        size={"small"}
                                        variant="outlined" />
                                )}
                            />
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}
