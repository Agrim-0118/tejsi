function lovecalculator() {
    var lovescore=Math.random()
    lovescore=lovescore*100
    lovescore=Math.floor(lovescore)+1
    



    var result=document.getElementById("result");
    result.textContent = (lovescore);
}