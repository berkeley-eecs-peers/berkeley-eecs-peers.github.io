$(function() {
  var tooltip_visible = false;
  var curr_tooltip = null;
  var b_random_change = true;

  var em_pic = $("td.top-picture.top-cell img");
  var em_pic_website = $("td.top-picture.top-cell a");
  var em_name = $("h1.name");
  var em_website = $(".top-website");
  var em_email = $(".top-email");
  var em_location = $(".top-location");
  var em_area = $(".top-area");
  var em_bio = $(".top-bio");
  var em_fun_fact = $(".top-fun-fact");

  var update_top = function(index) {
    var peer = data[index];

    em_pic.attr("src", "photos/"+peer.photo);
    em_pic_website.attr("href", peer.website);
    em_name.html(peer.name);
    em_email.html(peer.email);
    em_website.html("<a href=\"" + peer.website + "\">" + peer.website + "</a>");
    em_location.html(peer.location);
    em_area.html(peer.area);
    em_bio.html(peer.bio);
    em_fun_fact.html(peer.fun_fact);
  };

  var random_update_top = function() {
    var num = Math.floor(Math.random() * data.length);

    update_top(num);
  };

  update_top(Math.floor(Math.random() * data.length));
  var timer_id = window.setInterval(random_update_top, 10000);

  // Create bottom table.
  var peer_table = $('table.bottom-peer-table');
  var curr_row = null;
  var count = 0;
  for (i in data) {
    var peer = data[i];

    if (count % 6 === 0) {
      peer_table.append('<tr></tr>');
      curr_row = $('table.bottom-peer-table > tbody > tr:last');
    }

    curr_row.append('<td class=\"bottom-picture\" data-index='+count+'></td>');
    var curr_cell = $('table.bottom-peer-table > tbody > tr:last > td:last');
    var cell_txt = '<div class=\"bottom-peer-img\">';
    cell_txt += '<img src=\photos/'+peer.photo+' alt=\"'+peer.name+'\" width=\"100px\">'
    cell_txt += '</div>';

    curr_cell.html(cell_txt);

    count += 1;
  }

  $('.bottom-picture').click(function(event) {
    update_top($(this).attr("data-index"));

    // First time someone clicks disable randomness
    if (b_random_change) {
      b_random_change = false;
      window.clearInterval(timer_id);
    }
  });
});