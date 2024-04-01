import { ThemeProvider, CssBaseline } from '@mui/material';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { darkTheme } from './theme/DarkTheme';
import Home from './component/Navbar/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Navbar />
      {/* <Home /> */}
      <RestaurantDetails />
    </ThemeProvider>
  );
}

export default App;
