window.dos = window.dos || {};

$(function($, undefined) {
    $('#console').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = eval('window.dos.' + command + '(term)');
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch(e) {
                term.echo("Bad command or file name");
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: null,
        onInit: function(term) {
            term.echo('Microsoft MS-DOS version 2.11-lol');
            term.echo('Copyright 1981,1982,1983 Microsoft Corp');
            term.echo('\n');
            term.echo('Command v. 2.11\n');
            term.echo('\n');
        },
        name: 'dos',
        height: 350,
        width: 640,
        prompt: 'A>'
    });
});
