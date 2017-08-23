// $('.processPhotos img').on('click', function(){
//   if ($(this).css('height', '20em')){
//     $(this).css('height', '40em');
//     console.log('make big!');
//   }
//   else if ($(this).css('height', '40em')){
//     $(this).css('height', '20em');
//     console.log('make little');
//   }
// });


$(document).ready(function () {
        let small={width: "20em",height: "auto"};
        let large={width: "35em",height: "auto"};
        let count=1;
        $(".processPhotos img").css(small).on('click',function () {
            $(this).animate((count==1)?large:small);
            count = 1-count;
        });
    });
