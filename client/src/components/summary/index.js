import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/Textfield'

export default function Summary() {

    // $.ajax
    // "GET", "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary"
    // const apiKey = "pk_6d98d58cbe5d41b8ae7aa4cd66d016a9"

    return (
        <Container>
            <form>
                <Grid container spacing={6}>
                    <Grid item >
                        <input placeholder = "Value"/>
                    </Grid>
                    <Grid item >
                        <input placeholder = "Start Date"/>
                    </Grid>
                    <Grid item >
                        <input placeholder = "End Date"/>
                    </Grid>
                </Grid>
            </form>
        </Container>
    )
}