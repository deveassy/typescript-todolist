import React from "react";
import TodoItem from "..";
import { render } from "@testing-library/react";

describe("<TodoItem />", () => {
  const sampleTodo = {
    id: 1,
    text: "타입스크립트 적용중",
    done: false,
  };

  const component = render(<TodoItem todo={sampleTodo} />);
  const { getByText } = component;
  const span = getByText(sampleTodo.text);
  const button = getByText("삭제");

  it("has span and a button", () => {
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("shows the text-line on span when done is true", () => {
    expect(span).toHaveStyle("text-decoration: line-through;");
  });
});
