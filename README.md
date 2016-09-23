# laravel-elixir-rtl-sass
[![npm version](https://badge.fury.io/js/laravel-elixir-rtl-sass.svg)](https://badge.fury.io/js/laravel-elixir-rtl-sass)

This is a tiny wrapper combined of rtlcss and sass for Laravel Elixir 6

This extension is exactly like [sass extension](https://laravel.com/docs/5.3/elixir#sass) for Laravel Elixir except that it uses [RTLCSS](http://rtlcss.com/) Framework for converting your compiled sass from `LTR` to `RTL`

# Usage

## Step 1: Install

```
npm install laravel-elixir-rtl-sass
```

## Step 2: Require

Within your main `Gulpfile`, add:

```js
var elixir = require('laravel-elixir');

require('laravel-elixir-rtl-sass');

elixir(function(mix) {
    mix.rtlsass('app.scss');
});
```

## Step 3. Build Amazing Things

You're done. :)
