import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { darkTheme } from './theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import { CustomRoute } from './Routers/CustomRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './component/State/Authenticate/Action';

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem('jwt');
  const { auth } = useSelector((store) => store)
  useEffect(() => {
    dispatch(getUser(auth.jwt || jwt));
  }, [dispatch, auth.jwt, jwt])
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <CustomRoute />
    </ThemeProvider>
  );
}

export default App;
