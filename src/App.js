import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { themeSettings } from "./theme";
import Dashboard from "./scenes/Dashboard";
import RequireAuth from "./middleware/RequireAuth";
import RedirectIfAuthenticated from "./middleware/RedirectIfAuthenticated";
import Login from "login";
import Layout from "scenes/layout";
import Profile from "scenes/perfil";

function App() {
    const mode = useSelector((state) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate to="/rodriguez_parcial_2" />}
                        />
                        <Route
                            path="/rodriguez_parcial_2"
                            element={
                                <RedirectIfAuthenticated>
                                    <Login />
                                </RedirectIfAuthenticated>
                            }
                        />

                        <Route
                            element={
                                <RequireAuth>
                                    <Layout />
                                </RequireAuth>
                            }>
                            <Route path="/dashboard" element={<Dashboard />} />
                            <Route
                                path="/profile/:userId"
                                element={<Profile />}
                            />{" "}
                            {/* Añadimos la ruta del perfil */}
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
