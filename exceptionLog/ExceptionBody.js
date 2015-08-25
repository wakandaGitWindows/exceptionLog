

exports.jsref1 =  function ()
{
	
	myVariable;  
	
} ;



exports.jsref2 =  function ()
{
	
	myFonction();      	
	
} ;



exports.jsref3 =  function ()
{
	
	  var myVariable ; 
myVariable.a ;   
	
} ;


exports.jsref4 =  function ()
{
	
	  var myVariable ; 
myVariable.myFunction() ;      	
  	 	
	
} ;


exports.jsref5 =  function ()
{
	
	 var a = null;
a.myFonction();      	
  	 	
	
} ;


exports.jsexp1 =  function ()
{
	
	throw ("this is an exception  ");
	
} ;



exports.jsexp2 =  function ()
{
	
	console.info("This is an Error" ) ; 
	
	
} ;


exports.jsexp3 =  function ()
{
	
	console.error("This is an Error" ) ; 
	
	
} ;


exports.jsran1 =  function ()
{
	
	var a = new Array(-2) ; 
	
} ;


exports.jstype1 =  function ()
{
	
	var myVariable= new myType();
	
} ;


exports.jstype2 =  function ()
{
	
	var a = {};
    a();
	
} ;


exports.jseval1 =  function ()
{
	
	eval(" a  ");

} ;



exports.dsquery1 =  function ()
{
	
	ds.Person.query("UndefinedAttribute = :1", "aValue");        

} ;


exports.dsquery2 =  function ()
{
	
	ds.Person.query("name = :2", "aValue");        

} ;


exports.dsquery3 =  function ()
{
	
	ds.Person.query("name *-+ :1  ", "aValue");        

} ;


exports.dsquery4 =  function ()
{
	
	ds.Person.query("   name in :1  ", "name");        

} ;


exports.dsw1 =  function ()
{
	
	ds.Person.average(4);

} ;


exports.dsw2 =  function ()
{
	
	ds.Person.average("name" );      

} ;



exports.dssave1 =  function ()
{
	
	var myEntity = ds.Person.createEntity();
	myEntity.ID=1;
	myEntity.name="myName";
	myEntity.save();

} ;


exports.dssave2 =  function ()
{
	
	var myEntity = ds.Car1.createEntity();
	myEntity.ID=3;
	myEntity.color="yellow";
	// myEntity.RN="noRN";
	 myEntity.save();   

} ;


exports.dssave3 =  function ()
{
	
	var myEntity = ds.Car2.createEntity();
	myEntity.ID=4;
	myEntity.color="yellow";
	myEntity.RN="unique";
	myEntity.save();   

} ;




exports.dspermission1 =  function ()
{

	loginByPassword("hamza","123456");
	ds.Person2.all();

} ;


exports.dspermission2 =  function ()
{
	
	
	loginByPassword("hamza","123456");
	ds.Person3.createEntity().save();

} ;


exports.dspermission3 =  function ()
{
	
	loginByPassword("hamza","123456");
	var a = ds.Person4.first();
	a.name="myName";

	a.save();


} ;



exports.dspermission4 =  function ()
{
	
	
	loginByPassword("hamza","123456");
	var a = ds.Person5.first();
	a.remove();

} ;








exports.dscollection1 =  function ()
{
	
	
	var collection1 = ds.Person6.query(" ID > 1 and ID <5 " ); 
	var collection2 = ds.Person7.query(" ID < 6 " ); 

	collection2.minus(collection1);

} ;


exports.dscollection2 =  function ()
{
	
	var collection = ds.Person6.query(" ID > 1 and ID <5 " ); 
	collection.add( ds.Person7.first());


} ;



exports.dscollection3 =  function ()
{
	
	
	

	var entity = ds.Person6.all().orderBy("friends"); // attribute2 of type "Person"
	entity;

} ;




exports.dspermission5 =  function ()
{
	
	
	var group = directory.addGroup("myGroupe", "myGroupe");

	directory.save();
	directory.save();

} ;



exports.dspermission6 =  function ()
{
	
	
	

	var newUser = directory.addUser("Henry", "123", "Henry Charles");
	directory.save();

	directory.save();
} ;
