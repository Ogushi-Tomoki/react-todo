import React, { Component } from 'react';

let style = { maxWidth: '1000px' };
let btn = { cursor: 'pointer' };

const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      if(props.filter === "all") {            //filterが"all"の場合
        return  <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{todo.title} 
                  <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>
                  <span className="siimple-tag siimple-hover">
                    <label class="siimple-label siimple--color-success">done:</label>
                    <div class="siimple-checkbox siimple-checkbox--success">
                      <input type="checkbox" id={i} checked={todo.done}></input>
                      <label for={i}  onClick={() => props.handleDone(i)}></label>
                    </div>
                  </span>
                </li>
      } else if(props.filter === "todo") {    //filterが"todo"の場合
        const flg = todo.done;
        if(!flg){
          return  <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{todo.title} 
                    <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>
                    <span className="siimple-tag siimple-hover">
                      <label class="siimple-label siimple--color-success">done:</label>
                      <div class="siimple-checkbox">
                        <input type="checkbox" id={i} checked={todo.done}></input>
                        <label for={i}  onClick={() => props.handleDone(i)}></label>
                      </div>
                    </span>
                  </li>
        }
      } else if(props.filter === "done") {    //filterが"done"の場合
        const flg = todo.done;
        if(flg){
          return  <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{todo.title} 
                    <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span>
                    <span className="siimple-tag siimple-hover">
                      <label class="siimple-label siimple--color-success">done:</label>
                      <div class="siimple-checkbox">
                        <input type="checkbox" id={i} checked={todo.done}></input>
                        <label for={i}  onClick={() => props.handleDone(i)}></label>
                      </div>
                    </span>
                  </li>
        }
      }
    })};
  </ul>
);

export default List;