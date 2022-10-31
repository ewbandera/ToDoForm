function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    var index = Number(index);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }
  const hoverItem = (text,index,xpos,ypos) => {
   const el= document.createElement('div');
   el.innerText = "Remove " + text;
   el.className = "hoverBox";
   el.style.left = xpos + "px";
   el.style.top = ypos + "px";
   el.id = "hover" + index;
   document.getElementById('root').appendChild(el);
}
  const unhoverItem = id =>
  {
    const el =document.getElementById(id);
    document.getElementById('root').removeChild(el);
  }

  return( 
    <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => 
            <Todo index={i} key={i} todo={todo} remove={removeTodo} hoverEffectsOver={hoverItem} hoverEffectsOut={unhoverItem}/>)}
        
          <TodoForm addTodo={addTodo}/> 
        </div>
    </div>);
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
