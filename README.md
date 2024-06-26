# NFT Collection Project

A simple demonstration of an NFT (Non-Fungible Token) collection system. Create, list, and track your unique digital assets.

## Description

This project is a simplified model of an NFT (Non-Fungible Token) collection system. NFTs are unique digital assets that represent ownership of items like artwork, music, collectibles, or other digital goods. Each NFT in this collection has distinct characteristics, making them valuable and collectible.

In this project, you can create ("mint") new NFTs, each with unique attributes: a name, eye color, and a "bling factor" that quantifies how fancy the NFT is.  Each NFT is represented as a JavaScript object, making it easy to manage and track.

The project's functionality is divided into several functions:

* **`mintNFT(name, eyeColor, blingFactor)`:** This function takes the properties of a new NFT as input. It creates a new NFT object, storing these properties, and adds the NFT to your collection, represented by the `myNFTs` array.

* **`listNFTs()`:**  This function iterates through your NFT collection (`myNFTs`) and neatly displays the details (name, eye color, bling factor) of each NFT you own in the console.

* **`getTotalSupply()`:** This function calculates and returns the total number of NFTs you have in your collection, giving you an overview of its size.

## Executing the Program

1. **Clone or Download:** 
   - If you have git installed, clone this repository to your computer using:
     ```bash
     git clone <repository_url>
     ```
   - If you don't have git, you can download the project as a ZIP file and extract it.

2. **Install Node.js:**
   - If you don't already have Node.js installed, download the installer from the official website (https://nodejs.org/) and follow the instructions for your operating system.

3. **Open in Your IDE:** 
   - Open the project folder in your preferred code editor (like Visual Studio Code, Atom, etc.).

4. **Run the Code:**
   - Open a terminal window within your IDE.
   - Navigate to the project's directory using the `cd` command (e.g., `cd path/to/your/project`).
   - Type the following command and press Enter:
     ```bash
     node your_script_name.js
     ```
     Replace `your_script_name.js` with the actual filename of your JavaScript file (likely `index.js` or similar). 

Now you should see the output of the NFT collection program in your terminal, showing the details of your minted NFTs and the total supply.
