// drop down 
$('.ui.dropdown').dropdown();

// sidebar 
$('.ui.sidebar').sidebar('attach events','.toc.item');

//local location variable and feeback
/*
var location = [{
	title:'Physics',
	description:'9Class'
},

{
	title:'Chemistry',
	description:'9Class'

},

{
	title:'Biology',
	description:'9Class'

},

{
    title:'Boston',
	description:'Aamir'
},];

$('.ui.search.location').search({
 
 source:location,
 searchFields:['title','description'],
 searchFullText:false

});
*/
var content = [
  { title: 'Physics' },
  { title: 'Chemistry' },
  { title: 'Biology' },
  { title: 'Mathematics' },
  { title: 'Computer Science' },
  { title: 'Urdu' },
  { title: 'Pakistan Studies' },
  { title: 'Islamiat' }
  
 
];
$('.ui.search')
  .search({
    source: content
  });