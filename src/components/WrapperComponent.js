/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useMemo, useState, useCallback} from 'react';
import {View, StyleSheet, ActivityIndicator, Dimensions} from 'react-native';
import {SafeAreaInsetsContext} from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('screen');

function WrappedComponent(
  Component,
  options = {topSafeArea: false, bottomSafeArea: false},
) {
  return () => {
    const [isLoading, setLoading] = useState(true);
    const insets = useContext(SafeAreaInsetsContext);
    const {topSafeArea, bottomSafeArea} = options;
    const containerStyle = useMemo(() => {
      return [
        styles.container,
        topSafeArea && {paddingTop: insets.top},
        bottomSafeArea && {paddingBottom: insets.bottom},
      ];
    }, []);

    const showLoader = useCallback(() => {
      !isLoading && setLoading(true);
    }, [isLoading]);

    const hideLoader = useCallback(() => {
      setLoading(false);
    }, []);
    return (
      <View style={containerStyle}>
        <ActivityIndicator style={styles.loader} animating={isLoading} />
        <Component
          insets={insets}
          isLoading={isLoading}
          showLoader={showLoader}
          hideLoader={hideLoader}
        />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: height / 2,
    left: width / 2,
  },
});

export default WrappedComponent;
