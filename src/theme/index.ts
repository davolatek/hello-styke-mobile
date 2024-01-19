import { extendTheme } from 'native-base';
import { darkThemeColors, lightThemeColors } from './colors';
import { space } from './space';
import { typography } from './typography';

const defaultTheme = {
    ...typography,
    space,
    components: {
        Text: {
            defaultProps: {
                fontWeight: 500,
                fontFamily: "Poppins-Medium",
                letterSpacing: .4,
                color: '#000'
            },
        },
        Button: {
           
            defaultProps: {
                size: '12'
            }
        },
        Input: {
         
            variants: {
                focus: () => {
                    return {
                        bg: `#CFD9E8`,
                        borderColor: "#003E9A",
                        borderWidth: 1
                    };
                },
                error: () => {
                    return {
                        bg: `rgba(255, 0, 0, 0.11)`,
                        borderWidth: 1
                    };
                },
                initial: () => {
                    return {
                        bg: `#F1F1F1`,
                    };
                },

            }
        },
        Select: {
            variants: {
                focus: () => {
                    return {
                        bg: `rgba(91, 197, 233 0.055)`,
                        borderColor: "rgba(91, 197, 233 1)",
                        borderWidth: 1
                    };
                },
                error: () => {
                    return {
                        bg: `rgba(255, 0, 0, 0.11)`,
                        borderWidth: 1
                    };
                },
                initial: () => {
                    return {
                        bg: `#000`,
                        borderColor: '#F1F1F1'
                    };
                },

            }
        },
    },
};

export const lightTheme = extendTheme({
    ...defaultTheme,
    colors: { ...lightThemeColors },
});

export const darkTheme = extendTheme({
    ...defaultTheme,
    colors: { ...darkThemeColors },
});
