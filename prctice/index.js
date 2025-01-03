const qrinput = document.getElementById('qr-input');
const qrbutton = document.getElementById('qr-button');
const qrimg = document.getElementById('qr-img');

qrbutton.addEventListener('click' , () => {

    const inputValue = qrinput.value;

    console.log(inputValue);
    
    if(!inputValue){
        alert("Please Enter the value");
        return;
    }
    else{
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        qrimg.alt = `QR Code Generate for ${inputValue}`;
    }
});