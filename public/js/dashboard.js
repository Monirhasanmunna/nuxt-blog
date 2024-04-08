
document.querySelector('#toggleButton').addEventListener('click', () => {
    const sidebar = document.querySelector('#sidebar');
    const currentWidth = sidebar.offsetWidth;
    const screenBody = document.querySelector('#mainBody');
    const header = document.querySelector('#header');
    const body = document.querySelector('#body');

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