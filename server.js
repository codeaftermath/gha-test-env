const INSTRUCTOR = process.env.NAME || "Mickey";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    console.log(`${INSTRUCTOR} rule!`);
    await sleep(5000);
  }
}

main();