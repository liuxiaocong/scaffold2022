import React from "react";
import s from "./s.module.css";

import { Input, Checkbox } from "antd";
import { get, post } from "common/utils/request";
import { FETCH_NEWS, POST_NEWS } from "common/constants/api";

const Page = () => {
  React.useEffect(() => {
    get({
      url: FETCH_NEWS,
      errorHandle: () => {},
    }).then((data) => {
      console.log(data);
    });
  }, []);

  React.useEffect(() => {
    const fetch = async () => {
      const result = await post({ url: POST_NEWS, errorHandle: () => {} });
      console.log(result);
    };
    fetch();
  }, []);

  return (
    <div className={s.wrap}>
      <h2>News</h2>
      <div className={s.content}>
        <p>Content</p>
      </div>
    </div>
  );
};

export default Page;
