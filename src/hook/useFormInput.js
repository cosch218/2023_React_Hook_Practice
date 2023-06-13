import { useState } from "react";

// 작성한 커스텀 훅을 export를 통해서 내보내준다
// initialValue는 초기값을 받아와서 useState에 넣어준다
// 커스텀 훅을 만들 때 외부에서 받아올 값(지정해줄 값)이 있다면 매개변수를 통해서 받아오기
export function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  // 이젠트 객체에서 value 값을 가져와서 setValue 값 수정
  function handleChange(e) {
    setValue(e.target.value);
  }

  // 태그에 속성값으로 전달하기 위해 객체로 만들어서 내보냄
  // value와 onChange는 태그의 속성 이름!
  // value={value}
  const inputProps = {
    value: value,
    onchange: handleChange
  };

  // return된 값을 이용해서 속성값과, props값, value값을 꺼내는 용도
  return inputProps
}