const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{html,tsx,jsx,ts,js}'],
    theme: {
        colors: {
            transparent: 'transparent',
            c_primary: '#FE3E6D',
            c_secondary: '#1A93DA',
            c_secondary_light: '#EAF7FF',
            c_grayscale: '#3B3B3B',
            c_grayscale_light: '#F0F4F8',
            c_grayscale_medium: '#6B7076',
            white: colors.white,
            gray: colors.gray,
            black: colors.black,
            blue: colors.blue,
            pink: colors.pink,
        },
        screens: {
            xs: '320px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1536px',
        },
        extend: {
            fontFamily: {
                Avenir: ['Avenir', 'sans-serif'],
            },
        },
    },
};
