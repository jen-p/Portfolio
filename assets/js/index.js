$(document).ready(function() {
    //header
     var nav = {
      navItems: [
        {
          'name' : 'Work',
          'url'  : './#work'
        }, {
          'name' : 'Who Am I',
          'url'  : './whoami.html'
        }, {
          'name' : 'Blog',
          'url'  : '#'
        }, {
          'name' : 'Contact',
          'url'  : 'mailto:me@jenniferpatel.com'
        } 
      ]
    };
    var nav_tpl = '<ul>{{#navItems}}' + 
                      '<li><a href="{{url}}">{{name}}</a></li>' + 
                    '{{/navItems}}</ul>';
    var nav_html = Mustache.to_html(nav_tpl, nav);
    $('#nav').html(nav_html);
   
    //footer
    var currentYear = (new Date).getFullYear();
    $('#currentYear').text(currentYear); 

    //cards
    $.getJSON('./assets/data/projects.json', function(data) {
      var project_tpl = $('#projectTpl').html();
      var html = Mustache.to_html(project_tpl, data);
      $('#projects').html(html);
    });
});