import React, { FC } from "react";
interface cs {
  name: string;
}
export const App: FC<cs> = (props) => {
  //const { name } = props;
  return (
    <div>
      <h1>hello,{props.name}</h1>
    </div>
  );
};
