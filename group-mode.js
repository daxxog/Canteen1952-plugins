/* group-mode
 * Treat an account as a "group" with a counter
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */
 
plugin('group-mode', function(backend, frontend) {
    backend('group-mode', function(Canteen, emit, data) {
        emit(true);
    });
    
    frontend(function() {
    });
}, {
    use: 'groupmode'
});