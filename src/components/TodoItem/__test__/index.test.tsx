import React from "react";
import TodoItem from "..";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";

describe("<TodoItem />", () => {
  const sampleTodo = {
    id: 1,
    text: "타입스크립트 적용중",
    done: false,
  };

  const setup = (props = {}) => {
    const onToggle = jest.fn();
    const onRemove = jest.fn();
    // const initialProps = {todo: sampleTodo}
    // const component = render(
    //   <TodoItem {...initialProps} onToggle={onToggle} onRemove={onRemove} />
    // );
    // const { getByText } = component;
    // const todo = props.todo || initialProps.todo
    // const span = getByText(sampleTodo.text);
    // const button = getByText("삭제");
    const initialProps = { todo: sampleTodo };
    const utils = render(
      <TodoItem {...initialProps} onToggle={onToggle} onRemove={onRemove} />
    );
    const { getByText, getByTestId } = utils;
    const todo = props || initialProps.todo;
    const span = screen.getByTestId("todo-text");
    const button = getByText("삭제");
    return {
      ...utils,
      span,
      button,
    };
  };

  it("has span and a button", () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("shows the text-line on span when done is true", () => {
    const { span } = setup({ todo: { ...sampleTodo }, done: true });
    fireEvent.change(span, {
      target: { done: true },
    });
    expect(span).toHaveStyle(`text-decoration: line-through`);
  });
  it("does not show text-line on span when done is false", () => {
    const { span } = setup({ todo: { ...sampleTodo }, done: false });
    expect(span).toHaveStyle("text-decoration: none;");
  });

  it("calls onToggle", () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it("calls onRemove", () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
