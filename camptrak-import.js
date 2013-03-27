/* camptrak-import
 * A Canteen1952 plugin for importing from CampTrak
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */
 
plugin('camptrak-import', function(backend, frontend) {
    backend('import', function(Canteen, emit, data) {
        var lines = data.import.replace(/\r/gm, '').split('\n'),
            dbRel = {
                "First Name": 'first',
                "Last Name": 'last',
                "Spending Balance": 'balance'
            }, dbInsert = [], template;
        
        lines.forEach(function(v, i, a) {
            var rows = v.split(',');
            
            if(i === 0) {
                template = rows;
            } else {
                var o = {}, fail = false;
                
                rows.forEach(function(v, i, a) {
                    var k = dbRel[template[i]];
                    
                    if(k === 'balance') {
                        o[k] = v.replace('(', '').replace(')', '');
                    } else if(Canteen.trim(v) === '') {
                        fail = true;
                    } else {
                        o[k] = v;
                    }
                });
                
                if(fail === false) {
                    dbInsert.push(o);
                }
            }
        });
        
        Canteen.db.accounts.insert(dbInsert, function() {
            emit('./');
        });
    });
    
    frontend(function(Canteen) {
        Canteen.button('accounts', 'import', Canteen.import('csv'));
    });
});