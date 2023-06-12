import { useCallback, useMemo, useState } from 'react';
import './App.css';

function App() {
  // onChange와 연결되어 있는 값을 바로 사용하기 보단 완전히 결정되었을 때 사용하는 값(name)을 따로 두어 쓰기
  const [input, setInput] = useState();

  // 확인 버튼을 눌렀을 때 input의 값을 가져옴
  const [name, setName] = useState("");

  // 가져온 name 값의 길이를 출력(retrun)하는 함수
  const countName = (name) => {
    console.log("이름의 길이를 계산하는 중입니다");
    return name.length;
  }

  // return html에 바로 사용되는 함수의 값을 고정해서 쓰기 위해 useMemo 사용
  // useMemo(()=>함수, [의존할 state 또는 props 값]) 
  // 화살표함수에 중괄호 사용x
  const memoCountName = useMemo(()=>countName(name), [name]);

  // 첫번째 글자만 가져오는 함수
  const takeword = (name) => {
    console.log("글자의 첫번째 문자를 들고 오는 중입니다")
    return name[0];
  }

  // useMemo를 통해서 name 값이 바뀔 때만 실행
  const memoTakeWord = useMemo( ()=>takeword(name), [name] );

  // useCallback 
  // 컴포넌트 자체가 생성될 때 함수를 새로 만들고 그 때 값이 바뀌지 않았다면 함수를 만들지 않도록 함
  // 함수를 만들지 않는다는 것 : 이전에 썼던 값을 그대로 쓴다는 뜻
  // useCallback(()=>{함수},[의존할 값])
  const onChange = useCallback((e)=>{
    // 매개변수로 들고오는 값은 바뀜
    setInput(e.target.value);
    // callback의 외부(state 또는 글로벌변수)에서 가져와 쓴 값은 바뀌지 않는다
    // >> 처음에 들어가있는 input값 undefined 출력됨
    // console.log(input);
    console.log(name);
    // [] 안에는 원하는 state 또는 props 값을 넣어서 사용
  },[name]);

  // onClick의 내용을 useCallback으로 작성
  const onClick = useCallback(()=>{
    // input 값을 받아와서 넣어야하기 때문에 사실상 useCallback을 사용해도 동일하다
    // 자주 바뀌지 않는 값을 사용할 때, useCallback 사용
    setName(input)
  },[input])


  return (
    <div className="App">
      <h3>{input}</h3>
      <input 
        type='text'
        onChange={onChange}
      />
      <button onClick={onClick}>확인</button>
      <p>이름의 길이 : {memoCountName}</p>
      <p>성 : {memoTakeWord}</p>
    </div>
  );
}

export default App;
