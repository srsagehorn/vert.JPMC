import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/Textfield'
// import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom'
import { useUserContext } from '../firebase/userContext'
// import firebaseConfig from '../firebase'
import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';
// import 'firebase/analytics';

const auth = firebase.auth();

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

export default function LoginForm() {
    const classes = useStyles();
    const { handleSubmit, register } = useForm();
    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <Container maxWidth="xs" className={classes.container}>
            <Paper className={classes.paper}>
                <form onSubmit={onSubmit}>
                    <Grid container spacing={3} justify="center">
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
                        <Grid item container spacing={2} justify="center" xs={12}>
                            <Grid item xs={12} >
                                <Button fullWidth  type="submit" variant="contained" color="primary">
                                    Login
                                </Button>

                            </Grid>
                            <Grid item xs={12}>
                                <Button fullWidth variant="contained" color="primary">
                                    Sign Up
                                </Button>
                            </Grid >
                            <Grid item xs={12} justify="center">
                                <div>
                                    <SignIn />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

        </Container >
    )
    }

    // function SignIn () {
    //     const [user] = useUserContext()
    //     const history = useHistory()
    //     if (user) history.push("/summary")
    //     const signInWithGoogle = () => {
    //     const provider = new firebase.auth.GoogleAuthProvider();
    //     auth.signInWithPopup(provider)
    //     }
    //     return (
    //         <div>
    //             <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt = "google logo"/>
    //             <Button className="sign-in g-signin2" onClick={signInWithGoogle}>Sign in with Google</Button>
    //         </div>
    //       )
    // }

    function SignIn () {
        const [user] = useUserContext()
        const history = useHistory()
        if (user) history.push("/summary")
        const signInWithGoogle = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider).then(function(result) {
                // code which runs on success
              }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                console.log(errorCode);
                alert(errorCode);
              
                var errorMessage = error.message;
                console.log(errorMessage);
                alert(errorMessage);
              });
        }
        return (
            <div>
                <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt = "google logo"/>
                <Button className="sign-in g-signin2" onClick={signInWithGoogle}>Sign in with Google</Button>
            </div>
          )
    }