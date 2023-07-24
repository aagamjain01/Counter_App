const countValue = document.querySelector('#counter');

const increment = () => {
    //Get the value from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1 ;
    //See the value onto UI
    countValue.innerText = value;
}

const decrement = () => {
    let value = parseInt(countValue.innerText);
    value = value - 1;
    countValue.innerText = value;
}