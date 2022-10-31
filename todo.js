function Todo({todo,index, remove, hoverEffectsOver,hoverEffectsOut}) {
    const handle = () => remove(index);
    const handleOver = e => {
        const el = document.getElementById(index);
        const rect= el.getBoundingClientRect();
        const x = rect.left + window.scrollX +rect.width -20;
        const y = rect.top + window.scrollY +5;
     
        hoverEffectsOver(todo.text,index,x,y);
    }
    const handleOut=() => {
        hoverEffectsOut("hover" + index)
    }

    return  <div className="todo" key={index} id={index} onClick={handle} onMouseOver={handleOver} onMouseOut={handleOut}>{todo.text} (-)</div>
}