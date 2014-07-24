$(document).on('ready page:load', function () {

  var createInputString = function(name, bio, order) {
    return "<div id='manager-input-"+order+"'class='mgr-input'>\n<h3 class='heading'> Manager Information: </h3>\n<div class='mgr-form'><label for='manager-name'>Name </label><input type='text' class='manager-name' value='"+name+"'></input><br><br>\n<label for='manager-bio'>Bio </label><textarea rows='10' cols='85'class='manager-bio' value='"+bio+"'></textarea>\n</div>\n</div>"
  }

  var createDisplayString = function(name, bio, order) {
    return "<div id='manager-display-"+order+"' class='profile'>\n<img class='avatar' src='./images/executive-default-image.png'/> \n<div class='name-bio'><h3 class='name heading'>"+name+"</h3> \n<p>"+bio+"</p>\n</div></div>"
  }

  var Manager = function(name, bio) {
    this.name = name,
    this.bio = bio
  }

  Manager.prototype.updateAttributes = function(name, bio) {
    this.name = name,
    this.bio = bio    
  }

  var manager1 = new Manager('Raji Khabbaz', 'Bacon ipsum dolor sit amet filet mignon pancetta kielbasa t-bone venison ham hock pork chop salami ribeye chicken chuck cow sausage. Landjaeger pork loin jerky biltong tongue pig shoulder rump ham hock chuck andouille salami chicken corned beef fatback. Landjaeger ribeye jowl porchetta. Ball tip prosciutto drumstick, jowl biltong salami kielbasa pork loin fatback rump. Shoulder boudin hamburger venison tri-tip leberkas prosciutto meatball beef ribs chicken. Meatball flank andouille hamburger tri-tip cow.')
  //var manager2 = new Manager('Gary Brode', 'Pancetta pork prosciutto pork belly ham hock strip steak. Shank pork chop turducken, porchetta meatloaf turkey leberkas venison. Rump pancetta pork loin ribeye capicola pastrami tri-tip landjaeger spare ribs beef. Shoulder boudin hamburger venison tri-tip leberkas prosciutto meatball beef ribs chicken. Meatball flank andouille hamburger tri-tip cow. Turducken drumstick ball tip meatball sausage ribeye. Shankle bacon pork shoulder, doner pork chop boudin shank chicken. Meatloaf brisket boudin ribeye kielbasa. Turducken boudin shoulder pancetta salami pork belly.')


  //var managers = [manager1, manager2]
  var managers = [manager1]
  console.log(managers)

  var checkAdded = function() {
    if (!$('#addmgr manager-name').is(":empty")) {
      managers.push(new Manager($('#addmgr .manager-name ').val(), $('#addmgr .manager-bio').val()));
      $('#mgmt').append(createDisplayString(managers[managers.length-1].name, managers[managers.length-1].bio, i));
    } 
  }

  for (var i = 0; i < managers.length; i++) {
      $("#mgmt").append(createDisplayString(managers[i].name, managers[i].bio, i));   
  }


  $('#edit').on('click', function() {
    $('.overlay').removeClass('hidden');
    $('#modal').removeClass('hidden');
    for (var i = 0; i < managers.length; i++) {
      $(".mgmt-input").append(createInputString(managers[i].name, managers[i].bio, i)); 
      console.log($('#manager-input-'+i+" .manager-bio").val());
      $('#manager-input-'+i+" .manager-bio").val(managers[i].bio)  
    }
  })

  $('.close').on('click', function() {
    $('.overlay').addClass('hidden');
    $('#modal').addClass('hidden');
    $(".mgmt-input").html('')
  })
  
  $('.add').on('click', function() {
    if ($('#addmgr').hasClass('hidden')) {
      $('#addmgr').removeClass('hidden');
    }
  })

  $('.update').on('click', function() {
    $('.overlay').addClass('hidden');
    $('#modal').addClass('hidden');
    $('#addmgr').addClass('hidden'); 
    $('#mgmt').html('');
    console.log(managers);
    for (var i = 0; i < managers.length; i++) {
      managers[i].updateAttributes($('#manager-input-'+i+' .manager-name ').val(), $('#manager-input-'+i+' .manager-bio').val());  
      $('#mgmt').append(createDisplayString(managers[i].name, managers[i].bio, i)); 
    }
    checkAdded(); 
    $('.mgmt-input').html('');
    $('#addmgr .manager-name').val('');
    $('#addmgr .manager-bio').val('');     
  })


  
});