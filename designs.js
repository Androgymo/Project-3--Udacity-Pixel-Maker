$(function(){
	$('#sizePicker').submit(function createGrid(event) {  
	  	$('table tr').remove(); //clear the table
	  	                         
		var rows = $('#input_height').val();  
		var cells = $('#input_width').val();  
	  
	  	for(var i = 1;i <= rows; i++) {
	    	$('table').append("<tr></tr>");
	    	for (var j = 1;j <= cells; j++) {
	      		$( 'tr:last').append("<td></td>");         
	      		$('td').addClass('cells');
	   		}

	   		event.preventDefault(); 
	   		
	   		$(".cells").click(function(draw){
	   			var color = $("#colorPicker").val();
	   			$(draw.target).css("background-color", color);
	   		});      
	 	}

	});
});

