CONTROLE DE FROTA - SITE PÚBLICO (GitHub Pages)

Este pacote contém o site responsivo que será aberto pelo menu "Sobre" do aplicativo.
O repositório do site pode ser PÚBLICO sem expor o código-fonte Flutter: este ZIP contém
somente HTML/CSS/JS, o ícone e textos de ajuda.

1) CRIAR O REPOSITÓRIO
No GitHub:
  New repository
  Nome sugerido: controle-frota-site
  Visibilidade: Public
  Create repository

2) ENVIAR O SITE
Envie TODO o conteúdo deste ZIP para a RAIZ do repositório (inclusive as pastas manual,
privacidade, excluir-conta, atualizar, contato, assets e css).

3) HABILITAR GITHUB PAGES
No repositório:
  Settings > Pages
  Build and deployment: Deploy from a branch
  Branch: main
  Folder: / (root)
  Save

Aguarde o GitHub informar a URL publicada. Exemplo de formato:
  https://SEU-USUARIO.github.io/controle-frota-site/

4) TESTAR NO CELULAR
Abra a URL raiz e teste também:
  /manual/
  /privacidade/
  /excluir-conta/
  /atualizar/
  /contato/

5) CONFIGURAR O APP
Depois de conhecer a URL real do GitHub Pages, edite o arquivo
  supabase/configurar_urls_apos_site.sql
que acompanha o patch do aplicativo, substitua https://SEU_ENDERECO pela URL raiz e
execute no Supabase SQL Editor.

6) DOWNLOAD MANUAL DO APK
Para distribuir APKs, prefira GitHub Releases em vez de colocar APK grande no repositório
do site.

Após criar uma Release e enviar o APK, copie a URL direta do arquivo e edite:
  assets/site-config.js

Exemplo:
  latestVersion: "1.0.5",
  latestBuild: "6",
  apkUrl: "URL_DIRETA_DO_APK",
  supportEmail: "rcayret@gmail.com"

Faça commit dessa alteração. O endereço /atualizar/ continuará o mesmo; somente o arquivo
baixado muda.

IMPORTANTE
- O site não contém chave Supabase, service_role, senhas ou chave de assinatura Android.
- A página de atualização é preparada para distribuição manual. Quando o app estiver na
  Google Play, o link remoto poderá ser trocado sem recriar o menu Sobre.
