module.exports = {
    content: ['./src/**/*.{html,tsx,jsx,ts,js}'],
    theme: {
        colors: {
            transparent: 'transparent',
            c_primary: '#FE3E6D',
            c_secondary: '#1A93DA',
            c_secondary_light: '#EAF7FF',
            c_grayscale: '#3B3B3B',
        },
        screens: {
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
    plugins: [],
    purge: {
        enabled: true,
        content: ['./src/**/*.{html,tsx,jsx,ts,js}'],
    },
};
