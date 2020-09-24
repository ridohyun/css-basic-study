// React를 이용해서 자바스크립트를 사용한 것

(function(){
    //모드선언
"use strict";
//source
//컴포넌트 만들기
function proImg(props){
    return <img src="../assets/red.jpg" alt="welcome" className="srcImg" />
}

function ProSource(props){
    return (
        <div className="num">
         
        </div>
    )
    
}
//id -> export
ReactDOM.render(
    // React.createElement(ProSource), document.getElementById("box")
    <ProSource/>,document.getElementById("box")
)
})()
