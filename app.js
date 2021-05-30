for (let i = 11; i >= 9; i--) {

    document.write(`<strong>La tabla del ${i}:</strong>`)

    for (let num1 = 1; num1 <= 9; num1++) {

        let resultado = i * num1

        document.write(`<br>${i} x ${num1} = ${resultado}`);

    }
    document.write("<br><br>")

}