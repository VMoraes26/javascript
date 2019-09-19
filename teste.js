async function LerEMostrar(stdin_input) {

    stdin_input = await process.stdin.on("data", function (input) {
        return input
        process.exit()
    });
    console.log("Recebeu: ", String(stdin_input))
}

LerEMostrar(stdin_input)