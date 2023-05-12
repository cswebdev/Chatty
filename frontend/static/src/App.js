//import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/global/NavBar.jsx";
import root from "./index.js";
import { ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {ColorModeContext, useMode} from "./theme";
import Home from "./components/scenes/Home.jsx";
import LogIn from "./components/login/LoginForm.jsx";

function App() {
  const [theme, colorMode] = useMode();

  return (
<ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}>
<CssBaseline />
<div className="App">
  <main className="content">
    <NavBar />
    
    </main>
    <Routes>
      <Route path="/" element={<root />} />
      <Route path="/home" index element={<Home />} />
      <Route path="/login" element={<LogIn />} />
      </Routes>
    
    </div>
</ThemeProvider>
</ColorModeContext.Provider>
  );
}

export default App;
