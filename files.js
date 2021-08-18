const fs = require('fs');


//reading files

// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString());
// })

//write files
//
// fs.writeFile('./docs/blog2.txt', 'Hello Stupid', () => {
//   console.log('file was writtens')
// })


//directories

// if (!fs.existsSync('./asset')) {
//   fs.mkdir('./asset', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('folder created')
//   })
// } else {
//   fs.rmdir('./asset', (err) => {
//     if (err) {
//       console.log(err)
//     }
//     console.log('folder deleted')
//   })
// }

//delete files

if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
    if(err) {
      console.log(err)
    }
    console.log('deleted')
  })
}
