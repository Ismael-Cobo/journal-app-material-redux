import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Google } from '@mui/icons-material'
import { Link as LinkRouter } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">

      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Correo'
              type='email'
              placeholder="correo@google.com"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Contraseña'
              type='password'
              placeholder="password"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 2 }}>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              fullWidth
            >
              Login
            </Button>

          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              fullWidth
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Link component={LinkRouter} color="inherit" to='/auth/register'>
              Crear cuenta
            </Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
