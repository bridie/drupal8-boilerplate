# Drupal 8 Boilerplate
This is a boilerplate for quickly getting started with a Drupal 8 project.

## Using Composer to manage dependencies
I am using Composer to manage dependencies, as explicitly declaring and isolating dependencies is good practice.

Therefore, once you have cloned this repository, run `composer install` to install all the dependencies. This boilerplate includes 3 dependencies, they are:

- Drupal 8
  - Drupal 8 itself is a dependency, therefore Drupal gets installed using Composer.
- Admin Toolbar
  - Alters the admin toolbar to have dropdowns so sub menus are easier to access
- Devel
  - A suite of helpful tools for development
