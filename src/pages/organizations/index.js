import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

import { View, AsyncStorage, FlatList, ActivityIndicator } from 'react-native';

import api from 'services/api';
import styles from './styles';
import OrganizationItem from './components/OrganizationItem';

export default class Organizations extends Component {
  static navigationOptions = {
    title: 'Organizações',
    tabBarIcon: ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });

    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/orgs`);

    this.setState({ refreshing: false, data: response.data, loading: false });
  }

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  renderList = () => (
    <FlatList
      data={this.state.data}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      numColumns={2}
      columnWrapperStyle={styles.columnContainer}
      onRefresh={this.loadOrganizations}
      refreshing={this.state.refreshing}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading
            ? <ActivityIndicator style={styles.loading} />
            : this.renderList()
        }
      </View>
    );
  }
}
