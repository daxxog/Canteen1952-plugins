/* daily-limit
 * A Canteen1952 plugin for setting daily limits with reporting functionality
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */
 
plugin('daily-limit', function(backend, frontend, use) {
    backend('dlimitreport', function(Canteen, emit, data) {
        
    });

    frontend(function(Canteen) {
        Canteen.settings('Daily limit', 'dlimit');
        Canteen.button('transactions', 'report', Canteen.pdf('dlimitreport'));
    });
}, {
    use: 'dlimit'
});