window.addEventListener("load", function(){
    this.document.addEventListener("mouseup", function(){
        const selectedText = window.getSelection().toString();
        if(selectedText.length > 0){
            console.log("Text is highlighted: ", selectedText);
        }
    })
});