function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  };
};

let courses = [
  new Course('Javascript Essential Training', 'Morton', 1, true, 0),
  new Course('Up and Running with ECMAScript 6', 'Eve', 1, true, 123)
]

console.log(courses);
console.log(courses[1].instructor);
console.log(courses[0].updateViews());
