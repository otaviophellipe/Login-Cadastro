<?php
// Simulate user database (possivel atualização SQL)
$users = [
    'admin' => 'password123',
    'user' => 'pass456'
];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'] ?? '';
    $senha = $_POST['senha'] ?? '';

    if (isset($users[$usuario]) && $users[$usuario] === $senha) {
        // Sucesso no login
        echo "<h1>Login bem-sucedido!</h1>";
        echo "<p>Bem-vindo, $usuario.</p>";
        echo "<a href='index.html'>Voltar ao Login</a>";
    } else {
        // Falha
        echo "<h1>Falha no login!</h1>";
        echo "<p>Usuário ou senha incorretos.</p>";
        echo "<a href='index.html'>Tentar novamente</a>";
    }
} else {
    // Redirecionar
    header('Location: index.html');
    exit;
}
?>
