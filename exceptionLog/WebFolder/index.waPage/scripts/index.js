
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button11 = {};	// @Button
	var Button16 = {};	// @Button
	var button7 = {};	// @Button
	var Button13 = {};	// @Button
	var Button8 = {};	// @Button
	var Button17 = {};	// @Button
	var Button28 = {};	// @Button
	var Button26 = {};	// @Button
	var Button33 = {};	// @Button
	var button19 = {};	// @Button
	var Button48 = {};	// @Button
	var Button47 = {};	// @Button
	var Button50 = {};	// @Button
	var button18 = {};	// @Button
	var button17 = {};	// @Button
	var Button44 = {};	// @Button
	var Button43 = {};	// @Button
	var Button45 = {};	// @Button
	var Button38 = {};	// @Button
	var Button40 = {};	// @Button
	var Button39 = {};	// @Button
	var Button41 = {};	// @Button
	var button14 = {};	// @Button
	var Button31 = {};	// @Button
	var Button27 = {};	// @Button
	var Button29 = {};	// @Button
	var Button20 = {};	// @Button
	var Button23 = {};	// @Button
	var Button21 = {};	// @Button
	var Button22 = {};	// @Button
	var Button24 = {};	// @Button
	var button12 = {};	// @Button
	var button5 = {};	// @Button
	var button9 = {};	// @Button
	var button8 = {};	// @Button
	var Button15 = {};	// @Button
	var Button9 = {};	// @Button
	var Button11 = {};	// @Button
	var Button14 = {};	// @Button
	var button6 = {};	// @Button
	var button3 = {};	// @Button
	var Button3 = {};	// @Button
	var button2 = {};	// @Button
	var Button5 = {};	// @Button
	var button4 = {};	// @Button
	var Button10 = {};	// @Button
	var Button12 = {};	// @Button
	var exception5 = {};	// @Button
	var exception4 = {};	// @Button
	var exception3 = {};	// @Button
	var exception2 = {};	// @Button
	var exception1 = {};	// @Button
// @endregion// @endlock

// eventHandlers// @lock

	button11.click = function button11_click (event)// @startlock
	{// @endlock
		detail="trying to call a method on a null reference.     ";
		scenario="trying to call a method on a null reference.  ";
		code="var a = null; a.myFonction();   ";
		
		result=" Cannot read property 'myFonction' of null, ";
		functionName="jsref5";
		syncAll();
	};// @lock

	Button16.click = function Button16_click (event)// @startlock
	{// @endlock
		detail="thrown when a defined  variable  has  undefined  method.     ";
		scenario="we will try to  access an undefined  method of an defined  object   ";
		code="var myVariable ; myVariable.myFunction() ;   ";
		
		result=" Cannot read property 'myFunction' of undefined ";
		functionName="jsref4";
		syncAll();
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		detail="thrown when a defined  variable  has  undefined  property.    ";
		scenario="we will try to  access an undefined  property of an defined  object ";
		code="var myVariable ; myVariable.a ;   ";
		
		result="  Cannot read property 'a' of undefined  ";
		syncAll();
	};// @lock

	Button13.click = function Button13_click (event)// @startlock
	{// @endlock
		detail="thrown when a function  is undefined.  ";
		scenario="we will try to  call an undefined function";
		code="myFonction(); ";
		
		result=" myFonction is not defined ";
		functionName="jsref2";
		syncAll();
		
	};// @lock

	Button8.click = function Button8_click (event)// @startlock
	{// @endlock
		detail="thrown when a variable  is undefined. ";
		scenario="we will try to   call an undefined variable";
		code="myVariable; ";
		result=" myVariable is not defined ";
		functionName="jsref1";
		syncAll();
	};// @lock

	Button17.click = function Button17_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	Button28.click = function Button28_click (event)// @startlock
	{// @endlock
			detail=' we try to catch an exception occured by saving a user twice with same name ';
		scenario='add a user and save it twice  ';
		code='   var newUser = directory.addUser("Henry", "123", "Henry Charles");  directory.save();    directory.save();';
		
		result='  The user name Henry already exists ';
		functionName="dscollection6";
		syncAll();
		
	};// @lock

	Button26.click = function Button26_click (event)// @startlock
	{// @endlock
		detail=' we try to catch an exception occured by saving a group twice with same name ';
		scenario='add a group and save it twice ';
		code='   var group = directory.addGroup("myGroupe", "myGroupe");   directory.save(); directory.save();';
		
		result='  The group name myGroupe already exists ';
		functionName="dscollection5";
		syncAll();
		
	};// @lock

	Button33.click = function Button33_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	button19.click = function button19_click (event)// @startlock
	{// @endlock
		detail=' giving "orderby" method wrong type of parameter that be sorted  ';
		scenario='1- retrieve entity collection of data class "person" via method all()   2- call the "orderby" method with parameter of a "personClass" ';
		code='  var entity = ds.Person.all().orderBy("attribute2");  entity;  ';
		
		result='  The  attribute is not the correct type  ';
		functionName="dscollection3";
		syncAll();
	};// @lock

	Button48.click = function Button48_click (event)// @startlock
	{// @endlock
		detail=' we will try to apply the method add( ) on collection and an entity of diffrent class  ';
		scenario='1- retrieve entity collection of data class "person" via method query   2- add an entity of class person2 to the entity collection';
		code='  var collection = ds.Person.query(" ID > 1 and ID <5 " );  collection.add( ds.Person2.first());  ';
		
		result='   This entity does not belong to the Person datastore class ';
		functionName="dscollection2";
		syncAll();
	};// @lock

	Button47.click = function Button47_click (event)// @startlock
	{// @endlock
		detail=' we will try to apply the method minus( ) on two collection of diffrent class  ';
		scenario='1- retrieve entity collection of data class "person" via method query  2- retrieve entity collection of data class "person2" via method query   3- apply the method minus()';
		code='  loginByPassword("hamza","123456");  var a = ds.Person.first(); a.remove();    ';
		
		result='  The entity collections come from incompatible datastore classes ';
		functionName="dscollection1";
		syncAll();
	};// @lock

	Button50.click = function Button50_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	button18.click = function button18_click (event)// @startlock
	{// @endlock
		detail=' Class permissions  ';
		scenario='remove permission : 1- Create a data class and directory users and group   2- in class permission menu , give the "remove" permission to the admin group   3- connect with a user that does not belong to admin group via method loginByPassword()  4- read an entity and then remove it .';
		code='  loginByPassword("hamza","123456");  var a = ds.Person.first(); a.remove();    ';
		
		result='   No permission to remove for the Person datastore class ';
		functionName="dspermission4";
		syncAll();
	};// @lock

	button17.click = function button17_click (event)// @startlock
	{// @endlock
		detail=' Class permissions  ';
		scenario='update permission : 1- Create a data class and directory users and group  2- in class permission menu , give the "update " permission to the admin group  3- connect with a user that does not belong to admin group via method loginByPassword()  4- read an entity , edit it and then save it ';
		code='   loginByPassword("hamza","123456");  var a = ds.Person.first();  a.name="myName";  a.save();   ';
		
		result='   No permission to update for the Person datastore class ';
		functionName="dspermission3";
		syncAll();
	};// @lock

	Button44.click = function Button44_click (event)// @startlock
	{// @endlock
		
		detail=' Class permissions  ';
		scenario='create permission : 1- Create a data class and directory users and group  2- in class permission menu , give the "create" permission to the admin group  3- connect with a user that does not belong to admin group via method loginByPassword()   4- create and entity and then save it';
		code='   loginByPassword("hamza","123456");  ds.Person.createEntity().save();   ';
		
		result='  No permission to create for the Person datastore class ';
		functionName="dspermission2";
		syncAll();
	};// @lock

	Button43.click = function Button43_click (event)// @startlock
	{// @endlock
		detail=' Class permissions  ';
		scenario='Read permission : 1- Create a data class and directory users and group 2- in class permission menu , give the "read" permission to the admin group 3- connect with a user that does not belong to admin group via method loginByPassword() 4- try to read entities of dataclass via method all(); ';
		code='  loginByPassword("hamza","123456");  ds.Person.all();   ';
		
		result='  No permission to read for the Person datastore class ';
		functionName="dspermission1";
		syncAll();
	};// @lock

	Button45.click = function Button45_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	Button38.click = function Button38_click (event)// @startlock
	{// @endlock
			
		detail=' saving entity with not unique attribute that should not be unique  ';
		scenario='saving entity de class car with duplicated registration number ';
		code=' var myEntity = ds.Car.createEntity();  myEntity.ID=3;   myEntity.color="yellow";  myEntity.RN="unique";  myEntity.save(); ';
		
		result='  Duplicated key ';
		functionName="dssave3";
		syncAll();
	};// @lock

	Button40.click = function Button40_click (event)// @startlock
	{// @endlock
		
		detail=' saving entity with null attribute that should not be null ';
		scenario='saving entity de class car with a null registration number  ';
		code=' var myEntity = ds.Car.createEntity();  myEntity.ID=3;  myEntity.color="yellow";  myEntity.save(); ';
		
		result='   Mandatory field is Null';
		functionName="dssave2";
		syncAll();
	};// @lock

	Button39.click = function Button39_click (event)// @startlock
	{// @endlock
		detail=' saving entity with duplicated ID';
		scenario='saving entity with duplicated ID = 1 ';
		code=' var myEntity = ds.Person.createEntity(); myEntity.ID=1; myEntity.name="myName"; myEntity.save();  ';
		
		result='   Duplicated key ';
		functionName="dssave1";
		syncAll();
	};// @lock

	Button41.click = function Button41_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	button14.click = function button14_click (event)// @startlock
	{// @endlock
		detail=' give a datastory function wrong type of data class attribute ';
		scenario='the "average" function excepted an "number" dataclass attribute , we will give it "string" type in stead  ';
		code=' ds.Person.average("name" );  ';
		
		result='   The name attribute is not the correct type ';
		functionName="dsw2";
		syncAll();
	};// @lock

	Button31.click = function Button31_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	Button27.click = function Button27_click (event)// @startlock
	{// @endlock
		detail="give a datastory function wrong parameter ";
		scenario='give the "average" function interger in stead of "dataClass attribute" ';
		code=' ds.Person.average(4);        ';
		
		result='   Wrong type for parameter #1, expected DataClass Attribute or String.';
		functionName="dsw1";
		syncAll();
	};// @lock

	Button29.click = function Button29_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	Button20.click = function Button20_click (event)// @startlock
	{// @endlock
		detail="The query( ) method searches for entities that meet the search criteria specified in queryString and (optionally) value, for all the entities in the datastore class or entity collection, and returns a new object of type EntityCollection containing all the entities that are found.";
		scenario='wrong parameter , in this case we will give the query a string variable in stead of an array ';
		code=' ds.Person.query("   name in :1  ", "name");         ';
		
		result='   Query cannot be analyzed ';
		functionName="dsquery4";
		syncAll();
	};// @lock

	Button23.click = function Button23_click (event)// @startlock
	{// @endlock
		detail="The query( ) method searches for entities that meet the search criteria specified in queryString and (optionally) value, for all the entities in the datastore class or entity collection, and returns a new object of type EntityCollection containing all the entities that are found.";
		scenario=' Wrong comparison operator ';
		code=' ds.Person.query("name *-+ :1  ", "aValue");  ';
		
		result='   Wrong comparison operator, ';
		functionName="dsquery3";
		syncAll();
	};// @lock

	Button21.click = function Button21_click (event)// @startlock
	{// @endlock
		detail="The query( ) method searches for entities that meet the search criteria specified in queryString and (optionally) value, for all the entities in the datastore class or entity collection, and returns a new object of type EntityCollection containing all the entities that are found.";
		scenario=' undefined placeholder : ":2" in stead of ":1" ';
		code=' ds.Person.query("name = :2", "aValue");                     ';
		
		result='  The query placeholder :2 is missing or null ';
		functionName="dsquery2";
		syncAll();
	};// @lock

	Button22.click = function Button22_click (event)// @startlock
	{// @endlock
		detail="The query( ) method searches for entities that meet the search criteria specified in queryString and (optionally) value, for all the entities in the datastore class or entity collection, and returns a new object of type EntityCollection containing all the entities that are found.";
		scenario=" undefined attribute in a query function ";
		code=' ds.Person.query("UndefinedAttribute = :1", "aValue");             ';
		
		result=' The "UndefinedAttribute" attribute cannot be found in The "Person" datastore class ';
		functionName="dsquery1";
		syncAll();
	};// @lock

	Button24.click = function Button24_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	button12.click = function button12_click (event)// @startlock
	{// @endlock
			
		xhr1 = new XMLHttpRequest();
		var a1  = "http://127.0.0.1:8081/getlog";
		xhr1.open('GET', a1);
		xhr1.send();	
		
		xhr1.onreadystatechange= function() {
		
		logServer=xhr1.response;
		
		console.log(logServer);
		
		WAF.sources.logServer.sync();
		
	
		
	}

	};// @lock

	button5.click = function button5_click (event)// @startlock
	{// @endlock
		detail="The console of the application provides an interface to log JavaScript actions.";
		scenario=" The following example adds a  messages to the console to display  an error:";
		code=" console.error('This is an Error' ) ;     ";
		
		result="  ERROR: This is an Error ";
		functionName="jsexp2";
		syncAll();
	};// @lock

	button9.click = function button9_click (event)// @startlock
	{// @endlock
		detail="The console of the application provides an interface to log JavaScript actions.";
		scenario=" The following example adds a  messages to the console to display  an INFO:";
		code=" console.info('This is an info' ) ;     ";
		
		result="  INFO: This is an Error ";
		functionName="jsexp3";
		syncAll();
	};// @lock

	button8.click = function button8_click (event)// @startlock
	{// @endlock
		detail="The EvalError object indicates an error regarding the global eval() function. ";
		scenario=" calling the function 'eval()' with invalid JS code (undefined variable) as argument ";
		code=" eval(' a  ');    ";
		
		result="   a is not defined ";
		functionName="jseval1";
		syncAll();
	};// @lock

	Button15.click = function Button15_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	Button9.click = function Button9_click (event)// @startlock
	{// @endlock
		detail="The TypeError object represents an error when a value is not of the expected type. ";
		scenario=" calling an object with function syntax   ";
		code="var a = {};  a();   ";
		
		result="  object is not a function";
		functionName="jstype2";
		syncAll();
	};// @lock

	Button11.click = function Button11_click (event)// @startlock
	{// @endlock
		detail="The TypeError object represents an error when a value is not of the expected type. ";
		scenario=" we will to  instantiate an object of type 'myType'    ";
		code="var myVariable= new myType();    ";
		
		result="  myType is not defined ";
		functionName="jstype1";
		syncAll();
	};// @lock

	Button14.click = function Button14_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		detail="A SyntaxError is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.  ";
		scenario=" we will try to not close a '{' ;   ";
		code="if(true){      ";
		
		result="  Unexpected end of input ";
		functionName="jssyn2";
		syncAll();
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		detail="A SyntaxError is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.  ";
		
		
		result=" Unexpected token else ";
		
		
		scenario="write 'else' expression  before 'if' ";
		code="else  {   var a ; }   ";
		
		functionName="jssyn3";
		syncAll();
		
		
	};// @lock

	Button3.click = function Button3_click (event)// @startlock
	{// @endlock
		
		
		
		detail="A SyntaxError is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code.  ";
		scenario="writing the declaration :  vaar myVarible;   ";
		code="vaar myVarible;     ";
		
		result="  Unexpected identifier ";
		functionName="jssyn1";
		syncAll();
		
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
	
		
	};// @lock

	Button5.click = function Button5_click (event)// @startlock
	{// @endlock
		detail="The throw statement throws a user-defined exception  ";
		scenario="this the exception  this s an exception   ";
		code="throw ('this is an exception  ')     ";
		
		result="  this is an exception ";
		functionName="jsexp1";
		syncAll();
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
		
		
	};// @lock

	Button10.click = function Button10_click (event)// @startlock
	{// @endlock
		detail="The RangeError object indicates an error when a value is not in the set or range of allowed values.   ";
		scenario="trying to create an array with -20 items   ";
		code="var a = new Array(-2) ;     ";
		
		result=" Invalid array length ";
		functionName="jsran1";
		syncAll();
	};// @lock

	Button12.click = function Button12_click (event)// @startlock
	{// @endlock
		executeFunction(functionName);
		
		
	};// @lock

	exception5.click = function exception5_click (event)// @startlock
	{// @endlock
		detail="trying to call a method on a null reference.     ";
		scenario="trying to call a method on a null reference.  ";
		code="var a = null; a.myFonction();   ";
		
		result=" Cannot read property 'myFonction' of null, ";
		functionName="jsref5";
		syncAll();
	};// @lock

	exception4.click = function exception4_click (event)// @startlock
	{// @endlock
		detail="thrown when a defined  variable  has  undefined  method.     ";
		scenario="we will try to  access an undefined  method of an defined  object   ";
		code="var myVariable ; myVariable.myFunction() ;   ";
		
		result=" Cannot read property 'myFunction' of undefined ";
		functionName="jsref4";
		syncAll();
	};// @lock

	exception3.click = function exception3_click (event)// @startlock
	{// @endlock
		detail="thrown when a defined  variable  has  undefined  property.    ";
		scenario="we will try to  access an undefined  property of an defined  object ";
		code="var myVariable ; myVariable.a ;   ";
		
		result="  Cannot read property 'a' of undefined  ";
		syncAll();
		
	};// @lock

	exception2.click = function exception2_click (event)// @startlock
	{// @endlock
		detail="thrown when a function  is undefined.  ";
		scenario="we will try to  call an undefined function";
		code="myFonction(); ";
		
		result=" myFonction is not defined ";
		functionName="jsref2";
		syncAll();
		
		
	};// @lock

	exception1.click = function exception1_click (event)// @startlock
	{// @endlock
		detail="thrown when a variable  is undefined. ";
		scenario="we will try to   call an undefined variable";
		code="myVariable; ";
		result=" myVariable is not defined ";
		functionName="jsref1";
		syncAll();

	
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button11", "click", button11.click, "WAF");
	WAF.addListener("Button16", "click", Button16.click, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("Button13", "click", Button13.click, "WAF");
	WAF.addListener("Button8", "click", Button8.click, "WAF");
	WAF.addListener("Button17", "click", Button17.click, "WAF");
	WAF.addListener("Button28", "click", Button28.click, "WAF");
	WAF.addListener("Button26", "click", Button26.click, "WAF");
	WAF.addListener("Button33", "click", Button33.click, "WAF");
	WAF.addListener("button19", "click", button19.click, "WAF");
	WAF.addListener("Button48", "click", Button48.click, "WAF");
	WAF.addListener("Button47", "click", Button47.click, "WAF");
	WAF.addListener("Button50", "click", Button50.click, "WAF");
	WAF.addListener("button18", "click", button18.click, "WAF");
	WAF.addListener("button17", "click", button17.click, "WAF");
	WAF.addListener("Button44", "click", Button44.click, "WAF");
	WAF.addListener("Button43", "click", Button43.click, "WAF");
	WAF.addListener("Button45", "click", Button45.click, "WAF");
	WAF.addListener("Button38", "click", Button38.click, "WAF");
	WAF.addListener("Button40", "click", Button40.click, "WAF");
	WAF.addListener("Button39", "click", Button39.click, "WAF");
	WAF.addListener("Button41", "click", Button41.click, "WAF");
	WAF.addListener("button14", "click", button14.click, "WAF");
	WAF.addListener("Button31", "click", Button31.click, "WAF");
	WAF.addListener("Button27", "click", Button27.click, "WAF");
	WAF.addListener("Button29", "click", Button29.click, "WAF");
	WAF.addListener("Button20", "click", Button20.click, "WAF");
	WAF.addListener("Button23", "click", Button23.click, "WAF");
	WAF.addListener("Button21", "click", Button21.click, "WAF");
	WAF.addListener("Button22", "click", Button22.click, "WAF");
	WAF.addListener("Button24", "click", Button24.click, "WAF");
	WAF.addListener("button12", "click", button12.click, "WAF");
	WAF.addListener("button5", "click", button5.click, "WAF");
	WAF.addListener("button9", "click", button9.click, "WAF");
	WAF.addListener("button8", "click", button8.click, "WAF");
	WAF.addListener("Button15", "click", Button15.click, "WAF");
	WAF.addListener("Button9", "click", Button9.click, "WAF");
	WAF.addListener("Button11", "click", Button11.click, "WAF");
	WAF.addListener("Button14", "click", Button14.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("Button3", "click", Button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("Button5", "click", Button5.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("Button10", "click", Button10.click, "WAF");
	WAF.addListener("Button12", "click", Button12.click, "WAF");
	WAF.addListener("exception5", "click", exception5.click, "WAF");
	WAF.addListener("exception4", "click", exception4.click, "WAF");
	WAF.addListener("exception3", "click", exception3.click, "WAF");
	WAF.addListener("exception2", "click", exception2.click, "WAF");
	WAF.addListener("exception1", "click", exception1.click, "WAF");
// @endregion
};// @endlock


function executeFunction(name)
{
		xhr = new XMLHttpRequest();
		var a  = "http://127.0.0.1:8081/"+name;
		xhr.open('GET', a);
		xhr.send();	
		
	
	
}


function syncAll()
{
	WAF.sources.detail.sync();
	WAF.sources.scenario.sync();
	WAF.sources.code.sync();
	WAF.sources.result.sync();

	
}