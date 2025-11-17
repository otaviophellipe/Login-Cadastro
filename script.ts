interface Config {
  validation: {
    minPasswordLength: number;
    emailRegex: string;
  };
}

async function loadConfig(): Promise<Config> {
  const response = await fetch('config.json');
  return response.json();
}

function validateEmail(email: string, emailRegex: string): boolean {
  const regex = new RegExp(emailRegex);
  return regex.test(email);
}

function validatePassword(password: string, minLength: number): boolean {
  return password.length >= minLength;
}

function validateLoginForm(): boolean {
  const usuario = (document.getElementById('usuario') as HTMLInputElement).value;
  const senha = (document.getElementById('senha') as HTMLInputElement).value;

  if (!usuario || !senha) {
    alert('Por favor, preencha todos os campos.');
    return false;
  }

  return true;
}

function validateRegisterForm(): boolean {
  const apelido = (document.getElementById('apelido') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const telefone = (document.getElementById('telefone') as HTMLInputElement).value;
  const senha = (document.getElementById('senha') as HTMLInputElement).value;
  const confirmarSenha = (document.getElementById('confirmar-senha') as HTMLInputElement).value;

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
  const loginForm = document.querySelector('form') as HTMLFormElement;
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      if (!validateLoginForm()) {
        e.preventDefault();
      }
    });
  }

  const registerForm = document.querySelector('form') as HTMLFormElement;
  if (registerForm && registerForm.querySelector('#apelido')) {
    registerForm.addEventListener('submit', (e) => {
      if (!validateRegisterForm()) {
        e.preventDefault();
      }
    });
  }
});
