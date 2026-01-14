const categoryGroups = [
  {
    title: "PATINS",
    slug: "patins",
    columns: [
      {
        title: "PATINS COMPLETOS",
        slug: "patins-completos",
        items: [
          { name: "Infanto Juvenil", slug: "patins-completos-infantil" },
          { name: "Recreação", slug: "patins-completos-recreacao" },
          { name: "Fitness", slug: "patins-completos-fitness" },
          { name: "Freestyle", slug: "patins-completos-freestyle" },
          { name: "Quad / Tradicional", slug: "patins-completos-quad" },
          { name: "Street / Aggressive", slug: "patins-completos-street" },
          { name: "Velocidade", slug: "patins-completos-velocidade" },
          { name: "3 Rodas", slug: "patins-completos-3rodas" },
          { name: "Customize seu Patins", slug: "patins-completos-customize" },
          { name: "Patins com Rodas de Led", slug: "patins-completos-led" },
          { name: "Kit Patins + Protetor", slug: "patins-completos-kit-patins-protetor" }
        ]
      },
      {
        title: "RODAS, BASES E ROLAMENTOS",
        slug: "rodas-bases-rolamentos",
        items: [
          { name: "Rodas Patins Inline", slug: "rodas-bases-rolamentos-inline" },
          { name: "Rodas Patins Quad", slug: "rodas-bases-rolamentos-quad" },
          { name: "Rodas Patins Street", slug: "rodas-bases-rolamentos-street" },
          { name: "Rodas de LED", slug: "rodas-bases-rolamentos-led" },
          { name: "Bases", slug: "rodas-bases-rolamentos-bases" },
          { name: "Rolamentos", slug: "rodas-bases-rolamentos-rolamentos" }
        ]
      },
      {
        title: "ACESSÓRIOS E PEÇAS",
        slug: "acessorios-pecas",
        items: [
          { name: "Fivelas e Parafusos", slug: "acessorios-pecas-fivelas-parafusos" },
          { name: "Bota Interna e Cuffs", slug: "acessorios-pecas-bota-interna-cuffs" },
          { name: "Freios", slug: "acessorios-pecas-freios" },
          { name: "Outros Acessórios", slug: "acessorios-pecas-outros-acessorios" }
        ]
      },
      {
        title: "MEIAS E CADARÇOS",
        slug: "meias-cadarcos",
        items: [
          { name: "Meias para Patinação", slug: "meias-cadarcos-meias-patinacao" },
          { name: "Cadarços Freestyle", slug: "meias-cadarcos-cadarcos-freestyle" },
          { name: "Cadarços Quad", slug: "meias-cadarcos-cadarcos-quad" }
        ]
      }
    ]
  },
  {
    title: "SKATES E LONGBOARDS",
    slug: "skates-e-longboards",
    columns: [
      {
        title: "SKATES",
        slug: "skates",
        items: [
          { name: "Skate Intermediário", slug: "skates-intermediario" },
          { name: "Skate Pró", slug: "skates-pro" },
          { name: "Skate X-Pro", slug: "skates-xpro" },
          { name: "Skate Plástico", slug: "skates-plastico" }
        ]
      },
      {
        title: "LONGBOARDS",
        slug: "longboards",
        items: [
          { name: "Simétrico", slug: "longboards-simetrico" },
          { name: "Cruiser", slug: "longboards-cruiser" },
          { name: "Pintail", slug: "longboards-pintail" }
        ]
      },
      {
        title: "PEÇAS E ACESSÓRIOS",
        slug: "pecas-acessorios-skate",
        items: [
          {
            name: "Peças e Acessórios Skate e Longboards",
            slug: "pecas-acessorios-skate-pecas-skate-long"
          },
          { name: "Meias Cano Alto", slug: "pecas-acessorios-skate-meias-cano-alto" }
        ]
      }
    ]
  },
  {
    title: "CAPACETES E PROTETORES",
    slug: "capacetes-e-protetores",
    columns: [
      {
        title: "CAPACETES",
        slug: "capacetes",
        items: [
          { name: "Capacetes Lazer (Iniciante)", slug: "capacetes-lazer" },
          { name: "Capacetes Intermediários", slug: "capacetes-intermediarios" },
          { name: "Capacetes Profissionais", slug: "capacetes-pro" }
        ]
      },
      {
        title: "PROTETORES",
        slug: "protetores",
        items: [
          { name: "Kit Infantil", slug: "protetores-kit-infantil" },
          { name: "Kit Adulto", slug: "protetores-kit-adulto" },
          { name: "Munhequeiras e Joelheiras", slug: "protetores-munhequeiras-joelheiras" }
        ]
      }
    ]
  },
  {
    title: "MOCHILAS",
    slug: "mochilas",
    columns: [
      {
        title: "LINHAS",
        slug: "linhas-mochilas",
        items: [
          { name: "Mochilas para Patins", slug: "linhas-mochilas-mochilas-patins" },
          { name: "Inline Bags", slug: "linhas-mochilas-inline-bags" },
          { name: "Mochilas Médias", slug: "linhas-mochilas-mochilas-medias" },
          { name: "Mochilas Grandes", slug: "linhas-mochilas-mochilas-grandes" },
          { name: "Mochila para Skate", slug: "linhas-mochilas-mochila-skate" },
          { name: "Mochilas do dia-a-dia", slug: "linhas-mochilas-mochilas-dia-a-dia" },
          { name: "Shoulder Bags / Pochetes", slug: "linhas-mochilas-pochetes" }
        ]
      }
    ]
  },
  {
    title: "MODA",
    slug: "moda",
    columns: [
      {
        title: "MASCULINA",
        slug: "masculina",
        items: [
          { name: "Camisetas", slug: "masculina-camisetas-masculinas" },
          { name: "Calças e Bermudas", slug: "masculina-calcas-bermudas-masc" },
          { name: "Moletons e Jaquetas", slug: "masculina-moletons-masc" },
          { name: "Calçados", slug: "masculina-calcados-masc" }
        ]
      },
      {
        title: "FEMININA",
        slug: "feminina",
        items: [
          { name: "Camisetas e Blusas", slug: "feminina-camisetas-blusas-fem" },
          { name: "Calças e Shorts", slug: "feminina-calcas-shorts-fem" },
          { name: "Moletons e Jaquetas", slug: "feminina-moletons-fem" },
          { name: "Calçados", slug: "feminina-calcados-fem" }
        ]
      },
      {
        title: "JUVENIL",
        slug: "juvenil",
        items: [
          { name: "Camisetas Juvenil", slug: "juvenil-camisetas-juvenil" },
          { name: "Calças e Bermudas Juvenil", slug: "juvenil-calcas-bermudas-juvenil" },
          { name: "Moletons Juvenil", slug: "juvenil-moletons-juvenil" },
          { name: "Calçados Juvenil", slug: "juvenil-calcados-juvenil" }
        ]
      },
      {
        title: "ACESSÓRIOS",
        slug: "acessorios-moda",
        items: [
          { name: "Carteiras", slug: "acessorios-moda-carteiras" },
          { name: "Cintos", slug: "acessorios-moda-cintos" },
          { name: "Bonés e Gorros", slug: "acessorios-moda-bones-gorros" },
          { name: "Meias Cano Alto", slug: "acessorios-moda-meias-cano-alto-moda" }
        ]
      }
    ]
  },
  {
    title: "KIDS",
    slug: "kids",
    columns: [
      {
        title: "PATINS KIDS",
        slug: "patins-kids",
        items: [
          { name: "Patins Regulável (#28-#35)", slug: "patins-kids-patins-regulavel-kids" },
          { name: "Patins Teen (#34+)", slug: "patins-kids-patins-teen" }
        ]
      },
      {
        title: "SKATES E LONGBOARDS",
        slug: "skates-long-kids",
        items: [
          { name: "Longboard Completos", slug: "skates-long-kids-longboard-kids" },
          { name: "Skates", slug: "skates-long-kids-skates-kids" }
        ]
      },
      {
        title: "PROTEÇÃO",
        slug: "protecao-kids",
        items: [
          {
            name: "Kit de Proteção Infanto-Juvenil",
            slug: "protecao-kids-kit-protecao-kids"
          }
        ]
      },
      {
        title: "MODA KIDS",
        slug: "moda-kids",
        items: [
          { name: "Moda Infanto-Juvenil", slug: "moda-kids-moda-kids" }
        ]
      }
    ]
  }
];