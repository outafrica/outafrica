const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const tailwindcss = require('tailwindcss')
mix.js(['resources/js/app.js',], 'public/js/app.js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css/app.css')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('tailwind.config.js')],
        compilerOptions: {
            isCustomElement: (tag) => ['md-linedivider'].includes(tag),
        },

    })
    .version()
    .styles([
        'resources/css/profile/basic.css',
        'resources/css/profile/layout.css',
        'resources/css/profile/ionicons.css',
        'resources/css/profile/owl.carousel.css',
        'resources/css/profile/magnific-popup.css',
        'resources/css/profile/animate.css',
    ], 'public/css/profile/profile.css');
