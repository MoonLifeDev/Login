import React, { useState, useCallback } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>
      {new Date().getFullYear()}
    </Typography>
  );
};

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
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

// 커스텀 훅
export const useInput = (initValue = null) => {
  const [value, setValue] = useState(initValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

const Register = () => {
  const classes = useStyles();

  const [passwordCheck, setPasswordCheck] = useState('');
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [userName, onChangeUserName] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }
    },
    [term, password, passwordCheck]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password, passwordCheck, passwordError]
  );

  const onChangeTerm = useCallback(
    (e) => {
      setTermError(false);
      setTerm(e.target.checked);
      console.log(term);
    },
    [term, termError]
  );

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}></Avatar>
        <Typography component='h1' variant='h5'>
          회원 가입
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='name'
                label='User Name'
                name='name'
                autoComplete='name'
                value={userName}
                onChange={onChangeUserName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                value={email}
                onChange={onChangeEmail}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={onChangePassword}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                error={passwordError}
                variant='outlined'
                required
                fullWidth
                name='passwordCheck'
                label='PasswordCheck'
                type='password'
                id='password'
                autoComplete='current-password'
                value={passwordCheck}
                onChange={onChangePasswordCheck}
              />
              {passwordError && (
                <div style={{ color: 'red' }}>
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={term}
                    onChange={onChangeTerm}
                    value='allowExtraEmails'
                    color='primary'
                  />
                }
                label='개발 공부를 열심히 수행할 것을 약속합니다.'
              />
              {termError && (
                <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>
              )}
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            회원 가입
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='/login' variant='body2'>
                이미 계정이 있습니까? 로그인
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Register;
