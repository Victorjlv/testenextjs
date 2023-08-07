type Product = {
  id: number;
  title: string;
  desc?: string;
  img?: string;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};
  
type Products = Product[];
  
export const featuredProducts: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Acenda seu paladar com uma combinação ardente de pepperoni picante, jalapeños, flocos de pimenta vermelha esmagados e queijo mussarela derretido, dando um sabor a cada mordida.",
    img: "/temporary/p1.png",
    price: 36.99,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Bacon Deluxe",
    desc: "Delicie-se com um hambúrguer de carne grelhada na chama, coberto com bacon crocante, queijo cheddar derretido, cebola caramelizada e um punhado de molho picante de churrasco.",
    img: "/temporary/p2.png",
    price: 17.99,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "Uma delícia clássica italiana com uma crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromáticas cobertas com alface, tomate e maionese picante.",
    img: "/temporary/p3.png",
    price: 29.99,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Arrabbiata Picante",
    desc: "Acenda seu paladar com esta criação de massa ardente, combinando penne em um molho de tomate picante com alho, flocos de pimenta vermelha e manjericão fresco para a melhor experiência de comida caseira.",
    img: "/temporary/p4.png",
    price: 26.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Jalapeño Fiesta",
    desc: "Acenda seu paladar com um combo de fogo! Este hambúrguer apresenta uma suculenta carne, jalapeños ardentes, queijo pepper jack e um picante molho de maionese chipotle e todos os ingredientes clássicos em um pão torrado.",
    img: "/temporary/p5.png",
    price: 29.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Margherita Magic",
    desc: "Um favorito atemporal com um toque especial, apresentando uma crosta fina coberta com tomate doce, manjericão fresco, mussarela cremosa e um fiozinho de azeite de oliva extra virgem, rúcula fresca e glacê balsâmico.",
    img: "/temporary/p6.png",
    price: 24.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 7,
    title: "Garlic Parmesan Linguine",
    desc: "Uma delícia para os amantes de alho, com linguine envolto em molho cremoso de parmesão, infundido com alho e guarnecido com salsa picada, pimentão e tomate cereja.",
    img: "/temporary/p7.png",
    price: 28.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 8,
    title: "Mediterranean Delight",
    desc: "Embarque em uma jornada culinária com uma inspiração mediterrânea, com queijo feta picante, azeitonas Kalamata, tomate seco e uma pitada de orégano.",
    img: "/temporary/p8.png",
    price: 32.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 9,
    title: "Hawaiian Teriyaki",
    desc: "Experimente o sabor dos trópicos com um suculento hambúrguer de carne coberto com molho teriyaki picante, coberto com abacaxi grelhado, bacon crocante, alface fresca e todos os acompanhamentos clássicos em um pão torrado.",
    img: "/temporary/p9.png",
    price: 29.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
];
  
export const pizzas: Products = [
  {
    id: 1,
    title: "Sicilian",
    desc: "Acenda seu paladar com uma combinação ardente de pepperoni picante, jalapeños, flocos de pimenta vermelha esmagados e queijo mussarela derretido, dando um sabor a cada mordida.",
    img: "/temporary/p1.png",
    price: 24.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 2,
    title: "Mediterranean Delight",
    desc: "Embarque em uma jornada culinária com esta criação de inspiração mediterrânea, com queijo feta picante, azeitonas Kalamata, tomate seco e uma pitada de orégano.",
    img: "/temporary/p8.png",
    price: 32.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 3,
    title: "Bella Napoli",
    desc: "Uma delícia italiana clássica com uma crosta fina e crocante, molho de tomate picante, mussarela fresca e uma mistura de ervas aromátizadas cobertas com alface, tomate e um monte de maionese picante.",
    img: "/temporary/p3.png",
    price: 26.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Pesto Primavera",
    desc: "Um ótimo prato para acompanhamento, com queijo parmesão, folhas frescas de manjericão e tomate seco picado dando cada vez mais gosto.",
    img: "/temporary/p10.png",
    price: 28.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 5,
    title: "Veggie Supreme",
    desc: "A melhor pizza vegana Italiana feita com pimentão, cogumelos, tomate e outros ingredientes, sendo a cobertura mais classica vegana.",
    img: "/temporary/p11.png",
    price: 24.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
  {
    id: 6,
    title: "Four Cheese Fantasy",
    desc: "Experimente a pura felicidade de queijo com uma mistura derretida de queijos mussarela, cheddar, provolone e parmesão, criando uma experiência de pizza rica e indulgente.",
    img: "/temporary/p12.png",
    price: 22.90,
    options: [
      {
        title: "Pequena",
        additionalPrice: 0,
      },
      {
        title: "Média",
        additionalPrice: 4,
      },
      {
        title: "Grande",
        additionalPrice: 6,
      },
    ],
  },
];
  
export const singleProduct: Product = {
  id: 1,
  title: "Sicilian",
  desc: "Acenda seu paladar com uma combinação ardente de pepperoni picante, jalapeños, flocos de pimenta vermelha esmagados e queijo mussarela derretido, dando um sabor a cada mordida.",
  img: "/temporary/p1.png",
  price: 24.90,
  options: [
    {
      title: "Pequena",
      additionalPrice: 0,
    },
    {
      title: "Média",
      additionalPrice: 4,
    },
    {
      title: "Grande",
      additionalPrice: 6,
    },
  ],
};
  
type Menu = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
}[];
  
export const menu: Menu = [
  {
    id: 1,
    slug: "pastas",
    title: "Massas Italianas",
    desc: "Saboreie o sabor da perfeição com nosso requintado menu de massas artesanais italianas.",
    img: "/temporary/m1.png",
    color: "black",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Hambúrguers Suculentos",
    desc: "Burger Bliss: rissóis suculentos, sabores arrojados e coberturas gourmet em abundância.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: 3,
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: fatias irresistíveis, coberturas de dar água na boca e queijo perfeito.",
    img: "/temporary/m3.png",
    color: "black",
  },
];