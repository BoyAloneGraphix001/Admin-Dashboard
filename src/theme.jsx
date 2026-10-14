import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles"

// Color Design Tokens ctrl k & ctrl g for tailwind shades
export const tokens = (mode) => ({
    ...createContext(mode === 'dark'
        ? {
            primary: {
    50: 'oklch(98.5% 0 0)',
    100: 'oklch(96.1% 0 0)',
    200: 'oklch(90.4% 0 0)',
    300: 'oklch(84.3% 0 0)',
    400: 'oklch(67.1% 0 0)',
    500: 'oklch(51% 0 0)',
    600: 'oklch(40.2% 0 0)',
    700: 'oklch(34.4% 0 0)',
    800: 'oklch(25.1% 0 0)',
    900: 'oklch(19.6% 0 0)',
    950: 'oklch(14.5% 0 0)',
},
gray: {
    50: 'oklch(98.5% 0.002 250.412)',
    100: 'oklch(96.9% 0.003 267.115)',
    200: 'oklch(93.1% 0.006 267.104)',
    300: 'oklch(87.7% 0.011 260.911)',
    400: 'oklch(71.4% 0.024 263.898)',
    500: 'oklch(55.9% 0.029 266.937)',
    600: 'oklch(45.6% 0.032 259.375)',
    700: 'oklch(38.5% 0.037 262.306)',
    800: 'oklch(29.1% 0.036 259.421)',
    900: 'oklch(22.5% 0.037 267.238)',
    950: 'oklch(13% 0.03 264.265)',
},
greenAccent: {
    50: 'oklch(98.4% 0.011 171.207)',
    100: 'oklch(95.1% 0.042 171.288)',
    200: 'oklch(90.7% 0.078 170.913)',
    300: 'oklch(85% 0.113 171.558)',
    400: 'oklch(77.1% 0.124 172.399)',
    500: 'oklch(69.9% 0.114 172.99)',
    600: 'oklch(59.6% 0.096 175.191)',
    700: 'oklch(50.8% 0.078 176.878)',
    800: 'oklch(43.5% 0.064 178.703)',
    900: 'oklch(38.5% 0.052 178.903)',
    950: 'oklch(27.7% 0.038 183.011)',
},
redAccent: {
    50: 'oklch(97.1% 0.01 17.772)',
    100: 'oklch(93.2% 0.024 18.109)',
    200: 'oklch(87.7% 0.046 18.726)',
    300: 'oklch(79.6% 0.085 19.963)',
    400: 'oklch(68.8% 0.142 22.608)',
    500: 'oklch(61.7% 0.176 25.723)',
    600: 'oklch(56.1% 0.182 27.717)',
    700: 'oklch(49.3% 0.159 27.91)',
    800: 'oklch(43.6% 0.132 27.291)',
    900: 'oklch(39.2% 0.105 26.115)',
    950: 'oklch(25.8% 0.068 26.434)',
},
blueAccent: {
    50: 'oklch(96.2% 0.016 271.347)',
    100: 'oklch(93.6% 0.03 271.821)',
    200: 'oklch(88.1% 0.056 273.072)',
    300: 'oklch(80.2% 0.1 273.746)',
    400: 'oklch(69.5% 0.158 275.968)',
    500: 'oklch(61.3% 0.202 276.15)',
    600: 'oklch(53.3% 0.227 275.999)',
    700: 'oklch(47.4% 0.208 276.056)',
    800: 'oklch(40.9% 0.169 276.399)',
    900: 'oklch(36.5% 0.125 277.73)',
    950: 'oklch(25.7% 0.078 280.321)',
},
        } : {
            primary: {
    50: 'oklch(14.5% 0 0)',
    100: 'oklch(19.6% 0 0)',
    200: 'oklch(25.1% 0 0)',
    300: 'oklch(34.4% 0 0)',
    400: 'oklch(40.2% 0 0)',
    500: 'oklch(51% 0 0)',
    600: 'oklch(67.1% 0 0)',
    700: 'oklch(84.3% 0 0)',
    800: 'oklch(90.4% 0 0)',
    900: 'oklch(96.1% 0 0)',
    950: 'oklch(98.5% 0 0)',
},
gray: {
    50: 'oklch(13% 0.03 264.265)',
    100: 'oklch(22.5% 0.037 267.238)',
    200: 'oklch(29.1% 0.036 259.421)',
    300: 'oklch(38.5% 0.037 262.306)',
    400: 'oklch(45.6% 0.032 259.375)',
    500: 'oklch(55.9% 0.029 266.937)',
    600: 'oklch(71.4% 0.024 263.898)',
    700: 'oklch(87.7% 0.011 260.911)',
    800: 'oklch(93.1% 0.006 267.104)',
    900: 'oklch(96.9% 0.003 267.115)',
    950: 'oklch(98.5% 0.002 250.412)',
},
greenAccent: {
    50: 'oklch(27.7% 0.038 183.011)',
    100: 'oklch(38.5% 0.052 178.903)',
    200: 'oklch(43.5% 0.064 178.703)',
    300: 'oklch(50.8% 0.078 176.878)',
    400: 'oklch(59.6% 0.096 175.191)',
    500: 'oklch(69.9% 0.114 172.99)',
    600: 'oklch(77.1% 0.124 172.399)',
    700: 'oklch(85% 0.113 171.558)',
    800: 'oklch(90.7% 0.078 170.913)',
    900: 'oklch(95.1% 0.042 171.288)',
    950: 'oklch(98.4% 0.011 171.207)',
},
redAccent: {
    50: 'oklch(25.8% 0.068 26.434)',
    100: 'oklch(39.2% 0.105 26.115)',
    200: 'oklch(43.6% 0.132 27.291)',
    300: 'oklch(49.3% 0.159 27.91)',
    400: 'oklch(56.1% 0.182 27.717)',
    500: 'oklch(61.7% 0.176 25.723)',
    600: 'oklch(68.8% 0.142 22.608)',
    700: 'oklch(79.6% 0.085 19.963)',
    800: 'oklch(87.7% 0.046 18.726)',
    900: 'oklch(93.2% 0.024 18.109)',
    950: 'oklch(97.1% 0.01 17.772)',
},
blueAccent: {
    50: 'oklch(25.7% 0.078 280.321)',
    100: 'oklch(36.5% 0.125 277.73)',
    200: 'oklch(40.9% 0.169 276.399)',
    300: 'oklch(47.4% 0.208 276.056)',
    400: 'oklch(53.3% 0.227 275.999)',
    500: 'oklch(61.3% 0.202 276.15)',
    600: 'oklch(69.5% 0.158 275.968)',
    700: 'oklch(80.2% 0.1 273.746)',
    800: 'oklch(88.1% 0.056 273.072)',
    900: 'oklch(93.6% 0.03 271.821)',
    950: 'oklch(96.2% 0.016 271.347)',
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
            ...colors(mode === 'dark'
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
                        default: colors.primary[500],
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
})

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