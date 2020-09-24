import React from 'react';
import './App.css';
import api from './api';
import PostView from './Components/PostView';

// function기반이 아닌 class 기반으로 진행할 예정이다.
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
      content:'',
      results: [],
    }
  }

  // 데이터 요청
  componentWillMount() {
    this.getPosts()
  }

  getPosts() {
    const _results = api.getAllPosts()
    this.setState({results:_results.data})
    console.log()
  }

  handlingChange=(event)=>{
    this.setState({[event.target.name]: event.target.value})
  }

  // api를 통해서 실제 rest api로 보내는 역할을 함
  handlingSubmit = async(event)=>{
    event.preventDefault() //event 기능 -> 막는다.
    let result = await api.createPost({title:this.state.title, content:this.state.content})
    console.log("완료됨", result)
  }

  render(){
    return (
      <div className="App">
        <div className="PostingSection">
          <h2>대나무 숲 글 작성하기</h2>
          <form onSubmit={this.handlingSubmit}>
            <input
              name="title"
              value={this.state.title}
              onChange={this.handlingChange}
            />
            <textarea
              name="content"
              value={this.state.content}
              onChange={this.handlingChange}
            />
            <button type="submit">제출하기</button>
          </form>

        </div>
        <div className="ViewSection">
          {
            this.state.results.map({post} =>
            <PostView title={post.title} content={post.content}/>

              )
          }
        </div>
      </div>
    );
  }
  
}

export default App;
