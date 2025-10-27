"use client";
import React, { useState, useMemo, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline } from "@mui/material";

// Create a context to pass the toggle function
export const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

export default function MyThemeProvider({ children }) {
    // Track when component has mounted to avoid hydration mismatches
    const [mounted, setMounted] = useState(false);
    // Use noSsr: true to ensure the media query only runs on the client
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)", { noSsr: true });

    // Use a staet that updates based on the client's preference. Initialize with stored theme or system preference
    const [mode, setMode] = useState('light'); // Default to light initially

    useEffect(() => {
        setMounted(true);
        // Load saved theme from localStorage
        const savedTheme = localStorage.getItem('themePreference');
        if (savedTheme) {
            setMode(savedTheme);
        } else {
            setMode(prefersDarkMode ? 'dark' : 'light');
        }
    }, [prefersDarkMode]);

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => {
                    const newMode = prevMode === 'light' ? 'dark' : 'light';
                    // Save to localStorage
                    localStorage.setItem('themePreference', newMode);
                    return newMode;
                });
            },
        }),
        []
    );

    const theme = useMemo(
        () => createTheme({ palette: { mode } }),
        [mode]
    );

    // Until mounted, render a fallback that matches the server (e.g. null)
    if (!mounted) return null;

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}
