const PRODUCTS = [
  // ================= PATINS =================
  { id: 1, title: "Patins Infanto Juvenil", price: 499.9, image: "assets/products/patins-completos-infantil.jpg", link: "#", featured: true, category: "patins-completos-infantil" },
  { id: 2, title: "Patins Recreação", price: 599.9, image: "assets/products/patins-completos-recreacao.jpg", link: "#", featured: false, category: "patins-completos-recreacao" },
  { id: 3, title: "Patins Fitness", price: 699.9, image: "assets/products/patins-completos-fitness.jpg", link: "#", featured: false, category: "patins-completos-fitness" },
  { id: 4, title: "Patins Freestyle", price: 799.9, image: "assets/products/patins-completos-freestyle.jpg", link: "#", featured: true, category: "patins-completos-freestyle" },
  { id: 5, title: "Patins Quad Tradicional", price: 849.9, image: "assets/products/patins-completos-quad.jpg", link: "#", featured: false, category: "patins-completos-quad" },
  { id: 6, title: "Patins Street Aggressive", price: 899.9, image: "assets/products/patins-completos-street.jpg", link: "#", featured: false, category: "patins-completos-street" },
  { id: 7, title: "Patins Velocidade", price: 1199.9, image: "assets/products/patins-completos-velocidade.jpg", link: "#", featured: true, category: "patins-completos-velocidade" },
  { id: 8, title: "Patins 3 Rodas", price: 1099.9, image: "assets/products/patins-completos-3rodas.jpg", link: "#", featured: false, category: "patins-completos-3rodas" },
  { id: 9, title: "Patins Customize", price: 1299.9, image: "assets/products/patins-completos-customize.jpg", link: "#", featured: false, category: "patins-completos-customize" },
  { id: 10, title: "Patins com Rodas de LED", price: 1399.9, image: "assets/products/patins-completos-led.jpg", link: "#", featured: true, category: "patins-completos-led" },
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
