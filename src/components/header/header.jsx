import { Alert, AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from '../';
import { ROUTES } from '../../configs/routes';

const Header = () => {
  useEffect(() => {
    console.log('ROUTES: ', ROUTES.MAIN_ROUTES);
  }, [])

    return(
        <>
          <AppBar position={'sticky'} color={'primary'}>
            <Container>
              <Toolbar>
                <div className="nav-links">
                  <Typography color={'whitesmoke'}>
                    {ROUTES.MAIN_ROUTES.map((route) => (
                      <NavLink
                        key={route.path}
                        activeClassName={'active'}
                        to={route.path}
                        sx={{ m: 2, color: 'white' }}
                        className={'nav-link'}
                      >
                        {route.label}
                      </NavLink>
                    ))}
                  </Typography>
                  {/* <Button
                    className={'nav-link auth-link'}
                    variant="contained"
                    onClick={logout}
                  >
                    LOGOUT
                  </Button> */}
                </div>
              </Toolbar>
  
              {/* {error && (
                <Box>
                  <Alert severity={'error'}>{error.message}</Alert>
                </Box>
              )} */}
            </Container>
          </AppBar>
      </>
    )
}

export default Header;