/* staff-discounts
 * Allow discounts by amount or percent
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */
 
 plugin('staff-discounts', function(backend, frontend, use) {
    backend('staff-discounts', function(Canteen, emit, data) {
        emit(true);
    });

    frontend(function(Canteen) {
        Canteen.settings('Staff discount %', 'discount');
    });
}, {
    use: 'discount'
});