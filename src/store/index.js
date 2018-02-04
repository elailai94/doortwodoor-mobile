/*
 * Copyright 2017-present, DoorTwoDoor, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @flow
 */

/**
 * Store module.
 *
 * @module Store
 */

import {
  applyMiddleware,
  compose,
  createStore,
} from 'redux';

import AppReducer from '../reducers';
import { createLogger } from 'redux-logger';
import firebase from 'react-native-firebase';
import reduxPerformanceLogger from 'redux-perf-middleware';
import reduxThunk from 'redux-thunk';

/**
 * Initializes a Redux store that holds the complete state tree of the app.
 *
 * @memberof Store
 * @private
 */
function initializeStore() {
  // Passes the Firebase instance as an extra argument to Redux Thunk.
  const thunk = reduxThunk.withExtraArgument(firebase);

  // Stores the array of middlewares to be applied to the store
  const middlewares = [ thunk ];

  if (__DEV__) { // Is in development mode?
    // Creates a Redux state logger to log the state of the store.
    const reduxStateLogger = createLogger();

    /*
    * Adds the Redux state and performance loggers to the array of
    * middlewares.
    */
    middlewares.push(reduxStateLogger);
    middlewares.push(reduxPerformanceLogger);
  }

  return createStore(
    AppReducer,
    undefined,
    compose(applyMiddleware(...middlewares)),
  );
}

/**
 * Initializes and configures the Redux store that holds the complete state
 * tree of the app.
 *
 * @memberof Store
 * @readonly
 */
const Store = initializeStore();

export default Store;
