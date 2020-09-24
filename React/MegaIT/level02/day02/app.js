(function(){

//모드선언
"use strict";
//source
function ProImg(props){
    // return <img src="../assets/red.jpg" alt="welcome" className="pic"/>
    return <img src={"../assets/"+props.color+"jpg"} alt="welcome" className="pic"/>
}

function ProSize(props){
    // optionSize
    function optionSize(){
        var sizes = window.Indata.allSize;
        // console.log(sizes);
        // 배열을 가져와서 또 하나의 작업을 할 수 있는 것 : map
        return sizes.map(
            function(num){
                return (<option value={num} key={num}>{num}</option>)
            }
        )
    }
    // basic -> <select>
    return(
        <p className="field">
            <label htmlFor="size-option">Size:</label>
            <select name="sizeOption" id="size-option" defaultValue={props.size}>
                {/* <option value="7">7</option>     */}
                {/* 함수로 불러주기 */}
                {optionSize()}
            </select>         
        </p>        
    )
}

function ProColor(props){
    function optionColor(){
        var colors = window.Indata.allColor;
        return colors.map(
            function(co){
                return (<option value={co} key={co}>{co}</option>)
            }
        )
    }
    return(
        <p className="field">
            <label htmlFor="size-option">Color:</label>
            <select name="colorOption" id="color-option" defaultValue={props.color}>
                {/* <option value="red">red</option>     */}
                {optionColor()}
            </select>         
        </p>
    )
}

function ProSource(props){
    return(
        <div className="custom">
            <div className="srcImg">
                <ProImg/>
            </div>
            <div className="selector">
                <ProSize size={8}/>
                <ProColor color={"green"}/>
            </div>
        </div>
    )
}
//render
ReactDOM.render(
    <ProSource/>,document.getElementById("box")
)
})()