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
 * Profile statistics duration property type module.
 *
 * @module ProfileStatisticsDurationPropType
 */

import PropTypes from 'prop-types';

/**
 * Declares the intended type of the profile statistics duration property
 * passed to the component.
 * 
 * @memberof ProfileStatisticsDurationPropType
 * @readonly
 */
const ProfileStatisticsDurationPropType = PropTypes.shape({
  // `length` is the length of the duration.
  length: PropTypes.number.isRequired,
  // `unit` is the unit of the duration.
  unit: PropTypes.oneOf([
    // Shorthand units.
    'ms',
    's',
    'm',
    'h',
    'd',
    'w',
    'M',
    'y',
    // Singular units.
    'millisecond',
    'second',
    'minute',
    'hour',
    'day',
    'week',
    'month',
    'year',
    // Plural units.
    'milliseconds',
    'seconds',
    'minutes',
    'hours',
    'days',
    'weeks',
    'months',
    'years',
  ]).isRequired,
});

export default ProfileStatisticsDurationPropType;
