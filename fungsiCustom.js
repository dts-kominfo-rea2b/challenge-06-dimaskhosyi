// TODO: import module bila dibutuhkan di sini
const fs = require('fs')

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const newFile1 = (fnCallback) => {
  fs.readFile(file1, (err, data) => {
    if(err){
      return console.log('Ada terjadi error: ', err)
    }
    const newData = JSON.parse(data)
    const processData = newData.message.split(" ")
    fnCallback(processData[1])
  })
}

const newFile2 = (fnCallback) => {
  fs.readFile(file2, (err, data) => {
    if(err){
      return console.log('Ada terjadi error: ', err)
    }
    const newData = JSON.parse(data)
    const processData = newData[0].message.split(" ")
    const combineData = `${processData[1]}`
    fnCallback(combineData)
  })
}

const newFile3 = (fnCallback) => {
  fs.readFile(file3, (err, data) => {
    if(err){
      return console.log('Ada terjadi error: ', err)
    }
    const newData = JSON.parse(data)
    const processData = newData[0].data.message.split(" ")
    const combineData = `${processData[1]}`
    fnCallback(combineData)
  })
}

const bacaData = (fnCallback) => {
  newFile1(image => {
    fnCallback = image
    newFile2(image2 => {
      fnCallback = image2
      newFile3(image3 =>{
        fnCallback = image3
        const hasilAkhir = [`${image}`, `${image2}`, `${image3}`]
        return hasilAkhir
      })
    })
  })        
}

// const newFile1 = (fnCallback) => {
//   fs.readFile(file1, (err, data) => {
//     if(err){
//       return console.log('Ada terjadi error: ', err)
//     }
//     const newData = JSON.parse(data)
//     const processData = newData.message.split(" ")
//     fnCallback(processData[1])
//   })
// }

// const newFile2 = (file1, fnCallback) => {
//   fs.readFile(file2, (err, data) => {
//     if(err){
//       return console.log('Ada terjadi error: ', err)
//     }
//     const newData = JSON.parse(data)
//     const processData = newData[0].message.split(" ")
//     const combineData = `${file1} ${processData[1]}`
//     fnCallback(combineData)
//   })
// }

// const newFile3 = (file2, fnCallback) => {
//   fs.readFile(file3, (err, data) => {
//     if(err){
//       return console.log('Ada terjadi error: ', err)
//     }
//     const newData = JSON.parse(data)
//     const processData = newData[0].data.message.split(" ")
//     const combineData = `${file2} ${processData[1]}`
//     fnCallback(combineData)
//   })
// }

// const bacaData = (fnCallback) => {
//   newFile1(image => {
//     newFile2(image, (image2) => {
//       newFile3(image2, (image3) =>{
//         const data = image3.split(" ")
//         fnCallback(data)
//         return data

//       })
//     })
//   })        
// }

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
