const incrementBtn = document.querySelector('.btn_increment');
const decrementBtn = document.querySelector('.btn_decrement');
const resetBtn = document.querySelector('.btn_reset');

const count = document.querySelector('.count');

// Arrow function

// Callback function
incrementBtn.addEventListener('click', (e) => {
    console.log(e.target.classList);
    count.innerHTML++;
});

decrementBtn.addEventListener('click', () => {
    // Implicit return
    // if(parseInt(count.innerHTML) === 0) return;

    // Explicit return
    // if(parseInt(count.innerHTML) === 0) {
    //     return;
    // }

    // Ternary Operator
    return (parseInt(count.innerHTML) === 0) ? true : count.innerHTML--;

});

resetBtn.addEventListener('click', () => {
    count.innerHTML = 0;
});


// placeholder
const getLanguages = "dafafa";

// => Fat Arrow
// -> Skinny Arrow

const getLanguage = function (lang){
    console.log(lang);
}
getLanguage('Python');


// getLanguage('Python');
// function getLanguage (lang){
//     console.log(lang);
// }

// console.log(newn);

//     const newn = 'Hello'

// Arguments
// Parameter




