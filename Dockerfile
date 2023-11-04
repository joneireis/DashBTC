# Use uma imagem base do Node.js
FROM node:14

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /dashbtc

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do Node.js
RUN npm install
RUN npm install node-fetch@2
RUN npm install express node-fetch
RUN npm install path

# Copie todo o conteúdo do diretório atual para o diretório de trabalho no contêiner
COPY . .

# Exponha a porta em que o servidor estará ouvindo (certifique-se de que a porta corresponda à configuração do seu servidor Node.js)
EXPOSE 3000

# Inicie o servidor Node.js quando o contêiner for iniciado
CMD [ "node", "node.js" ]

