var images = ['home2.jpg', 'home1.jpg', 'home3.jpg', 'home4.jpg', 'home5.jpg', 'home6.jpg'];
$('#home').css({'background': 'url(assets/images/' + images[Math.floor(Math.random() * images.length)] + ')'});
$('#home').css({'background-attachment': 'fixed'});
$('#home').css({'background-repeat': 'no-repeat'});
$('#home').css({'background-position': '50% 50%'});
$('#home').css({'-webkit-background-size': 'cover'});
$('#home').css({'-moz-background-size': 'cover'});
$('#home').css({'-o-background-size': 'cover'});
$('#home').css({'background-size': 'cover'});
