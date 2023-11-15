import { blue, orange, green, purple, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}

export const appTheme = outerTheme => createTheme({
    palette: {
        primary: {
            light: blue[300],
            main: purple[500],
            dark: blue[700],
        },
        secondary: {
            light: pink[300],
            main: "#11cb5f",
            dark: pink[700],
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    fontSize: '.8rem',
                    fontFamily: 'serif',
                    textDecoration: 'underline'
                },
            },
            variants: [
                {
                    props: { variant: 'dashed' },
                    style: {
                        textTransform: 'none',
                        border: `2px dashed ${outerTheme.palette.primary.main}`,
                    },
                },
                {
                    props: { variant: 'dashed', color: 'secondary' },
                    style: {
                        padding: '5px 15px',
                        border: `5px dashed ${outerTheme.palette.secondary.main}`,
                    },
                },
            ],
        },
    },
});