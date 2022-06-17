import React, {useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import WrappedComponent from '../components/WrapperComponent';
import {useNavigation} from '@react-navigation/native';
import {screenNames} from '../utilities/Constants';
import {useMount} from '../utilities/CustomHooks';

function Screen1({showLoader, hideLoader}) {
  const navigation = useNavigation();
  useMount(() => {
    showLoader();
  });
  const goToNextScreen = useCallback(() => {
    navigation.navigate(screenNames.screen2);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text>Screen 1</Text>
      <TouchableOpacity onPress={goToNextScreen}>
        <Text>Go to next screen</Text>
      </TouchableOpacity>
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

export default WrappedComponent(Screen1);
