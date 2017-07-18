$(document).ready(function () {
var question1 = $('.answer1').val();
var question2 = $('.answer2').val();
var question3 = $('.answer3').val();
var question4 = $('.answer4').val();
var correct = 0;
var incorrect = 0;
var counter = 25;
var interval = setInterval(function() {
	 counter--;
	 $('#quizTimer').html(counter);
   	if (counter == 0) {
        clearInterval(interval);
		if (question1 == 'George Washington') {
			correct++;
		}else if (question1 !='George Washington') {
			incorrect++;
		}

		if (question2 == '4') {
			correct++;
		}else if (question2 !='4') {
			incorrect++;
		}

		if (question3 == 'Over 9000') {
			correct++;
		}else if (question3 !='Over 9000') {
			incorrect++;
		}

		if (question4 == '1 Trillion Dollars') {
			correct++;
		}else if (question4 !='1 Trillion') {
			incorrect++;
		}

		$('.wrapper').html("<h1>You got " + correct + " question(s) correct, you missed " + incorrect + ".</h1>");
    }
}, 1000);

$('.answer1').change(function() {
	question1 = $(this).val();

console.log("question1", question1)
});
$('.answer2').change(function() {
	question2 = $(this).val();

console.log("question2", question2)
});
$('.answer3').change(function() {
	question3 = $(this).val();

console.log("question3", question3)
});
$('.answer4').change(function() {
	question4 = $(this).val();

console.log("question4", question4)
});



});
