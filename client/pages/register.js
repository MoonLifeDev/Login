import React, { useState, useCallback, useEffect, useContext } from 'react';
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

// stores
import { observer } from 'mobx-react-lite';
import RegisterStore from 'stores/Register';

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

const Register = observer(() => {
  const registerStore = useContext(RegisterStore);

  const classes = useStyles();

  const [term, setTerm] = useState(false);
  const [error, setError] = useState(null);

  // const [userName, onChangeUserName] = useInput('');
  // const [email, onChangeEmail] = useInput('');
  // const [password, onChangePassword] = useInput('');
  // const [passwordCheck, onChangePasswordCheck] = useInput('');

  const onSubmit = (e) => {
    e.preventDefault();
    // if ([userName, email, password, passwordCheck].includes('')) {
    //   setError('빈 칸을 모두 입력하세요.');
    //   return;
    // }
    // if (password !== passwordCheck) {
    //   return setError('패스워드가 일치하지 않습니다.');
    // }
    if (!term) {
      return setError('약관에 동의하셔야 합니다.');
    }

    console.log(
      'userName:',
      registerStore.name,
      'email:',
      registerStore.email,
      'password:',
      registerStore.password,
      'passwordCheck:',
      registerStore.passwordCheck,
      'term:',
      term
    );
  };

  const onChangeTerm = useCallback(
    (e) => {
      setTerm(e.target.checked);
    },
    [term]
  );

  // useEffect(() => {
  //   // 인풋에 입력될때마다, setError(null)로 바꿔서 에러메시지를 가려줌
  //   setError(null);
  // }, [term, userName, email, password, passwordCheck]);

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
                label='User Name'
                name='name'
                autoComplete='name'
                value={registerStore.userName}
                onChange={registerStore.onChangeHandler}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                label='Email Address'
                name='email'
                autoComplete='email'
                value={registerStore.email}
                onChange={registerStore.onChangeHandler}
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
                autoComplete='current-password'
                value={registerStore.password}
                onChange={registerStore.onChangeHandler}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant='outlined'
                required
                fullWidth
                name='passwordCheck'
                label='PasswordCheck'
                type='password'
                autoComplete='current-password'
                value={registerStore.passwordCheck}
                onChange={registerStore.onChangeHandler}
              />
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
              {error && <div style={{ color: 'red' }}>{error}</div>}
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
});

export default Register;
