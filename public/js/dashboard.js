const sidebar = document.querySelector('#sidebar');
const header = document.querySelector('#header');
const body = document.querySelector('#body');
const mainBody = document.querySelector('#mainBody');
const selectToggleButton = document.querySelector('#toggleButton');
// const bodyCard = document.querySelector('#bodyCard');
// const barsIcon = document.querySelector("#barsIcon");
    

selectToggleButton.addEventListener('click', () => {
    const currentWidth = sidebar.offsetWidth;
    const screenBody = mainBody.offsetWidth;
    console.log(screenBody);

    if(currentWidth == 50 || currentWidth == 1){
        sidebar.style.minWidth = "230px";
        if(screenBody > 470){
           body.style.paddingLeft = "250px"; 
        }
        
    }else{
        sidebar.style.minWidth = "0px";
        if(screenBody > 470){
            body.style.paddingLeft = "15px";
        }
    }
});