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
 * Profile picture module.
 *
 * @module ProfilePicture
 */

import React, { Component } from 'react';

import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { Thumbnail } from 'native-base';

/**
 * Class representing a profile picture.
 *
 * @extends Component
 * @memberof ProfilePicture
 */
class ProfilePicture extends Component {
  /** Returns the component to be rendered. */
  render() {
    const { source } = this.props;

    return (
      <Thumbnail
        large
        source={source}
      />
    );
  }
}

/**
 * Declares the intended types of properties passed to the component.
 * 
 * @memberof ProfilePicture
 * @readonly
 */
ProfilePicture.propTypes = {
  source: Image.propTypes.source,
};

export default ProfilePicture;
