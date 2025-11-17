<?php
// Simulate user storage (possivel atualização SQL)
$usersFile = 'users.json';

if (!file_exists($usersFile)) {
    file_put_contents($usersFile, json_encode([]));
}

$users = json_decode(file_get_contents($usersFile), true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $apelido = $_POST['apelido'] ?? '';
    $email = $_POST['email'] ?? '';
    $telefone = $_POST['telefone'] ?? '';
    $senha = $_POST['senha'] ?? '';

    // Verificar se o usuário já existe
    foreach ($users as $user) {
        if ($user['email'] === $email || $user['apelido'] === $apelido) {
            echo "<h1>Cadastro falhou!</h1>";
            echo "<p>Email ou apelido já cadastrado.</p>";
            echo "<a href='cadastro.html'>Tentar novamente</a>";
            exit;
        }
    }

    // Add novo usuário
    $users[] = [
        'apelido' => $apelido,
        'email' => $email,
        'telefone' => $telefone,
        'senha' => password_hash($senha, PASSWORD_DEFAULT)
    ];

    file_put_contents($usersFile, json_encode($users));

    echo "<h1>Cadastro bem-sucedido!</h1>";
    echo "<p>Bem-vindo, $apelido. Você pode fazer login agora.</p>";
    echo "<a href='index.html'>Fazer Login</a>";
} else {
    // Redirecionar se não for
    header('Location: cadastro.html');
    exit;
}
?>
