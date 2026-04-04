gsap.registerPlugin(Draggable);

// Data yang sudah disesuaikan dengan nama file di folder kamu
const historyData = [
    { 
        title: "Majapahit", 
        desc: "Majapahit adalah kerajaan Hindu-Buddha terakhir yang menguasai Nusantara dan dianggap sebagai salah satu negara terbesar dalam sejarah Indonesia. Kekuasaannya membentang dari Jawa, Sumatra, Semenanjung Malaya, Kalimantan, hingga Kepulauan Sulu. Masa kejayaan Majapahit terjadi pada abad ke-14 di bawah pemerintahan Raja Hayam Wuruk, dengan dukungan penuh dari Patih Gajah Mada. Sang Patih sangat dikenal dengan (Sumpah Palapa), sebuah janji suci untuk tidak menikmati kesenangan duniawi sebelum berhasil menyatukan seluruh wilayah kepulauan di bawah panji Majapahit.", 
        imgCard: "MAJA1.jpg", 
        imgDetail: "MAJA2.jpg" 
    },
    { 
        title: "Sumpah Pemuda", 
        desc: "Sumpah Pemuda merupakan hasil dari Kongres Pemuda Kedua yang diselenggarakan pada 27-28 Oktober 1928 di Batavia (Jakarta). Peristiwa ini adalah salah satu tonggak paling krusial dalam sejarah pergerakan kemerdekaan Indonesia. Dalam kongres ini, para pemuda dari berbagai latar belakang daerah, suku, dan agama berikrar untuk mengakui satu tanah air, satu bangsa, dan satu bahasa: Indonesia. Momentum ini juga menjadi saksi pertama kalinya lagu kebangsaan (Indonesia Raya) ciptaan W.R. Supratman diperdengarkan kepada khalayak.", 
        imgCard: "SUMPAH1.jpg", 
        imgDetail: "SUMPAH2.jpg" 
    },
    { 
        title: "Proklamasi", 
        desc: "Pembacaan teks Proklamasi Kemerdekaan pada 17 Agustus 1945 menandai lahirnya negara Republik Indonesia yang berdaulat. Teks singkat namun bermakna dalam tersebut disusun oleh Soekarno, Moh. Hatta, dan Achmad Soebardjo di rumah Laksamana Maeda. Proklamasi dikumandangkan di Jalan Pegangsaan Timur No. 56, Jakarta, tepat pada pukul 10.00 WIB. Peristiwa singkat namun sakral ini menandai berakhirnya penjajahan kolonial dan lahirnya bangsa Indonesia yang berdaulat secara penuh di mata dunia.", 
        imgCard: "PROK1.jpg", 
        imgDetail: "PROK2.jpg" 
    },
    { 
        title: "Bung Tomo", 
        desc: "Pertempuran Surabaya yang memuncak pada 10 November 1945 adalah perang terbesar pertama pasukan Indonesia dengan pasukan asing setelah Proklamasi Kemerdekaan. Konflik ini dipicu oleh tewasnya Brigadir Jenderal Mallaby dari pihak Inggris. Tokoh sentral dalam peristiwa ini adalah Bung Tomo, yang melalui siaran radio terus membakar semangat rakyat dengan pekikan (Merdeka atau Mati). Meskipun Surabaya akhirnya jatuh ke tangan Sekutu, kegigihan rakyat membuktikan bahwa kemerdekaan Indonesia bukanlah hadiah, melainkan hasil perjuangan nyawa.", 
        imgCard: "BUNGTOMO1.jpg", 
        imgDetail: "BUNGTOMO2.jpg" 
    },
    { 
        title: "Jend. Sudirman", 
        desc: "Jenderal Sudirman merupakan Panglima Besar pertama Tentara Nasional Indonesia yang dikenal karena keteguhan prinsip dan kesalehannya. Beliau memimpin Perang Gerilya yang sangat legendaris selama Agresi Militer Belanda II. Yang membuat perjuangan beliau luar biasa adalah kondisi fisiknya; beliau memimpin pasukan dari atas tandu karena menderita penyakit paru-paru parah. Selama berbulan-bulan, Sudirman menempuh perjalanan ribuan kilometer masuk-keluar hutan untuk membuktikan bahwa kedaulatan negara harus tetap dijaga meski dengan fasilitas seadanya.", 
        imgCard: "SUDIRMAN1.jpg", 
        imgDetail: "SUDIRMAN2.jpg" 
    },
    { 
        title: "KAA 1955", 
        desc: "Konferensi Asia Afrika (KAA) yang berlangsung di Bandung pada tahun 1955 merupakan pencapaian diplomasi internasional terbesar Indonesia. Konferensi ini dihadiri oleh 29 negara yang sebagian besar baru saja merdeka dari kolonialisme. KAA menghasilkan (Dasasila Bandung), sebuah pernyataan mengenai dukungan bagi kedamaian dan kerja sama dunia. Peristiwa ini sangat berpengaruh karena menjadi cikal bakal terbentuknya Gerakan Non-Blok dan melambungkan nama Indonesia sebagai pemimpin bangsa-bangsa berkembang di kancah politik global.", 
        imgCard: "KAA1.jpg", 
        imgDetail: "KAA2.webp" 
    },
    { 
        title: "Budi Utomo", 
        desc: "Kebangkitan Nasional Indonesia ditandai dengan berdirinya organisasi Budi Utomo pada 20 Mei 1908 oleh para mahasiswa STOVIA. Budi Utomo adalah organisasi modern pertama di Nusantara yang memiliki struktur pengurus dan tujuan yang jelas. Meskipun awalnya fokus pada pendidikan dan kebudayaan, gerakan ini menjadi pemicu lahirnya berbagai organisasi politik lainnya. Peristiwa ini dianggap sebagai (fajar) perjuangan bangsa karena rakyat mulai menyadari bahwa persatuan melalui pemikiran dan pendidikan jauh lebih efektif.", 
        imgCard: "BUDI1.jpg", 
        imgDetail: "BUDI2.jpg" 
    },
    { 
        title: "RA Kartini", 
        desc: "Raden Adjeng Kartini adalah pahlawan nasional yang memperjuangkan hak-hak perempuan dan emansipasi di masa kolonial. Pemikiran-pemikirannya yang maju ia tuangkan dalam surat-surat yang dikirimkan kepada teman-temannya di Belanda. Kartini sangat vokal mengenai pentingnya pendidikan bagi kaum perempuan agar mereka memiliki kedudukan yang setara dan bisa ikut serta dalam membangun bangsa. Setelah beliau wafat, kumpulan surat-surat tersebut diterbitkan dengan judul (Habis Gelap Terbitlah Terang).", 
        imgCard: "KARTINI1.jpg", 
        imgDetail: "KARTINI2.jpg" 
    },
    { 
        title: "Reformasi 98", 
        desc: "Gerakan Reformasi tahun 1998 merupakan peristiwa sejarah modern yang mengakhiri masa kekuasaan Orde Baru selama 32 tahun. Peristiwa ini dipicu oleh krisis finansial Asia yang menyebabkan ekonomi Indonesia terpuruk, ditambah dengan tuntutan rakyat akan penghapusan KKN. Gelombang demonstrasi besar-besaran yang dipelopori oleh mahasiswa di seluruh Indonesia memaksa Presiden Soeharto mengundurkan diri pada 21 Mei 1998. Era ini menandai dimulainya babak baru demokrasi di Indonesia.", 
        imgCard: "REFORMASI1.jpg", 
        imgDetail: "REFORMASI2.jpg" 
    }
];

const container = document.getElementById('artifact-container');

historyData.forEach((item, index) => {
    const art = document.createElement('div');
    art.className = 'artifact';
    
    const x = Math.random() * (window.innerWidth - 250) + 20;
    const y = Math.random() * (window.innerHeight - 350) + 120;
    const rot = (Math.random() * 30) - 15;

    art.style.left = `${x}px`;
    art.style.top = `${y}px`;

    art.innerHTML = `
        <div class="paper">
            <div class="img-slot">
                <img src="${item.imgCard}" alt="${item.title}">
            </div>
            <p class="artifact-label">DOK-SEJARAH/0${index+1}</p>
        </div>
    `;

    container.appendChild(art);

    Draggable.create(art, {
        bounds: "#desk",
        inertia: true,
        onClick: function() { openDetail(index); },
        onDragStart: function() { gsap.set(this.target, { zIndex: 1000 }); },
        onDragEnd: function() { gsap.set(this.target, { zIndex: 100 }); }
    });

    gsap.set(art, { rotation: rot });
});

function openDetail(id) {
    const data = historyData[id];
    document.getElementById('info-title').innerText = data.title;
    document.getElementById('info-desc').innerText = data.desc;
    document.getElementById('info-img').src = data.imgDetail;
    document.getElementById('info-panel').style.transform = "translateX(0)";
}

function closeInfo() {
    document.getElementById('info-panel').style.transform = "translateX(100%)";
}

// Logika Musik (Disesuaikan dengan file backsound.mpeg kamu)
const mBtn = document.getElementById('music-btn');
const audio = document.getElementById('bg-audio');
let playing = false;

mBtn.onclick = () => {
    if(!playing) { 
        audio.play(); 
        document.getElementById('music-icon').innerText = "🔊"; 
    } else { 
        audio.pause(); 
        document.getElementById('music-icon').innerText = "🔈"; 
    }
    playing = !playing;
};