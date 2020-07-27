import Link from "next/link";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Form>
        <LoginItem>
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
        </LoginItem>
        <LinkList>
          <Link href="/register">
            <LinkAnchor register>회원가입</LinkAnchor>
          </Link>
          <Link href="/#">
            <LinkAnchor>아이디 / 비밀번호 찾기</LinkAnchor>
          </Link>
        </LinkList>
        <BtnContainer>
          <Button login color>
            로그인
          </Button>
          <Button lastChlid>취소</Button>
        </BtnContainer>
      </Form>
    </Container>
  );
};

export default Login;
// styled-components
const Container = styled.div`
  height: 100vh;
`;
const Form = styled.form`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 368px;
  padding: 28px;
  border-radius: 15px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.1), 0 3px 6px 0 rgba(0, 0, 0, 0.06);
`;
const LoginItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  margin: 0 0 16px 0;
  padding: 16px 8px;
  font-size: 16px;
  border-radius: 0.375em;
  border: 1px solid rgba(210, 214, 220, 1);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:placeholder {
    color: rgba(107, 114, 128, 1);
  }
  &:focus {
    border-color: rgba(28, 100, 242, 0.8);
    box-shadow: 0 6px 10px -10px rgba(28, 100, 242, 0.8);
  }
`;
const LinkList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0 10px 0;
`;
const LinkAnchor = styled.a`
  color: ${props => props.register ? "rgba(28,100,242,1)" : "rgba(107, 114, 128, 1)"};
  border-bottom: ${props => props.register ? "1px solid rgba(28,100,242)" : "0"};
  position: relative;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: ${props => props.register ? "rgba(28,100,242,.6)" : " #1d1d1f"};
    border-bottom: ${props => props.register ? "1px solid rgba(28,100,242,.6)" : "0"};
  }
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  margin: ${props => (props.lastChlid ? "0" : "0 0 16px 0")};
  background-color: ${props => (props.login ? "rgba(28,100,242)" : "#ecf0f1")};
  color: ${props => (props.color ? "#fff" : "rgba(107,114,128,1)")};
  padding: 10px 0;
  font-size: 15px;
  border: 0;
  border-radius: 0.375em;
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: ${props =>
    props.login ? "rgba(28,100,242,.8)" : "#ecf0f1"};
  }
`;

