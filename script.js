// Needs refactoring so it isn't so redundant.


// -------------------------------------
// TADA
// -------------------------------------
$('#tada').click(tada);

function tada() {
	$(".person").attr("class", "person is-ready");

	$(".person").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
		function (e) {
			$(".person").attr("class", "person");
		});
}
// ------------------------------------
// DISCO
// ------------------------------------
$('#disco').click(function () {
	$(".person").attr("class", "person disco");
});

$('#nerdmachine').click(tada)
