function main(){
  $('.skillset').hide();
  $('.skillset').fadeIn(10);
  $('.projects').hide();
 
  $('.projects-button').on('click', function(){
    $(this).next().slideToggle(400);
  $(this).text('Projects Viewed');
  }); 
}

$(document).ready(main);
