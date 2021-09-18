$(window).on('load',function(){
  $('.loading').fadeOut(5000,function(){
      $('.load').fadeOut(2000);
  });
})
AOS.init({
duration: 1200,
})


$('.container-sliders').flickity({
    cellAlign : 'center',
    wrapAround : true,
    prevNextButtons :true,
    contain:true,
    pageDots: true,
    adaptiveHeight:true,
    autoPlay :2000,
    on :{
     ready: function(){
       let dotted = $('.flickity-page-dots'),
       paging = ('.slider-bottom .dotted')
       dotted.appendTo(paging);
     }
   }
  })

function a(a){
  if($(a).next().hasClass('flickity-viewport')){
    $('.slider-item-text').fadeIn(0.5)
  }
}

// window.onscroll=function(){myFunction()};
// function myFunction(){
//   if(document.body.scrollTop>2462 || document.documentElement.scrollTop>2462)
//   {
//     $('.tecnical-tit').fadeIn(2000);
//     $('."techincal-tit-content"').fadeIn(5000);
//     $('.bot-content').fadeIn(8000);
//   }
// }


$('.info-sliders').flickity({
  cellAlign : 'center',
  wrapAround : true,
  prevNextButtons :true,
  contain:true,
  pageDots: false,
  adaptiveHeight:true,
  autoPlay:10000,
  on :{
   ready: function(){
     let dotted = $('.flickity-page-dots'),
     paging = ('.slider-bottom .dotted')
     dotted.appendTo(paging);
   }
 }
})

$('.brand-sliders').flickity({
  cellAlign : 'center',
  wrapAround : true,
  prevNextButtons :false,
  contain:true,
  pageDots: false,
  adaptiveHeight:true,
  autoPlay:5000,
  on :{
   ready: function(){
     let dotted = $('.flickity-page-dots'),
     paging = ('.slider-bottom .dotted')
     dotted.appendTo(paging);
   }
 }
})
window.addEventListener('scroll',function(){
  if(document.documentElement.scrollTop>300){
      document.querySelector('.btn-to-Top').classList.add('fix');
  }
  else
  {
   document.querySelector('.btn-to-Top').classList.remove('fix');
  }
})
const btn = document.querySelector('.fix-to-top');
$(btn).click(function(){
window.scrollBy(
{
 top:-document.body.offsetHeight,
 behavior:'smooth'
}
)
})