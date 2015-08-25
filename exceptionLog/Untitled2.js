
var logFolder  = new Folder( solution.getFolder().path+"logs");

var file = logFolder.firstFile;

var lineNumbers=5;
var unsortedLines=[];
var sortedLines=[];

var stream = TextStream(file, "read");  // open the stream in write mode

var line = 1 ;  



while(stream.end( )==false)
{
    
    
    var currentLineContent = stream.read("") ; 
    
    if(currentLineContent=="") continue;
    
    else
    {
	     unsortedLines[line%lineNumbers]= { content:currentLineContent,
	     					   lineNumber:line
	     						};

		line++;
	}
}





for(var i = 0 ; i<lineNumbers-1 ; i++)
{
	
	
		if(unsortedLines[i].lineNumber<unsortedLines[i+1].lineNumber)
		{
			
			for(j2=i ;  j2<lineNumbers ;j2++ )
			{
				sortedLines.push(unsortedLines[j2].content);
			}
			
			for(var j =0 ; j <i ; j++)
			{
				sortedLines.push(unsortedLines[j].content);
				
			}
			
			break;
			
		}
	
	
}

sortedLines;