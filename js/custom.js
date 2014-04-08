function putBlockScopeData () {
	window.iFrameInputData = "'use strict';" + "\n"+
"var firstName = 'Richard';" + "\n"+
"{" + "\n"+
  "var firstName = 'Bob';" + "\n"+
  "console.log (firstName); " + "\n"+
"}" + "\n" +
 "console.log (firstName); " ;


}