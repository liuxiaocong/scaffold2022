import React from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import s from "./s.module.css";
const { Header } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const HeaderComponent = (): React.ReactElement => {
  return (
    <Header className={s.header}>
      <div className={s.logo} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items1}
      />
    </Header>
  );
};

export default HeaderComponent;
