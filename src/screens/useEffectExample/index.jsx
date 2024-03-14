import React, {Component, useContext, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';
import Button from '../../components/ui/button';
import {SECONDSCREEN} from '../../utils/routes';
import {useNavigation} from '@react-navigation/native';
import MyContext from '../../context';

const UseEffectExample = ({navigation}) => {
  const {count, changeCount} = useContext(MyContext);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.count}>{count}</Text>
        <Text>Birinci Sayfa</Text>
      </View>

      <View style={{padding: 20}}>
        <Button
          onPress={() => navigation.navigate(SECONDSCREEN, {count: count})}
          title="Sayfaya Git"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.WHITE,
  },
  count: {
    fontSize: 100,
    fontWeight: 'bold',
    color: AppColors.PRIMARY,
  },
});

export default UseEffectExample;
