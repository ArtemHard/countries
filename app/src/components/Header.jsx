import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { IoMoonOutline, IoMoon } from "react-icons/io5";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled.a.attrs({
  href: "/",
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;
const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Где страна, дядь?</Title>
          <ModeSwitcher onClick={changeTheme}>
            {theme === "light" ? (
              <IoMoonOutline size='14px' />
            ) : (
              <IoMoon size='14px' />
            )}
            <span style={{ marginLeft: "0.75rem" }}>
              {" "}
              {theme === "light" ? "Тёмная" : "Светлая"} тема{" "}
            </span>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
