import React, { useState } from "react";

const SignIn = () => {
  const [toggle, setToggle] = useState(true);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const onClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="ID 를 입력하세요" />
      <br />
      <input type="password" placeholder="비밀번호를 입력하세요" />
      <br />
      <button>로그인</button>
      <button onClick={onClick}>
        Toggle to {toggle ? "Login" : "Create Account"}
      </button>
    </form>
  );
};

export default SignIn;
