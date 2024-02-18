/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{html,js}',
        './pages/**/*.{html,js}',
        './public/index.html',
    ],
    theme: {
        extend: {},
        container: {
            center: true,
            padding: '2rem',
        },
    },
    plugins: [],
};
