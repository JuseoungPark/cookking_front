import React from 'react';
import styled from 'styled-components/native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {COLORS, FONTSIZES, FONTS} from '../constants'

type Route = {
  key: string;
  name: string;
  params?: object | undefined;
};

const TabContainer = styled.View`
  background-color: ${COLORS.white};
`;

const TabWrapper = styled.View`
  flex-direction: row;
  display: flex;
  align-items: center;
  margin: 0px 16px;
`;

const TabButton = styled.TouchableOpacity<{isFocused: boolean}>`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 42px;
  border-bottom-width: 2px;
  border-bottom-color: ${(props) =>
    props.isFocused ? `${COLORS.black}` : `${COLORS.transparent}`
  };
`;

const TabText = styled.Text<{isFocused: boolean}>`
  ${FONTS.fontMedium};
  font-size: ${FONTSIZES.body2}px;
  color: ${(props) => props.isFocused ? `${COLORS.black}` : `${COLORS.gray400}`};
`;

export default function TabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
  return (
    <TabContainer>
      <TabWrapper>
        {state.routes.map((route: Route, index: number) => {
          // const {options} = descriptors[route.key];
          // const label = options.tabBarLabel;
          const label = route.name;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TabButton isFocused={isFocused} onPress={onPress} key={`tab_${index}`}>
              <TabText isFocused={isFocused}>{label}</TabText>
            </TabButton>
          )
        })}
      </TabWrapper>
    </TabContainer>
  )
}