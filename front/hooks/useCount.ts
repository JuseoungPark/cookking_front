import { atom, useRecoilState } from 'recoil'
import { useCallback } from 'react'

const countState = atom({
	key: 'count', // unique ID (with respect to other atoms/selectors)
	default: 0, // default value (aka initial value)
})

function useCount() {
	const [count, setCount] = useRecoilState(countState)

	const add = useCallback(
		(value: number) => {
			setCount(count + value)
		},
		[count],
	)

	const sub = useCallback(
		(value: number) => {
			if (count - value < 0) return
			setCount(count - value)
		},
		[count],
	)

	return {
		count,
		add,
		sub,
	}
}

export default useCount
