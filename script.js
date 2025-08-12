const coins = {
    doge: {
        name: "Dogecoin",
        desc: "犬の柴犬がモチーフの元祖ミームコイン。2009年に冗談として作られたが人気爆発。",
         img: "https://cryptologos.cc/logos/dogecoin-doge-logo.png"
    },
    shiba: {
        name: "Shiba Inu",
        desc: "Ethereum上に作られた柴犬テーマのトークン。DeFiやNFTでも活用されている。",
        img: "https://cryptologos.cc/logos/shiba-inu-shib-logo.png"
    },
    pepe: {
        name: "Pepe",
        desc: "カエルのペペをモチーフにした新興ミームコイン。2023年に注目を集める。",
        img: "https://cryptologos.cc/logos/pepe-pepe-logo.png"
    }
};

const params = new URLSearchParams(window.location.search);
const coinKey = params.get("name");

if (coinKey && coins[coinKey]) {
    document.getElementById("coin-name").innerText = coins[coinKey].name;
    document.getElementById("coin-detail").innerHTML = `
        <img src="${coins[coinKey].img}" width="100">
        <p>${coins[coinKey].desc}</p>
    `;
}