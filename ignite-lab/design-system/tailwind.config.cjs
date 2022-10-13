/** @type {import('tailwindcss').Config} */
module.exports = {
    // onde estao os arquivos de conteudo da aplicação que sera usado o tailwindcss
    content: [
        "./src/**/*.tsx", // pasta src em qualquer pasta e qualquer arquivo .tsx
    ],
    theme: {
        // vai substituir e manter as confs que eu colocar
        fontSize: {
            xs: 14,
            sm: 16,
            md: 18,
            lg: 20,
            xl: 24,
            "2xl": 32,
        },

        colors: {
            gray: {
                900: "#121214",
                800: "#202024",
                400: "#7c7c8a",
                200: "#c4c4cc",
                100: "#e1e1e6",
            },
            cyan: {
                500: "#81d8f7",
                300: "#AAE0F3",
            },
        },

        extend: {
            // colocando dentro de extend se mantem as proprias confs do tailwind e adiciona uma nova
            fontFamily: {
                sans: "Inter, sans-serif",
            },
        },
    },
    plugins: [],
};
