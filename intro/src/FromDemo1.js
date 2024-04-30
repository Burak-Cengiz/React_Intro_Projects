import React, { Component } from 'react'

export default class FromDemo1 extends Component {
    state = {userName:'',city:''}
    onChangeHandler = (event)=>{
        // this.setState({userName:event.target.value,city:event.target.value})
        let name = event.target.name;
        let value = event.target.value;

        this.setState({[name]:value})
    }
    onSubmitHandler=(event) => {
        alert(this.state.userName)
        event.preventDefault();
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
            <h3>User Name</h3>
            <input name="userName" onChange={this.onChangeHandler} type='text'></input>
            <h3>User Name is {this.state.userName}</h3>

            <h3>City</h3>
            <input name="city" onChange={this.onChangeHandler} type='text'></input>
            <h3>City is {this.state.city}</h3>

            <button type='submit' value="Save">Gönder</button>
        </form>
      </div>
    )
  }
}
