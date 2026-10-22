
// Aula 14 - Habilitar e desabilitar campos

function habilitarCampo(id) {
    const campo = document.getElementById(id);

    campo.disabled = false;
    campo.focus();

    campo.onblur = function () {
        campo.disabled = true;
    };
}
