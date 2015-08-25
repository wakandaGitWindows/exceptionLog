
var TextReader = require("./textreader");


        var line =10;
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
