// let course = new Object();

// course.title = 'Javascript Essential Training';
// course.instructor = 'Morten';
// course.level = 1;
// course.published = true;
// course.views = 0;

let course = {
  title: 'Javascript Essential Training',
  instructor: 'Morten',
  level: 1,
  published: true,
  views: 0,
  updateViews: function() {
    return ++course.views;
  }
}
// console.log(course);
// console.log(course.title);

console.log(course.views);
course.updateViews();
console.log(course.views);
