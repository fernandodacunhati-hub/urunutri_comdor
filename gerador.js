import fs from 'fs';
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nome da Loja: ', (storeName) => {
  rl.question('Nicho: ', (niche) => {
    rl.question('Título do Produto: ', (title) => {
      rl.question('Preço ($U): ', (price) => {
        rl.question('URL da Imagem: ', (image) => {
          
          const configContent = `// Gerado automaticamente
export const storeConfig = {
  storeName: "${storeName}",
  niche: "${niche}",
  primaryColor: "indigo",
  currency: "$U",
  product: {
    title: "${title}",
    subtitle: "Envio garantido para todo o Uruguai.",
    oldPrice: "${(Number(price) * 1.5).toFixed(0)}",
    price: "${price}",
    installments: "",
    image: "${image}",
    badge: "Frete Grátis 🇺🇾"
  },
  checkoutLink: "https://mpago.li/seu-link",
  whatsapp: "+59899123456"
};
`;

          fs.writeFileSync('./src/config.js', configContent);
          console.log('\n✨ Configuração gerada com sucesso em src/config.js! ✨');
          rl.close();
        });
      });
    });
  });
});