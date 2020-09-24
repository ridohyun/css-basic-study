import React, { Component } from 'react';

const dummy_prop = {
    title: '테스트용 타이틀입니다',
    content: '테스트용 글입니다'
}

class PostView extends Component {
    render() {
        const{title, content} = dummy_prop
        return (
            <div>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        );
    }
}

export default PostView;