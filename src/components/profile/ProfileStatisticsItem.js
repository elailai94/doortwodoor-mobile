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
 * Profile statistics item module.
 *
 * @module ProfileStatisticsItem
 */

import {
  Col,
  Icon,
  Row,
  Text,
} from 'native-base';
import React, { PureComponent } from 'react';
import {
  iOSColors,
  iOSUIKit,
} from 'react-native-typography';

import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { capitalise } from '../../utilities';

/**
 * Class representing profile statistics item.
 *
 * @extends PureComponent
 * @memberof ProfileStatisticsItem
 */
class ProfileStatisticsItem extends PureComponent {
  /** Returns the component to be rendered. */
  render() {
    const {
      icon,
      label,
      value,
    } = this.props;

    return (
      <Col style={styles.col}>
        <Row style={styles.row}>
          <Icon
            name={icon}
            style={styles.icon}
          />
          <Text style={styles.value}>{value}</Text>
        </Row>
        <Row style={styles.row}>
          <Text style={styles.label}>{capitalise(label)}</Text>
        </Row>
      </Col>
    );
  }
}

/**
 * Declares the intended types of properties passed to the component.
 * 
 * @memberof ProfileStatisticsItem
 * @readonly
 */
ProfileStatisticsItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.number,
};

/**
 * Declares the properties for styling the component.
 * 
 * @memberof ProfileStatisticsItem
 * @readonly
 */
const styles = StyleSheet.create({
  col: {
    alignItems: 'center',
  },
  icon: {
    color: 'white',
    //fontSize: 30,
  },
  label: {
    ...iOSUIKit.subheadObject,
    color: iOSColors.white,
  },
  row: {
    alignItems: 'center',
  },
  value: {
    ...iOSUIKit.title3Object,
    color: iOSColors.white,
    margin: 5,
  },
});

export default ProfileStatisticsItem;
