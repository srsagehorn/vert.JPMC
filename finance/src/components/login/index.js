import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/Textfield'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    container: {
        padding:theme.spacing(3)
    },

    input:{
        borderBottom: "none",
 
    },

    paper: {
        padding:theme.spacing(3)
    }
}));

export default function Login() {

    const classes = useStyles();
    const { handleSubmit, register } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <Container maxWidth="xs" className={classes.container}>
            <Paper className={classes.paper}>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} >
                            <Grid container spacing={2} >
                                <Grid item xs={12}>
                                    <Typography>
                                        Welcome to Our App!
                             </Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        // className={classes.input}
                                        fullWidth label="Email"
                                        inputRef={register}
                                        name="email"
                                        size="small"
                                        variant="outlined" />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                      className={classes.input}
                                        fullWidth
                                        inputRef={register}
                                        label="Password"
                                        name="password"
                                        size="small"
                                        type="password"
                                        variant="outlined" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item container spacing={2} xs={12}>
                        <Grid item xs={12}>
                            <Button fullWidth type="submit" variant="contained" color="primary">
                                Login
                        </Button>

                        </Grid>
                        <Grid item xs={12}>
                            <Button fullWidth variant="contained" color="primary">
                                Sign Up
                        </Button>

                        </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </Container >
    )
}
