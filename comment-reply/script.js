var  btn1 = document.getElementById('like');
var i = 0;
btn1.addEventListener("click", function(){
	i = i+1;
	this.children[0].innerHTML = i;
	
	
});
var btn2  = document.getElementById('reply');
var j=0;
btn2.addEventListener("click", function(){
	j++;
	if(j>1){
		return;
	}
	var comment= document.getElementById('wellcontainer') ;
	var str = '<textarea class="form-control" rows="2" id="comment"></textarea>';
	comment.insertAdjacentHTML('beforeend',str);


});

	
     
	
