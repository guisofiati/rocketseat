/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx", "./index.html"], // onde vao estar os arquivos html que vao ter classes do tailwind
    theme: {
        extend: {
            backgroundImage: {
                galaxy: "url('/background-galaxy.png')",
                "nlw-gradient":
                    "linear-gradient(90deg, #9572FC 0%, #43E7AD 50.52%, #E2D45C 100%)",
            },
        },
    },
    plugins: [],
};
