var projects = [];
var parser = new DOMParser();

function Project (opts) {
  this.thumbnail = opts.thumbnail;
  this.description = opts.description;
  this.link = opts.link;
}

Project.prototype.toHtml = function() {
  var source = document.getElementById('project-template').innerHTML;
  var template = Handlebars.compile(source); //eslint-disable-line
  // var context = projectStore;
  var html = template(this);
  var convertedHtml = parser.parseFromString(html, 'text/html');

  return convertedHtml;
};

projectStore.forEach(function(ele) { //eslint-disable-line
  projects.push(new Project(ele));
});

projects.forEach(function(p) {
  var target = document.getElementById('project-target');
  target.appendChild(p.toHtml().documentElement.firstChild.nextSibling.firstChild);
});

(function navigate() {
  $('#projects').on('click', function() {
    $('#projects').addClass('active');
    $('#about-link').removeClass('active');
    $('#project-target').show();
    $('#about').hide();
  });

  $('#about-link').on('click', function() {
    $('#about-link').addClass('active');
    $('#projects').removeClass('active');
    $('#project-target').hide();
    $('#about').show();
  });
})();


