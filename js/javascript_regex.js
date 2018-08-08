function validate( str ) {
    const $element = document .getElementById( 'in' );
    console .log( 'Valor: ' + str );

    // Valida nuestra expresión regular
    if( str .match( /^[^@_]{3,10}@[\w\.]{3,12}\.\w{2,5}(\.\w{2,5})?$/i ) ) {
        document .getElementById( 'enviar' ) .disabled = false;
        changeColor( $element, 'lightgreen' );
        console .log( 'Match!!' );
    }
    else {
        document .getElementById( 'enviar' ) .disabled = true;
        changeColor( $element, 'red' );
        console .log( 'No Match!!' );
    }
}

function changeColor( $el, color ) {
    $el .style .backgroundColor = color;
}
