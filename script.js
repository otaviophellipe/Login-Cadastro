var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function loadConfig() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('config.json');
        return response.json();
    });
}
function validateEmail(email, emailRegex) {
    const regex = new RegExp(emailRegex);
    return regex.test(email);
}
function validatePassword(password, minLength) {
    return password.length >= minLength;
}
function validateLoginForm() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    if (!usuario || !senha) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    return true;
}
function validateRegisterForm() {
    const apelido = document.getElementById('apelido').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    if (!apelido || !email || !telefone || !senha || !confirmarSenha) {
        alert('Por favor, preencha todos os campos.');
        return false;
    }
    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem.');
        return false;
    }
    loadConfig().then(config => {
        if (!validateEmail(email, config.validation.emailRegex)) {
            alert('Email inválido.');
            return false;
        }
        if (!validatePassword(senha, config.validation.minPasswordLength)) {
            alert(`A senha deve ter pelo menos ${config.validation.minPasswordLength} caracteres.`);
            return false;
        }
    });
    return true;
}
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            if (!validateLoginForm()) {
                e.preventDefault();
            }
        });
    }
    const registerForm = document.querySelector('form');
    if (registerForm && registerForm.querySelector('#apelido')) {
        registerForm.addEventListener('submit', (e) => {
            if (!validateRegisterForm()) {
                e.preventDefault();
            }
        });
    }
});
