const sidebar = document.querySelector('#sidebar');
const header = document.querySelector('#header');
const mainBody = document.querySelector('#mainBody');
const selectToggleButton = document.querySelector('#toggleButton');
// const bodyCard = document.querySelector('#bodyCard');
// const barsIcon = document.querySelector("#barsIcon");
    

selectToggleButton.addEventListener('click', () => {
    const currentWidth = sidebar.offsetWidth;
    console.log(currentWidth);
    if(currentWidth == 50 || currentWidth == 1){
        sidebar.style.minWidth = "230px";
        console.log('reset 250px');
        // bodyCard.style.marginLeft = "250px";
        // barsIcon.classList.remove('rotate');
    }else{
        sidebar.style.minWidth = "0px";
        console.log('set 0px');
        // barsIcon.classList.add('rotate');
    }
});