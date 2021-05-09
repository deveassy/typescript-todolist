import React, { useState } from "react";

function TodoForm(props: any) {
  const { onInsert } = props;
  const [value, setValue] = useState("");

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: any) => {
    onInsert(value);
    setValue("");
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        placeholder="할 일을 입력하세요"
      />
      <button>추가</button>
    </form>
  );
}

export default TodoForm;
