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
    allColor:["red","blue","green","brown"]
}