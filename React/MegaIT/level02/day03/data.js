window.Indata={
    // 배열 만들기(함수형태)
    // a는 최소값, b는 최대값

    // allSize()()
    // allSize()(7,12)
    // allSize(function(){})(7,12)
    // allSize(function(small,large){})(7,12)
    // allSize(function(small,large){
    //     배열
    //     for문
    // })(7,12)
    allSize:(
        function(small,large){
            var sized =[];            
            for(i=small;i<=large;i++){
                sized.push(i);
                sized.push(i+0.5);
            }
            return sized;
        }
    )(7,12),
    allColor:["red","blue","green","brown"],
    bySize:{
        "7":["red","green"],
        "7.5":["red","brown"],
        "8":["red","blue","green","brown"],
        "8.5":["blue","green"],
        "9":["red","blue","green"],
        "9.5":["red","green","brown"],
        "10":["blue"],
        "10.5":["red","blue","green","brown"],
        "11":["red","green","brown"],
        "11.5":["red","blue","brown"]
    },
    byColor:{
        "red":["7","7.5","10.5","11","11.5"],
        "blue":["7","7.5","8","8.5","9","11.5"],
        "green":["7","7.5","8","8.5","9","9.5"],
        "brown":["8","8.5","9","10","10.5","11","11.5"]
    }
}