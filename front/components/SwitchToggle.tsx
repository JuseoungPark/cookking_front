// import { useState } from 'hoist-non-react-statics/node_modules/@types/react';
import React, { useState } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

import styled from 'styled-components/native';
import { COLORS } from '@/constants';

export type Props = {
  isOn: object;
  onToggle: object;
  onColor?: string;
  offColor?: string;
};

const Toogle: React.FC<Props> = ({
  isOn,
  onColor = '#246DFB',
  offColor = '#E8E8E9',
  onToggle,
}) => {

  const [aniValue, setAniValue] = useState(new Animated.Value(0));
  const color = isOn ? onColor : offColor;

  const moveSwitchToggle = aniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  Animated.timing(aniValue, {
    toValue: isOn ? 1 : 0,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  return (
    <ToggleWrap>
      <Pressable onPress={ onToggle }>
        <ToggleContainer
          style={{ backgroundColor: color }}
        >
          <ToggleWheel
            style={[
              styles.toggleWheel,
              { transform: [{ translateX: moveSwitchToggle }] }
            ]}
          ></ToggleWheel>
        </ToggleContainer>
      </Pressable>
    </ToggleWrap>
  )
}

const ToggleWrap = styled.View`
  flex-flow: row nowrap;
  align-items: center;
`
const ToggleContainer = styled.View`
  justify-content: center;
  width: 50px;
  height: 30px;
  padding-left: 2px;
  border-radius: 15px;
`
const ToggleWheel = styled(Animated.View)`
  width: 25px;
  height: 25px;
  border-radius: 12px;
  background-color: ${COLORS.white};
`
const styles = StyleSheet.create({
  toggleWheel: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: .2,
    shadowRadius: 2.5,
    elevation: 1.5,
  }
})

export default Toogle;