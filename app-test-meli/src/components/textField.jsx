import React from "react";

function TextField({ field, ...props }) {
  return (
    <div >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        {...field}
        {...props}
        id={props.id}
        name={props.id}
        {...props.input}
        {...props.rest}
        type={props.type}
        disabled={props.disabled}
        className={props.className}
      />
    </div>
  );
}
export default TextField;
