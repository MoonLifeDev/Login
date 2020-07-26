import Link from "next/link";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Form>
        <Input
          type="email"
          autoComplete="email"
          placeholder="email@admin.com"
          // onChange={onChange}
          // value={email}
        />
        <Input
          type="password"
          autoComplete="new-password"
          placeholder="password"
          // onChange={onChange}
          // value={email}
        />
        <BtnContainer>
          <Button>로그인</Button>
          <Link href="/register">
            <a>회원가입</a>
          </Link>
        </BtnContainer>
      </Form>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Form = styled.form`
  border: 1px solid black;
  width: 768px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Input = styled.input``;

const Button = styled.button``;
