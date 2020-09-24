// React를 이용해서 자바스크립트를 사용한 것

(function(){
    //모드선언
"use strict";
//source
//컴포넌트 만들기
function proImg(props){
    return React.createElement(
        "img",
        {className:"srcImg",
         alt : "welcome",
         src : "../assets/red.jpg"}
    )
}

function ProSource(props){
    return React.createElement(
        //요소
        "div",
        {className : "num"},
        React.createElement(
            "div",
            {className:"srcImg"},
            React.createElement(proImg)
        )
    )
}
//id -> export
ReactDOM.render(
    React.createElement(ProSource),
    document.getElementById("box")
)
})()
