import React from "react";

type CounterComponentProps = {
  counter: number;
};

function CounterComponent({ counter }: CounterComponentProps) {
  return <span>{counter}</span>;
}

export default CounterComponent;
