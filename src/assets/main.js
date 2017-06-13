$(function() {

  // your code will go here


  $.ajax({
    url: 'https://www.codeschool.com/users/923955.json',
    dataType: 'jsonp',
    success: function(response) {
      addCourse(response.courses.completed);// handle response
    }
  });

  function addCourse(courses){
  	var badges = $('#badges');

  	courses.map(function(course){
  		var div = $('<div class ="course" />').appendTo(badges);

      $('<h3 />', {
        text: course.title
      }).appendTo(div);

      $('<img />', {
        src: course.badge
      }).appendTo(div);

      $('<a />', {
        'class': 'btn btn-primary',
        target: '_blank',
        href: course.url,
        text: 'See Course'
      }).appendTo(div);
  	}); 

  }
});
