module.exports = {
    mode: 'jit',
    purge: {
        content: ['./pages/**/*.tsx', './src/**/*.tsx'],
        options: {
            keyframes: true,
        },
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    900: '#004A7E',
                    800: '#00699E',
                    700: '#0079B1',
                    600: '#008BC4',
                    500: '#0099D1',
                    400: '#23A8D7',
                    300: '#4AB6DC',
                    200: '#7BCAE6',
                    100: '#AFDFF0',
                    50: '#DFF3F9',
                },
                secondary: {
                    900: '#001AB8',
                    800: '#511EC2',
                    700: '#6820D9',
                    600: '#8122D1',
                    500: '#9223D7',
                    400: '#A346DE',
                    300: '#B468E5',
                    200: '#CA94EC',
                    100: '#DFBFF3',
                    50: '#F2E5FA',
                }
            },
            spacing: {
                'xs': '0.5rem',
                'sm': '1rem',
                'md': '1.5rem',
                'lg': '2rem',
                'xl': '2.5rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
