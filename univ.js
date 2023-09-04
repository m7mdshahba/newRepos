// let btn = document.getElementById('bt');
// window.onscroll = function ()
// {
//     if(scrollY >= 400)
//     btn.style.display='block'
//     else{
//         btn.style.display='none'
//     }
// }

// btn.onclick =function(){
//     scroll({
//         left:0,
//         top:0,
//         behavior:'smooth'
//     })
// }


let btn =document.getElementById('bt')
window.onscroll =function(){
  if(scrollY >= 400)
  btn.style.display = 'block' ;
  else{
    btn.style.display ='none'
}
}
btn.onclick= function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    })
}