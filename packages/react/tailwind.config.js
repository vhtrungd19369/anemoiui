module.exports = {
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
                },
                neutral: {
                    900: '#000000',
                    800: '#212121',
                    700: '#3B3B3B',
                    600: '#777777',
                    500: '#B1B1B1',
                    400: '#C6C6C6',
                    300: '#D6D6D6',
                    200: '#EBEBEB',
                    100: '#F5F5F5',
                    50: '#FFFFFF',
                }
            },
            spacing: {
                'xs': '0.5rem',
                'sm': '1rem',
                'md': '1.5rem',
                'lg': '2rem',
                'xl': '2.5rem',
            },
            fontSize: {
                tiny: ".5rem",
            },
            borderWidth: {
                6: "6px"
            }
        },
    },
    variants: {
        extend: {
            opacity: ['active', 'disabled'],
            textColor: ['active', 'disabled'],
            backgroundColor: ['active', 'disabled'],
            borderColor: ['active', 'disabled', 'focus'],
            borderWidth: ['active', 'disabled', 'focus'],
            ringColor: ['active', 'disabled', 'focus'],
            cursor: ['disabled']
        },
    },
    plugins: [],
};
