import React from 'react'
import styled from 'styled-components/native';

function Card() {
  return (
    <CardWrap>
      <CardImage>안녕..</CardImage>
    </CardWrap>
  )
}

const CardWrap = styled.View`
`

const CardImage = styled.View`
  height: 281px;
  background-color: #f5f5f5;
`

// const TextInput: React.FC = () => {

//   const [title, setTitle]: [string | null, any] = useState(null);

//   const handleInput: React.ChangeEventHandler = (e) => {
//     setTitle(e.target.value);
//   };

//   return (
//     <TextInput onChange={ handleInput } >{ title }</TextInput>
//   )
// }

export default Card;