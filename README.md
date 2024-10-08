#### Bem-Vindo ao front-end do food-explorer, este projeto tem o intuito de consolidar todos os conhecimentos que eu pude absorver durante minha caminhada na trilha full-stack da tão conceituada rocketseat 🟣🚀
---
#### Quais foram as tecnologias?
React para desenvolver todas as interfaces fluidas, usei também pacotes como react-icons para fazer toda a parte dos ícones, react-number-format para tratar algumas entradas de dados nos inputs do tipo number, estilizei e deixei as interfaces responsivas com styled-components, toda a parte de rotas utilizando react-router-dom deixando minha navegação toda na parte do client, para comunicação com a minha API RESTFUL utilizei axios, deixando minhas interfaces bem servidas.

`"react": "^18.3.1"`

`"axios": "^1.7.2"`

`"react-dom": "^18.3.1"`

`"react-icons": "^5.2.1"`

`"react-number-format": "^5.4.0"`

`"react-router-dom": "^6.25.1"`

`"styled-components": "^6.1.11"`

#### Quais as telas e funcionalidades?
É um aplicativo de comida web, onde você pode escolher por uma refeição, sobremesa, suco, ou ambos, separei a aplicação por 3 packs de rotas, primeiro as rotas de autenticação, qualquer um pode se cadastrar, existe duas roles para o usuário: (customer, admin). As rotas do customer são: Home, Details, Favorites, History, Orders. As rotas do admin são: Home, Details, History, Update, Create. Porém as rotas iguais para admin e customer possuem funcionalidades diferentes, um exemplo.: na rota de History, o admin tem permissão de alterar o status do pedido, enquanto o customer pode apenas vê-lo. Essa lógica perdura por todas as telas da aplicação.

### Como rodar o projeto na sua máquina
1. **Baixe o arquivo ZIP do projeto para o seu computador.**
2. **Acesse a pasta raiz do projeto pelo terminal.**
3. **Instale as dependências** executando o comando: `npm install`.
4. **Execute o projeto em modo de desenvolvimento** com o comando: `npm run dev`.

Usei o netlify para fazer o deploy do Front-end

[Deploy do projeto](https://food-explorer-pinheiro.netlify.app/)

importante lembrar que está aplicação consome sua própria API RESTFUL. Siga o link para o repositório do [Back-end](https://github.com/FelipePinheiroRegina/food-explorer-backend) 

OBS: O Back-end foi hospedado no render utilizando os serviços free, logo, os dados não são persistentes, e quando fica um bom tempo sem fazer requisições, entra em modo de hibernação e quando tentar acessar da próxima vez, terá que esperar o serviço ficar de pé.

---
### Versão Desktop

| Tela          | Descrição                           | Imagem                         |
|---------------|-------------------------------------|--------------------------------|
| Tela de registro | cadastro de novos usuários  | ![register-desktop](https://github.com/user-attachments/assets/bbcd2735-4d7b-4973-90f0-4a8df1b36c95)  |
| Tela de login  | autenticação dos usuários | ![login-desktop](https://github.com/user-attachments/assets/8c0d0d2e-f448-45f3-b6a2-81f01bbc445e) |
| Todas telas | Header do usuário com permissões administrativas | ![header-desktop-admin](https://github.com/user-attachments/assets/10c9abaa-62e1-4b84-917d-d6ff69f96ca0) |
| Todas telas | Header do usuário padrão| ![header-desktop-customer](https://github.com/user-attachments/assets/8f14ba49-3dfb-43ef-9a83-ff9ce2222313)|
| Tela home | Card para deixar a experiência mais agradável | ![card-fruits-desktop](https://github.com/user-attachments/assets/0046cdae-0a60-41d5-b142-94e346eb8869)|
| Tela Home | Container dos pratos do usuário com permissões administrativas | ![container-dish-desktop-admin](https://github.com/user-attachments/assets/897f6d25-73ed-4129-98c4-2af40d8b9d28))|
| Tela home | Container dos pratos do usuário padrão| ![container-dish-desktop-customer](https://github.com/user-attachments/assets/4dfe8e48-0766-4a52-9fc1-dedba3e70052)|
| Tela details | Onde o usuário pode ver mais detalhes do prato| ![details-desktop](https://github.com/user-attachments/assets/5c30e0ee-6150-4fb0-94cb-3e40827649ef)|
| Tela favorites | Onde o usuário pode salvar seus pratos favoritos | ![favorites-desktop](https://github.com/user-attachments/assets/f10cfb7c-46d1-43b9-b146-9358feb3c92c)|
| Tela history | Onde o usuário com permissões administrativas pode mudar os status dos pedidos | ![history-desktop-admin](https://github.com/user-attachments/assets/d45658fa-406c-406b-acb4-c42954cdf65c)|
| Tela history | Onde o usuário padrão pode ver os status dos pedidos | ![history-desktop-customer](https://github.com/user-attachments/assets/fed95d62-5377-4209-b899-45859f058062)|
| Tela create | Onde o usuário com permissões administrativas pode criar novos pratos| ![create-desktop](https://github.com/user-attachments/assets/398c58f9-f61b-4704-9b45-3009cb2f4531)|
| Tela update | Onde o usuário com permissões administrativas pode atualizar os pratos| ![update-desktop](https://github.com/user-attachments/assets/10c8e897-a8a3-42ab-9fb9-012ac56356a3)|
| Tela Orders | Onde o usuário padrão pode finalizar a compra (pix)| ![pix-desktop](https://github.com/user-attachments/assets/a405b798-9634-4733-b91b-f1c658269121)|
| Tela Orders | Onde o usuário padrão pode finalizar a compra (crédito) |![credit-desktop](https://github.com/user-attachments/assets/de08eab9-5d2d-459c-90b6-06d765ea4fd7)|

---
### Versão Mobile

| Tela          | Descrição                           | Imagem                         |
|---------------|-------------------------------------|--------------------------------|
| Tela de registro | cadastro de novos usuários  | ![register-mobile](https://github.com/user-attachments/assets/6595a972-a2f7-4468-a462-5a1f3daeb8c8) |
| Tela de login  | autenticação dos usuários | ![login-mobile](https://github.com/user-attachments/assets/9fc882f3-06ce-4a5b-9d67-d6649730b1a9) |
| Todas telas | Header do usuário com permissões administrativas | ![header-mobile-admin](https://github.com/user-attachments/assets/15c7ab91-de97-42b0-bfa0-fb390b348034) |
| Todas telas | Header do usuário padrão| ![header-mobile-customer](https://github.com/user-attachments/assets/2926b5c8-33bc-4ec5-a17a-ef6ba85b0e04)|
| Tela home | Card para deixar a experiência mais agradável | ![container-fruits-mobile](https://github.com/user-attachments/assets/527e42bd-b18a-4b3e-a589-6294f6e1425d)|
| Tela Home | Container dos pratos do usuário com permissões administrativas | ![container-dish-mobile-admin](https://github.com/user-attachments/assets/caedd927-c9c4-4dea-a515-36eaa1fb4c11)|
| Tela home | Container dos pratos do usuário padrão| ![container-dish-mobile-customer](https://github.com/user-attachments/assets/d91c04bd-4ef3-4f58-aaa8-613fb70ac5df)|
| Tela details | Onde o usuário pode ver mais detalhes do prato| ![deatails-mobile](https://github.com/user-attachments/assets/b46bcb88-348d-438c-870f-72c552b59f74)|
| Tela favorites | Onde o usuário pode salvar seus pratos favoritos | ![favorites-mobile](https://github.com/user-attachments/assets/659152ec-ec53-47db-b01c-53dc71a9c6b4)|
| Tela history | Onde o usuário com permissões administrativas pode mudar os status dos pedidos | ![history-mobile-admin](https://github.com/user-attachments/assets/e494b8d8-bc66-40d9-9909-3254e98b4553)|
| Tela history | Onde o usuário padrão pode ver os status dos pedidos | ![history-mobile-customer](https://github.com/user-attachments/assets/03365fe1-7097-43c2-b656-62975edaf025)|
| Tela create | Onde o usuário com permissões administrativas pode criar novos pratos| ![create-mobile](https://github.com/user-attachments/assets/aec0c227-26fa-4256-8e43-43cec4c0941c)|
| Tela update | Onde o usuário com permissões administrativas pode atualizar os pratos| ![update-mobile](https://github.com/user-attachments/assets/f676b08d-8d6a-43e3-b868-e2fb2d17c24a)|
| Tela Orders | Onde o usuário padrão pode ver os detalhes dos pedidos do carrinho e total |![orders-mobile](https://github.com/user-attachments/assets/71ea8abd-d9a9-4513-9c1c-2b3f6ba96751)|
| Tela Orders | Onde o usuário padrão pode finalizar a compra (pix)| ![pix-mobile](https://github.com/user-attachments/assets/b843fb6b-53d7-4943-9153-93aeca454d39)|
| Tela Orders | Onde o usuário padrão pode finalizar a compra (crédito) |![credit](https://github.com/user-attachments/assets/8521b77a-4e77-4cb4-a5e1-7e6bc4bf6c0d)|



























