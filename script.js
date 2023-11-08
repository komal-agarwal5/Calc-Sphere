const disp=document.querySelector('.screen');
const buttona=document.querySelectorAll('.btn');
buttona.forEach((item) => {
    item.onclick=() => {
        if(item.dataset.button==='C')
            disp.value='';
        else if(item.dataset.button==='CE')
        {
            let str=disp.value;
            disp.value=str.substr(0,str.length-1);
        }
        else if(item.dataset.button==='=')
                disp.value = eval(disp.value);
        else 
            disp.value += item.dataset.button;
        }
})