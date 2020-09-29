 let items = window.localStorage.getItem("navSite") 
 if(!items)
 { 
        items = [{
        log:"A",
        logType:'text',
        url:"https://www.acfun.cn/",
        alias:"acfun"
     },{
        log:"B",
        logType:'text',
        url:"https://www.bilibili.com/",
        alias:"bilibili"
     }
    ] 
    saveLocltionSession()
}
else{ 
    items=JSON.parse(items)
}
buildCard()

function buildCard(){
$("ol>li:not(#last)").remove()
items.forEach(node=>{
    $(`
    <li>
    <a href="${node.url}"><div>
    <div>${node.log[0]}</div>
    <span>${node.alias}</span>
    </div></a></li>
`).insertBefore($("#last"))
}) 
}

function saveLocltionSession(){
    window.localStorage.setItem("navSite",JSON.stringify(items))
}


 $("#addsite").on("click",function(){
   let url = prompt("请输入添加网址")
   if(!url) return 
   if(url.indexOf('http://')===-1){
       url='http://'+url
   } 
   var b = url.match(/http:\/\/w*\.*(\w*)/)
   var obj={
    log:b[1][0].toUpperCase(),
    logType:'text',
    url:url,
    alias:b[1]
   }
   items.push(obj) 
   saveLocltionSession()
   buildCard()
})
 