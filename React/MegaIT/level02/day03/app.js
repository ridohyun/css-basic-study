(function(){

//모드선언
"use strict";
//source
function ProImg(props){
    // return <img src="../assets/red.jpg" alt="welcome" className="pic"/>
    // return <img src={"../assets/"+props.color+".jpg"} alt="welcome" className="pic"/>
    return <img src={`../assets/${props.color}.jpg`} alt="welcome" className="pic"/>
}

function ProSize(props){
    // optionSize
    function optionSize(){
        // var sizes = window.Indata.allSize;
        // console.log(sizes);
        // 배열을 가져와서 또 하나의 작업을 할 수 있는 것 : map
        return props.sizes.map(
            function(num){
                return (<option value={num} key={num}>{num}</option>)
            }
        )
    }

    function onSizeChange(evt){
        // console.log(evt);
        // 원하는 값을 가져와서 console창에 띄워줌
        // console.log(evt.target.value);
        props.handleSizeChange(evt.target.value);
    }
    // basic -> <select>
    return(
        <p className="field">
            <label htmlFor="size-option">Size:</label>
            <select name="sizeOption" 
                    id="size-option" 
                    defaultValue={props.size}
                    onChange={onSizeChange}>
                {/* <option value="7">7</option>     */}
                {/* 함수로 불러주기 */}
                {optionSize()}
            </select>         
        </p>        
    )
}

function ProColor(props){
    // optionSize
    function optionColor(){
        // var sizes = window.Indata.allSize;
        // console.log(sizes);
        // 배열을 가져와서 또 하나의 작업을 할 수 있는 것 : map
        return props.colors.map(
            function(room){
                return (<option value={room} key={room}>{room}</option>)
            }
        )
    }
    function onColorChange(event){
        props.handleColorChange(event.target.value);
    }
    // basic -> <select>
    return(
        <p className="field">
            <label htmlFor="color-option">Color:</label>
            <select name="colorOption" 
                    id="color-option" 
                    defaultValue={props.color}
                    onChange={onColorChange}>
                {/* <option value="7">7</option>     */}
                {/* 함수로 불러주기 */}
                {optionColor()}
            </select>         
        </p>        
    )
}

function ProSource(props){
    // var [초기값, 상태에 따라 변하는 값]
    var [size, setSize]=React.useState(9);
    var [sizes, setSizes]=React.useState(window.Indata.allSize);
    var [color, setColor]=React.useState("green");
    var [colors, setColors]=React.useState(window.Indata.allColor);

function handleSizeChange(selcetedSize){
    var availableColor = window.Indata.bySize[selcetedSize];
    setColors(availableColor);
    setSize(selcetedSize);
    if(availableColor.indexOf(color) === -1){
        setColor(availableColor[0]);
    }
}
function handleColorChange(selcetedColor){
    var availableSize = window.Indata.byColor[selcetedColor];
    console.log(availableSize)
    setSizes(availableSize);
    setColor(selectedColor);
    if(availableSize.indexOf(size) === -1){
        setSize(availableSize[0]);
    }
}
    return(
        <div className="custom">
            <div className="srcImg">
                {/* <ProImg color="blue"/>  */}
                <ProImg color={color}/> 
            </div>
            <div className="selector">
                {/* <ProSize size={8}/> */}
                <ProSize 
                    size={size} 
                    sizes={sizes}
                    handleSizeChange={handleSizeChange}/>
                <ProColor 
                    color={color} 
                    colors={colors}
                    handleColorChange={handleColorChange}/>
            </div>
        </div>
    )
}
//render
ReactDOM.render(
    <ProSource/>,document.getElementById("box")
)
})()