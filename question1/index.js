const fs = require("fs/promises");
const path = require('path');

//Start implementing the function
function balancedSum(arr) {
    const sum = arr.reduce((acc, curVal) => acc + curVal)
    let partlySum = 0
    for (let i = 1; i < arr.length; i++){
        partlySum += arr[i-1]
        if((sum - arr[i]) % 2 == 0 && partlySum === (sum - arr[i]) / 2){
            return i
        }
    }
    return -1
}
//End implementing the function

async function main() {
  const testDirPath = "array_test_cases";
  try {
    const testFiles = await fs.readdir(testDirPath);
    for (const file of testFiles) {
      (async () => {
        const data = await fs.readFile(path.join(testDirPath, file) , "utf8");
        let arr = data.split('\n')
        arr = arr.map(x => parseInt(x))
        const pivot = balancedSum(arr.slice(1,arr[0]+1))
        console.log(`Test file - ${file}: pivot - ${pivot}`)
      })();
    }
  } catch (err) {
    console.error(err);
  }
}

main();
