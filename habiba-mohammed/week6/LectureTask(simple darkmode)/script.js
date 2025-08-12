function mode(){
    var mode = document.getElementById('mode');
    const all = document.getElementById('all');
    let modevalue = mode.innerText;

    if(modevalue == 'dark')
    {
        all.classList.add('dark');
        all.classList.remove('light');
        mode.innerText = 'light';
    }
    else if(modevalue =='light')
    {
        all.classList.add('light');
        all.classList.remove('dark');
        mode.innerText = 'dark';
    }
}

