const array = [['Java' ,'Python' ],['HTML' ,'CSS']];
for(let i = 0; i < array.length; i++){
    for(let x = 0; x < array[i].length; x++)
    if(array[i][x] == 'Java'){
        console.log(array[i][x] + ' Found')
    }else{
        console.log('looking for ' + array[i][x]);
    }
}