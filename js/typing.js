
let inputValue = 'Hello, World!';
let intervalId;
let counter = 0;
const startTyping = () => {
    intervalId = setInterval(function () {
        let newValue = inputValue.substring(0, ++counter);
        document.getElementById('textInput').value = newValue;
    }, 1000);
}

const stopTyping = () => {
    clearInterval(intervalId);
    document.getElementById('textInput').value = "";
    counter = 0;
}

export default { startTyping, stopTyping };