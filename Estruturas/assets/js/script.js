var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber=0;

// $(function() {
// 	$(".RedOrGreen [vo]").keyup(function( e ) {
// 		let val = currentNumberWrapper,
// 			jElem = $(this),
// 			addClass, removeClass;
// 		if ( val !== "" && !isNaN( val ) ) {
// 			val = Number( val );
// 			addClass = ( val > 0 ? "numPos" : "numNeg");
// 			removeClass = ( val > 0 ? "numNeg" : "numPos" );

// 			jElem.addClass( addClass );
// 			jElem.removeClass( removeClass );
// 		}
// 	});
// });




function increment(){
    currentNumber=currentNumber+1;
    currentNumberWrapper.innerHTML=currentNumber

}

function decrement(){
    currentNumber=currentNumber-1;
    currentNumberWrapper.innerHTML=currentNumber

}

