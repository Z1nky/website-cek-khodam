const card = document.querySelector('.card');
    const namaUser = document.getElementById('inputNama');
    const resultNama = document.getElementById('resultNama');
    const resultKhodam = document.getElementById('resultKhodam');
    const checkBtn = document.getElementById('checkBtn');
    const cardSub = document.querySelector('.card-sub');
    const backBtn = document.querySelector('.btnKembali');


const checkKhodam = () => {
    const viewNama = namaUser.value;

    if(viewNama){

        let arrKhodam = ["Maung Bandung🐯", "Singa Rawrrr 🦁",
            "Kucing Garong 🐱", "Sapi Mooo 🐮", "Naga Bonar 🐲","Babi ngokkk 🐷","Chiken Nugget 🐔","Roger Sumatra 🐺", "Kuda Lumping 🫏", "Zebra madagaskar 🦓", "Curut Item 🐭", "Monyet Pakboy 🐵", "Jerapah Puter 🦒", "Kungfu Panda 🐼"];
    
        let viewKhodam = arrKhodam[(Math.floor(Math.random() * arrKhodam.length))];

        let timerInterval;
        Swal.fire({
        title: "Sebentar, Mbah Liat Dulu 🧐",
        html: "tunggu sampai selesai.",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
        });
    
        cardSub.style.display = 'none';
        namaUser.style.display = 'none';
        resultNama.style.display = 'block';
        resultKhodam.style.display = 'block';
        checkBtn.style.display = 'none';
        backBtn.style.display = 'block';
        resultNama.innerHTML = `Khodam yang ada di dalam diri : ${viewNama}`;
        resultKhodam.innerHTML = `${viewKhodam}`;
    }else{
        Swal.fire({
            title: "Masukan Nama Terlebih Dahulu!",
            icon: "error",
            width: 700,
            showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
            `
            },
            hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
            `
            }
        });
    }
}

const kembali = () => {

    namaUser.value = ''
    backBtn.style.display = 'none'

    cardSub.style.display = 'block';
    namaUser.style.display = 'block';
    resultNama.style.display = 'none';
    resultKhodam.style.display = 'none';
    checkBtn.style.display = 'block';

    
}


