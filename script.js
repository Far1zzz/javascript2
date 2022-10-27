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
let tblMhs = document.getElementById("tblMahasiswa")


let data = []

function simpan(){
    console.log("button was click")

    console.log(txtNpm.value)
    console.log(txtNama.value)


    // cek apakah ada data di dalam local storage dengan key ls mahasiswa
    if(localStorage.getItem("lsMahasiswa")===null){
        // jika localStorage dengan key lsMahasiswa

        // simpan ke array data
        data.push({"npm" : txtNpm.value, "nama" : txtNama.value})

        // simpan localStorage dengan key lsMahasiswa
        localStorage.setItem("lsMahasiswa", JSON.stringify(data))
    }else{
        // jka localStorage dengan key lsMahasiswa sudah ada/sudah disimpan sebelomnya

        // ambil dulu data di localStorage dengan key lsMahasiswa
        let dataLs = JSON.parse(localStorage.getItem("lsMahasiswa"))
        console.log(dataLs)
        //push datta baru ke dalam array
        dataLs.push({"npm": txtNpm.value, "nama": txtNama.value})
        // simpan data baru kedalam localStorage
        localStorage.setItem("lsMahasiswa", JSON.stringify(dataLs))
    }

    tampil()
}

function tampil(){
    // clear Elemen list mhsiswa
    listMhs.innerHTML = ""
    // gunakan foreach
    data.forEach(listData)

    let dataTampil = JSON.parse(localStorage.getItem("lsMahasiswa"))
    dataTampil.forEach(listData)
}

function listData(item, index){
    // innerHtml elemen ul id= "listMahasiswa" pada index.html
    listMhs.innerHTML += "<li>" + item.npm +"-"+ item.nama +"</li>"
    // innerHtml elemen table id= "tblMahasiswa" pada index html
    tblMhs.innerHTML += `<tr><td>${item.npm}</td><td>${item.nama}</td><tr>`
}
