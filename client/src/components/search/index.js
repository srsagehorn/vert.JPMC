import React, { useState } from 'react'
import TickerSymbols from "../../data/tickers"
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import { matchSorter } from 'match-sorter';
import { useForm } from 'react-hook-form';




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
    const [tickerOptions, setTickerOptions] = useState([])

    const { handleSubmit, register } = useForm();
    const onSubmit = handleSubmit((data) => {
        //get rid of hyphen and isolate ticker symbol in string
        if (data.ticker.indexOf("-") !== -1) {
            var array = data.ticker.split("-");
            data.ticker = array[0].trim().toLowerCase();
        }
    });

    const handleChange = async (value) => {
        if (value) {
            try {
                const response = await axios.get(
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
                                //filter option used for fuzzy matching with match-sorter, see MU docs on autocomplete
                                type="submit"
                                filterOptions={filterOptions}
                                id="free-solo-demo"
                                freeSolo
                                className={classes.input}
                                onInputChange={(event, newInputValue) => {
                                    handleChange(newInputValue)
                                }}
                                options={tickerOptions.map((option) => `${option.symbol}  -  ${option.name.length < 35 ? option.name : option.name.substring(0, 35) + "..."}`)}

                                renderInput={(params) => (
                                    <TextField {...params}
                                        label="Search TickerSymbol"
                                        inputRef={register}
                                        name="ticker"
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
