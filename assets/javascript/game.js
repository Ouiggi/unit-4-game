var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/hotWheels.jpg", "./assets/images/beanies.jpg", "./assets/images/pogs.jpg", "./assets/images/pokemon.jpg"];

	function ranNum () {
		targetNumber = Math.floor(Math.random() * 102) + 19;
	}

	function toyReset () {
		for (var i = 0; i < images.length; i++) {
			var toys = $("<img>");
			toys.addClass("toys toy-"+(i));
			toys.attr("src", images[i]);
			toys.attr("value", (Math.floor(Math.random() * 12) + 1));
			toys.attr("height", "100");
			$("#toyPics").append(toys);
		}
	}

	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$("#toyPics").empty();
	}

	function totalReset () {
		ranNum ();
		counter = 0;
		resetHTML ();
		toyReset ();
	}

	ranNum();
	resetHTML ();
	toyReset ();

	function toysClick () {
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
			wins++;
			totalReset();
		}
		else if (counter > targetNumber) {
			losses++;
			totalReset();
		};
	};

	$(document).on("click", ".toys", toysClick);
