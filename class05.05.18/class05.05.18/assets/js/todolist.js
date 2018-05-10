/*alert('Beyonce')*/

//'Check off specific tasks by clicking on them'
$('ul').on('click','li',function(){
	//alert('You clicked an LI');
	// $(this).css({
	// 	color: 'gray',
	// 	textDecoration: 'line-through'
	// });

//if <li> is already gray
//turn it black
//else
//turn it gray
// if($(this).css('color')==='rgb(128, 128, 128)'){
// 	console.log('It is currently gray');

// 	$(this).css({
// 		color:'black',
// 		textDecoration: 'none'
// 	});

// }else{
// 	$(this).css({color:'gray'});
// };


$(this).toggleClass('completed');
});
// Click on the X to delete a task
$('li').on('click', 'span',function(event){
  alert('you clicked on the span');
  event.stopPropagation();
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
});
//
// $('ul').click( function( ){
// 	   alert('You clicked on the UL');
// 	});
//
// $('body').click( function( ){
// 	   alert('You clicked on the body');
// 	});
//
// $('#container').click( function( ){
// 	   alert('You clicked on the container');
// 	});

$('#inputText').keypress( function( ){
    console.log('key pressed!');
    if(event.which === 13){
      var inputValue = $('#inputText').val("");
      $('ul').append('<li>'+inputValue+ ' <span>X</span></li>')
    }

  });
