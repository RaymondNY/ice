import axios from "axios";
import React, { FC } from "react";
import { ThemeCtx } from "./context/TestCtx";


interface cs {
  name: string
  age: string
}

export const App: FC<cs> = (props) => {
  const { age } = props;
  const aaa = React.useContext(ThemeCtx);
  axios({
    url: 'http://192.168.1.87:7777/hello',
    method: 'get'
  }).then(
    res => console.log(res)
  ).catch(
    err => console.error(err)
  )
  return (
    <div>
      <h1>hello,hook context,{aaa.dark},{aaa.light}</h1>
      <h1>props,{props.name}</h1>
      <h1>props,{age}</h1>
    </div>
  );
};
