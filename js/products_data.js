const PRODUCTS = [
  // ================= PATINS =================
  { id: 1, title: "Patins Traxart Mesh Branco/pink - 80mm Abec-9 Cromo", price: 1199.00, image: "https://http2.mlstatic.com/D_NQ_NP_2X_687067-MLB94037453248_102025-F-patins-traxart-mesh-brancopink-80mm-abec-9-cromo.webp", link: "https://mercadolivre.com/sec/28jiJje", featured: true, category: "patins-completos-infantil" },



//Recreação

  { id: 2, title: "Patins Recreação", price: 599.9, image: "assets/products/patins-completos-recreacao.jpg", link: "#", featured: false, category: "patins-completos-recreacao" },



//Fitness

  { id: 3, title: "Patins Fitness", price: 699.9, image: "assets/products/patins-completos-fitness.jpg", link: "#", featured: false, category: "patins-completos-fitness" },




//Freestyle

{ id: 4, title: "Patins Rollerblade Lightning 90 (36 Ao 37)", price: 2799.00, image: "https://http2.mlstatic.com/D_Q_NP_890123-MLB94959033641_102025-F-patins-rollerblade-lightning-90-36-ao-37.webp", link: "https://mercadolivre.com/sec/19bYiNT", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Traxart Mesh Branco/pink - 80mm Abec-9 Cromo", price: 1199.00, image: "https://http2.mlstatic.com/D_NQ_NP_2X_687067-MLB94037453248_102025-F-patins-traxart-mesh-brancopink-80mm-abec-9-cromo.webp", link: "https://mercadolivre.com/sec/28jiJje", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Seba E3 80", price: 1800.00, image: "https://http2.mlstatic.com/D_NQ_NP_2X_955578-MLB96143396092_102025-F-patins-seba-e3-80.webp", link: "https://mercadolivre.com/sec/2bfau5q", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Traxart Volt+3 Preto - Freestyle - 110mm Abec-9 Cromo", price: 1199.00, image: "https://http2.mlstatic.com/D_Q_NP_775013-MLB75191233458_032024-F-patins-traxart-volt3-preto-freestyle-110mm-abec-9-cromo.webp", link: "https://mercadolivre.com/sec/1K5zPp3", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Traxart Freestyle Revolt Preto - Abec-9", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_878667-MLB81068217684_122024-F-patins-traxart-freestyle-revolt-preto-abec-9.webp", link: "https://mercadolivre.com/sec/2b5FpLt", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Traxart Freestyle Volt + 2.0 Preto - Abec-9", price: 899.00, image: "https://http2.mlstatic.com/D_Q_NP_715271-MLB76323203552_052024-F-patins-traxart-freestyle-volt-20-preto-abec-9.webp", link: "https://mercadolivre.com/sec/1GeMxPA", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Traxart Dynamix Freestyle V2 Com Freio - 80mm Abec-7", price: 828.00, image: "https://http2.mlstatic.com/D_Q_NP_995443-MLB75191273042_032024-F-patins-traxart-dynamix-freestyle-v2-com-freio-80mm-abec-7.webp", link: "https://mercadolivre.com/sec/28E3vEm", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Rollerblade Lightning 80 W (36 Ao 38)", price: 1999.00, image: "https://http2.mlstatic.com/D_Q_NP_752882-MLB90560545161_082025-F-patins-rollerblade-lightning-80-w-36-ao-38.webp", link: "https://mercadolivre.com/sec/1ZDt1Ei", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Hd Inline - Xt - Cinza - Hdxtc", price: 799.80, image: "https://http2.mlstatic.com/D_Q_NP_647892-MLB74628007089_022024-F-patins-hd-inline-xt-cinza-hdxtc.webp", link: "https://mercadolivre.com/sec/1YeJXDG", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Hd Inline - Xt - Lilas - Hdxtl", price: 799.80, image: "https://http2.mlstatic.com/D_Q_NP_905995-MLB91912253836_092025-F-patins-hd-inline-xt-lilas-hdxtl.webp", link: "https://mercadolivre.com/sec/1Gpj4GF", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Hd Inline - Xt", price: 799.80, image: "https://http2.mlstatic.com/D_Q_NP_717362-MLB83133829841_032025-F-patins-hd-inline-xt.webp", link: "https://mercadolivre.com/sec/2d7yvuj", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Traxart Revolt 80mm Verde Freestyle/urbano + Brinde", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_865551-MLB78897396019_092024-F-patins-traxart-revolt-80mm-verde-freestyleurbano-brinde.webp", link: "https://mercadolivre.com/sec/2Qacejg", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Traxart Freestyle Revolt Azul Claro - Abec-9", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_799754-MLB75191232190_032024-F-patins-traxart-freestyle-revolt-azul-claro-abec-9.webp", link: "https://mercadolivre.com/sec/1UuyfjL", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Revolt Rose Traxart 80mm Freestyle/urbano + Brinde", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_718844-MLB96854593671_102025-F-patins-revolt-rose-traxart-80mm-freestyleurbano-brinde.webp", link: "https://mercadolivre.com/sec/2Zscows", featured: false, category: "patins-completos-freestyle" },
{ id: 1, title: "Patins Inline Traxart Revolt Turbo Black Gold Abec-9 +brinde", price: 1199.00, image: "https://http2.mlstatic.com/D_Q_NP_632259-MLB90758294807_082025-F-patins-inline-traxart-revolt-turbo-black-gold-abec-9-brinde.webp", link: "https://mercadolivre.com/sec/2nGvW4J", featured: false, category: "patins-completos-freestyle" },



 //Quad Tradicional 

  { id: 5, title: "Patins Quad Tradicional", price: 849.9, image: "assets/products/patins-completos-quad.jpg", link: "#", featured: false, category: "patins-completos-quad" },





 //Street Aggressive 
  { id: 6, title: "Patins Street Aggressive", price: 899.9, image: "assets/products/patins-completos-street.jpg", link: "#", featured: false, category: "patins-completos-street" },




 //Velocidade
  { id: 7, title: "Patins Velocidade", price: 1199.9, image: "assets/products/patins-completos-velocidade.jpg", link: "#", featured: true, category: "patins-completos-velocidade" },




  
 //3 Rodas
  { id: 8, title: "Patins Hd Inline - Evolution Ii - 3 Rodas 110mm", price: 1329.90, image: "https://http2.mlstatic.com/D_Q_NP_768626-MLB92102896854_092025-F-patins-hd-inline-evolution-ii-3-rodas-110mm.webp", link: "https://mercadolivre.com/sec/11FKDeW", featured: false, category: "patins-completos-3rodas" },




 // Costumize
  { id: 9, title: "Patins Customize", price: 1299.9, image: "assets/products/patins-completos-customize.jpg", link: "#", featured: false, category: "patins-completos-customize" },





// Com rodas de Led
  { id: 10, title: "Patins com Rodas de LED", price: 1399.9, image: "assets/products/patins-completos-led.jpg", link: "#", featured: true, category: "patins-completos-led" },




// KIT patins + protetor
  { id: 11, title: "Kit Patins + Protetor", price: 1499.9, image: "assets/products/patins-completos-kit.jpg", link: "#", featured: false, category: "patins-completos-kit-patins-protetor" },





  
  // RODAS, BASES E ROLAMENTOS
  { id: 12, title: "Rodas Patins Inline", price: 149.9, image: "assets/products/rodas-inline.jpg", link: "#", featured: false, category: "rodas-bases-rolamentos-inline" },
  { id: 13, title: "Rodas Patins Quad", price: 159.9, image: "assets/products/rodas-quad.jpg", link: "#", featured: false, category: "rodas-bases-rolamentos-quad" },
  { id: 14, title: "Rodas Patins Street", price: 169.9, image: "assets/products/rodas-street.jpg", link: "#", featured: false, category: "rodas-bases-rolamentos-street" },
  { id: 15, title: "Rodas de LED", price: 199.9, image: "assets/products/rodas-led.jpg", link: "#", featured: false, category: "rodas-bases-rolamentos-led" },
  { id: 16, title: "Bases Patins", price: 249.9, image: "assets/products/bases.jpg", link: "#", featured: false, category: "rodas-bases-rolamentos-bases" },
  { id: 17, title: "Rolamentos Patins", price: 99.9, image: "assets/products/rolamentos.jpg", link: "#", featured: false, category: "rodas-bases-rolamentos-rolamentos" },

  // ACESSÓRIOS E PEÇAS
  { id: 18, title: "Fivelas e Parafusos", price: 29.9, image: "assets/products/fivelas.jpg", link: "#", featured: false, category: "acessorios-pecas-fivelas-parafusos" },
  { id: 19, title: "Bota Interna e Cuffs", price: 89.9, image: "assets/products/bota-interna.jpg", link: "#", featured: false, category: "acessorios-pecas-bota-interna-cuffs" },
  { id: 20, title: "Freios", price: 79.9, image: "assets/products/freios.jpg", link: "#", featured: false, category: "acessorios-pecas-freios" },
  { id: 21, title: "Outros Acessórios", price: 49.9, image: "assets/products/outros-acessorios.jpg", link: "#", featured: false, category: "acessorios-pecas-outros-acessorios" },

  // MEIAS E CADARÇOS
  { id: 22, title: "Meias para Patinação", price: 19.9, image: "assets/products/meias.jpg", link: "#", featured: true, category: "meias-cadarcos-meias-patinacao" },
  { id: 23, title: "Cadarços Freestyle", price: 14.9, image: "assets/products/cadarcos-freestyle.jpg", link: "#", featured: false, category: "meias-cadarcos-cadarcos-freestyle" },
  { id: 24, title: "Cadarços Quad", price: 14.9, image: "assets/products/cadarcos-quad.jpg", link: "#", featured: false, category: "meias-cadarcos-cadarcos-quad" },

  // ================= SKATES E LONGBOARDS =================
  { id: 25, title: "Skate Intermediário", price: 399.9, image: "assets/products/skate-intermediario.jpg", link: "#", featured: true, category: "skates-intermediario" },
  { id: 26, title: "Skate Pró", price: 499.9, image: "assets/products/skate-pro.jpg", link: "#", featured: false, category: "skates-pro" },
  { id: 27, title: "Skate X-Pro", price: 599.9, image: "assets/products/skate-xpro.jpg", link: "#", featured: false, category: "skates-xpro" },
  { id: 28, title: "Skate Plástico", price: 299.9, image: "assets/products/skate-plastico.jpg", link: "#", featured: false, category: "skates-plastico" },
  { id: 29, title: "Longboard Simétrico", price: 799.9, image: "assets/products/longboard-simetrico.jpg", link: "#", featured: false, category: "longboards-simetrico" },
  { id: 30, title: "Longboard Cruiser", price: 849.9, image: "assets/products/longboard-cruiser.jpg", link: "#", featured: false, category: "longboards-cruiser" },
  { id: 31, title: "Longboard Pintail", price: 899.9, image: "assets/products/longboard-pintail.jpg", link: "#", featured: false, category: "longboards-pintail" },

  // PEÇAS E ACESSÓRIOS SKATE
  { id: 32, title: "Peças e Acessórios Skate", price: 49.9, image: "assets/products/pecas-skate.jpg", link: "#", featured: false, category: "pecas-acessorios-skate-pecas-skate-long" },
  { id: 33, title: "Meias Cano Alto Skate", price: 29.9, image: "assets/products/meias-cano-alto-skate.jpg", link: "#", featured: false, category: "pecas-acessorios-skate-meias-cano-alto" },

  // ================= CAPACETES E PROTETORES =================
  { id: 34, title: "Capacete Lazer Iniciante", price: 199.9, image: "assets/products/capacete-lazer.jpg", link: "#", featured: false, category: "capacetes-lazer" },
  { id: 35, title: "Capacete Intermediário", price: 249.9, image: "assets/products/capacete-intermediario.jpg", link: "#", featured: false, category: "capacetes-intermediarios" },
  { id: 36, title: "Capacete Profissional", price: 399.9, image: "assets/products/capacete-profissional.jpg", link: "#", featured: true, category: "capacetes-pro" },
  { id: 37, title: "Kit Infantil Proteção", price: 149.9, image: "assets/products/protetores-infantil.jpg", link: "#", featured: false, category: "protetores-kit-infantil" },
  { id: 38, title: "Kit Adulto Proteção", price: 199.9, image: "assets/products/protetores-adulto.jpg", link: "#", featured: false, category: "protetores-kit-adulto" },
  { id: 39, title: "Munhequeiras e Joelheiras", price: 129.9, image: "assets/products/munhequeiras-joelheiras.jpg", link: "#", featured: false, category: "protetores-munhequeiras-joelheiras" },

  // ================= MOCHILAS =================
  { id: 40, title: "Mochila Patins", price: 129.9, image: "assets/products/mochila-patins.jpg", link: "#", featured: true, category: "linhas-mochilas-mochilas-patins" },
  { id: 41, title: "Inline Bag", price: 139.9, image: "assets/products/inline-bag.jpg", link: "#", featured: false, category: "linhas-mochilas-inline-bags" },
  { id: 42, title: "Mochila Média", price: 149.9, image: "assets/products/mochila-media.jpg", link: "#", featured: false, category: "linhas-mochilas-mochilas-medias" },
  { id: 43, title: "Mochila Grande", price: 179.9, image: "assets/products/mochila-grande.jpg", link: "#", featured: false, category: "linhas-mochilas-mochilas-grandes" },
  { id: 44, title: "Mochila Skate", price: 159.9, image: "assets/products/mochila-skate.jpg", link: "#", featured: false, category: "linhas-mochilas-mochila-skate" },
  { id: 45, title: "Mochila Dia a Dia", price: 129.9, image: "assets/products/mochila-dia-dia.jpg", link: "#", featured: false, category: "linhas-mochilas-mochilas-dia-a-dia" },
  { id: 46, title: "Shoulder Bag / Pochete", price: 149.9, image: "assets/products/shoulder-bag.jpg", link: "#", featured: false, category: "linhas-mochilas-pochetes" },

  // ================= MODA =================
  { id: 47, title: "Camiseta Masculina", price: 79.9, image: "assets/products/camiseta-masc.jpg", link: "#", featured: false, category: "masculina-camisetas-masculinas" },
  { id: 48, title: "Calça / Bermuda Masculina", price: 129.9, image: "assets/products/calca-bermuda-masc.jpg", link: "#", featured: false, category: "masculina-calcas-bermudas-masc" },
  { id: 49, title: "Moletom / Jaqueta Masculina", price: 199.9, image: "assets/products/moletom-jaqueta-masc.jpg", link: "#", featured: false, category: "masculina-moletons-masc" },
  { id: 50, title: "Calçado Masculino", price: 199.9, image: "assets/products/calcado-masc.jpg", link: "#", featured: false, category: "masculina-calcados-masc" },
  { id: 51, title: "Camiseta / Blusa Feminina", price: 79.9, image: "assets/products/camiseta-fem.jpg", link: "#", featured: false, category: "feminina-camisetas-blusas-fem" },
  { id: 52, title: "Calça / Short Feminina", price: 129.9, image: "assets/products/calca-short-fem.jpg", link: "#", featured: false, category: "feminina-calcas-shorts-fem" },
  { id: 53, title: "Moletom / Jaqueta Feminina", price: 199.9, image: "assets/products/moletom-jaqueta-fem.jpg", link: "#", featured: false, category: "feminina-moletons-fem" },
  { id: 54, title: "Calçado Feminino", price: 199.9, image: "assets/products/calcado-fem.jpg", link: "#", featured: false, category: "feminina-calcados-fem" },
  { id: 55, title: "Camiseta Juvenil", price: 69.9, image: "assets/products/camiseta-juvenil.jpg", link: "#", featured: false, category: "juvenil-camisetas-juvenil" },
  { id: 56, title: "Calça / Bermuda Juvenil", price: 99.9, image: "assets/products/calca-bermuda-juvenil.jpg", link: "#", featured: false, category: "juvenil-calcas-bermudas-juvenil" },
  { id: 57, title: "Moletom Juvenil", price: 129.9, image: "assets/products/moletom-juvenil.jpg", link: "#", featured: false, category: "juvenil-moletons-juvenil" },
  { id: 58, title: "Calçado Juvenil", price: 129.9, image: "assets/products/calcado-juvenil.jpg", link: "#", featured: false, category: "juvenil-calcados-juvenil" },
  { id: 59, title: "Carteira", price: 49.9, image: "assets/products/carteira.jpg", link: "#", featured: false, category: "acessorios-moda-carteiras" },
  { id: 60, title: "Cinto", price: 39.9, image: "assets/products/cinto.jpg", link: "#", featured: false, category: "acessorios-moda-cintos" },
  { id: 61, title: "Boné / Gorro", price: 59.9, image: "assets/products/bone-gorro.jpg", link: "#", featured: false, category: "acessorios-moda-bones-gorros" },
  { id: 62, title: "Meias Cano Alto Moda", price: 29.9, image: "assets/products/meias-cano-alto-moda.jpg", link: "#", featured: false, category: "acessorios-moda-meias-cano-alto-moda" },

  // ================= KIDS =================
  { id: 63, title: "Patins Regulável Kids", price: 299.9, image: "assets/products/patins-regulavel-kids.jpg", link: "#", featured: true, category: "patins-kids-patins-regulavel-kids" },
  { id: 64, title: "Patins Teen Kids", price: 349.9, image: "assets/products/patins-teen.jpg", link: "#", featured: false, category: "patins-kids-patins-teen" },
  { id: 65, title: "Longboard Completo Kids", price: 399.9, image: "assets/products/longboard-kids.jpg", link: "#", featured: false, category: "skates-long-kids-longboard-kids" },
  { id: 66, title: "Skate Kids", price: 299.9, image: "assets/products/skate-kids.jpg", link: "#", featured: false, category: "skates-long-kids-skates-kids" },
  { id: 67, title: "Kit de Proteção Infanto-Juvenil", price: 149.9, image: "assets/products/kit-protecao-kids.jpg", link: "#", featured: true, category: "protecao-kids-kit-protecao-kids" },
  { id: 68, title: "Moda Infanto-Juvenil Kids", price: 129.9, image: "assets/products/moda-kids.jpg", link: "#", featured: false, category: "moda-kids-moda-kids" }
];
