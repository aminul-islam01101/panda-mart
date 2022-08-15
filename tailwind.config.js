const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./public/**/*.html'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
            },
            width: {
                '95': '95%',
                '90': '90%',
                '85': '85%',
                '80': '80%',
                '70': '70%',
                '60': '60%',
                '40': '40%',
            },
            minHeight: {
                '50vh': '50vh',
                '60vh': '60vh',
                '70vh': '70vh',
                '80vh': '80vh',
                '90vh': '90vh',
            },
            maxWidth: {
                '95': '95%',
                '90': '90%',
                '85': '85%',
                '80': '80%',
                '70': '70%',
                '60': '60%',
                '40': '40%',
            },
            colors: {
                pest: {
                    '100': '#CDEFDD',
                    '200': '#B1C9BB',
                },
            },
            screens: {
                lg: '992px',
                // => @media (min-width: 992px) { ... }
            },
        },
    },
    plugins: [],
};
