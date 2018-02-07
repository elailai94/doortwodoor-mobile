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
 * Profile header module.
 *
 * @module ProfileHeader
 */

import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React, { Component } from 'react';

import ProfilePicture from './ProfilePicture';
import ProfileStatistics from './ProfileStatistics';
import PropTypes from 'prop-types';
import { Text } from 'native-base';

/**
 * Class representing a profile header.
 *
 * @extends Component
 * @memberof ProfileHeader
 */
class ProfileHeader extends Component {
  /** Returns the component to be rendered. */
  render() {
    const {
      profilePicture,
      profileStatistics,
    } = this.props;
    const {
      duration,
      moves,
      rating,
    } = profileStatistics;

    return (
      <View style={styles.profileHeader}>
        <ProfilePicture source={profilePicture} />
        <Text>Elisha</Text>
        <Text>Waterloo, Canada</Text>
        <ProfileStatistics
          duration={duration}
          moves={moves}
          rating={rating}
        />
      </View>
    );
  }
}

/**
 * Declares the intended types of properties passed to the component.
 * 
 * @memberof ProfileHeader
 * @readonly
 */
ProfileHeader.propTypes = {
  profilePicture: Image.propTypes.source,
  profileStatistics: PropTypes.shape(ProfileStatistics.propTypes),
};

/**
 * Declares the properties for styling the component.
 * 
 * @memberof ProfileHeader
 * @readonly
 */
const styles = StyleSheet.create({
  profileHeader: {
    alignItems: 'center',
  },
});

export default ProfileHeader;
