//Command terminal (node operators)


/*

    + Adição
    - Subtração
    * Multiplicação
    / Divisão
    ** Exponenciação
    % Módulo de uma operação
    ++ Inclemento
    -- Decremento

*/

let x = 0, y = 1
x = x + y
x += y

x = x - y
x -= y

x *= y
x /= y
x %= y
x **= y

x = x ** y

if (x = y) {

}

/* 

    == Igualdade
    === Valor igual e tipo igual
    != Diferente
    !== Diferente valor ou tipo
    > Maior que
    < Menor que
    >= Maior ou igual
    <= Menor ou igual
    ? Ternário

*/

if (1 === '1') { //aqui
    console.log('válido') //==
} else {
    console.log('inválido') //===
}

!(1 === '1') && 1 == '1' ? console.log('válido') : console.log('inválido')

/*

    && E lógico
    || Ou Lógico
    ! Negação


 */