import React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Navbar extends React.PureComponent {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name={'chevron-back'} size={40} color={'#FFF'} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default Navbar;
