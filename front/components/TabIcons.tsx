import React, { useState } from 'react'
import styled, {css} from 'styled-components/native';
import { COLORS, icons } from '../constants'
import { View, Image } from 'react-native';

const TabIcon = ({focused,icon}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: 32,
        width: 32
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 24,
          height: 24,
          tintColor: focused ? COLORS.primary700 : COLORS.gray500
        }}
      />
    </View>
  );
};

export default TabIcon;
