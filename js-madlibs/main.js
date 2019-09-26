'use strict';
document.getElementById('btn').addEventListener('click', madlib);





function madlib() {
    let verb = document.getElementById('part1').value;
    let thing = document.getElementById('part2').value;
    let place = document.getElementById('part3').value;
    let food = document.getElementById('part4').value;
    let noun = document.getElementById('part5').value;
    let story = "The cat " +  verb  + " 6 feet into the air. " +  thing  + " The Madgician,a notorious villain took your " +  place  + " away and god barfed all over the place "  + " He had too much " +  food  + " this morning and you know the story from here." + " The cat that can jump " +  noun  + " and ran away with the spoon"
    document.getElementById('para').innerHTML = story;

    

}
