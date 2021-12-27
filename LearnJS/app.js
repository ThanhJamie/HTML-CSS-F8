var languages = [1, 2, 3, 4];

// languages.
if(languages > 3 ){
    languages.pop();
}else{
    languages.splice(-2,2)
}
console.log(languages);