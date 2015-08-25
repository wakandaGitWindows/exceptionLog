
var TextReader = require("./textreader");



function getLog(request, response) { 
         
        var line =20;
    	var logFolder  = new Folder( solution.getFolder().path+"logs");

		var file = logFolder.firstFile;

		var encoding = "utf8";

		var tr       = new TextReader(file, encoding);

		var lastLine = tr.getLastLines(line);
		
		var logContent;
		for( var i =0; i<lastLine.length  ; i++)
		{
			logContent="<Strong style='color:red'> ---> </Strong> "+lastLine[i]+"<br><br>"+logContent ;
		}		  	 	
  	
  	
    return logContent;
}

