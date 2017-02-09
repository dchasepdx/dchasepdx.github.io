var projects = [];
var parser = new DOMParser();

function Project (opts) {
  this.thumbnail = opts.thumbnail;
  this.description = opts.description;
}

Project.prototype.toHtml = function() {
  var source = document.getElementById('project-template').innerHTML;
  var template = Handlebars.compile(source); //eslint-disable-line
  // var context = projectStore;
  var html = template(this);
  // var convertedHtml = parser.parseFromString(html, 'text/html');

  return html;
};

projectStore.forEach(function(ele) { //eslint-disable-line
  projects.push(new Project(ele));
});

projects.forEach(function(p) {
  var target = document.getElementById('project-target');
  target.innerHTML = p.toHtml();
  console.log(target.innerHTML);

  // target.parentElement.appendChild(p.toHtml().documentElement.firstChild.nextSibling.firstChild);
});



