/////////////////////////////////////////////////////////
////Starts transition to work hours chart
//References: 
//    https://github.com/nbremer/Chord-Diagram-Storytelling

async function Frame4() {

  //Show & run progress bar
    runProgressBar(time=700*3);
    
  //Fade the background
    fadeBG.transition().duration(fade).attr("opacity", 0.9)
    
  //Remove the previous caption
    bounds.selectAll(".caption").transition().duration(fade)
        .attr("opacity", 0)
    
  //Change the text
    changeTopText(newText = "To put things into perspective,",
	loc = 4/2, delayDisappear = 0, delayAppear = 1, finalText = true, xloc = dimensions.boundedWidth / 2, w = 350);
    
  //Add bottom text
    changeBottomText(newText = "let's compare to hours worked",
	loc = 1/2, delayDisappear = 0, delayAppear = 3, finalText = true, xloc = dimensions.boundedWidth / 2, w = 350);
    
}