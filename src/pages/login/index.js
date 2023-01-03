import LoginIcon from '@mui/icons-material/Login';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Box from '@mui/material/Box';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

function Login(props) {
  const { setFullName } = props
  const [email, setEmail] = React.useState('Developer5@gmail.com');
  const [password, setPassword] = React.useState('123456');
  const navigate = useNavigate();
  const callApi = () => {

    // {
    //   "email": "apitest@aza.com",
    //   "password": "Akshay@123"
    // }'
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    };
    fetch('http://restapi.adequateshop.com/api/authaccount/login', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log(data.data.Name)
        if (data.code === 0) {
          setFullName(data.data.Name)
          localStorage.setItem('token', data.data.Token)
          navigate('/Dashboard')

        }
      })
  }
  return (
    <div className="App">
      <Box className='loginpannel'>
      </Box>
      <Box className="App-header">
        <ShowChartIcon className="App-logo" alt="logo" />
        <Box className='mb20'>Please login to your account</Box>
        <input type='text' className='loginInputs' placeholder='Email Id' value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
        <input type='password' className='loginInputs' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }}></input>
        <LoginIcon className='loginButton' onClick={callApi} />
      </Box>
    </div>
  );
}

export default Login;
