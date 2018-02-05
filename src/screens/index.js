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
 * Screens module.
 *
 * @module Screens
 */

import { Navigation } from 'react-native-navigation';
import Profile from './Profile';
import SignUp from './SignUp';

function registerScreens(store, provider) {
  Navigation.registerComponent('doortwodoor.Profile', () => Profile, store, provider);
  Navigation.registerComponent('doortwodoor.SignUp', () => SignUp, store, provider);
}

export { registerScreens };
