import React from "react";
import { colors } from "../constants/Colors";

const ButtonComp = (props) => {
  return (
    <>
      {props.type === "submit" ? (
        <button type="submit" style={{
            background:colors.greenColor,
            width:'100%',
            height:'50px',
            border:'none',
            fontSize:16,
            fontWeight:600,
            borderRadius:5,
            color:colors.whiteColor
        }}>
            {props.text || 'Button'}
        </button>
      ) : (
        <div
          style={{
            backgroundColor: props.backgroundColor || colors.greenColor,
          }}
        >
          <p style={{ color: props.color || colors.whiteColor }}>
            {props.text || "Button"}
          </p>
        </div>
      )}
    </>
  );
};

export default ButtonComp;
