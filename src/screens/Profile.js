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
 * Profile module.
 *
 * @module Profile
 */

import React, { Component } from 'react';

import { ProfilePicture } from '../components';
import { View } from 'react-native';

/**
 * Class representing a profile.
 *
 * @extends Component
 * @memberof Profile
 */
class Profile extends Component {
  /** Returns the component to be rendered. */
  render() {
    return (
      <View>
        <ProfilePicture source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }} />
      </View>
    );
  }
}

export default Profile;
