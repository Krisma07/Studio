const nama = "krisma";
let usia = 30;


function generateBiodata() {
    if (usia == 30) {  //true
        // INI ADALAH KONDISI PERTAMA
        console.log(`anda dewasa`);
    } else {
        // INI ADALAH KONDISI TIDAK TERPENUHI
        console.log(`anda anak anak`)
    }
}

console.log (nama);
console.log (usia);

generateBiodata ();