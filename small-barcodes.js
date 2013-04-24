/* small-barcodes
 * Replace large barcodes with small ones
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */
 
plugin('small-barcodes', function(backend, frontend) {
    backend('small-barcodes', function(Canteen, emit, data) {
        emit(true);
    });
    
    frontend(function() {
    });
}, {
    use: 'smallbarcodes'
});