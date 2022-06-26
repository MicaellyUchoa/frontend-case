module.exports = {
    content: ['./src/**/*.{html,tsx,jsx,ts,js}'],
    theme: {
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
