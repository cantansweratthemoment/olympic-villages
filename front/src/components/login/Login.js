import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";

const theme = createTheme();

export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('username'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Welcome back
                    </Typography>
                    <Typography component="h4" variant="h10">
                        Enter your credentials to access your account.
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="username"
                            label="Enter your username"
                            name="username"
                            autoComplete="username"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Enter your password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Button
                            type="submit"
                            color="primary"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Typography component="h4" variant="h10">
                            Don't have an account?
                        </Typography>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Who are you?</FormLabel>
                            <RadioGroup row aria-label="role" name="row-radio-buttons-group">
                                <FormControlLabel value="Manager" control={<Radio />} label="Manager" />
                                <FormControlLabel value="Athlete" control={<Radio />} label="Athlete" />
                                <FormControlLabel value="Staff" control={<Radio />} label="Staff" />
                            </RadioGroup>
                        </FormControl>
                        <Button
                            type="submit"
                            color="primary"
                            variant="outlined"
                            fullWidth
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}