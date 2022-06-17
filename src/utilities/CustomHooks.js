/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
export const useMount = (mountFunc, unMountFunc = () => {}) => {
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'transitionEnd',
      ({data: {closing}}) => {
        if (!closing) {
          mountFunc();
        }
      },
    );
    return () => {
      unMountFunc();
      unsubscribe();
    };
  }, []);
};
