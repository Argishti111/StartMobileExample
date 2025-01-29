import React from 'react';
import {Text, View} from 'react-native';
import {emptyInfoStyles} from './emptyInfoStyles';

export function ShowEmptyInfo({title}: {title?: string}) {
  return (
    <View style={emptyInfoStyles.container}>
      <Text style={emptyInfoStyles.title}>{title}</Text>
    </View>
  );
}
