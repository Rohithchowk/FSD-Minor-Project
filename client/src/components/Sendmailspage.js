import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import MessageIcon from '@mui/icons-material/Message';
import DateRangeIcon from '@mui/icons-material/DateRange';

const fadeInAnimation = {
  '0%': { backgroundColor: '#cfd8dc' },
  '100%': { backgroundColor: '#ffffff' },
};

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2em',
  borderRadius: '8px',
  animation: '$fadeIn 2s infinite',
  '@keyframes fadeIn': fadeInAnimation,
});

const StyledForm = styled('form')({
  width: '100%',
  marginTop: '2em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledSubmitButton = styled(Button)({
  marginTop: '1em',
});

const StyledTextField = styled(TextField)({
  margin: '0.5em 0',
});

const Formpagee = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    message: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5200/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <StyledContainer component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Send mails and msgs to students
      </Typography>
      <StyledForm noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              placeholder='event/programme/course'
              autoComplete="name"
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <AccountCircleIcon />
                  </IconButton>
                ),
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="description"
              label="Description"
              name="description"
              placeholder='info about course/event'
              autoComplete="description"
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <DescriptionIcon />
                  </IconButton>
                ),
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              fullWidth
              id="message"
              label="Doc"
              name="any doc link"
              placeholder='doc link related to the event'
              autoComplete="message"
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <MessageIcon />
                  </IconButton>
                ),
              }}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              variant="outlined"
              required
              fullWidth
              id="date"
              label="Date"
              name="date"
              placeholder='Deadline to register'
              autoComplete="date"
              InputProps={{
                startAdornment: (
                  <IconButton>
                    <DateRangeIcon />
                  </IconButton>
                ),
              }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <StyledSubmitButton type="submit">Send Email and SMS</StyledSubmitButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default Formpagee;
