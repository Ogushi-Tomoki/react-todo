import React, { Component } from 'react';
import Form from './Form';
import List from './List';
import Select from './Select';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
      filter: "all"
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.handleFilter =this.handleFilter.bind(this);
  }

  //データ保存
  handleAdd(e) {
    //リダイレクト防止
    e.preventDefault();

    //フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
    this.state.todo.unshift({title: e.target.title.value, done: false});    //まだ保存されていない

    //setStateを使ってstateを上書き
    this.setState({todo: this.state.todo});   //保存完了

    //inputのvalueを空に
    e.target.title.value = '';
  }

  //データ削除
  handleRemove(i) {
    //todo配列から、i番目から一つ目のデータを除外
    this.state.todo.splice(i, 1);

    //setStateでtodo配列を上書き
    this.setState({todo: this.state.todo});
  }

  //完了⇔未完了の切り替え
  handleDone(i) {
    //doneがtrueならfalseを、falseならtrueを代入する
    this.state.todo[i].done = !this.state.todo[i].done;

    //setStateでtodo配列を上書き
    this.setState({todo: this.state.todo});
  }

  //タスクを全て/未完了/完了でフィルタリング
  handleFilter(e) {
    //セレクトからフィルターの種類を取り出す
    let newFilter = e.target.value;

    //setStateでfilterを上書き
    this.setState({filter: newFilter});
  }

  render() {
    return(
      <div className="siimple-box siimple--bg-success">
        <h1 className="siimple-box-title siimple--color-white">ToDo Application</h1>
        <Form handleAdd={this.handleAdd}/>
        <Select handleFilter={this.handleFilter}/>
        <div className="siimple-rule"></div>
        <List todos={this.state.todo} filter={this.state.filter} handleRemove={this.handleRemove} handleDone={this.handleDone}/>
      </div>
    );
  }
}
