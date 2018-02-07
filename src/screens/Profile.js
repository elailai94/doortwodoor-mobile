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

import {
  Container,
  Content,
} from 'native-base';
import React, { Component } from 'react';

import { ProfileHeader } from '../components';

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
      <Container>
        <Content>
          <ProfileHeader
            profilePicture={{
              uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
            }}
            profileStatistics={{
              duration: { length: 1, unit: 'year' },
              moves: 200,
              rating: 4.49,
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default Profile;