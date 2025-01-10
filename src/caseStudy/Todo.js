import { useState } from 'react';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = () => {
    if (!text.trim()) return;

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      if (editingIndex !== null) {
        updatedTodos[editingIndex].text = text.trim();
        setEditingIndex(null);
      } else {
        updatedTodos.push({ text: text.trim(), completed: false });
      }
      return updatedTodos;
    });

    setText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    const selectedTodo = todos[index];
    setText(selectedTodo.text);
    setEditingIndex(index);
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={(e) => setText(e.target.value)}
          value={text}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleSubmit}>
          {editingIndex !== null ? '수정' : '입력'}
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <>
            <li
              key={index}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
              <button
                onClick={() => {
                  toggleTodo(index);
                }}
              >
                toggle
              </button>
              <button
                onClick={() => {
                  editTodo(index);
                }}
              >
                edit
              </button>
              <button
                onClick={() => {
                  deleteTodo(index);
                }}
              >
                delete
              </button>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
