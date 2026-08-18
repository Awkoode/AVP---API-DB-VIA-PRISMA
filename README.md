    # api foda

## Como executar o projeto

1. Instalar as dependências:
   ```bash
   npm install
   ```
   
2. Migração do db prisma

``` bash
npx prisma migrate dev
```
3. Gerar prisma client para comunicação

``` bash
npx prisma generate
```

4. Rodar Servidor

``` bash
   node server.js
   ```
