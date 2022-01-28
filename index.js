var   list = [];
var show = document.getElementsByClassName("show")[0];
 function search(){
    var one = event.target.value;
    for(var n = 0; n < 10; n++){
    document.getElementsByClassName("job")[n].style.display = "none";}
    if(event.keyCode == 13 && event.target.value != ""){
        list.push(one.toUpperCase());
        for(var z = 0; z < list.length ; z++){
            show.children[z].innerHTML = list[z] + '<span class="show2" onclick="del()"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path fill="#FFF" fill-rule="evenodd" d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"/></svg></span>';
            show.children[z].className = "show-1";
            show.children[z].style.display = "flex";}
        for(var e = 0; e < 10; e++){
            var counter = 0;
            var parent = document.getElementsByClassName("job")[e];
            var child1 = parent.children[3];
                for(var f = 0 ; f < 5; f++){
                    var child2 = child1.children[f];
                    txtValue = child2.textContent || child2.innerText;
                    for(var d = 0; d <= list.length; d++){
                        if(txtValue.toUpperCase() == list[d]){
                            counter += 1;}
                            if(counter == list.length){
                                document.getElementsByClassName("job")[e].style.display = "flex"; counter = 0;}}}}
                                event.target.value = "";}}

function clear23(){
    location.reload()}

function del(){
    var text = event.target.parentElement.innerText;
    for (var s = 0; s < list.length;s++){
        if(text == list[s]){
            list.splice(s,1)
            event.target.style.display = "none";
            event.target.parentElement.style.display = "none"
            for(var e = 0; e < 10; e++){
            var counter = 0;
            var parent = document.getElementsByClassName("job")[e];
            var child1 = parent.children[3];
                for(var f = 0 ; f < 5; f++){
                    var child2 = child1.children[f];
                    txtValue = child2.textContent || child2.innerText;
                    for(var d = 0; d <= list.length; d++){
                        if(txtValue.toUpperCase() == list[d]){
                            counter += 1;}
                            if(counter == list.length){
                                document.getElementsByClassName("job")[e].style.display = "flex"; counter = 0;}}}}}}}

