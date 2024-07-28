import React from "react";

export default function FuncGreeting(props) {
  return (
    <p>
      {props.message}, ~{props.name} ✨
    </p>
  );
}
