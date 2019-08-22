acnebot();

function acnebot() {
    while (true) {
        var message = window.prompt(
            "Que veux tu dire à l'ado chatbot!"
        );

        console.log(message.length);
        if (isAQuestion(message)) {
            console.log("Ouais Ouais .... ");
        } else if (isUpperCase(message) && !isEmpty(message)) {
            console.log("Pwa, calme toi...");
        } else if (includesFortnite(message)) {
            console.log("on s' fait une partie soum-soum ?");
        } else if (isEmpty(message)) {
            console.log("t'es en PLS ?");
        } else {
            console.log("balek.")
        }
    }
}

function isAQuestion(message) {
    result = false;
    lastChar = message[message.length - 1];
    return lastChar === "?";
}


function isUpperCase(message) {
    return message === message.toUpperCase();
}

function includesFortnite(message) {
    return message.toUpperCase().includes("FORTNITE");
}

function isEmpty(message) {
    return message.length === 0;
}
