# imagem
FROM node

# pasta onde ficará nossa aplicação (dentro do container, na maquina host)
WORKDIR /usr/app

# copiando as dependencias do projeto para dentro do diretorio host
COPY package.json ./

# executa o comando para baixar as dependencias
RUN npm install

# copia tudo do nosso app para dentro do container host
COPY . .

# expoe a porta 3333
EXPOSE 3333

# e executa o comando npm run dev
CMD ["npm", "run", "dev"]