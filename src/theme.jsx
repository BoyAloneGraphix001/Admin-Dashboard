import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"

// Color Design Tokens ctrl k & ctrl g for tailwind shades
export const tokens = (mode) => ({
    ...(mode === 'dark'
        ? {
            primary: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#e5e5e5",
    300: "#d4d4d4",
    400: "#a3a3a3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
    950: "#0a0a0a",
},

gray: {
    50: "#fafbfc",
    100: "#f0f1f4",
    200: "#e0e2e8",
    300: "#c8cbd4",
    400: "#9ca3b0",
    500: "#737b8c",
    600: "#5b6272",
    700: "#4b5160",
    800: "#393e4b",
    900: "#2a2e3a",
    950: "#181b24",
},

greenAccent: {
    50: "#e8f8f2",
    100: "#c8eee0",
    200: "#a2e2cb",
    300: "#7bd6b5",
    400: "#5bcca3",
    500: "#3bc291",
    600: "#2ba87b",
    700: "#218963",
    800: "#196d4e",
    900: "#12543c",
    950: "#0a3828",
},

redAccent: {
    50: "#fff0f0",
    100: "#ffdddd",
    200: "#ffc0c0",
    300: "#ff9a9a",
    400: "#ff7373",
    500: "#f44747",
    600: "#df3030",
    700: "#ba2424",
    800: "#941d1d",
    900: "#701919",
    950: "#451010",
},

blueAccent: {
    50: "#f0f0ff",
    100: "#e0e0ff",
    200: "#c6c5ff",
    300: "#a6a4ff",
    400: "#8581ff",
    500: "#6965f5",
    600: "#514ce0",
    700: "#403bc2",
    800: "#332f9e",
    900: "#282579",
    950: "#19174d",
},
        } : {
            primary: {
    50: "#0a0a0a",
    100: "#171717",
    200: "#262626",
    300: "#404040",
    400: "#525252",
    500: "#737373",
    600: "#a3a3a3",
    700: "#d4d4d4",
    800: "#e5e5e5",
    900: "#f5f5f5",
    950: "#fafafa",
},

gray: {
    50: "#181b24",
    100: "#2a2e3a",
    200: "#393e4b",
    300: "#4b5160",
    400: "#5b6272",
    500: "#737b8c",
    600: "#9ca3b0",
    700: "#c8cbd4",
    800: "#e0e2e8",
    900: "#f0f1f4",
    950: "#fafbfc",
},

greenAccent: {
    50: "#0a3828",
    100: "#12543c",
    200: "#196d4e",
    300: "#218963",
    400: "#2ba87b",
    500: "#3bc291",
    600: "#5bcca3",
    700: "#7bd6b5",
    800: "#a2e2cb",
    900: "#c8eee0",
    950: "#e8f8f2",
},

redAccent: {
    50: "#451010",
    100: "#701919",
    200: "#941d1d",
    300: "#ba2424",
    400: "#df3030",
    500: "#f44747",
    600: "#ff7373",
    700: "#ff9a9a",
    800: "#ffc0c0",
    900: "#ffdddd",
    950: "#fff0f0",
},

blueAccent: {
    50: "#19174d",
    100: "#282579",
    200: "#332f9e",
    300: "#403bc2",
    400: "#514ce0",
    500: "#6965f5",
    600: "#8581ff",
    700: "#a6a4ff",
    800: "#c6c5ff",
    900: "#e0e0ff",
    950: "#f0f0ff",
},
        
        }
    ),
});

// mui theme settings 
export const themeSettings = (mode) => {
    const colors = tokens(mode);

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100]
                    },
                    background: {
                        default: colors.primary[800],
                    }
                } : {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.gray[700],
                        main: colors.gray[500],
                        light: colors.gray[100]
                    },
                    background: {
                        default: "#fcfcfc",
                    },
                }
            ),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14
            },
        },
    };
};

// Context for Color-mode 
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () =>
                setMode((prev) => (prev === "light" ? "dark" : "light"))
        }), []
    );
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return [theme, colorMode]
}