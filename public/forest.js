backToMain = () => {
  $('#quick-confirm').css({ display: 'none' });

  $('#greeter').fadeIn('slow');
  $('.forest-quickstart-btns').css({ display: 'none' });
  $('.forest-main-menu-btns').fadeIn('slow');
};

$(document).ready(function() {
  //   alert('hi from forest.js');
  //   if ($slicerLayerHeight.val() > 100) {
  //     alert('Wait - are you sure??');
  //   }
  //   $('#forestModal').modal('toggle');
  $('.forest-quickstart-btns').css({ display: 'none' });
  $('#settings').click(function() {
    // $('#forestModal').modal('toggle');
    $('#hide').css({ display: 'block' });
    $('#hide').fadeIn('slow');
  });

  $('#quick').click(function() {
    $('#quick-confirm').fadeIn('slow');
    $('.forest-greeter').css({ display: 'none' });
    $('.forest-main-menu-btns').css({ display: 'none' });
    $('.forest-quickstart-btns').fadeIn('slow');
    $('.modal-footer').fadeIn('slow');
    $('#greeter').css({ display: 'none' });
  });

  $('#forest-back').click(function() {
    backToMain();
  });

  $('#forest-continue').on('click', function() {
    window.print();
    alert('aaaannnndd... Print!');
    setTimeout(function() {
      backToMain();
    }, 500);
  });
});
