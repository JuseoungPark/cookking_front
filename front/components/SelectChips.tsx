import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native';
import styled, {css} from 'styled-components/native'
import {COLORS, FONTSIZES, FONTS} from '../constants'
import ButtonWrap from '../components/ButtonWrap'



// 효율적이고 간편한 방법으로 계속 개선할 예정

interface CheckedProps {
	checkedTest?: boolean;
}

const Chips = ({states, setStates}) => {

	const Chips = styled.Pressable`
		width: auto;
		padding: 8px 12px;
		margin-right: 8px;
		background-color: ${COLORS.white};
		border-radius: 50px;
		border: 1px solid ${COLORS.gray200};
		${({checkedTest}) => checkedTest && css`
			background-color: ${COLORS.primary100};
			border: 1px solid ${COLORS.primary700};
		`}
	`
	const ChipsText = styled.Text`
		${FONTS.fontLegular};
		font-size: ${FONTSIZES.body3}px;
		color: ${COLORS.gray700};
		${props => props.checkedTest && css`
			${FONTS.fontMedium};
			color: ${COLORS.primary700};
		`}
	`

	// const [checked, setChecked] = useState(false);

	// const handleToggle = (key) => {
    //     setStates(prevState => prevState.map(prev => ({
	// 		...prev,
	// 		checked: !prev.checked,
	// 	}))
	// 	);
    // }

	// onPress={handleToggle}
	const statesList = states.map((state) => 
		<Chips
			checkedTest={state.checked}
			key={state.id}
		>
			<ChipsText checkedTest={state.checked}>{state.label}</ChipsText>
			{statesList}
		</Chips>
	);
	return (
		<ButtonWrap>
			{statesList}
		</ButtonWrap>
	);
};

export default Chips