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
 * Profile name module.
 *
 * @module ProfileName
 */

import {
  Platform,
  StyleSheet,
} from 'react-native';
import React, { PureComponent } from 'react';
import {
  iOSColors,
  iOSUIKit,
} from 'react-native-typography';

import PropTypes from 'prop-types';
import { Text } from 'native-base';

/**
 * Class representing profile location.
 *
 * @extends PureComponent
 * @memberof ProfileLocation
 */
class ProfileLocation extends PureComponent {
  /** Returns the component to be rendered. */
  render() {
    const {
      city,
      country,
    } = this.props;

    return (
      <Text style={styles.profileLocation}>{city}, {country}</Text>
    );
  }
}

/**
 * Declares the intended types of properties passed to the component.
 * 
 * @memberof ProfileLocation
 * @readonly
 */
ProfileLocation.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
};

/**
 * Declares the properties for styling the component.
 * 
 * @memberof ProfileLocation
 * @readonly
 */
const styles = StyleSheet.create({
  profileLocation: {
    ...Platform.select({
      ios: {
        ...iOSUIKit.title3Object,
      },
      android: {
        ...iOSUIKit.title3Object,
      },
    }),
    color: iOSColors.white,
  },
});

export default ProfileLocation;
