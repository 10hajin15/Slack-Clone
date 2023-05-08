import useInput from "@hooks/useInput";
import { Button, Form, Header, Input, Label, LinkContainer } from "@pages/SignUp/styles";
import fetcher from "@utils/fetcher";
import React from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";



const LogIn = () => {
  const { data, error, revalidate, mutate } = useSWR("http://localhost:3095/api/users", fetcher);

  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  

  return (
    <div id="container">
      <Header>Sleact</Header>
      <Form>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" name="email" value={email} onChange={onChangeEmail}></Input>
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" name="password" value={password} onChange={onChangePassword}></Input>
          </div>
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  )
};


export default LogIn;