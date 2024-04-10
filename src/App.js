import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import { darkTheme } from './theme/DarkTheme';
import { CustomRoute } from './Routers/CustomRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './component/State/Authenticate/Action';
import { findCart } from './component/State/Cart/Action';


function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector((store) => store)
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
    dispatch(findCart(jwt));
  }, [dispatch, auth.jwt, jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomRoute />
    </ThemeProvider>
  );
}

export default App;
