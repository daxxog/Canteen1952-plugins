plugin('camptrak-import', function(backend, frontend) {
    backend('import', function(Canteen, emit, data) {
        Canteen.db.accounts();
        //Canteen.log(data.import);
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
                        o[k] = Canteen.cash(v.replace('(', '').replace(')', ''));
                        Canteen.log(o[k]);
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
        //emit('/');
        emit({"json": dbInsert});
    });
    
    frontend(function(Canteen) {
        Canteen.button('accounts', 'import', Canteen.import('csv'));
    });
});