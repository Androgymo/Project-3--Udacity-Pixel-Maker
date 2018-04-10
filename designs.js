// When size is submitted by the user, call makeGrid()

$(function(){
		
	$("#sizePicker").on("submit", function makeGrid(grid){

		var rows = $("#input_height").val(); // # of the grid height
		var columns = $("#input_width").val(); // # the grid width
		


		for(var i = 1; i <= rows; i++){ 
			$("table").append("<tr></tr>");
			for(var j = 1; j <= columns; j++){
				$("tr:last").append("<td></td>");
				$("td").addClass("cells");
			}
			
			$(".cells").click(function(event){
				var color = $("#colorPicker").val();
				$(event.target).css("background-color", color); 
			})
			grid.preventDefault();
		}
	});
});







// Your code goes here