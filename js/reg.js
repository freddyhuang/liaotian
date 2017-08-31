 function siblings(elem){ //参数elem就是想取谁的兄弟节点，就把那个元素传进去 
    var nodes=[]; //定义一个数组，用来存elem的兄弟元素 
    var previ=elem.previousSibling; 
    while(previ){ //先取o的哥哥们 判断有没有上一个哥哥元素，如果有则往下执行 previ表示previousSibling 
        if(previ.nodeType===1){ 
            nodes.push(previ); 
        } 
        previ=previ.previousSibling; //最后把上一个节点赋给previ 
    } 
    nodes.reverse(); //把顺序反转一下 这样元素的顺序就是按先后的了 
    var nexts=elem.nextSibling; //再取elem的弟弟 
    while(nexts){ //判断有没有下一个弟弟结点 nexts是nextSibling的意思 
        if(nexts.nodeType===1){ 
            nodes.push(nexts); 
        } 
        nexts=nexts.nextSibling; 
    } 
    return nodes; //最后按从老大到老小的顺序，把这一组元素返回 
} 

function addClass(obj,cName) {
    var arr = obj.className.split(' ').concat(cName.split(' '));
    for(var i=0;i<arr.length;i++){
        for(var j=arr.length-1;j>i;j--){
            (arr[j]=='')&&arr.splice(j,1);
            (arr[i]==arr[j])&&arr.splice(j,1);
        }
    }
    obj.className = arr.join(' ')
}

function removeClass(obj,cName) {
    var arr = obj.className.split(' ');
    var arr1 = cName.split(' ');
    for(var i=0;i<arr1.length;i++)for(var j=arr.length-1;j>=0;j--)(arr1[i] == arr[j])&&arr.splice(j,1);
    obj.className = arr.join(' ');
}


var  aSex= document.getElementsByClassName("sex")[0]; //获取类名
var nowMenu = aSex.getElementsByTagName('p');
for(var i=0; i<nowMenu.length; i++){
    nowMenu[i].index = i;  //设置下标值
    nowMenu[i].onclick = function(){
        var index = this.index;  //获取下标值
        var nowIndex = nowMenu[index];  //确认当前点击的标签
        for(var m=0; m<nowMenu.length-1; m++){
           addClass(this,'select');  //改变当前点击元素背景
           removeClass(siblings(nowIndex)[m],'select')  //改变当前点击的兄弟元素背景
        }
    }
}