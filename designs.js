//1.  Select color input

// Select size input

// When size is submitted by the user, call makeGrid()
$(function (){
	$("#sizePicker").submit(function makeGrid(grid){
		var rows = $("#input_height").val(); // This holds the value of the grid height
		var columns = $("#input_width").val(); // This holds the value of the grid width
		for(var i = 1; i <= rows; i++){ 
			$("table").append("<tr></tr>");
			for(var j = 1; j <= columns; j++){
				$("tr:last").append("<td></td>");
				$("td").addClass("cells");
			}
			grid.preventDefault();
			$(".cells").click(function(event){
				var color = $("#colorPicker").val();
				$(event.target).css("background-color", color); 
			})
		}
	});
});







// Your code goes here