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
 * Profile statistics module.
 *
 * @module ProfileStatistics
 */

import {
  Col,
  Grid,
  Text,
} from 'native-base';
import React, { Component } from 'react';

import ProfileStatisticsDurationPropType from './ProfileStatisticsDurationPropType';
import PropTypes from 'prop-types';

/**
 * Class representing profile statistics.
 *
 * @extends Component
 * @memberof ProfileStatistics
 */
class ProfileStatistics extends Component {
  render() {
    const {
      duration,
      moves,
      rating,
    } = this.props;
    const {
      length,
      unit,
    } = duration;

    return (
      <Grid>
        <Col>
          <Text>{rating}</Text>
          <Text>Rating</Text>
        </Col>
        <Col>
          <Text>{moves}</Text>
          <Text>Moves</Text>
        </Col>
        <Col>
          <Text>{length}</Text>
          <Text>{unit[0].toUpperCase() + unit.substring(1)}</Text>
        </Col>
      </Grid>
    );
  }
}

/**
 * Declares the intended types of properties passed to the component.
 * 
 * @memberof ProfileStatistics
 * @readonly
 */
ProfileStatistics.propTypes = {
  duration: ProfileStatisticsDurationPropType,
  moves: PropTypes.number,
  rating: PropTypes.number,
};

export default ProfileStatistics;
