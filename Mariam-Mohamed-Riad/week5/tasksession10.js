function result(){
   const num1 = document.getElementById('num1');
   fnum=  parseFloat(num1.value);

   const num2 = document.getElementById('num2');
   snum=  parseFloat(num2.value);

   const op = document.getElementById('operator');
   operator=  op.value;

   const res = document.getElementById('resHolder');

   if(operator=="*"){
    console.log(fnum * snum);
    res.innerText= fnum * snum;
   }

    else if(operator=="+"){
    console.log(fnum + snum);
    res.innerText= fnum + snum;
   }

    else if(operator=="-"){
    console.log(fnum - snum);
    res.innerText= fnum - snum;
   }

    else{
    console.log(fnum / snum);
    res.innerText= fnum / snum;
   } 

   confirm.log('done')
}