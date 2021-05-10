import React, { useState } from "react";

// type MyFormProps = {
//   onSubmit : (form: { value: string}) => void;
// }

function TodoForm(props: any) {
  const { onInsert } = props;
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
