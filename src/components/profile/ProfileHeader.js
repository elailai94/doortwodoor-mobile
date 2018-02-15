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
  Col,
  Grid,
  Row,
} from 'native-base';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import React, { Component } from 'react';

import ProfileLocation from './ProfileLocation';
import ProfileName from './ProfileName';
import ProfilePicture from './ProfilePicture';
import ProfileStatistics from './ProfileStatistics';
import PropTypes from 'prop-types';

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
      profileLocation,
      profileName,
      profilePicture,
      profileStatistics,
    } = this.props;
    const {
      city,
      country,
    } = profileLocation;
    const {
      firstName,
      lastName,
    } = profileName;
    const {
      duration,
      moves,
      rating,
    } = profileStatistics;

    return (
      <Grid style={styles.profileHeader}>
        <Row>
          <Col
            size={1}
            style={styles.col}
          >
            <ProfilePicture source={profilePicture} />
          </Col>
          <Col size={2} style={{ justifyContent: 'center' }}>
            <ProfileName
              firstName={firstName}
              lastName={lastName}
            />
            <ProfileLocation
              city={city}
              country={country}
            />
          </Col>
        </Row>
        <Row>
          <ProfileStatistics
            duration={duration}
            moves={moves}
            rating={rating}
          />
        </Row>
      </Grid>
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
  profileLocation: PropTypes.shape(ProfileLocation.propTypes),
  profileName: PropTypes.shape(ProfileName.propTypes),
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
  col: {
    alignItems: 'center',
  },
  profileHeader: {
    backgroundColor: 'skyblue',
  },
});

export default ProfileHeader;
