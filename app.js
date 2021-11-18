let plus = document.querySelector("#plus");
let minus = document.querySelector("#minus");
let reset = document.querySelector("#reset");
let numberbox = document.querySelector("#my-number");
let my_number = 0;
plus.addEventListener('click', function(){
    my_number = numberbox.value;
    // my_number = my_number + 1;
    my_number++;
    numberbox.value = my_number;
})
//some as:
minus.addEventListener('click', () => {
    my_number = numberbox.value;
    // my_number = my_number - 1;
    my_number--;
    numberbox.value = my_number;
})

reset.addEventListener('click', function(){
    my_number = 0;
    numberbox.value = my_number;
})