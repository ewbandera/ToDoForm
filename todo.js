function Todo({todo,index, remove}) {
    const handle = () => remove(index);
    return  <div className="todo" key={index} id={index} onClick={handle}>{todo.text} (-)</div>
}