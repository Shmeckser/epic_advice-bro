let options = {
    method: 'GET'
}
async function displayadvice() {
    const raw = await fetch("https://api.adviceslip.com/advice");
    slip_res = await raw.json();
    document.getElementById("quote_id").innerHTML = "Advice #" + slip_res.slip.id;
    document.getElementById("quote").innerHTML = slip_res.slip.advice;
};
//if( screen.width <= 1300 ) {
//    document.getElementById("borderline").innerHTML = <img src="images/pattern-divider-mobile.svg"></img>;
//} else document.getElementById("borderline").innerHTML = <img src="images/pattern-divider-mobile.svg"></img>;