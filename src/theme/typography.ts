import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const fonts = {

    'Poppins-Bold': 'Poppins-Bold',
    'Poppins-ExtraLight': 'Poppins-ExtraLight',
    'Poppins-Light': 'Poppins-Light',
    'Poppins-Medium': 'Poppins-Medium',
    'Poppins-Regular': 'Poppins-Regular',
    'Poppins-SemiBold': 'Poppins-SemiBold',
};

const fontSizes = {
    '2xs': RFValue(7),
    xs: RFValue(9),
    sm: RFValue(11),
    md: RFValue(13),
    lg: RFValue(15),
    xl: RFValue(17),
    '2xl': RFValue(19),
    '3xl': RFValue(21),
    '4xl': RFValue(23),
    '5xl': RFValue(25),
    '6xl': RFValue(27),
};

// const fontSizes = {
//     '2xs': 10,
//     xs: 12,
//     sm: 14,
//     md: 16,
//     lg: 18,
//     xl: 20,
//     '2xl': 22,
//     '3xl': 24,
//     '4xl': 26,
//     '5xl': 28,
//     '6xl': 30,
// };

export const typography = {
    fonts,
    fontSizes,
};
