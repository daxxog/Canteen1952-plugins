plugin('camptrak-import', function(backend, frontend) {
    backend(function(Canteen, emit, data) {
        Canteen.db.accounts();
        console.log(data.import);
        emit({"json": true});
    });
    
    frontend(function(Canteen) {
        Canteen.button('accounts', 'import', Canteen.import('csv'));
    });
});