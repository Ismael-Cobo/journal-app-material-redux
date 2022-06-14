import { Button, Grid, TextField, Typography, Link } from "@mui/material"
import { Google } from '@mui/icons-material'
import { Link as LinkRouter } from 'react-router-dom'
import { AuthLayout } from "../layout/AuthLayout"

export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">

      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label='Nombre completo'
              type='text'
              placeholder="Nombre completo"
              fullWidth
            />
          </Grid>
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
          <Grid item xs={12}>
            <Button
              variant="contained"
              fullWidth
            >
              Crear cuenta
            </Button>

          </Grid>

          <Grid container direction='row' justifyContent='end'>
            <Typography sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={LinkRouter} color="inherit" to='/auth/login'>
              Ingresa
            </Link>
          </Grid>

        </Grid>
      </form>

    </AuthLayout>
  )
}
