import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WrappedComponent from '../components/WrapperComponent';
import {useMount} from '../utilities/CustomHooks';

function Screen2({hideLoader}) {
  useMount(() => {
    hideLoader();
  });
  return (
    <View style={styles.container}>
      <Text>Screen 2</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WrappedComponent(Screen2);
