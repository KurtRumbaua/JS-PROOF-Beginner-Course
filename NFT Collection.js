let myNFTs = [];

function mintNFT(name, eyeColor, blingFactor) {
  const newNFT = {
    name: name,
    eyeColor: eyeColor,
    blingFactor: blingFactor
  };
  myNFTs.push(newNFT);
}

function listNFTs() {
  for (const nft of myNFTs) {
    console.log("Name:", nft.name);
    console.log("Eye Color:", nft.eyeColor);
    console.log("Bling Factor:", nft.blingFactor);
    console.log("-------------");
  }
}

function getTotalSupply() {
  return myNFTs.length;
}

// Mint some NFTs
mintNFT("Cool Cat", "Blue", 9000);
mintNFT("Funky Monkey", "Green", 5000);
mintNFT("Pixel Penguin", "Red", 7500);

// List the minted NFTs
listNFTs();

// Get and print the total supply
const totalSupply = getTotalSupply();
console.log("Total NFT Supply:", totalSupply);
