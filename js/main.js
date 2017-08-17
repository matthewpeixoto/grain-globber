var $ul = $('.grains');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $img = $('<img>');
  var $h2 = $('<h2>');
  var $p = $('<p>');

  $img.attr('src', 'images/' + grain.img);
  $h2.html(grain.name);
  $p.html(grain.desc);

  $li.append($img, $h2, $p);
  $ul.append($li);
});
