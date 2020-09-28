 $("#addsite").on("click",function(){
   let url = prompt("请输入添加网址")
   if(!url) return 
   if(url.indexOf('http://')!==-1){
       url+='http://'
   }
   $(` <li>
   <a href="${url}"><div>
   <div>${url[0]}</div>
   <span>${url}</span>
</div></a></li>`).insertBefore($("#addsite").parent().parent())
})