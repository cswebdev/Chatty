//import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/global/NavBar.jsx";
import Main from "./components/global/Main.jsx";
import root from "./index.js";
import { ThemeProvider} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import {ColorModeContext, useMode} from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
<ColorModeContext.Provider value={colorMode}>
<ThemeProvider theme={theme}>
<CssBaseline />
<div className="App">
  <main className="content">
    <NavBar />
    <Main />
    </main>
    <Routes>
      <Route path="/" element={<root />} />
      <Route path="/main" index element={<Main />} />
      </Routes>
    
    </div>
</ThemeProvider>
</ColorModeContext.Provider>
  );
}

export default App;
