const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss'); /* Add this line at the top */

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

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .sass('resources/sass/app.scss', 'public/css')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
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
    // .postCss('resources/css/app.css', 'public/css', [
    //     require("tailwindcss"),
    // ]);
