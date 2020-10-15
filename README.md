[![npm version](https://badge.fury.io/js/redux-first-vue-routing.svg)](https://badge.fury.io/js/redux-first-vue-routing)
[![Dependency Status](https://david-dm.org/kaidjohnson/redux-first-vue-routing/dev-status.svg)](https://david-dm.org/kaidjohnson/redux-first-vue-routing?type=dev)
[![Build Status](https://travis-ci.org/kaidjohnson/redux-first-vue-routing.svg?branch=master)](https://travis-ci.org/kaidjohnson/redux-first-vue-routing)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7d365790eeac9659d37f/test_coverage)](https://codeclimate.com/github/kaidjohnson/redux-first-vue-routing/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/7d365790eeac9659d37f/maintainability)](https://codeclimate.com/github/kaidjohnson/redux-first-vue-routing/maintainability)

# redux-first-vue-routing

A tiny Vue plugin that connects Vue Router with Redux, an implementation of [redux-first-routing](https://github.com/mksarge/redux-first-routing).

New to Redux? [Start Here](https://redux.js.org/introduction/getting-started)

Achieve client-side routing *the Redux way*:

- Read location data from the store.
- Update the location by dispatching navigation actions.
- Let middleware handle the side-effect of history navigation.

> **Learn more: [An Introduction to the Redux-First Routing Model](https://medium.com/@mksarge/an-introduction-to-the-redux-first-routing-model-98926ebf53cb)**

![Redux-first routing](https://camo.githubusercontent.com/b08b1b78a08e0444ab451f692618d59da977e6a1/687474703a2f2f692e696d6775722e636f6d2f734169566c6b4d2e6a7067)

## Installation

`npm install redux-first-vue-routing`

## Usage

```
import { applyMiddleware, createStore } from 'redux';
import { middleware, reducer } from 'redux-first-vue-routing';
import ReduxFirstVueRouting from 'redux-first-vue-routing';
import Vue from 'vue';
import VueRouter from 'vue-router';

// Create the router instance
const router = new VueRouter({
	...
});

// Create a Redux store, including the router reducer and the middleware.
const store = createStore(rootReducer, {}, applyMiddleware(middleware(router)));

// Install the plugin
Vue.use(ReduxFirstVueRouting, { router, store });
```
