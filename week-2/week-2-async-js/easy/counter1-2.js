let count = 0;


const callback = () => {
    count++;
    console.log(count);
    // setTimeout(callback,1000);      


}
// setTimeout(callback,1000);      

setInterval(callback, 1000)  