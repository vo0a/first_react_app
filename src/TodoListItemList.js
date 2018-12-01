import React, { Component } from 'react'

class TodoListItemList extends Component {
  render() {
    const {itemList} = this.props; //중괄호가 있다는 것은 props오브젝트 중 아이템리스트만 가져오겠다는 단축표현식
    const todoList = itemList.map(item => ( 
      <li key={item.id} //내용을 가지고 li엘리먼트를 여려개 만들겠다.
          id={item.id}
          className={item.done===true?'checked':'not-checked'} //완료가 된건지 안된건지 스타일을 표시
          onClick={this.props.toggleState}>
        {item.text}
      </li> //아이템리스트에들어있는 아이템만큼 li리스트가 만들어지고
    ))
    return ( //엘리먼트에 넣겠다.
      <ul className="todo-item-list"> 
        {todoList}  
      </ul>
    )
  }
}

export default TodoListItemList


//6 : 굳이 텍스트로 매번 쓸 필요 없이 반복식을 map을 이용하여 표현한다.