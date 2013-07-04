/* laffy-taffy
 * Buy one, get one free!
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */
 
plugin('laffy-taffy', function(backend, frontend) {
    backend('laffy-taffy', function(Canteen, emit, data) {
        emit(true);
    });
    
    frontend(function() {
    });
}, {
    use: 'laffytaffy'
});