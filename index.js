const readWrite = require('./readWrite');

// Studenti [reden broj, ime, prezime, prosek, grad]
// dodavanje na student vo fajlot
// brisenje na student od fajlot
// menuvanje na podatoci na student od fajlot
// citanje na site studenti od fajlot

// 1 - Da ja vcitate celata sodrzina od fajlot | fs.readfile
// 2 - Da ja konvertirate sodrzinata od obicen tekst vo js niza / objekt
// 3 - Treba da gi dodadete podatocite na studentot vo nizata | array.push
// 4 - Nizata od js niza treba da bide konvertirana vo tekst stringify
// 5 - Tekstot treba da bide zacuvan vo fajlot | fs.writefile


//1.
// const student13 = {
//     index: 13,
//     ime: "Stanko",
//     prezime: "Popovski",
//     grad: "Kratovo",
//     prosek: 7.3,
// };
// (async()=>{
//     try{
//         const studentiData = await readWrite.fileRead('studenti.json');
//         const studenti = JSON.parse(studentiData);
//         studenti.push(student13);
//         const novaData = JSON.stringify(studenti, null, 2);
//         await readWrite.fileWrite('studenti.json',novaData);
//     }catch(err){
//         console.log(err);
//     };
// })();


//2.
// (async()=>{
//     try{
//         const studentiData = await readWrite.fileRead('studenti.json');
//         const studenti = JSON.parse(studentiData);
//         const novaData = studenti.filter((student)=>student.index != 7);
//         const newStudents = JSON.stringify(novaData, null, 2);
//         await readWrite.fileWrite('studenti.json', newStudents);
//     }catch(err){
//         console.log(err);
//     };
// })();


//3.

(async()=>{
    try{
        const studentiData = await readWrite.fileRead('studenti.json');
        const studenti = JSON.parse(studentiData);
        const fileteredStudents = studenti.map((student)=> {if(student.ime == "Riste"){
            student.ime = "Bogdan";
            
        }
            return student;
        });
        const novaData = JSON.stringify(fileteredStudents, null, 2);
        console.log(novaData);
        await readWrite.fileWrite('studenti.json', novaData);
    }catch(err){
        console.log(err);
    };
})();