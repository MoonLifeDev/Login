import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Register = () => {
  return (
    <Container>
      <Form>
        <input />
        <input />
        <button>로그인</button>
        <Link href='#'>
          <a>로그인</a>
        </Link>
      </Form>
    </Container>
  );
};

export default Register;
