import React from 'react';
import { View, Text, Image } from 'react-native';
import PropType from 'prop-types';
import styles from './styles';

const OrganizationItem = ({ organization }) => (
  <View style={styles.container}>
    <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
    <Text style={styles.title}>{organization.login}</Text>
  </View>
);

OrganizationItem.propTypes = {
  organization: PropType.shape({
    avatar_url: PropType.string,
    login: PropType.string,
  }).isRequired,
};

export default OrganizationItem;
