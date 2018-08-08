function validate( str ) {
    console .log( 'Valor: ' + str );

    // Valida nuestra expresión regular
    if( str .match( /^[^@_]{3,10}@[\w\.]{3,12}\.\w{2,5}$/i ) ) {
        document .getElementById( 'enviar' ) .disabled = false;
        console .log( 'Match!!' );
    }
}
