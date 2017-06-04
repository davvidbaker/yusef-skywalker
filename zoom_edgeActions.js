/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_Stage}", "scroll", function(sym, e) {
         // insert code for scroll event here
         // Map scroll position to timeline position
         var animationHeight = 5000;
         var animationWidth = 600;
         var stageHeight = sym.$("Stage").height();
         var stageWidth  = sym.$("Stage").width();
         var scrollPosy = sym.$("Stage").scrollTop();
         var scrollPosx = sym.$("Stage").scrollLeft();
         var duration = sym.getDuration();
         // Change the text in an element
         sym.$("Text").html(scrollPosy);
         sym.$("Text2").html(time2);
         var percent = scrollPosy / (animationHeight - stageHeight);
         var percent2= scrollPosx / (animationWidth - stageWidth);
         var time = duration * percent;
         var time2= duration * percent2;
         // Update timeline
         if (time > 5000) {
         	time = 0;
         	sym.$("Stage").scrollTop(0);
         }
         sym.stop(time);
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.getSymbol("green").stop(time2);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         sym.stop(2000);
         sym.$("Stage").scrollTop(2000);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'green'
   (function(symbolName) {   
   
   })("green");
   //Edge symbol end:'green'

})(jQuery, AdobeEdge, "EDGE-102797626");