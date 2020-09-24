(function(){
    //모드선언
"use strict";
//source
//컴포넌트 만들기
function ProSource(props){
    return React.createElement(
        //요소
        "div",
        {className : "custom"},
        "welcome"
        
    )
}

//id -> export
ReactDOM.render(
    React.createElement(ProSource),
    document.getElementById("box")
)
})()
