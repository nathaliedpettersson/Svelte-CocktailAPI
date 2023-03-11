import { publish } from "gh-pages";

publish(
    'build',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/nathaliedpettersson/Svelte-CocktailAPI.git',
        user: {
            name: 'Nathalie Pettersson',
            email: 'nathalie.pettersson90@gmail.com'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);