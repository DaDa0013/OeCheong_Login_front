import React, { Component } from 'react';
import './Button.css';
class Loginform extends Component {
  

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.appChange = this.appChange.bind(this);
    this.appClick = this.appClick.bind(this);
  }

  // goToRegister = () => {
  //   this.props.history.push('/register');
  // }

  appChange = (e) =>{
    this.setState({
      [e.target.name]:e.target.value
    });//input value 변경 ==> onChange
  }
  appClick = (e) =>{
    console.log(`id는:${this.state.ID}\n pw는:${this.state.PW}`); 
    alert('로그인성공!');
    e.preventDefault();
    //this.goToMain();
    //로그인 성공시 메인페이지로 이동하도록
  }
  appKeyPress = (e) => {
    if (e.key === 'Enter'){
      this.appClick();
    }
  }
  render(){
    const { ID, PW } = this.state;
    const { appChange, appClick } = this;
    return (
      <body className="background">
        <img className="image" src={require("../img/logo.png").default}></img>
        <div className="bigbox">
          <form action="/input" method="post">
            <h1>LOGIN</h1>
            <p><input className="inputbox" type="text" name="ID" placeholder="ID" value={ID} onChange={appChange}></input></p>
            <p><input className="inputbox" type="password" name="PW" placeholder="PASSWORD" value={PW} onChange={appChange}></input></p>
            <p><button className="button" onClick={ appClick }>Login</button></p>
            <div className="links">
              <a href="#" target="_blank">회원가입페이지로</a>
            </div>
            <div className="link2">
              <a  href="#" target="_blank">아이디찾기</a>
            </div>  
            <div className="link2">
            <a href="#" target="_blank">비밀번호찾기</a>
            </div>
          </form>
        </div>
      </body>
    );
  }
}
export default Loginform;