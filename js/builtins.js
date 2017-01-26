window.dos = window.dos || {};

$.extend(window.dos, {
    cls: function(term) {
      term.clear();
    },

    help: function(term) {
      term.echo('help...');
    }
});
