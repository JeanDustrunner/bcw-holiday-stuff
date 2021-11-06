import React, { useEffect } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { ROUTES } from '../../configs';
import { Header, Container } from '../../components';

const Shell = () => {
    let { path, url } = useRouteMatch();
    useEffect(() => {
      console.log(typeof ROUTES.MAIN_ROUTES);
      console.log('shell', url);

    }, []);
    return (
      <>
        <Header></Header>
        <main>
          <Container>
            <Switch>
              <Route path={ROUTES.APP.path} exact>
                <Redirect to={ROUTES.MAIN_ROUTES[0].path} />{' '}
              </Route>
              {ROUTES.MAIN_ROUTES.map(({ children, path, component }) => (
                <Route
                  key={path}
                  exact
                  children={children}
                  path={path}
                  component={component}
                />
              ))}
            </Switch>
          </Container>
        </main>
      </>
    );
  };
  
  export default Shell;
