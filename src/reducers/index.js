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
 * App reducer module.
 *
 * @module AppReducer
 */

import { combineReducers } from 'redux';

/**
 * Combines different reducing functions into a single reducing function.
 *
 * @memberof AppReducer
 * @readonly
 */
const AppReducer = combineReducers({
  blank: function(state, action) {if (state == null) state = []; return state;},
});

export default AppReducer;
