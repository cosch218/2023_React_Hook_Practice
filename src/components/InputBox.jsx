import React, { useState } from 'react'
import { useFormInput } from '../hook/useFormInput'

export default function InputBox() {
  // 이름 받아오는 useFormInput
  const nameProps = useFormInput("");
  // 전화번호 받아오는 useFormInput
  const phoneProps = useFormInput("");
  // 확정된 이름을 기록하는 state
  const [name, setName] = useState("");
  // 클릭했을 때 이름값을 저장하는 함수
  const addName = () => {
    setName(nameProps.value);
  };

  return (
    <div>
      <label htmlFor="">
        이름 : 
        <input {...nameProps} />
      </label>
      <br />
      <label htmlFor="">
        전화번호 : 
        <input {...phoneProps} />
      </label>
      <br />
      <button onClick={ addName }>확인</button>
      <p>이름 : {name}</p>

      {/** useFormInput을 사용하여 아래 태그의 값을 가져오세요 */}
      <textarea cols="30" rows="10"></textarea>
      <input type="email" /><br />
      <input type="date" />
      <p></p>
      <p></p>
      <p></p>
    </div>
  )
}
