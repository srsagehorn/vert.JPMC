import React from 'react'
import PortfolioTable from '../../components/PortfolioTable'
import Grid from '@material-ui/core/Grid'
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../../themes/theme"

export default function SummaryPage() {
    return (
        <div>
             <ThemeProvider theme={theme}>

           
            <Grid container justify="center" spacing={3}>
                <Grid item lg={6} md={6} style={{ margin: "3rem" }} >
                    <Card style={{ padding: "1rem" }}>
                        <CardMedia
                            component="img"
                            //   alt={`${title}`}
                            height="100%"
                            image="steelWorkInProgress.png"
                        //   title={`${title}`}
                        />
                    </Card>
                </Grid>
            </Grid>
            </ThemeProvider>
        </div>
    )
}