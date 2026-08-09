# For U Odontologia — Landing Page Temporária Premium

Página temporária institucional, elegante e totalmente responsiva desenvolvida para a **For U Odontologia**. Criada para ser publicada provisoriamente no domínio `foruodontologia.com.br` enquanto o novo site oficial está em desenvolvimento.

Projetada com estética de luxo, paleta em tons de **dourado quente, bronze, champagne, marrom sofisticado e branco**, foco total na conversão via WhatsApp e pronta para deploy imediato na **Vercel**.

---

## 🚀 Tecnologias Utilizadas

- **React 19** + **TypeScript**
- **Vite** (Compatível com Vercel)
- **Tailwind CSS v4** (Com utilitários e fontes customizadas)
- **Lucide React** (Ícones minimalistas)
- **Google Fonts** (*Cormorant Garamond* e *Plus Jakarta Sans*)

---

## 📋 Sumário do Guia

1. [Como instalar](#1-como-instalar)
2. [Como rodar localmente](#2-como-rodar-localmente)
3. [Onde inserir o logo oficial](#3-onde-inserir-o-logo-oficial)
4. [Como alterar telefone (WhatsApp)](#4-como-alterar-telefone-whatsapp)
5. [Como alterar e-mail](#5-como-alterar-e-mail)
6. [Como alterar Instagram](#6-como-alterar-instagram)
7. [Como alterar os horários de atendimento](#7-como-alterar-os-horários-de-atendimento)
8. [Como subir para o GitHub](#8-como-subir-para-o-github)
9. [Como conectar à Vercel](#9-como-conectar-à-vercel)
10. [Como fazer deploy](#10-como-fazer-deploy)
11. [Como conectar o domínio foruodontologia.com.br](#11-como-conectar-o-domínio-foruodontologiacombr)

---

## 1. Como instalar

Certifique-se de ter o **Node.js** (versão 18 ou superior) instalado em seu computador.

Clone ou baixe o projeto e instale as dependências:

```bash
npm install
```

---

## 2. Como rodar localmente

Para iniciar o servidor de desenvolvimento local:

```bash
npm run dev
```

Abra o seu navegador e acesse o endereço fornecido no terminal (geralmente `http://localhost:3000` ou `http://localhost:5173`).

---

## 3. Onde inserir o logo oficial

O projeto está preparado para utilizar a imagem do logo fornecida pela clínica.

1. Salve o arquivo de imagem do logo oficial da For U no diretório do projeto em:
   ```
   /public/images/logo-foru.png
   ```
   *(Você também pode utilizar `/public/images/logo-foru.webp` ou `/public/images/logo-foru.svg`)*.

2. Se o arquivo por algum motivo estiver ausente ou com caminho incorreto, a aplicação ativará automaticamente uma versão vetorial em degradê metálico com tipografia de alta fidelidade para garantir que a página nunca fique quebrada.

---

## 4. Como alterar telefone (WhatsApp)

Todas as informações de contato do site estão centralizadas no arquivo de configuração:

📌 **`src/config/clinic.ts`**

Para alterar o número do WhatsApp, atualize os campos:

```typescript
export const clinicConfig = {
  // Número formatado para exibição visual na tela:
  phoneDisplay: "(11) 99349-8545",

  // Número numérico internacional (sem espaço, traço ou parentes):
  phone: "5511993498545",

  // Mensagem padrão enviada ao clicar no botão:
  whatsappMessage: "Olá! Vim pelo site da For U Odontologia e gostaria de mais informações.",
  
  // ...
};
```

---

## 5. Como alterar e-mail

Abra o arquivo **`src/config/clinic.ts`** e modifique a propriedade `email`:

```typescript
email: "consultorioodontorefi@gmail.com",
```

Isso atualizará automaticamente todos os botões e links `mailto:` do site.

---

## 6. Como alterar Instagram

Abra o arquivo **`src/config/clinic.ts`** e altere o link e nome de usuário:

```typescript
instagram: "https://www.instagram.com/foruodontologia/",
instagramUser: "@foruodontologia",
```

---

## 7. Como alterar os horários de atendimento

Abra o arquivo **`src/config/clinic.ts`** e altere o objeto `hours`:

```typescript
hours: {
  segundaAQuinta: "8h às 18h",
  sexta: "8h às 17h",
},
```

---

## 8. Como subir para o GitHub

1. Inicialize o repositório Git na raiz do seu projeto (caso ainda não tenha feito):
   ```bash
   git init
   git add .
   git commit -m "feat: landing page temporaria For U Odontologia"
   ```

2. Crie um novo repositório no seu GitHub (ex: `foru-odontologia-landing`).

3. Vincule o repositório local ao GitHub e faça o envio:
   ```bash
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/foru-odontologia-landing.git
   git push -u origin main
   ```

---

## 9. Como conectar à Vercel

1. Acesse o painel da **Vercel** ([vercel.com](https://vercel.com)) e faça login com sua conta do GitHub.
2. Clique no botão **"Add New..."** → **"Project"**.
3. Selecione o repositório `foru-odontologia-landing` que você enviou ao GitHub.
4. A Vercel detectará automaticamente a estrutura do projeto.
5. Em **Framework Preset**, selecione **Vite** ou **Other**.
6. Em **Build Command**, certifique-se de que está: `npm run build`.
7. Em **Output Directory**, certifique-se de que está: `dist`.
8. Clique em **"Deploy"**.

---

## 10. Como fazer deploy

Sempre que você fizer alterações no código e enviar para o GitHub (`git push`), a Vercel compilará e atualizará o site automaticamente em segundos.

Se preferir utilizar a **Vercel CLI**:

```bash
npm i -g vercel
vercel --prod
```

---

## 11. Como conectar o domínio foruodontologia.com.br

Para configurar o domínio próprio `foruodontologia.com.br` no seu projeto hospedado na Vercel:

### Passo 1: Adicionar o Domínio no Painel da Vercel
1. Acesse o painel da **Vercel** → Selecione o projeto da **For U Odontologia**.
2. Vá em **Settings** (Configurações) no menu superior → Selecione **Domains** (Domínios).
3. No campo de busca, digite: `foruodontologia.com.br` e clique em **Add**.
4. Repita a operação adicionando também a versão com `www`: `www.foruodontologia.com.br` (a Vercel criará automaticamente um redirecionamento 301 do `www` para o domínio principal).

### Passo 2: Configurar a Zona DNS (Registro.br ou seu Provedor de Domínio)
Acesse o painel do provedor onde o domínio foi comprado (por exemplo, **Registro.br** ou **Cloudflare**) e insira os registros apontando para os servidores da Vercel:

1. **Registro Tipo A** (para o domínio raiz `foruodontologia.com.br`):
   - **Nome / Host**: `@` (ou em branco no Registro.br)
   - **Tipo**: `A`
   - **Valor / IP**: `76.76.21.21` (ou o IP indicado especificamente na tela da Vercel)

2. **Registro Tipo CNAME** (para o subdomínio `www.foruodontologia.com.br`):
   - **Nome / Host**: `www`
   - **Tipo**: `CNAME`
   - **Valor / Destino**: `cname.vercel-dns.com.`

### Passo 3: Verificação de SSL / HTTPS
1. Após salvar os registros no seu provedor de domínio, aguarde de alguns minutos a algumas horas para a propagação do DNS.
2. A própria Vercel verificará os registros automaticamente e emitirá um certificado de segurança **SSL (HTTPS)** gratuito e renovável.
3. Quando a mensagem verde **"Valid Configuration"** aparecer no painel da Vercel, sua landing page estará no ar com cadeado de segurança em:
   - `https://foruodontologia.com.br`
   - `https://www.foruodontologia.com.br`

---

## ✒️ Créditos & Direitos

© **For U Odontologia**. Todos os direitos reservados.
