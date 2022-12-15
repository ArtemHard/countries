import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

const HeaderEl = styled.header``;
const Wrapper = styled.div``;
const Title = styled.a.attrs({
  href: "/",
})``;
const ModeSwitcher = styled.div``;

export const Header = () => {
  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher>
            <IoMoon /> Тёмная тема
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
