// // প্রথমে ডাটাবেজ ইমটি থাকবে যেমন 
// const database = {}


// // আমাদের ডাটাবেজে ডাটা এড করতে হবে 
// const addToData = (item) => {
//     const database = getDatabase()
//         if (item in database){
//             database[item] = database[item] + 1
//         }else{
//             database[item] = 1
//         }
    
//     console.log(database)
// }

// // আমাদের ডাটাবেজে কি আছে তা দেখতে হবে 
// const getDatabase = ()=>{
//     // এবং এইটা শুধু মাত্র আমাদের ডাটাবেজ কে রিটার্ন করে দিবে 
//     return database
// // }

// const database = {}

// const addtocart = (item) => {
//     if (item in database){
//         database[item] = database[item] + 1
//     }else{
//         database[item] = 1
//     }
//     console.log(database)
// }

// const getdtaabase = ()=>{
//     return database
// }
const database = {}

const addToDatabase = (item)=>{
    if (database[item]){
        database[item] = database[item] + 1
    }else{
        database[item] = 1
    }
    console.log(database)
}


// storage data 
const getDatabase = ()=>{
    return database
}

// remove data 

const removeFromData = (item)=>{
    const database = getDatabase() 
    delete database[item]    
}