# Cadastro de carro

**Requisitos funcionais**
- Deve ser possível cadastrar um novo carro;

**Regras de negócio**
- Não deve ser possível cadastrar um novo carro com uma placa já existente;
- O carro deve ser cadastrado, por padrão, como **disponível** para ser alugado;
- O usuário responsável pelo cadastro deve ser um **usuário administrador**;

# Listagem de carros

**Requisitos funcionais**
- Deve ser possível listar todos os carros **disponíveis**;
- Deve ser possível listar todos os carros **disponíveis** pelo nome da categoria;
- Deve ser possível listar todos os carros **disponíveis** pelo nome da marca;
- Deve ser possível listar todos os carros **disponíveis** pelo nome da carro;

**Regras de negócio**
- O usuário não precisa estar logado no sistema;

# Cadastro de especificação no carro

**Requisitos funcionais**
- Deve ser possível cadastrar uma especificação para um carro;
- Deve ser possível listar todas as especificações;
- Deve ser possível listar todos os carros;
- O usuário responsável pelo cadastro deve ser um **usuário administrador**;

**Regras de negócio**
- Não deve ser possível cadastrar uma especificação para um carro não cadastrado;
- Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;

# Cadastro de imagens do carro

**Requisitos funcionais**
- Deve ser possível cadastrar a imagem do carro;
- Deve ser possível listar todos os carros;

**Requisitos não funcionais**
- Utilizar o multer para upload dos arquivos;

**Regras de negócio**
- O usuário poderá cadastrar mais de uma imagem para o mesmo carro;
- O usuário responsável pelo cadastro deve ser um **usuário administrador**;

# Aluguel de carro

**Requisitos funcionais**
- Deve ser possível cadastrar um aluguel;

**Regras de negócio**
- O aluguel deve ter duração mínima de 24 horas (1 dia);
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o **mesmo usuário**;
- Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o **mesmo carro**;
- O usuário deve estar logado;
- Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível;

# Devolução do carro

**Requisitos funcionais**
- Deve ser possível realizar a devolução de um carro

**Regras de negócio**
- Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa;
- Ao realizar a devolução, o carro deverá ser liberado para outro aluguel;
- Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel;
- Ao realizar a devolução, deverá ser calculado o total do alguel;
- Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado multa proporcional
aos dias de atraso;
- Caso haja multa, deverá ser somado ao total do aluguel;

# Listagem de alugueis para usuário

**Requisitos funcionais**
- Dever ser possível realizar a busca de todos os alugueis para o usuário;

**Regras de negócio**
- O usuário deve estar logado na aplicação;

# Recuperar senha

**Requisitos funcionais**
- Dever ser possível o usuário recuperar a senha informando o e-mail;
- O usuário deve receber um e-mail com o passo a passo para recuperação da senha;
- O usuário deve conseguir inserir uma nova senha;

**Regras de negócio**
- O usuário precisar informar uma nova senha;
- O link enviado para a recuperação deve expirar em 3 horas;