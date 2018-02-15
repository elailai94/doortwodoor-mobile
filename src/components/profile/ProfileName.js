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
 * Class representing profile name.
 *
 * @extends PureComponent
 * @memberof ProfileName
 */
class ProfileName extends PureComponent {
  /** Returns the component to be rendered. */
  render() {
    const {
      firstName,
      lastName,
    } = this.props;

    return (
      <Text style={styles.profileName}>{firstName} {lastName}</Text>
    );
  }
}

/**
 * Declares the intended types of properties passed to the component.
 * 
 * @memberof ProfileName
 * @readonly
 */
ProfileName.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

/**
 * Declares the properties for styling the component.
 * 
 * @memberof ProfileName
 * @readonly
 */
const styles = StyleSheet.create({
  profileName: {
    ...Platform.select({
      ios: {
        ...iOSUIKit.largeTitleEmphasizedObject,
      },
      android: {
        ...iOSUIKit.largeTitleEmphasizedObject,
      },
    }),
    color: iOSColors.white,
  },
});

export default ProfileName;
