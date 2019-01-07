# Drupal 8 Boilerplate
This is a boilerplate for quickly getting started with a Drupal 8 project. Here's a quick overview of what's included:
- Uses Composer for backend dependency management
- Uses Yarn for for frontend dependecy management
- Webpack used for frontend asset compilation
  - includes babel transpilation
  - includes SASS compilation
  - includes react support (optional see [this section](#react))

## React
The master branch does not contain any React support as I am assuming this is not a necessity for getting started with Drupal 8. However, I have created a react branch that includes React support, because I quite often use React in Drupal 8 websites for pages/components that are interactive e.g. forms, page filters

To use the boilerplate that includes React support clone the react branch, not the master branch.

## Remove the git repository
As this is a boilerplate, I would suggest removing the git repository with `rm -rf .git`, and then create your own git respository with `git init && git add . && git commit -m "Initial commit using the Drupal 8 Boilerplate"`

## Using Composer to manage dependencies
Composer has been used to manage dependencies, as explicitly declaring and isolating dependencies is good practice.

Therefore, once you have cloned this repository, run `composer install` to install all the dependencies. This boilerplate includes 3 dependencies, they are:

- Drupal 8
  - Drupal 8 itself is a dependency, therefore Drupal gets installed using Composer.
- Admin Toolbar
  - Alters the admin toolbar to have dropdowns so sub menus are easier to access
- Devel
  - A suite of helpful tools for development

For information on managing contributed modules with Composer [read this](https://www.drupal.org/docs/develop/using-composer/using-composer-to-manage-drupal-site-dependencies#managing-contributed).

## Disable page caching during development
Please note, accessing the site as an anonymous user will still cache the page, so make sure you are logged in to see the site with caches disabled.
1. From the root of the project run `cp web/sites/example.settings.local.php web/sites/default/settings.local.php`.
2. Open the newly created settings.local.php file.
3. Uncomment the following `$settings['cache']['bins']['render'] = 'cache.backend.null';`.
4. Uncomment the following `$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';`.
5. Open the settings.php file and uncomment the following section
```php
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
 include $app_root . '/' . $site_path . '/settings.local.php';
}
```

## Custom Theme
A custom theme has been created which includes a skeletal CSS directory structure, an entry JS file, and dev and prod webpack config files. Webpack has been set up to compile both the CSS and the JS.

Babel has been used to transpile the JS, so you can use all the features from the most up to date Javascript version, without any browser support issues.

To get started with this theme, in the project root run `yarn`, this will install all of the required node modules. Then `cd` to the root of the custom theme, and run either `yarn run build:prod` to build for production, or `yarn run build:dev` to build for developmen, this will also watch the files.
