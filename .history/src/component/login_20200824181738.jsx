import React, { useState } from "react";
import { Button, Typography, FormControlLabel, Link, Box } from "@material-ui/core"
import TextField from "@material-ui/core/TextField";
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { CheckBox } from "@material-ui/icons";
import {useHistory} from 'react-router';
import Axios from 'axios';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Login() {
  const classes = useStyles();

  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const [remember, setremember] = useState(false);
  const [users, setUsers] = useState();
  const history = useHistory();

  const usernameHandler = (e)=> {

    console.log(e.target.value);
    setusername(e.target.value);
  }

  const passwordHandler = (e)=>{
    
    console.log(e.target.value);
      setpassword(e.target.value)
  }

  const getAllUsers = ()=> {
    Axios.get('/api/users/all').then((response)=>{
      setUsers(response.data.users)
    }).catch((error)=> 
    {
      getAllUsers();
    })
  }

  const loginHandler= (e)=>{

    e.preventDefault();
    Axios.post('/api/users/login',{email:username, password:password}).then((response)=>{
      history.push("/Dashboard")  
    }).catch((error)=> 
    {
      getAllUsers();
    })
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
          </Typography>
        <form className={classes.form} onSubmit={loginHandler} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={usernameHandler}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={passwordHandler}
          />
          <FormControlLabel
            control={<CheckBox value="remember" color="secondary" checked={remember} onChange={()=>setremember(true)} />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Login
            </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" color='inherit'>
                Forgot password?
                </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" color='inherit'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <div>
        
      </div>
    </Container>
  );
}


export default Login;