plugin('camptrak-import', function(backend, frontend) {
    backend('import', function(Canteen, emit, data) {
        Canteen.db.accounts();
        //Canteen.log(data.import);
        var lines = data.import.replace(/\r/gm, '').split('\n'),
            dbRel = {
                "First Name": 'first',
                "Last Name": 'last',
                "Spending Balance": 'balance'
            }, template;
        
        lines.forEach(function(v, i, a) {
            var rows = v.split(',');
            
            if(i === 0) {
                template = rows;
            } else {
                rows.forEach(function(v, i, a) {
                    Canteen.log(dbRel[template[i]]);
                });
            }
        });
        //emit('/');
        emit({"json": true});
    });
    
    frontend(function(Canteen) {
        Canteen.button('accounts', 'import', Canteen.import('csv'));
    });
});