import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { Box, Button, Typography, Avatar } from '@mui/material';
import claudeLogo from '../assets/image.png'; // Make sure this path is correct

function LoginPage() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      login(tokenResponse.access_token);
      navigate('/');
    },
    onError: () => {
      alert('Login Failed');
    },
  });

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      width="100%"
      marginTop={-10}
    >
      <Box textAlign="center">
        {/* Claude logo and heading */}
        <Box display="flex" justifyContent="center" alignItems="center" gap={1} mb={2}>
          <Avatar src={claudeLogo} alt="Claude Logo" sx={{ width: 40, height: 40 }} />
          <Typography variant="h4" component="h1" fontWeight="bold">
            Claude
          </Typography>
        </Box>

        {/* Heading */}
        <Typography variant="h4" component="h2" gutterBottom>
          Your ideas, Amplified
        </Typography>

        {/* Subheading */}
        <Typography variant="subtitle1" color="white" mb={4}>
          Privacy-first AI that helps you create in confidence.
        </Typography>

        {/* Google Login Button */}
        <Button
          onClick={() => handleLogin()}
          variant="contained"
          startIcon={<FcGoogle />}
          sx={{
            backgroundColor: 'white',
            color: 'black',
            textTransform: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            boxShadow: 1,
            '&:hover': {
              backgroundColor: '#f0f0f0',
            },
          }}
        >
          Continue with Google
        </Button>
      </Box>
    </Box>
  );
}

export default LoginPage;