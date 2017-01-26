window.dos = window.dos || {};

$.extend(window.dos, {
    cls: function(term) {
      term.clear();
    }
});

$.extend(window.dos, {
    help: function(term) {
      term.echo("try one of these: " + Object.keys(window.dos)); 
    }
});
