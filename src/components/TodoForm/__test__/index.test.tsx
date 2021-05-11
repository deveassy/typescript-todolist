import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "../";

describe("<TodoForm />", () => {
  it("has input and a button", () => {
    const handleAddTodo = (): void => {};
    const { getByText, getByPlaceholderText } = render(
      <TodoForm addTodo={handleAddTodo} />
    );
    getByPlaceholderText("할 일을 입력하세요");
    getByText("추가");
  });
  it("has input changing", () => {
    const handleAddTodo = (): void => {};
    const { getByPlaceholderText } = render(
      <TodoForm addTodo={handleAddTodo} />
    );
    const input = getByPlaceholderText("할 일을 입력하세요");
    fireEvent.change(input, {
      target: {
        value: "타입스크립트 적용중",
      },
    });
    expect(input).toHaveAttribute("value", "타입스크립트 적용중");
  });
  it("calls onInsert when button clicked, clears input", () => {
    const onInsert = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <TodoForm addTodo={onInsert} />
    );
    const input = getByPlaceholderText("할 일을 입력하세요");
    const button = getByText("추가");

    fireEvent.change(input, {
      target: {
        value: "타입스크립트 적용중",
      },
    });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("타입스크립트 적용중");
    expect(input).toHaveAttribute("value", "");
  });
});
