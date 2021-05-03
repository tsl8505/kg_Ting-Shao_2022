
var args = process.argv.slice(2);
var dg = ['Zero','One','Two','Three','Four',
'Five','Six','Seven','Eight','Nine'];
arr = [];
args.forEach(function(arg, index) {
    if(isPositiveInteger(arg)){
        arr.push(toWords(arg))
    }else{
        arr.push("Cannot handle")
    }
});
process.stdout.write(arr.join(", ")+"\n");
function isPositiveInteger(s) {
    return /^\+?[0-9][\d]*$/.test(s);
  }
function toWords(s){
    string=""
    for (i in s){
        var j = parseInt(s[i])
        string += dg[j]
    }
    return string
}

