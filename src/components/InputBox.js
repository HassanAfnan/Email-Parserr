import React from "react";

const InputBox = (props) => {
  return (
    <div>
      <image />
      <input
        type={props?.isType === "text" ? "text" : "password"}
        placeholder={props?.placeholder || "Type"}
        onChange={props.onChange}
        style={{}}
      />
    </div>
  );
};

export default InputBox;
