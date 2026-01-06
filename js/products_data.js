const PRODUCTS = [
  // ================= PATINS =================
  { id: 1, title: "Patins Traxart Txt Energy Infantil", price: 549.00, image: "https://http2.mlstatic.com/D_Q_NP_617260-MLB78410945837_082024-F-patins-traxart-txt-energy-infantil.webp", link: "https://mercadolivre.com/sec/2CUH2Qn", featured: true, category: "patins-completos-infantil" },
  { id: 1, title: "Patins Inline Infantil Traxart Freemix - Preto - Abec-9", price: 599.00, image: "https://http2.mlstatic.com/D_Q_NP_675100-MLB77836235016_072024-F-patins-inline-infantil-traxart-freemix-preto-abec-9.webp", link: "https://mercadolivre.com/sec/1hZ7wdi", featured: false, category: "patins-completos-infantil" },
  { id: 1, title: "Patins Traxart Infantil Starlight Rosa Com Rodas Led -abec-9", price: 699.00, image: "https://http2.mlstatic.com/D_Q_NP_978851-MLB80762526741_112024-F-patins-traxart-infantil-starlight-rosa-com-rodas-led-abec-9.webp", link: "https://mercadolivre.com/sec/1AHaCBy", featured: false, category: "patins-completos-infantil" },

  // Recreação
  // { id: 2, title: "Patins Recreação", price: 599.90, image: "assets/products/patins-completos-recreacao.jpg", link: "#", featured: false, category: "patins-completos-recreacao" },

  // Fitness
  { id: 3, title: "Patins Powerslide Strom 80 (37 Ao 44)", price: 2250.00, image: "https://http2.mlstatic.com/D_Q_NP_662306-MLB93527415556_102025-F-patins-powerslide-strom-80-37-ao-44.webp", link: "https://mercadolivre.com/sec/2G4GJdz", featured: false, category: "patins-completos-fitness" },

  // Freestyle
  { id: 4, title: "Patins Rollerblade Lightning 90 (36 Ao 37)", price: 2799.00, image: "https://http2.mlstatic.com/D_Q_NP_890123-MLB94959033641_102025-F-patins-rollerblade-lightning-90-36-ao-37.webp", link: "https://mercadolivre.com/sec/19bYiNT", featured: true, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Traxart Mesh Branco/pink - 80mm Abec-9 Cromo", price: 1199.00, image: "https://http2.mlstatic.com/D_NQ_NP_2X_687067-MLB94037453248_102025-F-patins-traxart-mesh-brancopink-80mm-abec-9-cromo.webp", link: "https://mercadolivre.com/sec/28jiJje", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Seba E3 80", price: 1800.00, image: "https://http2.mlstatic.com/D_NQ_NP_2X_955578-MLB96143396092_102025-F-patins-seba-e3-80.webp", link: "https://mercadolivre.com/sec/2bfau5q", featured: true, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Traxart Volt+3 Preto - Freestyle - 110mm Abec-9 Cromo", price: 1199.00, image: "https://http2.mlstatic.com/D_Q_NP_775013-MLB75191233458_032024-F-patins-traxart-volt3-preto-freestyle-110mm-abec-9-cromo.webp", link: "https://mercadolivre.com/sec/1K5zPp3", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Traxart Freestyle Revolt Preto - Abec-9", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_878667-MLB81068217684_122024-F-patins-traxart-freestyle-revolt-preto-abec-9.webp", link: "https://mercadolivre.com/sec/2b5FpLt", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Traxart Freestyle Volt + 2.0 Preto - Abec-9", price: 899.00, image: "https://http2.mlstatic.com/D_Q_NP_715271-MLB76323203552_052024-F-patins-traxart-freestyle-volt-20-preto-abec-9.webp", link: "https://mercadolivre.com/sec/1GeMxPA", featured: true, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Traxart Dynamix Freestyle V2 Com Freio - 80mm Abec-7", price: 828.00, image: "https://http2.mlstatic.com/D_Q_NP_995443-MLB75191273042_032024-F-patins-traxart-dynamix-freestyle-v2-com-freio-80mm-abec-7.webp", link: "https://mercadolivre.com/sec/28E3vEm", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Rollerblade Lightning 80 W (36 Ao 38)", price: 1999.00, image: "https://http2.mlstatic.com/D_Q_NP_752882-MLB90560545161_082025-F-patins-rollerblade-lightning-80-w-36-ao-38.webp", link: "https://mercadolivre.com/sec/1ZDt1Ei", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Hd Inline - Xt - Cinza - Hdxtc", price: 799.80, image: "https://http2.mlstatic.com/D_Q_NP_647892-MLB74628007089_022024-F-patins-hd-inline-xt-cinza-hdxtc.webp", link: "https://mercadolivre.com/sec/1YeJXDG", featured: true, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Hd Inline - Xt - Lilas - Hdxtl", price: 799.80, image: "https://http2.mlstatic.com/D_Q_NP_905995-MLB91912253836_092025-F-patins-hd-inline-xt-lilas-hdxtl.webp", link: "https://mercadolivre.com/sec/1Gpj4GF", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Hd Inline - Xt", price: 799.80, image: "https://http2.mlstatic.com/D_Q_NP_717362-MLB83133829841_032025-F-patins-hd-inline-xt.webp", link: "https://mercadolivre.com/sec/2d7yvuj", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Traxart Revolt 80mm Verde Freestyle/urbano + Brinde", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_865551-MLB78897396019_092024-F-patins-traxart-revolt-80mm-verde-freestyleurbano-brinde.webp", link: "https://mercadolivre.com/sec/2Qacejg", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Traxart Freestyle Revolt Azul Claro - Abec-9", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_799754-MLB75191232190_032024-F-patins-traxart-freestyle-revolt-azul-claro-abec-9.webp", link: "https://mercadolivre.com/sec/1UuyfjL", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Revolt Rose Traxart 80mm Freestyle/urbano + Brinde", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_718844-MLB96854593671_102025-F-patins-revolt-rose-traxart-80mm-freestyleurbano-brinde.webp", link: "https://mercadolivre.com/sec/2Zscows", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Inline Traxart Revolt Turbo Black Gold Abec-9 +brinde", price: 1199.00, image: "https://http2.mlstatic.com/D_Q_NP_632259-MLB90758294807_082025-F-patins-inline-traxart-revolt-turbo-black-gold-abec-9-brinde.webp", link: "https://mercadolivre.com/sec/2nGvW4J", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Flying Eagle F4 Raven", price: 939.99, image: "https://http2.mlstatic.com/D_Q_NP_827560-MLB78406799731_082024-F-patins-flying-eagle-f4-raven.webp", link: "https://mercadolivre.com/sec/1RpUbPN", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Revolt Branco Traxart 80mm Abc9 Freestyle + Brinde", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_795948-MLB93551027968_102025-F-patins-revolt-branco-traxart-80mm-abc9-freestyle-brinde.webp", link: "https://mercadolivre.com/sec/1sU2CxD", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Urbano Hd Inline Tracker Preto Abec9 80mm + Brinde", price: 759.90, image: "https://http2.mlstatic.com/D_Q_NP_967988-MLB93546993887_092025-F-patins-urbano-hd-inline-tracker-preto-abec9-80mm-brinde.webp", link: "https://mercadolivre.com/sec/2WhkoR2", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Freestyle Hd New Skull Ii Rosa - 80mm Abec-9", price: 679.15, image: "https://http2.mlstatic.com/D_Q_NP_898478-MLB78407036311_082024-F-patins-freestyle-hd-new-skull-ii-rosa-80mm-abec-9.webp", link: "https://mercadolivre.com/sec/1MA1iLW", featured: false, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Traxart Freestyle Dynamix Rose Abec-7", price: 749.00, image: "https://http2.mlstatic.com/D_Q_NP_926262-MLB75191226934_032024-F-patins-traxart-freestyle-dynamix-rose-abec-7.webp", link: "https://mercadolivre.com/sec/1fWXEjf", featured: true, category: "patins-completos-freestyle" },
  { id: 1, title: "Patins Traxart Freestyle Revolt Lilás - Abec-9", price: 799.00, image: "https://http2.mlstatic.com/D_Q_NP_627764-MLB75339355753_032024-F-patins-traxart-freestyle-revolt-lilas-abec-9.webp", link: "https://mercadolivre.com/sec/1sbAZT3", featured: true, category: "patins-completos-freestyle" },

  // Quad / Tradicional
  // { id: 5, title: "Patins Quad Tradicional", price: 849.90, image: "assets/products/patins-completos-quad.jpg", link: "#", featured: false, category: "patins-completos-quad" },

  // Street / Aggressive
  { id: 6, title: "Patins Traxart Infantil Profissional Strike Cinza - 58mm", price: 1899.00, image: "https://http2.mlstatic.com/D_Q_NP_787291-MLB87138410551_072025-F-patins-traxart-infantil-profissional-strike-cinza-58mm.webp", link: "https://mercadolivre.com/sec/1MbK3Td", featured: true, category: "patins-completos-street" },
  { id: 6, title: "Patins Traxart Infantil Profissional Strike Rosa - 58mm", price: 1899.00, image: "https://http2.mlstatic.com/D_Q_NP_990915-MLB86814868332_072025-F-patins-traxart-infantil-profissional-strike-rosa-58mm.webp", link: "https://mercadolivre.com/sec/1tyuxWD", featured: false, category: "patins-completos-street" },
  { id: 6, title: "Patins In Line Razors Sl Sky", price: 2140.81, image: "https://http2.mlstatic.com/D_Q_NP_714011-MLB96878855908_112025-F-patins-in-line-razors-sl-sky.webp", link: "https://mercadolivre.com/sec/2A9hzkB", featured: false, category: "patins-completos-street" },
  { id: 6, title: "Patins Usd Aeon Richie Eisler (37 Ao 44)", price: 3500.00, image: "https://http2.mlstatic.com/D_Q_NP_930152-MLB91135482546_092025-F-patins-usd-aeon-richie-eisler-37-ao-44.webp", link: "https://mercadolivre.com/sec/2VG23Pd", featured: false, category: "patins-completos-street" },
  { id: 6, title: "Patins Street Profissional Cougar 7003 4 Rodas 60mm Abec-11", price: 2599.90, image: "https://http2.mlstatic.com/D_Q_NP_882877-MLB96652617540_112025-F-patins-street-profissional-cougar-7003-4-rodas-60mm-abec-11.webp", link: "https://mercadolivre.com/sec/2p5NeX9", featured: false, category: "patins-completos-street" },
  { id: 6, title: "Patins Inline Razors Cult Level One - Branco", price: 1783.81, image: "https://http2.mlstatic.com/D_Q_NP_624463-MLB99602501852_122025-F-patins-inline-razors-cult-level-one-branco.webp", link: "https://mercadolivre.com/sec/2sStz9Y", featured: true, category: "patins-completos-street" },

  // Velocidade
  // { id: 7, title: "Patins Velocidade", price: 1199.90, image: "assets/products/patins-completos-velocidade.jpg", link: "#", featured: true, category: "patins-completos-velocidade" },

  // 3 Rodas
  { id: 8, title: "Patins Hd Inline - Evolution Ii - 3 Rodas 110mm", price: 1399.00, image: "https://http2.mlstatic.com/D_Q_NP_768626-MLB92102896854_092025-F-patins-hd-inline-evolution-ii-3-rodas-110mm.webp", link: "https://mercadolivre.com/sec/11FKDeW", featured: true, category: "patins-completos-3rodas" },
  { id: 8, title: "Patins Rollerblade Lightning 110 (36 Ao 46)", price: 2799.00, image: "https://http2.mlstatic.com/D_Q_NP_711233-MLB90741664777_082025-F-patins-rollerblade-lightning-110-36-ao-46.webp", link: "https://mercadolivre.com/sec/2Su5TNJ", featured: false, category: "patins-completos-3rodas" },

  // Customize seu Patins
  // { id: 9, title: "Patins Customize", price: 1299.90, image: "assets/products/patins-completos-customize.jpg", link: "#", featured: false, category: "patins-completos-customize" },

  // Patins com Rodas de Led
  // { id: 10, title: "Patins com Rodas de LED", price: 1399.90, image: "assets/products/patins-completos-led.jpg", link: "#", featured: true, category: "patins-completos-led" },

  // Kit Patins + Protetor
  // { id: 11, title: "Kit Patins + Protetor", price: 699.90, image: "assets/products/patins-completos-kit-patins-protetor.jpg", link: "#", featured: false, category: "patins-completos-kit-patins-protetor" },

  // ================= RODAS, BASES E ROLAMENTOS =================
  { id: 12, title: "Roda Rollerblade Hydrogen 80mm 85a (8 Rodas)", price: 699.00, image: "https://http2.mlstatic.com/D_Q_NP_686238-MLB81834020687_012025-F-roda-rollerblade-hydrogen-80mm-85a-8-rodas.webp", link: "https://mercadolivre.com/sec/1UHoKtQ", featured: false, category: "rodas-bases-rolamentos-inline" },
  { id: 12, title: "Roda Rollerblade Hydrogen 110mm 85a (8 Rodas)", price: 999.00, image: "https://http2.mlstatic.com/D_Q_NP_835386-MLB81563084906_012025-F-roda-rollerblade-hydrogen-110mm-85a-8-rodas.webp", link: "https://mercadolivre.com/sec/2ciGcCZ", featured: false, category: "rodas-bases-rolamentos-inline" },

  { id: 13, title: "Jogo De Rodas Traxart Quad Runway 58x32mm/83a - Preta", price: 99.00, image: "https://http2.mlstatic.com/D_Q_NP_756081-MLB90447326932_082025-F-jogo-de-rodas-traxart-quad-runway-58x32mm83a-preta.webp", link: "https://mercadolivre.com/sec/1sCx9dq", featured: false, category: "rodas-bases-rolamentos-quad" },

  { id: 14, title: "Jogo de Rodas Traxart Street Pro - Main Street 57mm", price: 129.00, image: "https://m.media-amazon.com/images/I/41QUaNC6DhL._AC_SX466_.jpg", link: "https://amzn.to/4i0RLPP", featured: false, category: "rodas-bases-rolamentos-street" },

  { id: 15, title: "Jogo De Rodas Traxart Led Special Verde 80mm/85a", price: 338.00, image: "https://http2.mlstatic.com/D_Q_NP_864390-MLA99951630219_112025-F.webp", link: "https://mercadolivre.com/sec/2Ev7D7y", featured: false, category: "rodas-bases-rolamentos-led" },

  // Bases
  // { id: 16, title: "Bases Patins", price: 249.90, image: "assets/products/bases.jpg", link: "#", featured: false, category: "rodas-bases-rolamentos-bases" },

  // Rolamentos
  // { id: 17, title: "Rolamentos Patins", price: 99.90, image: "assets/products/rolamentos.jpg", link: "#", featured: false, category: "rodas-bases-rolamentos-rolamentos" },

  // ================= ACESSÓRIOS E PEÇAS =================
  // { id: 18, title: "Fivelas e Parafusos", price: 29.90, image: "assets/products/fivelas.jpg", link: "#", featured: false, category: "acessorios-pecas-fivelas-parafusos" },
  // { id: 19, title: "Bota Interna e Cuffs", price: 89.90, image: "assets/products/bota-interna.jpg", link: "#", featured: false, category: "acessorios-pecas-bota-interna-cuffs" },
  // { id: 20, title: "Freios", price: 79.90, image: "assets/products/freios.jpg", link: "#", featured: false, category: "acessorios-pecas-freios" },
  // { id: 21, title: "Outros Acessórios", price: 49.90, image: "assets/products/outros-acessorios.jpg", link: "#", featured: false, category: "acessorios-pecas-outros-acessorios" },

  // ================= MEIAS E CADARÇOS =================
  // { id: 22, title: "Meias para Patinação", price: 19.90, image: "assets/products/meias.jpg", link: "#", featured: true, category: "meias-cadarcos-meias-patinacao" },
  // { id: 23, title: "Cadarços Freestyle", price: 14.90, image: "assets/products/cadarcos-freestyle.jpg", link: "#", featured: false, category: "meias-cadarcos-cadarcos-freestyle" },
  // { id: 24, title: "Cadarços Quad", price: 14.90, image: "assets/products/cadarcos-quad.jpg", link: "#", featured: false, category: "meias-cadarcos-cadarcos-quad" },

  // ================= SKATES E LONGBOARDS =================
  // { id: 25, title: "Skate Intermediário", price: 399.90, image: "assets/products/skate-intermediario.jpg", link: "#", featured: true, category: "skates-intermediario" },
  // { id: 26, title: "Skate Pró", price: 499.90, image: "assets/products/skate-pro.jpg", link: "#", featured: false, category: "skates-pro" },
  // { id: 27, title: "Skate X-Pro", price: 599.90, image: "assets/products/skate-xpro.jpg", link: "#", featured: false, category: "skates-xpro" },
  // { id: 28, title: "Skate Plástico", price: 299.90, image: "assets/products/skate-plastico.jpg", link: "#", featured: false, category: "skates-plastico" },
  // { id: 29, title: "Longboard Simétrico", price: 799.90, image: "assets/products/longboard-simetrico.jpg", link: "#", featured: false, category: "longboards-simetrico" },
  // { id: 30, title: "Longboard Cruiser", price: 849.90, image: "assets/products/longboard-cruiser.jpg", link: "#", featured: false, category: "longboards-cruiser" },
  // { id: 31, title: "Longboard Pintail", price: 899.90, image: "assets/products/longboard-pintail.jpg", link: "#", featured: false, category: "longboards-pintail" },

  // ================= PEÇAS E ACESSÓRIOS SKATE =================
  // { id: 32, title: "Peças e Acessórios Skate e Longboards", price: 49.90, image: "assets/products/pecas-skate.jpg", link: "#", featured: false, category: "pecas-acessorios-skate-pecas-skate-long" },
  // { id: 33, title: "Meias Cano Alto", price: 29.90, image: "assets/products/meias-cano-alto-skate.jpg", link: "#", featured: false, category: "pecas-acessorios-skate-meias-cano-alto" },

  // ================= CAPACETES E PROTETORES =================
  // Capacete Lazer (Iniciante)
  // { id: 34, title: "Capacete Lazer Iniciante", price: 199.90, image: "assets/products/capacete-lazer.jpg", link: "#", featured: false, category: "capacetes-lazer" },

  // Capacete Intermediário — CORRIGIDO SLUG
  { id: 11, title: "Capacete Traxart Strt Azul Claro Gc-221", price: 149.00, image: "https://http2.mlstatic.com/D_Q_NP_784061-MLB88093164414_072025-F-capacete-traxart-strt-azul-claro-gc-221.webp", link: "https://mercadolivre.com/sec/1KFrGfh", featured: false, category: "capacetes-intermediarios" },

  // Capacete Profissional
  { id: 11, title: "Capacete Bike Skate Patins Patinete", price: 69.90, image: "https://http2.mlstatic.com/D_Q_NP_621126-MLB80314022672_112024-F-capacete-bike-skate-patins-patinete-unissex-profissional.webp", link: "https://mercadolivre.com/sec/11ZdbAe", featured: false, category: "capacetes-pro" },

  // ================= PROTETORES =================
  // Kit Infantil
  // { id: 37, title: "Kit Infantil Proteção", price: 149.90, image: "assets/products/protetores-infantil.jpg", link: "#", featured: false, category: "protetores-kit-infantil" },

  // Kit Adulto
  { id: 38, title: "Kit Proteção Traxart Sse - Preto - Sse-613", price: 199.00, image: "https://http2.mlstatic.com/D_Q_NP_793283-MLB78215752367_082024-F-kit-proteco-traxart-sse-preto-sse-613.webp", link: "https://mercadolivre.com/sec/1Ntz3LZ", featured: false, category: "protetores-kit-adulto" },
  { id: 38, title: "Bermuda Pads Bundeira Infantil Proteção Lombar Coccix Skate", price: 106.13, image: "https://http2.mlstatic.com/D_Q_NP_642284-MLB98048156948_112025-F-bermuda-pads-bundeira-infantil-proteco-lombar-coccix-skate.webp", link: "https://mercadolivre.com/sec/21gLypA", featured: false, category: "protetores-kit-adulto" },
  { id: 38, title: "Kit De Proteção Completo M E G Juvenil E Adulto", price: 578.94, image: "https://http2.mlstatic.com/D_Q_NP_950631-MLB98355083803_112025-F-kit-de-proteco-completo-m-e-g-juvenil-e-adulto.webp", link: "https://mercadolivre.com/sec/1hxzKaK", featured: false, category: "protetores-kit-adulto" },

  // Munhequeiras e Joelheiras
  // { id: 39, title: "Munhequeiras e Joelheiras", price: 129.90, image: "assets/products/munhequeiras-joelheiras.jpg", link: "#", featured: false, category: "protetores-munhequeiras-joelheiras" },

  // ================= MOCHILAS =================
  // { id: 40, title: "Mochilas para Patins", price: 129.90, image: "assets/products/mochila-patins.jpg", link: "#", featured: true, category: "linhas-mochilas-mochilas-patins" },
  // { id: 41, title: "Inline Bags", price: 139.90, image: "assets/products/inline-bag.jpg", link: "#", featured: false, category: "linhas-mochilas-inline-bags" },
  // { id: 42, title: "Mochilas Médias", price: 149.90, image: "assets/products/mochila-media.jpg", link: "#", featured: false, category: "linhas-mochilas-mochilas-medias" },
  // { id: 43, title: "Mochilas Grandes", price: 179.90, image: "assets/products/mochila-grande.jpg", link: "#", featured: false, category: "linhas-mochilas-mochilas-grandes" },
  // { id: 44, title: "Mochila para Skate", price: 159.90, image: "assets/products/mochila-skate.jpg", link: "#", featured: false, category: "linhas-mochilas-mochila-skate" },
  // { id: 45, title: "Mochilas do dia-a-dia", price: 129.90, image: "assets/products/mochila-dia-dia.jpg", link: "#", featured: false, category: "linhas-mochilas-mochilas-dia-a-dia" },
  // { id: 46, title: "Shoulder Bags / Pochetes", price: 149.90, image: "assets/products/shoulder-bag.jpg", link: "#", featured: false, category: "linhas-mochilas-pochetes" },

  // ================= MODA =================
  // Masculina
  // { id: 47, title: "Camisetas", price: 79.90, image: "assets/products/camiseta-masc.jpg", link: "#", featured: false, category: "masculina-camisetas-masculinas" },
  // { id: 48, title: "Calças e Bermudas", price: 129.90, image: "assets/products/calca-bermuda-masc.jpg", link: "#", featured: false, category: "masculina-calcas-bermudas-masc" },
  // { id: 49, title: "Moletons e Jaquetas", price: 199.90, image: "assets/products/moletom-jaqueta-masc.jpg", link: "#", featured: false, category: "masculina-moletons-masc" },
  // { id: 50, title: "Calçados", price: 199.90, image: "assets/products/calcado-masc.jpg", link: "#", featured: false, category: "masculina-calcados-masc" },

  // Feminina
  // { id: 51, title: "Camisetas e Blusas", price: 79.90, image: "assets/products/camiseta-fem.jpg", link: "#", featured: false, category: "feminina-camisetas-blusas-fem" },
  // { id: 52, title: "Calças e Shorts", price: 129.90, image: "assets/products/calca-short-fem.jpg", link: "#", featured: false, category: "feminina-calcas-shorts-fem" },
  // { id: 53, title: "Moletons e Jaquetas", price: 199.90, image: "assets/products/moletom-jaqueta-fem.jpg", link: "#", featured: false, category: "feminina-moletons-fem" },
  // { id: 54, title: "Calçados", price: 199.90, image: "assets/products/calcado-fem.jpg", link: "#", featured: false, category: "feminina-calcados-fem" },

  // Juvenil
  // { id: 55, title: "Camisetas Juvenil", price: 69.90, image: "assets/products/camiseta-juvenil.jpg", link: "#", featured: false, category: "juvenil-camisetas-juvenil" },
  // { id: 56, title: "Calças e Bermudas Juvenil", price: 99.90, image: "assets/products/calca-bermuda-juvenil.jpg", link: "#", featured: false, category: "juvenil-calcas-bermudas-juvenil" },
  // { id: 57, title: "Moletons Juvenil", price: 129.90, image: "assets/products/moletom-juvenil.jpg", link: "#", featured: false, category: "juvenil-moletons-juvenil" },
  // { id: 58, title: "Calçados Juvenil", price: 129.90, image: "assets/products/calcado-juvenil.jpg", link: "#", featured: false, category: "juvenil-calcados-juvenil" },

  // Acessórios Moda
  // { id: 59, title: "Carteiras", price: 49.90, image: "assets/products/carteira.jpg", link: "#", featured: false, category: "acessorios-moda-carteiras" },
  // { id: 60, title: "Cintos", price: 39.90, image: "assets/products/cinto.jpg", link: "#", featured: false, category: "acessorios-moda-cintos" },
  // { id: 61, title: "Bonés e Gorros", price: 59.90, image: "assets/products/bone-gorro.jpg", link: "#", featured: false, category: "acessorios-moda-bones-gorros" },
  // { id: 62, title: "Meias Cano Alto", price: 29.90, image: "assets/products/meias-cano-alto-moda.jpg", link: "#", featured: false, category: "acessorios-moda-meias-cano-alto-moda" },

  // ================= KIDS =================
  // Patins Kids
  // { id: 63, title: "Patins Regulável (#28-#35)", price: 299.90, image: "assets/products/patins-regulavel-kids.jpg", link: "#", featured: true, category: "patins-kids-patins-regulavel-kids" },
  // { id: 64, title: "Patins Teen (#34+)", price: 349.90, image: "assets/products/patins-teen.jpg", link: "#", featured: false, category: "patins-kids-patins-teen" },

  // Skates e Longboards Kids
  // { id: 65, title: "Longboard Completos", price: 399.90, image: "assets/products/longboard-kids.jpg", link: "#", featured: false, category: "skates-long-kids-longboard-kids" },
  // { id: 66, title: "Skates", price: 299.90, image: "assets/products/skate-kids.jpg", link: "#", featured: false, category: "skates-long-kids-skates-kids" },

  // Proteção Kids
  // { id: 67, title: "Kit de Proteção Infanto-Juvenil", price: 149.90, image: "assets/products/kit-protecao-kids.jpg", link: "#", featured: true, category: "protecao-kids-kit-protecao-kids" },

  // Moda Kids
  // { id: 68, title: "Moda Infanto-Juvenil", price: 129.90, image: "assets/products/moda-kids.jpg", link: "#", featured: false, category: "moda-kids-moda-kids" }
];