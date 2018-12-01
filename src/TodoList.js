import React, { Component } from 'react'
import TodoListInputForm from './TodoListInputForm'
import TodoListItemList from './TodoListItemList'

class TodoList extends Component {
  id = 0;
  state = {
    currentItem: {text: '', done: false},
    itemList: [] //내용은...이렇다..
  }
  //사용자가 입력을 끝냈을 때, 버튼을 누르면 실행
  //커런트 아이템내용이 그대로 만들어짐.
  onCreate = (event) => {
      event.preventDefault(); //TodoListInputForm에서 onSubmit때문에 새로고침하는 것을 방지하기 위함
    const {currentItem, itemList} = this.state //아이템리스트와 상태 전달
    this.setState({
      currentItem: {text: '', done: false}, //지금 있는 것을 지운다
      itemList: itemList.concat({ //객체를 추가하는데 currentItem내용과 같게 만든다.
        id: this.id += 1,                   
        text: currentItem.text,             //버튼을 누르기 직전의 텍스트
        done: currentItem.done
      })
    })
  }
//이벤트로부터 불려지는 함수이기때문에 이벤트를 받고,
//이벤트가 바뀌니 커런트의 데이터값을 바꾼다.
  onInputChange = (event) => {
    this.setState({
      currentItem: {
        text: event.target.value,
        done: this.state.currentItem.done //그대로
      }
    })
  }
  //on~ 인 함수들은 항상 이런식으로 받아야함
  toggleState = (event) => {
    const id = event.target.id-1; //index
    const itemList = this.state.itemList;
    const done = !itemList[id].done
    itemList[id].done = done
    this.setState({
      itemList: itemList
    })
  }

  render() {
    return (
      <div className="todo-list">
        <TodoListInputForm
          onCreate = {this.onCreate}
          onInputChange = {this.onInputChange}
          currentItem = {this.state.currentItem}
        />
        <TodoListItemList
          toggleState={this.toggleState}
          itemList={this.state.itemList}
        />
      </div>
    )
  }
}

export default TodoList