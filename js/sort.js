$(function() {
	$('.section_portfolio_content_sort button').click(function(){
			let get_id=this.id;
			let get_current=$('.section_portfolio_content_cards .' + get_id);
			
			$('.section_portfolio_content_cards_card').not(get_current).hide(500);
			get_current.show(500);
  });
	  $('#showall').click(function() {
	  $('.section_portfolio_content_cards_card').show(500);                     
	  });
});