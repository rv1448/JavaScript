function Course(name,instructor,level,published,views){
	this.name = name ;
	this.instructor = instructor;
	this.level=level;
	this.published=published;
	this.views=views;
	this.UpdateViews = function(){
	return ++this.views;
	}
}


var course01 = new Course("Java Script","kathy","Level01","2018",0);
console.log(course01);
course01.UpdateViews();
console.log(course01);

var courses = [
new Course("Java Script","kathy","Level01","2018",0),
new Course("Java Script1","kathy1","Level02","2018_1",100)
]
console.log(courses);