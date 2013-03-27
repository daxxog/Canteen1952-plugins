plugin('camptrak-import', function(backend, frontend) {
    backend('import', function(Canteen, emit, data) {
        Canteen.db.accounts();
        //Canteen.log(data.import);
        Canteen.log(data.import.split('\n'));
        //emit('/');
        emit({"json": true});
    });
    
    frontend(function(Canteen) {
        Canteen.button('accounts', 'import', Canteen.import('csv'));
    });
});