import React, { Suspense, useContext, useState} from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ROUTES } from './configs';
import './App.css';
import { LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { LocaleContext, LOCALE_CONTEXT_DEFAULT,LocaleContextProvider  } from './contexts';



export default function App() {
const {locale, setLocale} = useContext(LocaleContext)
const [orientation, setOrientation] = useState(true)

window.addEventListener('orientationchange', () => {
  window.location.reload()
}, false)

const orientationChange = () => {
  if('onorientationchange' in window) {
    window.addEventListener('orientationChange', () => {
      setOrientation(!orientation)
    }, false);
  } else if ('onresize' in window) {
      window.addEventListener('resize', () => {
      setOrientation(!orientation)
    }, false);
  }
}


  return (
    <LocaleContextProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
        <Suspense fallback="loading">
          <BrowserRouter>
            <Switch>
              <Route path={'/'} exact={true}>
                <Redirect to={ROUTES.APP.path} />
              </Route>
              <Route path={ROUTES.APP.path} component={ROUTES.APP.component} />
            </Switch>
          </BrowserRouter>
        </Suspense>
      </LocalizationProvider>
    </LocaleContextProvider>
  );
}

