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
import ProfileStatisticsItem from './ProfileStatisticsItem';
import PropTypes from 'prop-types';
import { generateID } from '../../utilities';

/**
 * Class representing profile statistics.
 *
 * @extends Component
 * @memberof ProfileStatistics
 */
class ProfileStatistics extends Component {
  /** Returns the component to be rendered. */
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
    const statisticItems = [
      { icon: 'ios-star', label: 'rating', value: rating },
      { icon: 'ios-home', label: 'moves', value: moves },
      { icon: 'ios-clock', label: unit, value: length },
    ];

    return (
      <Grid>
        {statisticItems.map(statisticItem => {
          const {
            icon,
            label,
            value,
          } = statisticItem;
          const key = generateID();

          return (
            <ProfileStatisticsItem
              key={key}
              icon={icon}
              label={label}
              value={value}
            />
          );
        })}
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
