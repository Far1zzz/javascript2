// console.log("Selamat Pagi")


// // variabel
// let npm = 2125250100
// let nama  = "Farizzzz"
// //array
// let  arrayMahasiswa = ["Pokemon", "Gogomon"]
// let arrayDosen = Array("Memed", "Ali")

// // object
// let mahasiswa = {npm: 2125250100,
//                  nama: "Fariz",   
//                 hobi:["Bola", "Game"] }

// console.log(arrayMahasiswa[0])
// console.log(arrayMahasiswa[1])

// console.log(mahasiswa.nama) //output fariz
// console.log(mahasiswa.hobi[0]) // output bola
// console.log(mahasiswa.hobi[1])


let txtNpm = document.getElementById("npm")
let txtNama = document.getElementById("nama")
let listMhs = document.getElementById("listMahasiswa")


let data = []

function simpan(){
    console.log("button was click")

    console.log(txtNpm.value)
    console.log(txtNama.value)

    // simpan ke array data
    data.push({"npm" : txtNpm.value,
            "nama" : txtNama.value})

    tampil()
}

function tampil(){
    // clear Elemen list mhsiswa
    listMhs.innerHTML = ""
    // gunakan foreach
    data.forEach(listData)
}

function listData(item, index){
    listMhs.innerHTML += item.npm +"-"+ item.nama
}
