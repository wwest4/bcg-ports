window.dos = window.dos || {};

$.extend(window.dos, {
    aceyduce: function(term) {
        // 10 - 110
        function start() {
            term.echo("                          ACEY DUCEY CARD GAME");
            term.echo("               CREATIVE COMPUTING  MORRISTOWN, NEW JERSEY");
            term.echo("\n");
            term.echo("\n");
            term.echo("\n");
            term.echo("ACEY-DUCEY IS PLAYED IN THE FOLLOWING MANNER ");
            term.echo("THE DEALER (COMPUTER) DEALS TWO CARDS FACE UP");
            term.echo("YOU HAVE AN OPTION TO BET OR NOT BET DEPENDING");
            term.echo("ON WHETHER OR NOT YOU FEEL THE CARD WILL HAVE");
            term.echo("A VALUE BETWEEN THE FIRST TWO.");
            term.echo("IF YOU DO NOT WANT TO BET, INPUT A 0");
            term.echo("\n");

            n = 100;
            q = 100;
        
            printTotal();
        }

        // 120 - 140
        function printTotal() {
            term.echo("YOU NOW HAVE " + q.toString() + " DOLLARS");
            term.echo("\n");
            deal();
        }

        // 210 - 220
        function collect() {
            q += m;
            printTotal();
        }

        // 240 - 250
        function payUp() {
            q -= m;
            printTotal();
        }

        // 260 - 650
        function randCard() {
           return Math.floor(Math.random() * 13) + 2;
        }

        function printCard(card) {
            switch(card) {
                case 11:
                    term.echo("JACK");
                    break;
                case 12:
                    term.echo("QUEEN");
                    break;
                case 13:
                    term.echo("KING");
                    break;
                case 14:
                    term.echo("ACE");
                    break;
                default:
                    term.echo(card);
            }
        }

        function deal() {
            term.echo("HERE ARE YOUR TWO NEXT CARDS ");

            a = 0; b = 0;
            while(a >= b) {
                a = randCard();
                b = randCard();
            }

            printCard(a);
            printCard(b);
            term.echo("\n");
            term.echo("\n");

            bet();
        }

        // 660 - 677
        function bet() {
            term.read("WHAT IS YOUR BET ", function(amount) {
                 m = parseInt(amount)
                 if(m != 0) {
                    if(m <= q) {
                        draw()
                    } else {
                        term.echo("SORRY, MY FRIEND BUT YOU BET TOO MUCH");
                        term.echo("YOU ONLY HAVE " + q.toString() + " DOLLARS TO BET");
                        bet();
                    }
                 } else {
                     term.echo("CHICKEN!!");
                     term.echo("\n");
                     deal();
                 }
            });
        }

        // 730 - 980
        function draw() {
            c = randCard();
            printCard(c);

            if((c > a) && (c < b)) {
                term.echo("YOU WIN!!!");
                collect();
            } else {
                term.echo("SORRY, YOU LOSE");
                if(m < q) {
                    payUp();
                } else {
                    bust();
                }
            }
        }

        // 1010 - 1050
        function bust() {
            term.echo("SORRY, FRIEND BUT YOU BLEW YOUR WAD");
            term.read("TRY AGAIN (YES OR NO) ", function(answer) {
                if(answer.toUpperCase() === "YES") {
                    start();
                } else {
                    term.echo("OK HOPE YOU HAD FUN");
                }
            });
        }

        var a,b,c,q,m,n,q;
        start();
    }
});
