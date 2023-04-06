let path = 'assets/images/profile.jpg'
let buffer = document.querySelector('#foto-profil');
buffer.setAttribute('src', path);
buffer.setAttribute('alt', 'foto profil orang');

let a = document.querySelector("#selayang");
a.textContent = "Selamat datang di website portofolio Sederhana saya, website ini menampilkan beberapa informasi terkait saya, seperti riwayat pendidikan, keahlian, sampai pengalaman saya.";

let b = document.querySelector("#saya");
b.textContent = "Perkenalkan nama saya Muhammad Rizqi Ghozali, saya seorang mahasiswa di suatu universitas yang bernama Universitas Suryakancana (UNSUR). Saat ini sedang mengambil sarjana (S1) pada program studi Teknik Informatika. Saat ini saya sedang belajar mengenai Pemrograman Web, Pemrograman Desktop, Pengolahan Basis Data, dan sebagainya."

let c = document.querySelector("#pendidikan");
let li = [
    "Universitas Suryakancana, Teknik Informatika (2021 - Sekarang)",
    "SMK Negeri 1 Cianjur, Rekayasa Perangkat Lunak (2018 - 2021)",
    "MTs Negeri 6 Cianjur (2015 - 2018)"
];
li.forEach(element => {
    let node = document.createElement('li');
    node.textContent = element;
    c.appendChild(node);
});

let d = document.querySelector("#keahlian");
li = [
    "Menguasai beberapa bahasa pemrograman seperti C/C++, Rust, Go, Python, Julia, dan Lua.",
    "Memahami sistem operasi seperti Windows dan Linux.",
    "Memahami konsep jaringan komputer",
    "Dapat mengoperasikan Microsoft Office seperti Word, Excel, dan PowerPoint",
    "Mampu menyelesaikan masalah"
];
li.forEach(element => {
    let node = document.createElement('li');
    node.textContent = element;
    d.appendChild(node);
});

let e = document.querySelector("#pengalaman");
li = [
    "Pernah melakukan praktik kerja lapangan menjadi Web Developer selama 3 bulan dari tanggal 16 Desember 2019 sampai 13 Maret 2020 di PT. Dirgantara Indonesia."
];
li.forEach(element => {
    let node = document.createElement('li');
    node.textContent = element;
    e.appendChild(node);
});

let f = document.querySelector("#kontak");
li = [
    "Jl. Tugu Lio, Kelurahan Sayang, Cianjur, Jawa Barat",
    "(+62) 812-2459-9479",
    '<a href="mailto:riz.ghz@gmail.com">riz.ghz@gmail.com</a>'
];
li.forEach(element => {
    let node = document.createElement('li');
    node.innerHTML = element;
    f.appendChild(node);
});
