var i = parseInt(window.prompt("enter the number"));
if(i<0){
    window.alert("enter a valid number greater than zero");
}
else{
    for(; i>=0; i--){
        // window.console.log(i);
        document.write(" "+ i + "<br>");
    }
}