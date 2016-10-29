document.getElementById('go').onclick = function(){
    var text= document.getElementById('texter').value;
    var add = text + "...thugify"
    document.getElementById('output').innerHTML = add;

}
