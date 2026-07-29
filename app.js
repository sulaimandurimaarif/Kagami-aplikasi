// ====== INITIAL DATA ======
const DEFAULT_TITLES = [
  { id: "m-1", title: "Solo Leveling", type: "Manhwa", rating: 4.9, chapters: 179, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/solo%20leveling%202.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      179: [
        "https://picsum.photos/seed/m-1-1/800/1200",
        "https://picsum.photos/seed/m-1-2/800/1200",
        "https://picsum.photos/seed/m-1-3/800/1200"
      ]
    }, description: { en: "In a world where hunters must battle deadly monsters to protect mankind, Sung Jinwoo, the weakest hunter of all mankind, finds himself in a struggle for survival in a double dungeon. After surviving a near-death trial, he awakens with a unique system that allows him to level up without limits.", id: "Di dunia tempat para hunter harus bertarung melawan monster mematikan demi melindungi umat manusia, Sung Jinwoo — hunter terlemah yang pernah ada — terjebak dalam perjuangan hidup-mati di sebuah double dungeon. Setelah nyaris tewas, ia terbangun dengan sebuah sistem unik yang memungkinkannya naik level tanpa batas." }, dateAdded: "2026-01-10", views: 24500, status: "Completed", author: "Chugong", genre: ["Action", "Fantasy", "Adventure"] },
  { id: "m-2", title: "One Piece", type: "Manga", rating: 4.8, chapters: 1102, coverUrl: "https://raw.githubusercontent.com/sulaimandurimaarif/Manga-Cover/main/One%20Piece.png?v=2",
    // ====== CONTOH: isi halaman gambar per chapter di sini ======
    // Key = nomor chapter, Value = array URL gambar hosting-mu, urut dari halaman 1
    // Chapter yang tidak didaftarkan di sini akan otomatis fallback ke cover.
    chapterImages: {
      1102: [
        "https://url-hosting-kamu.com/one-piece/1102/01.jpg",
        "https://url-hosting-kamu.com/one-piece/1102/02.jpg",
        "https://url-hosting-kamu.com/one-piece/1102/03.jpg"
      ]
    },
    description: { en: "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!", id: "Monkey D. Luffy tak akan membiarkan siapa pun atau apa pun menghalangi mimpinya menjadi raja bajak laut. Dengan tujuan mengarungi perairan berbahaya Grand Line dan sekitarnya, kapten satu ini tak akan pernah menyerah sampai berhasil merebut harta karun terbesar di dunia: One Piece yang legendaris!" }, dateAdded: "2026-05-15", views: 98000, status: "Ongoing", author: "Eiichiro Oda", genre: ["Action", "Adventure", "Comedy", "Fantasy"] },
  { id: "m-3", title: "Noblesse", type: "Manhwa", rating: 4.7, chapters: 544, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover-noblesse.png?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      544: [
        "https://picsum.photos/seed/m-3-1/800/1200",
        "https://picsum.photos/seed/m-3-2/800/1200",
        "https://picsum.photos/seed/m-3-3/800/1200"
      ]
    }, description: { en: "Rai awakens from his 820-year sleep. He starts his new life as a student in a high school founded by his loyal servant, Frankenstein. But his peaceful days are soon interrupted by mysterious attackers known as the Union.", id: "Rai terbangun setelah tertidur selama 820 tahun. Ia memulai kehidupan barunya sebagai murid di sekolah menengah yang didirikan oleh pelayan setianya, Frankenstein. Namun hari-hari tenangnya segera terusik oleh para penyerang misterius dari organisasi bernama Union." }, dateAdded: "2025-11-20", views: 18400, status: "Completed", author: "Son Jeho", genre: ["Action", "Supernatural", "School"] },
  { id: "m-4", title: "Tower of God", type: "Manhwa", rating: 4.6, chapters: 590, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/tower%20of%20god.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      590: [
        "https://picsum.photos/seed/m-4-1/800/1200",
        "https://picsum.photos/seed/m-4-2/800/1200",
        "https://picsum.photos/seed/m-4-3/800/1200"
      ]
    }, description: { en: "What do you desire? Money and wealth? Honor and pride? Authority and power? Revenge? Or something that transcends all of them? Whatever you desire—it is here. Tower of God. Reach the top, and everything will be yours.", id: "Apa yang kau inginkan? Uang dan kekayaan? Kehormatan dan kebanggaan? Kekuasaan? Balas dendam? Atau sesuatu yang melampaui semua itu? Apa pun yang kau inginkan—semuanya ada di sini. Menara Tuhan. Capai puncaknya, dan segalanya akan menjadi milikmu." }, dateAdded: "2026-07-01", views: 42000, status: "Ongoing", author: "SIU", genre: ["Action", "Fantasy", "Mystery"] },
  { id: "m-5", title: "Jujutsu Kaisen", type: "Manga", rating: 4.8, chapters: 271, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover-jujutsu-kaisen.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      271: [
        "https://picsum.photos/seed/m-5-1/800/1200",
        "https://picsum.photos/seed/m-5-2/800/1200",
        "https://picsum.photos/seed/m-5-3/800/1200"
      ]
    }, description: { en: "In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered. Should any demon consume Sukuna's body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the living from the undead!", id: "Di dunia tempat roh-roh kutukan memangsa manusia tak berdosa, serpihan tubuh iblis legendaris yang ditakuti, Ryomen Sukuna, telah hilang dan tersebar. Jika ada kutukan yang memakan bagian tubuh Sukuna, kekuatan yang didapat bisa menghancurkan dunia. Untungnya, ada sekolah rahasia para penyihir jujutsu yang bertugas melindungi manusia dari ancaman kutukan!" }, dateAdded: "2026-06-25", views: 67000, status: "Completed", author: "Gege Akutami", genre: ["Action", "Supernatural", "Horror"] },
  { id: "m-6", title: "Battle Through the Heavens", type: "Manhua", rating: 4.5, chapters: 402, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/Battle%20Through%20the%20Heavens.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      402: [
        "https://picsum.photos/seed/m-6-1/800/1200",
        "https://picsum.photos/seed/m-6-2/800/1200",
        "https://picsum.photos/seed/m-6-3/800/1200"
      ]
    }, description: { en: "In a land where no magic exists. A land where the strong make the rules and weak have to obey. A land filled with alluring treasures and beauty, yet also filled with unforeseen danger. Xiao Yan, who had shown talents none had seen in decades, suddenly lost everything three years ago. What magic caused him to lose all of his powers?", id: "Di sebuah negeri tanpa sihir. Negeri tempat yang kuat membuat aturan dan yang lemah harus tunduk. Negeri yang penuh harta memikat dan keindahan, namun juga penuh bahaya tak terduga. Xiao Yan, yang bakatnya belum pernah terlihat selama puluhan tahun, tiba-tiba kehilangan segalanya tiga tahun lalu. Kekuatan macam apa yang membuatnya kehilangan semua kekuatannya?" }, dateAdded: "2026-02-14", views: 15900, status: "Ongoing", author: "Tian Can Tu Dou", genre: ["Action", "Fantasy", "Martial Arts"] },
  { id: "m-7", title: "My Hero Academia", type: "Manga", rating: 4.4, chapters: 398, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20my%20hero%20academia.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      398: [
        "https://picsum.photos/seed/m-7-1/800/1200",
        "https://picsum.photos/seed/m-7-2/800/1200",
        "https://picsum.photos/seed/m-7-3/800/1200"
      ]
    }, description: { en: "Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all, gives him a chance to change his destiny...", id: "Izuku Midoriya, murid SMP, ingin menjadi pahlawan melebihi apa pun, tapi ia tak punya kekuatan sama sekali. Tanpa peluang masuk ke SMA U.A. yang bergengsi bagi calon pahlawan, hidupnya terasa semakin buntu. Namun pertemuannya dengan All Might, pahlawan terhebat sepanjang masa, memberinya kesempatan untuk mengubah takdirnya..." }, dateAdded: "2026-04-18", views: 35000, status: "Completed", author: "Kohei Horikoshi", genre: ["Action", "School", "Superhero"] },
  { id: "m-8", title: "The Breaker", type: "Manhwa", rating: 4.7, chapters: 200, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/the%20breaker.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      200: [
        "https://picsum.photos/seed/m-8-1/800/1200",
        "https://picsum.photos/seed/m-8-2/800/1200",
        "https://picsum.photos/seed/m-8-3/800/1200"
      ]
    }, description: { en: "The new English teacher, Chun-Woo, is not your ordinary teacher. Shioon, a victim of constant bullying, accidentally witnesses Chun-Woo's martial arts power, and begs Chun-Woo to make him his disciple.", id: "Chun-Woo, guru bahasa Inggris baru, bukanlah guru biasa. Shioon, korban perundungan yang terus-menerus, secara tak sengaja menyaksikan kekuatan bela diri Chun-Woo dan memohon untuk dijadikan muridnya." }, dateAdded: "2025-09-05", views: 12000, status: "Completed", author: "Jeon Geuk-jin", genre: ["Action", "Martial Arts", "School"] },
  { id: "m-9", title: "Martial Peak", type: "Manhua", rating: 4.3, chapters: 2400, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20martial%20peak.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      2400: [
        "https://picsum.photos/seed/m-9-1/800/1200",
        "https://picsum.photos/seed/m-9-2/800/1200",
        "https://picsum.photos/seed/m-9-3/800/1200"
      ]
    }, description: { en: "The journey to the martial peak is a lonely, solitary and long struggle. In the face of adversity, you must survive and remain unyielding. Only then can you break through and continue on your journey to become the strongest.", id: "Perjalanan menuju puncak ilmu bela diri adalah perjuangan panjang yang sunyi dan sendirian. Di hadapan kesulitan, kau harus bertahan hidup dan tetap teguh. Hanya dengan begitu kau bisa menerobos batas dan melanjutkan perjalanan menjadi yang terkuat." }, dateAdded: "2026-07-15", views: 89000, status: "Ongoing", author: "Momo", genre: ["Action", "Martial Arts", "Adventure"] },
  { id: "m-10", title: "Demon Slayer", type: "Manga", rating: 4.9, chapters: 205, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20demon%20slayer.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      205: [
        "https://picsum.photos/seed/m-10-1/800/1200",
        "https://picsum.photos/seed/m-10-2/800/1200",
        "https://picsum.photos/seed/m-10-3/800/1200"
      ]
    }, description: { en: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a demon slayer to turn his sister back into a human.", id: "Di zaman Taisho, Jepang, Tanjiro, seorang anak baik hati yang berjualan arang, mendapati keluarganya dibantai oleh iblis. Lebih parah lagi, adiknya, Nezuko, satu-satunya yang selamat, telah berubah menjadi iblis. Meski hancur oleh kenyataan pahit ini, Tanjiro bertekad menjadi pembasmi iblis demi mengembalikan adiknya menjadi manusia kembali." }, dateAdded: "2026-03-30", views: 75000, status: "Completed", author: "Koyoharu Gotouge", genre: ["Action", "Supernatural", "Historical"] },
  { id: "m-11", title: "Chainsaw Man", type: "Manga", rating: 4.7, chapters: 150, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20chainsaw%20man.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      150: [
        "https://picsum.photos/seed/m-11-1/800/1200",
        "https://picsum.photos/seed/m-11-2/800/1200",
        "https://picsum.photos/seed/m-11-3/800/1200"
      ]
    }, description: { en: "Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita. One day, Denji is betrayed and killed. As his consciousness fades, he makes a contract with Pochita and gets revived as Chainsaw Man.", id: "Denji adalah remaja yang hidup bersama iblis gergaji mesin bernama Pochita. Karena utang yang ditinggalkan ayahnya, ia menjalani hidup yang sangat berat sambil melunasi utang tersebut dengan memburu mayat iblis bersama Pochita. Suatu hari, Denji dikhianati dan dibunuh. Saat kesadarannya memudar, ia membuat kontrak dengan Pochita dan bangkit kembali sebagai Chainsaw Man." }, dateAdded: "2026-05-02", views: 51000, status: "Ongoing", author: "Tatsuki Fujimoto", genre: ["Action", "Horror", "Dark Fantasy"] },
  { id: "m-12", title: "Tales of Demons and Gods", type: "Manhua", rating: 4.6, chapters: 455, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/cover%20talles%20demon.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      455: [
        "https://picsum.photos/seed/m-12-1/800/1200",
        "https://picsum.photos/seed/m-12-2/800/1200",
        "https://picsum.photos/seed/m-12-3/800/1200"
      ]
    }, description: { en: "Killed by a Sage Emperor and reborn as his 13-year-old self, Nie Li was given a second chance at life. A second chance to change everything, save his loved ones and his beloved city. He shall once again battle with the Sage Emperor to avenge his death.", id: "Terbunuh oleh seorang Sage Emperor dan terlahir kembali sebagai dirinya sendiri di usia 13 tahun, Nie Li diberi kesempatan kedua untuk hidup. Kesempatan kedua untuk mengubah segalanya, menyelamatkan orang-orang tercinta dan kotanya. Ia akan kembali bertarung melawan Sage Emperor untuk membalas kematiannya." }, dateAdded: "2026-06-12", views: 33000, status: "Ongoing", author: "Mad Snail", genre: ["Action", "Fantasy", "Reincarnation"] },
  { id: "m-13", title: "One Punch Man", type: "Manga", rating: 4.9, chapters: 1, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/one%20punch%20man.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      1: [
        "https://picsum.photos/seed/m-13-1/800/1200",
        "https://picsum.photos/seed/m-13-2/800/1200",
        "https://picsum.photos/seed/m-13-3/800/1200"
      ]
    }, description: { en: "Saitama used to be just an ordinary man in a world where being a hero was a profession. However, after encountering a boy under attack by a monster, he recalled his childhood dream of becoming a hero. He then trained every day until all his hair fell out. Saitama became a powerful hero, yet one thing troubled him: he had become so strong that he could defeat any monster with just a single punch.", id: "Saitama dulunya hanyalah lelaki biasa dalam dunia dimana pahlawan menjadi sebuah pekerjaan. Tetapi ketika Ia bertemu dengan seorang anak lelaki yang sedang diserang monster, dia mengingat cita-cita masa kecilnya untuk menjadi pahlawan. Lalu dia berlatih setiap hari hingga semua rambutnya rontok. Saitama pun menjadi pahlawan yang kuat, tetapi ada satu hal yang mencemaskan dia. Yaitu dia menjadi terlalu kuat, hingga dia dapat mengalahkan setiap monster hanya dengan satu tinjuan." }, dateAdded: "2026-06-12", views: 33000, status: "Ongoing", author: "Mad Snail", genre: ["Action", "Fantasy", "Reincarnation"] },
{ id: "m-14", title: "I Randomly Have A New Career Every Week", type: "Manhua", rating: 4.7, chapters: 1, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/one%20punch%20man.jpg?raw=true",
    // Contoh placeholder (ganti dengan URL hosting gambar chapter asli kamu)
    chapterImages: {
      1: [
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/002.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/003.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/004.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/005.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/006.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/007.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/008.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/009.jpg?raw=true",
        "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/i-randomly-have-a-new-career-every-week-chapter-001/010.jpg?raw=true"
      ]
    }, description: { en: "After being let go by his company, Lin Yi accidentally acquires a "Professional Part-Time Worker Experience" system. Leveraging the various professional assignments and generous rewards provided by the system, he steadily pursues his ambitions and path to wealth, eventually rising to become an all-powerful tycoon who dominates the world.", id: "Setelah diberhentikan oleh perusahaan, Lin Yi mendapatkan sistem “pengalaman pekerja paruh waktu profesional” secara tidak sengaja. Lin Yi mengandalkan berbagai pengaturan profesional dan penghargaan murah hati yang diberikan oleh sistem untuk mencapai ambisinya dan jalannya untuk menjadi kaya selangkah demi selangkah semakin tertuju, sampai akhirnya menjadi bos yang sangat kuat untuk mendominasi dunia." }, dateAdded: "2026-06-12", views: 12000, status: "Ongoing", author: "Mad Snail", genre: ["Action", "Fantasy", "Reincarnation"] },

  // Anime items
  { id: "a-1", title: "Jujutsu Kaisen", type: "Anime", rating: 4.8, episodes: 24, color: "linear-gradient(135deg, #1e1b4b, #4338ca)", description: { en: "Yuuji Itadori, a high school student who harbors extraordinary physical abilities, swallows the finger of Ryomen Sukuna, a curse, to save a friend. He joins the Tokyo Metropolitan Jujutsu Technical High School to find all of Sukuna's fingers and exorcise the curse.", id: "Yuuji Itadori, murid SMA dengan kemampuan fisik luar biasa, menelan jari Ryomen Sukuna, sebuah kutukan, demi menyelamatkan temannya. Ia bergabung dengan Sekolah Teknik Jujutsu Tokyo untuk mengumpulkan seluruh jari Sukuna dan mengusir kutukan itu selamanya." }, dateAdded: "2026-06-25", views: 88000, status: "Completed", author: "Studio MAPPA", genre: ["Action", "Supernatural", "Horror"] },
  { id: "a-2", title: "Demon Slayer", type: "Anime", rating: 4.9, episodes: 44, color: "linear-gradient(135deg, #7f1d1d, #ef4444)", description: { en: "Tanjiro Kamado's journey to slay demons and rescue his sister Nezuko is beautifully animated by Ufotable. Spanning multiple television seasons and blockbuster movies, this is a modern global phenomenon.", id: "Perjalanan Tanjiro Kamado membasmi iblis demi menyelamatkan adiknya, Nezuko, dianimasikan dengan indah oleh Ufotable. Melewati beberapa musim tayang dan film box office, ini adalah fenomena global masa kini." }, dateAdded: "2026-03-30", views: 120000, status: "Completed", author: "Studio Ufotable", genre: ["Action", "Supernatural", "Historical"] },
  { id: "a-3", title: "One Piece", type: "Anime", rating: 4.7, episodes: 1100, color: "linear-gradient(135deg, #7c2d12, #f97316)", description: { en: "The legendary anime adaptation of Eiichiro Oda's masterpiece manga. Luffy and his Straw Hat crew sail across the sea in search of the legendary One Piece.", id: "Adaptasi anime legendaris dari manga karya besar Eiichiro Oda. Luffy dan kru topi jerami-nya berlayar mengarungi lautan mencari harta karun legendaris, One Piece." }, dateAdded: "2026-05-15", views: 150000, status: "Ongoing", author: "Studio Toei Animation", genre: ["Action", "Adventure", "Comedy", "Fantasy"] },
  { id: "a-4", title: "Attack on Titan", type: "Anime", rating: 4.8, episodes: 87, color: "linear-gradient(135deg, #312e81, #1e1b4b)", description: { en: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born of hunger but what seems to be out of pleasure.", id: "Berabad-abad lalu, umat manusia hampir punah dibantai oleh makhluk raksasa menyerupai manusia bernama titan, memaksa manusia bersembunyi ketakutan di balik tembok raksasa berlapis. Yang membuat raksasa ini benar-benar mengerikan adalah nafsu memakan manusia mereka bukan karena lapar, melainkan seperti demi kesenangan." }, dateAdded: "2025-12-05", views: 95000, status: "Completed", author: "Studio Wit / MAPPA", genre: ["Action", "Drama", "Fantasy"] },
  { id: "a-5", title: "Spy x Family", type: "Anime", rating: 4.7, episodes: 25, color: "linear-gradient(135deg, #065f46, #0f766e)", description: { en: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife is a deadly assassin and his daughter is a telepath, but they all hide their secrets from each other.", id: "Seorang mata-mata yang menjalankan misi rahasia menikah dan mengadopsi anak sebagai bagian dari penyamarannya. Istrinya ternyata seorang pembunuh bayaran mematikan, dan putrinya seorang telepati, namun mereka semua menyembunyikan rahasia masing-masing satu sama lain." }, dateAdded: "2026-04-10", views: 48000, status: "Completed", author: "Studio CloverWorks", genre: ["Comedy", "Action", "Slice of Life"] }
];

// ====== VERSI DATA — naikkan angka ini setiap kali DEFAULT_TITLES diubah ======
// Ini memaksa localStorage lama ter-reset otomatis saat app dibuka
const DATA_VERSION = "v9";

const DEFAULT_USERS = [
  { email: "guest@kagami.com", name: "Guest Kagami", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Guest", password: "password123" }
];

// ====== I18N DICTIONARY (Bahasa Indonesia / English) ======
const I18N = {
  id: {
    nav_explore: "Explore", nav_latest: "Latest", nav_library: "Library", nav_upload: "Upload",
    nav_search: "Cari", nav_upload_short: "Unggah",
    search_placeholder: "Cari komik atau anime...",
    search_input_placeholder: "Masukkan judul manga, manhwa, manhua, atau anime...",
    sec_hot_manga: "Hot Manga", sec_trending_manhwa: "Trending Manhwa", sec_epic_manhua: "Epic Manhua", sec_watch_anime: "Tonton Anime",
    sec_latest: "Rilis Terbaru", sec_saved: "Koleksi Favorit",
    view_all: "Lihat Semua",
    chip_all: "Semua", chip_manga: "Manga", chip_manhwa: "Manhwa", chip_manhua: "Manhua", chip_anime: "Anime",
    library_title: "Pustaka Saya", library_tab_fav: "Favorit", library_tab_history: "Riwayat Baca",
    library_history_desc: "Judul dan chapter/episode terakhir yang Anda baca.", library_clear_history: "Hapus Riwayat",
    filter_format: "Format", filter_status: "Status", filter_sort: "Urutkan", filter_genre: "Genre", filter_all: "Semua",
    filter_ongoing: "Ongoing", filter_completed: "Completed", filter_reset: "Reset Filter",
    sort_relevance: "Relevansi", sort_rating: "Rating Tertinggi", sort_latest: "Terbaru", sort_popular: "Paling Populer", sort_title: "Judul A-Z",
    btn_start_reading: "Mulai Membaca", btn_watch_anime: "Tonton Anime", btn_save: "Save", btn_saved: "Saved",
    empty_search_title: "Mulailah Mengetik...", empty_search_desc: "Cari manga, manhwa, manhua favorit Anda berdasarkan judul.",
    empty_saved_title: "Belum Ada Favorit", empty_saved_desc: "Judul yang Anda simpan akan muncul di sini. Cari judul menarik dan klik ikon hati!",
    empty_history_title: "Belum Ada Riwayat", empty_history_desc: "Judul yang Anda baca akan tercatat di sini secara otomatis.",
    empty_login_title: "Akses Dibatasi", empty_login_desc: "Silakan log in terlebih dahulu untuk melihat konten ini.", btn_login_now: "Log In Sekarang",
    auth_tab_login: "Masuk", auth_tab_signup: "Daftar",
    footer_about: "Tentang", footer_contact: "Kontak", footer_privacy: "Privasi",
    install_title: "Pasang Kagami App", install_desc: "Baca manga & nonton offline lebih lancar",
    genre_label: "Genre:", author_label: "Penulis:",
    anime_cs_eyebrow: "SEDANG DALAM PENGERJAAN",
    anime_cs_heading_1: "Nonton anime akan",
    anime_cs_heading_2: "segera hadir.",
    anime_cs_desc: "Pengalaman menonton yang tenang dan indah, terhubung langsung dengan pustaka Kagami Anda, sedang dalam pengembangan.",
    anime_cs_notify: "Beritahu Saya",
    trending_title: "Sedang Tren", trending_sub: "Paling banyak dibaca hari ini.", trending_reads: "Dibaca",
    toast_bookmark_added: "✅ Berhasil disimpan ke favorit!", toast_bookmark_removed: "💔 Dihapus dari favorit",
    toast_download_done: "berhasil diunduh", toast_download_fail: "⚠️ Unduh otomatis gagal (CORS). Gambar dibuka di tab baru, silakan simpan manual.",
    toast_download_none: "⚠️ Tidak ada gambar untuk diunduh.", toast_downloading: "Mengunduh",
    toast_logout: "👋 Berhasil Log Out!", toast_upload_login_required: "⚠️ Silakan log in untuk mengunggah judul!",
    toast_upload_required_fields: "⚠️ Silakan isi semua field wajib!", toast_upload_success: "Sukses mengunggah",
    toast_history_cleared: "🗑️ Riwayat baca berhasil dihapus", toast_filter_applied: "Filter",
    toast_welcome_back: "🎉 Selamat datang kembali,", toast_signup_success: "🎉 Akun berhasil dibuat! Selamat datang,",
    toast_pwa_installed: "✅ Kagami berhasil dipasang!", toast_welcome_app: "📚 Selamat datang di Kagami!",
    toast_last_episode: "Ini adalah episode terakhir!", toast_fullscreen_unsupported: "Fullscreen tidak didukung pada browser Anda",
    err_email_registered: "Email sudah terdaftar!", err_login_invalid: "Email atau password salah!", err_bookmark_login_required: "Silakan log in terlebih dahulu untuk menyimpan!",
  },
  en: {
    nav_explore: "Explore", nav_latest: "Latest", nav_library: "Library", nav_upload: "Upload",
    nav_search: "Search", nav_upload_short: "Upload",
    search_placeholder: "Search comics or anime...",
    search_input_placeholder: "Enter manga, manhwa, manhua, or anime title...",
    sec_hot_manga: "Hot Manga", sec_trending_manhwa: "Trending Manhwa", sec_epic_manhua: "Epic Manhua", sec_watch_anime: "Watch Anime",
    sec_latest: "Latest Releases", sec_saved: "Favorite Collection",
    view_all: "View All",
    chip_all: "All", chip_manga: "Manga", chip_manhwa: "Manhwa", chip_manhua: "Manhua", chip_anime: "Anime",
    library_title: "My Library", library_tab_fav: "Favorites", library_tab_history: "Reading History",
    library_history_desc: "Titles and the last chapter/episode you read.", library_clear_history: "Clear History",
    filter_format: "Format", filter_status: "Status", filter_sort: "Sort By", filter_genre: "Genre", filter_all: "All",
    filter_ongoing: "Ongoing", filter_completed: "Completed", filter_reset: "Reset Filters",
    sort_relevance: "Relevance", sort_rating: "Highest Rating", sort_latest: "Latest", sort_popular: "Most Popular", sort_title: "Title A-Z",
    btn_start_reading: "Start Reading", btn_watch_anime: "Watch Anime", btn_save: "Save", btn_saved: "Saved",
    empty_search_title: "Start Typing...", empty_search_desc: "Search for your favorite manga, manhwa, or manhua by title.",
    empty_saved_title: "No Favorites Yet", empty_saved_desc: "Titles you save will appear here. Find something interesting and tap the heart icon!",
    empty_history_title: "No History Yet", empty_history_desc: "Titles you read will be automatically logged here.",
    empty_login_title: "Access Restricted", empty_login_desc: "Please log in first to view this content.", btn_login_now: "Log In Now",
    auth_tab_login: "Login", auth_tab_signup: "Sign Up",
    footer_about: "About", footer_contact: "Contact", footer_privacy: "Privacy",
    install_title: "Install Kagami App", install_desc: "Smoother offline reading & watching",
    genre_label: "Genre:", author_label: "Author:",
    anime_cs_eyebrow: "CURRENTLY IN THE WORKS",
    anime_cs_heading_1: "Anime is coming",
    anime_cs_heading_2: "soon.",
    anime_cs_desc: "A calm, beautiful viewing experience connected to your Kagami library is now in development.",
    anime_cs_notify: "Notify me",
    trending_title: "Now Trending", trending_sub: "Most read today.", trending_reads: "Reads",
    toast_bookmark_added: "✅ Added to favorites!", toast_bookmark_removed: "💔 Removed from favorites",
    toast_download_done: "downloaded successfully", toast_download_fail: "⚠️ Automatic download failed (CORS). Image opened in a new tab, please save it manually.",
    toast_download_none: "⚠️ No images available to download.", toast_downloading: "Downloading",
    toast_logout: "👋 Successfully logged out!", toast_upload_login_required: "⚠️ Please log in to upload a title!",
    toast_upload_required_fields: "⚠️ Please fill in all required fields!", toast_upload_success: "Successfully uploaded",
    toast_history_cleared: "🗑️ Reading history cleared", toast_filter_applied: "Filter",
    toast_welcome_back: "🎉 Welcome back,", toast_signup_success: "🎉 Account created! Welcome,",
    toast_pwa_installed: "✅ Kagami installed successfully!", toast_welcome_app: "📚 Welcome to Kagami!",
    toast_last_episode: "This is the last episode!", toast_fullscreen_unsupported: "Fullscreen is not supported on your browser",
    err_email_registered: "Email is already registered!", err_login_invalid: "Incorrect email or password!", err_bookmark_login_required: "Please log in first to save this!",
  }
};

function t(key) {
  const lang = (typeof state !== 'undefined' && state.lang) ? state.lang : (localStorage.getItem('kagami_lang') || 'id');
  return (I18N[lang] && I18N[lang][key]) || (I18N.id[key]) || key;
}

function applyLanguage(lang) {
  if (!I18N[lang]) lang = 'id';
  state.lang = lang;
  localStorage.setItem('kagami_lang', lang);
  document.documentElement.lang = lang;

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (I18N[lang][key]) el.textContent = I18N[lang][key];
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (I18N[lang][key]) el.placeholder = I18N[lang][key];
  });

  // Update the language badge label in header
  const label = document.getElementById('langCurrentLabel');
  if (label) label.textContent = lang.toUpperCase();

  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.lang === lang);
  });

  // Re-render dynamic content that contains translated strings
  refreshActiveView();
}

// Redraws whichever grid/view is currently active (used after language switch)
function refreshActiveView() {
  switch (state.activeView) {
    case 'explore': renderExploreGrids(); break;
    case 'latest': renderLatestGrid(); break;
    case 'saved': renderSavedGrid(); renderHistoryGrid(); break;
    case 'search': renderSearchGrid(); break;
    case 'category-view': renderCategoryGrid(state.viewAllCategory); break;
    default: break;
  }

  // Jika modal detail sedang terbuka, refresh juga sinopsis & genre-nya
  const detailsModal = document.getElementById('detailsModal');
  if (detailsModal && detailsModal.classList.contains('active') && currentDetailItemId) {
    openDetailsModal(currentDetailItemId);
  }
}

// Menerjemahkan status data (Ongoing/Completed) sesuai bahasa aktif
function translateStatus(status) {
  if (status === 'Ongoing') return t('filter_ongoing');
  if (status === 'Completed') return t('filter_completed');
  return status;
}

// Mengambil sinopsis sesuai bahasa aktif. Mendukung format baru {id, en}
// maupun format lama (string biasa) untuk kompatibilitas judul yang diunggah pengguna.
function getLocalizedDesc(item) {
  const d = item && item.description;
  if (!d) return "";
  if (typeof d === 'string') return d;
  return d[state.lang] || d.id || d.en || "";
}

// Kamus terjemahan genre (nama judul tidak diterjemahkan, hanya label genre)
const GENRE_TRANSLATIONS = {
  Action: "Aksi", Adventure: "Petualangan", Comedy: "Komedi", Fantasy: "Fantasi",
  Mystery: "Misteri", Supernatural: "Supernatural", Horror: "Horor",
  "Martial Arts": "Bela Diri", School: "Sekolah", Superhero: "Pahlawan Super",
  Historical: "Sejarah", "Dark Fantasy": "Fantasi Gelap", Reincarnation: "Reinkarnasi",
  Drama: "Drama", "Slice of Life": "Kehidupan Sehari-hari", Romance: "Romansa",
  "Sci-Fi": "Fiksi Ilmiah", Psychological: "Psikologis", Tragedy: "Tragedi",
  Sports: "Olahraga", Isekai: "Isekai"
};

// Menerjemahkan satu label genre sesuai bahasa aktif (nama genre asing tetap ditampilkan bila tak ada terjemahan)
function translateGenre(genre) {
  if (state.lang !== 'id') return genre;
  return GENRE_TRANSLATIONS[genre] || genre;
}

// ====== STATE ENGINE ======
class AppState {
  constructor() {
    // Auto-reset cache jika versi data berbeda (misal setelah edit DEFAULT_TITLES)
    const savedVersion = localStorage.getItem('kagami_data_version');
    if (savedVersion !== DATA_VERSION) {
      localStorage.removeItem('kagami_titles');
      localStorage.removeItem('kagami_users');
      localStorage.setItem('kagami_data_version', DATA_VERSION);
    }

    this.titles = JSON.parse(localStorage.getItem('kagami_titles')) || DEFAULT_TITLES;
    this.users = JSON.parse(localStorage.getItem('kagami_users')) || DEFAULT_USERS;
    this.currentUser = JSON.parse(localStorage.getItem('kagami_session')) || null;
    this.searchQuery = "";
    this.activeFilter = "all"; // 'all', 'manga', 'manhwa', 'manhua', 'anime'
    this.activeView = "explore"; // 'explore', 'latest', 'saved', 'upload', 'search', 'category-view'
    this.viewAllCategory = null; // Used when activeView is 'category-view'

    // Advanced search filters state
    this.searchFilters = { genres: [], status: "all", format: "all", sort: "relevance", author: null };

    // Language & Theme preferences
    this.lang = localStorage.getItem('kagami_lang') || 'id';
    this.theme = localStorage.getItem('kagami_theme') || 'dark';

    // Save to local storage immediately if not present
    if (!localStorage.getItem('kagami_titles')) this.saveTitles();
    if (!localStorage.getItem('kagami_users')) this.saveUsers();
  }

  saveTitles() {
    localStorage.setItem('kagami_titles', JSON.stringify(this.titles));
  }

  saveUsers() {
    localStorage.setItem('kagami_users', JSON.stringify(this.users));
  }

  saveSession() {
    localStorage.setItem('kagami_session', JSON.stringify(this.currentUser));
  }

  addUser(email, name, password, avatarUrl = null) {
    if (this.users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
      return { success: false, message: t('err_email_registered') };
    }
    const avatar = avatarUrl || `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(name)}`;
    const newUser = { email, name, password, avatar, bookmarks: [] };
    this.users.push(newUser);
    this.saveUsers();
    return { success: true, user: newUser };
  }

  login(email, password) {
    const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) return { success: false, message: t('err_login_invalid') };
    
    this.currentUser = {
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      bookmarks: user.bookmarks || [],
      history: user.history || []
    };
    this.saveSession();
    return { success: true, user: this.currentUser };
  }

  loginGoogle(email, name, avatar) {
    // If user already exists in db, login, otherwise sign up automatically
    let user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) {
      user = {
        email: email,
        name: name,
        avatar: avatar,
        password: "google_login_no_password",
        bookmarks: []
      };
      this.users.push(user);
      this.saveUsers();
    }

    this.currentUser = {
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      bookmarks: user.bookmarks || [],
      history: user.history || []
    };
    this.saveSession();
    return this.currentUser;
  }

  logout() {
    // Sync bookmarks back to global user db before logging out
    if (this.currentUser) {
      const userIdx = this.users.findIndex(u => u.email.toLowerCase() === this.currentUser.email.toLowerCase());
      if (userIdx !== -1) {
        this.users[userIdx].bookmarks = this.currentUser.bookmarks;
        this.saveUsers();
      }
    }
    this.currentUser = null;
    localStorage.removeItem('kagami_session');
  }

  addTitle(title, type, rating, chaptersCount, description, coverDataUrl = null, coverGradient = null, author = "", genreList = []) {
    const isAnime = type.toLowerCase() === 'anime';
    const id = `${isAnime ? 'a' : 'm'}-${Date.now()}`;
    const newTitle = {
      id,
      title,
      type: type, // Manga, Manhwa, Manhua, Anime
      rating: parseFloat(rating) || 5.0,
      description: description || "No description available.",
      dateAdded: new Date().toISOString().split('T')[0],
      views: 0,
      status: "Ongoing",
      author: author || "Anonim",
      genre: (genreList && genreList.length > 0) ? genreList : ["Belum Dikategorikan"]
    };

    if (isAnime) {
      newTitle.episodes = parseInt(chaptersCount) || 12;
    } else {
      newTitle.chapters = parseInt(chaptersCount) || 1;
    }

    if (coverDataUrl) {
      newTitle.coverUrl = coverDataUrl;
    } else {
      newTitle.color = coverGradient || "linear-gradient(135deg, #1e293b, #0f172a)";
    }

    this.titles.unshift(newTitle); // Add to the beginning
    this.saveTitles();
    return newTitle;
  }

  toggleBookmark(titleId) {
    if (!this.currentUser) {
      return { success: false, message: t('err_bookmark_login_required') };
    }
    
    if (!this.currentUser.bookmarks) {
      this.currentUser.bookmarks = [];
    }

    const idx = this.currentUser.bookmarks.indexOf(titleId);
    let added = false;
    if (idx === -1) {
      this.currentUser.bookmarks.push(titleId);
      added = true;
    } else {
      this.currentUser.bookmarks.splice(idx, 1);
    }
    
    this.saveSession();
    
    // Sync to user database
    const userIdx = this.users.findIndex(u => u.email.toLowerCase() === this.currentUser.email.toLowerCase());
    if (userIdx !== -1) {
      this.users[userIdx].bookmarks = this.currentUser.bookmarks;
      this.saveUsers();
    }

    return { success: true, bookmarked: added };
  }

  isBookmarked(titleId) {
    return this.currentUser && this.currentUser.bookmarks && this.currentUser.bookmarks.includes(titleId);
  }

  // ====== READING HISTORY (Riwayat Baca) ======
  addHistory(titleId, index) {
    if (!this.currentUser) return; // Riwayat hanya untuk user yang log in

    if (!this.currentUser.history) this.currentUser.history = [];

    // Buang entri lama untuk judul yang sama, lalu taruh di paling depan
    this.currentUser.history = this.currentUser.history.filter(h => h.id !== titleId);
    this.currentUser.history.unshift({ id: titleId, index, timestamp: Date.now() });

    // Batasi maksimal 50 entri riwayat
    if (this.currentUser.history.length > 50) {
      this.currentUser.history = this.currentUser.history.slice(0, 50);
    }

    this.saveSession();

    // Sinkron ke database user
    const userIdx = this.users.findIndex(u => u.email.toLowerCase() === this.currentUser.email.toLowerCase());
    if (userIdx !== -1) {
      this.users[userIdx].history = this.currentUser.history;
      this.saveUsers();
    }
  }

  getHistory() {
    if (!this.currentUser || !this.currentUser.history) return [];
    return this.currentUser.history;
  }

  clearHistory() {
    if (!this.currentUser) return;
    this.currentUser.history = [];
    this.saveSession();
    const userIdx = this.users.findIndex(u => u.email.toLowerCase() === this.currentUser.email.toLowerCase());
    if (userIdx !== -1) {
      this.users[userIdx].history = [];
      this.saveUsers();
    }
  }
}

// Instantiate Global State
const state = new AppState();

// ====== TOAST ALERT ======
function showToast(message, isError = false) {
  const container = document.getElementById('toastContainer');
  const toast = document.getElementById('toast');
  const text = document.getElementById('toastMessage');
  const icon = document.getElementById('toastIcon');

  text.textContent = message;
  
  if (isError) {
    toast.className = 'toast toast-error';
    icon.className = 'fas fa-exclamation-circle toast-error-icon';
  } else {
    toast.className = 'toast';
    icon.className = 'fas fa-check-circle toast-success-icon';
  }

  container.classList.add('show');
  
  clearTimeout(container._timeout);
  container._timeout = setTimeout(() => {
    container.classList.remove('show');
  }, 3000);
}

// ====== VIEW CONTROLLER ======
function switchView(viewName, options = {}) {
  // Update view state
  state.activeView = viewName;
  
  // Deactivate all view containers
  document.querySelectorAll('.app-view').forEach(view => {
    view.classList.remove('active');
  });

  // Activate destination view
  const targetView = document.getElementById(`${viewName}View`);
  if (targetView) {
    targetView.classList.add('active');
  }

  // Handle Bottom Nav Highlight
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.viewBtn === viewName || (viewName === 'category-view' && item.dataset.viewBtn === 'explore')) {
      item.classList.add('active');
    }
  });

  // Handle Desktop Header Nav Highlight
  document.querySelectorAll('.desktop-nav a').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.view === viewName || (viewName === 'category-view' && link.dataset.view === 'explore')) {
      link.classList.add('active');
    }
  });

  // Action overrides based on view
  if (viewName === 'explore') {
    state.activeFilter = "all";
    updateFilterChips();
    renderExploreGrids();
  } else if (viewName === 'latest') {
    renderLatestGrid();
  } else if (viewName === 'saved') {
    renderSavedGrid();
    renderHistoryGrid();
  } else if (viewName === 'category-view') {
    state.viewAllCategory = options.category;
    renderCategoryGrid(options.category);
  } else if (viewName === 'search') {
    document.getElementById('searchQueryInput').focus();
    renderGenreFilterChips();
    renderSearchGrid();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update Filter Active state
function updateFilterChips() {
  document.querySelectorAll('.filter-chips .chip').forEach(chip => {
    chip.classList.remove('active');
    if (chip.dataset.filter === state.activeFilter) {
      chip.classList.add('active');
    }
  });
}

// ====== CARD COMPONENT GENERATOR ======
function createMangaCard(item) {
  const isAnime = item.type.toLowerCase() === 'anime';
  const metaIcon = isAnime ? 'fa-play-circle' : 'fa-book-open';
  const metaVal = isAnime ? `${item.episodes} eps` : `${item.chapters} ch`;
  const bookmarkedClass = state.isBookmarked(item.id) ? 'active' : '';
  const bookmarkIcon = state.isBookmarked(item.id) ? 'fa-heart' : 'far fa-heart';
  
  // Checking added date within last 30 days for [NEW] badge
  const isNew = (Date.now() - new Date(item.dateAdded).getTime()) < (30 * 24 * 60 * 60 * 1000);
  const badgeHTML = `
    <div class="card-badges">
      <span class="badge-type">${item.type}</span>
      ${isNew ? '<span class="badge-new">NEW</span>' : ''}
    </div>
  `;

  // Fallback placeholder jika gambar gagal load
  const placeholderStyle = item.color || 'var(--surface-tertiary)';
  const placeholderIcon = isAnime ? 'fa-video' : 'fa-book';

  let coverHTML = '';
  if (item.coverUrl) {
    coverHTML = `
      <img
        src="${item.coverUrl}"
        alt="${item.title}"
        loading="lazy"
        style="width:100%;height:100%;object-fit:cover;"
        onerror="this.style.display='none';this.parentElement.querySelector('.card-img-placeholder').style.display='flex';"
      >
      <div class="card-img-placeholder" style="display:none;background:${placeholderStyle}">
        <i class="fas ${placeholderIcon}"></i>
        <span>${item.title}</span>
      </div>
    `;
  } else {
    coverHTML = `
      <div class="card-img-placeholder" style="background: ${placeholderStyle}">
        <i class="fas ${placeholderIcon}"></i>
        <span>${item.title}</span>
      </div>
    `;
  }

  return `
    <div class="manga-card" data-id="${item.id}">
      <button class="btn-bookmark-float ${bookmarkedClass}" data-id="${item.id}">
        <i class="${bookmarkIcon}"></i>
      </button>
      <div class="card-img-wrapper">
        ${coverHTML}
        ${badgeHTML}
        ${isAnime ? '<div class="card-play-pulse"><i class="fas fa-play"></i></div>' : ''}
      </div>
      <div class="card-content">
        <h4>${item.title}</h4>
        <div class="card-meta">
          <span class="meta-chapters"><i class="fas ${metaIcon}"></i> ${metaVal}</span>
          <span class="meta-rating"><i class="fas fa-star"></i> ${item.rating}</span>
        </div>
      </div>
    </div>
  `;
}

function formatViews(num) {
  if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  return `${num}`;
}

function createTrendingCard(item, rank) {
  const fallbackBg = item.color || 'var(--surface-tertiary)';
  const coverHTML = item.coverUrl
    ? `<img src="${item.coverUrl}" alt="${item.title}" loading="lazy" onerror="this.style.display='none';this.parentElement.style.background='${fallbackBg}';">`
    : `<div class="trending-cover-gradient" style="background:${fallbackBg};"></div>`;

  return `
    <div class="trending-card" data-id="${item.id}">
      <div class="trending-cover">
        <span class="trending-rank">#${rank}</span>
        ${coverHTML}
        <div class="trending-cover-scrim"></div>
        <h4 class="trending-card-title">${item.title}</h4>
      </div>
      <div class="trending-meta">
        <span><i class="fas fa-eye"></i> ${formatViews(item.views)} ${t('trending_reads')}</span>
        <span class="trending-rating"><i class="fas fa-star"></i> ${item.rating}</span>
      </div>
    </div>
  `;
}

function renderTrendingGrid() {
  const track = document.getElementById('trendingTrack');
  if (!track) return;

  const sorted = [...state.titles].sort((a, b) => b.views - a.views).slice(0, 10);
  track.innerHTML = sorted.map((item, idx) => createTrendingCard(item, idx + 1)).join('');

  track.querySelectorAll('.trending-card').forEach(card => {
    card.addEventListener('click', () => openDetailsModal(card.dataset.id));
  });
}

// ====== RENDER EXPLOITS ======
function renderExploreGrids() {
  renderTrendingGrid();

  const list = state.titles;
  const filter = state.activeFilter;
  
  // Render grids based on section
  const sections = [
    { gridId: 'exploreMangaGrid', type: 'Manga', title: 'Manga' },
    { gridId: 'exploreManhwaGrid', type: 'Manhwa', title: 'Manhwa' },
    { gridId: 'exploreManhuaGrid', type: 'Manhua', title: 'Manhua' },
    { gridId: 'exploreAnimeGrid', type: 'Anime', title: 'Anime' }
  ];

  sections.forEach(sec => {
    const grid = document.getElementById(sec.gridId);
    const wrapper = grid.closest('.section-wrapper');
    if (!grid || !wrapper) return;

    // Filter list for this specific category
    let filtered = list.filter(item => item.type.toLowerCase() === sec.type.toLowerCase());

    // Search query filter
    if (state.searchQuery) {
      filtered = filtered.filter(item => item.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
    }

    // Apply main chips filter (e.g. if 'manga' chip selected, hide other sections)
    const matchesMainFilter = filter === 'all' || filter === sec.type.toLowerCase();
    
    if (filtered.length > 0 && matchesMainFilter) {
      wrapper.style.display = 'block';
      // Limit to 6 on homepage
      const displayedItems = filtered.slice(0, 6);
      grid.innerHTML = displayedItems.map(item => createMangaCard(item)).join('');
    } else {
      wrapper.style.display = 'none';
    }
  });

  attachCardEvents();
}

function renderLatestGrid() {
  const grid = document.getElementById('latestGrid');
  if (!grid) return;

  // Sort by dateAdded desc
  const sorted = [...state.titles].sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
  
  if (sorted.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-history"></i><h4>Belum ada judul terbaru</h4></div>`;
  } else {
    grid.innerHTML = sorted.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
}

function renderSavedGrid() {
  const grid = document.getElementById('savedGrid');
  if (!grid) return;

  if (!state.currentUser) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-lock"></i>
        <h4>${t('empty_login_title')}</h4>
        <p>${t('empty_login_desc')}</p>
        <button class="btn-auth btn-auth-signup" style="margin-top: 10px;" onclick="openAuthModal('login')">${t('btn_login_now')}</button>
      </div>
    `;
    return;
  }

  const savedIds = state.currentUser.bookmarks || [];
  const savedTitles = state.titles.filter(item => savedIds.includes(item.id));

  if (savedTitles.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="far fa-heart"></i>
        <h4>${t('empty_saved_title')}</h4>
        <p>${t('empty_saved_desc')}</p>
      </div>
    `;
  } else {
    grid.innerHTML = savedTitles.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
}

// ====== READING HISTORY (Riwayat Baca) RENDER ======
function createHistoryCard(entry, item) {
  const isAnime = item.type.toLowerCase() === 'anime';
  const unitLabel = isAnime ? 'Episode' : 'Chapter';
  const timeAgo = formatRelativeTime(entry.timestamp);
  const fallbackBg = item.color || 'var(--surface-tertiary)';

  const coverHTML = item.coverUrl
    ? `<img src="${item.coverUrl}" alt="${item.title}" onerror="this.style.display='none';this.parentElement.style.background='${fallbackBg}';">`
    : `<div style="width:100%;height:100%;background:${fallbackBg};display:flex;align-items:center;justify-content:center;"><i class="fas ${isAnime ? 'fa-video' : 'fa-book'}" style="color:rgba(255,255,255,0.6);"></i></div>`;

  return `
    <div class="history-card" data-id="${item.id}" data-index="${entry.index}">
      <div class="history-cover">${coverHTML}</div>
      <div class="history-info">
        <h5>${item.title}</h5>
        <span>${unitLabel} ${entry.index} · ${timeAgo}</span>
      </div>
      <button class="history-continue-btn" title="Lanjutkan"><i class="fas fa-play"></i></button>
    </div>
  `;
}

function formatRelativeTime(timestamp) {
  const diffMs = Date.now() - timestamp;
  const diffMin = Math.floor(diffMs / 60000);
  const isEn = state.lang === 'en';
  if (diffMin < 1) return isEn ? "Just now" : "Baru saja";
  if (diffMin < 60) return isEn ? `${diffMin}m ago` : `${diffMin} menit lalu`;
  const diffHour = Math.floor(diffMin / 60);
  if (diffHour < 24) return isEn ? `${diffHour}h ago` : `${diffHour} jam lalu`;
  const diffDay = Math.floor(diffHour / 24);
  if (diffDay < 30) return isEn ? `${diffDay}d ago` : `${diffDay} hari lalu`;
  return new Date(timestamp).toLocaleDateString(isEn ? 'en-US' : 'id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderHistoryGrid() {
  const grid = document.getElementById('historyGrid');
  if (!grid) return;

  if (!state.currentUser) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-lock"></i>
        <h4>${t('empty_login_title')}</h4>
        <p>${t('empty_login_desc')}</p>
        <button class="btn-auth btn-auth-signup" style="margin-top: 10px;" onclick="openAuthModal('login')">${t('btn_login_now')}</button>
      </div>
    `;
    return;
  }

  const history = state.getHistory();
  if (history.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-history"></i>
        <h4>${t('empty_history_title')}</h4>
        <p>${t('empty_history_desc')}</p>
      </div>
    `;
    return;
  }

  const cardsHTML = history.map(entry => {
    const item = state.titles.find(t2 => t2.id === entry.id);
    if (!item) return '';
    return createHistoryCard(entry, item);
  }).filter(Boolean).join('');

  grid.innerHTML = cardsHTML || `<div class="empty-state"><i class="fas fa-history"></i><h4>${t('empty_history_title')}</h4></div>`;

  // Bind click-to-continue
  grid.querySelectorAll('.history-card').forEach(card => {
    card.addEventListener('click', function() {
      const id = this.dataset.id;
      const index = parseInt(this.dataset.index);
      const item = state.titles.find(t2 => t2.id === id);
      if (!item) return;
      if (item.type.toLowerCase() === 'anime') {
        openAnimeComingSoon(item, index);
      } else {
        openReader(id, index);
      }
    });
  });
}

function renderCategoryGrid(category) {
  const grid = document.getElementById('categoryGrid');
  const breadcrumbCategory = document.getElementById('breadcrumbCategory');
  const categoryHeaderTitle = document.getElementById('categoryHeaderTitle');
  if (!grid) return;

  breadcrumbCategory.textContent = category;
  categoryHeaderTitle.innerHTML = `<i class="fas fa-book-open" style="color: var(--accent-gold);"></i> Semua ${category}`;

  const filtered = state.titles.filter(item => item.type.toLowerCase() === category.toLowerCase());

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><h4>${state.lang === 'en' ? 'Empty Category' : 'Kategori Kosong'}</h4></div>`;
  } else {
    grid.innerHTML = filtered.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
}

// Mengambil daftar genre unik dari seluruh judul untuk membangun chip filter
function getAllGenres() {
  const set = new Set();
  state.titles.forEach(item => {
    (item.genre || []).forEach(g => set.add(g));
  });
  return Array.from(set).sort();
}

// Menggambar ulang chip genre pada panel filter lanjutan
function renderGenreFilterChips() {
  const container = document.getElementById('filterGenreChips');
  if (!container) return;
  const genres = getAllGenres();
  container.innerHTML = genres.map(g => `
    <button type="button" class="genre-filter-chip ${state.searchFilters.genres.includes(g) ? 'active' : ''}" data-genre="${g}">${translateGenre(g)}</button>
  `).join('');

  container.querySelectorAll('.genre-filter-chip').forEach(chip => {
    chip.addEventListener('click', function() {
      const genre = this.dataset.genre;
      const idx = state.searchFilters.genres.indexOf(genre);
      if (idx === -1) {
        state.searchFilters.genres.push(genre);
      } else {
        state.searchFilters.genres.splice(idx, 1);
      }
      this.classList.toggle('active');
      renderSearchGrid();
    });
  });
}

function renderSearchGrid() {
  const grid = document.getElementById('searchResultsGrid');
  const query = state.searchQuery.trim();
  const searchStateDesc = document.getElementById('searchStateDesc');
  const filters = state.searchFilters;
  const hasActiveFilters = filters.genres.length > 0 || filters.status !== 'all' || filters.format !== 'all' || !!filters.author;

  if (!grid) return;

  // Author filter badge
  const authorBadge = document.getElementById('authorFilterBadge');
  if (authorBadge) {
    if (filters.author) {
      authorBadge.style.display = 'inline-block';
      authorBadge.innerHTML = `<i class="fas fa-user-edit"></i> ${t('author_label')} ${filters.author}`;
    } else {
      authorBadge.style.display = 'none';
    }
  }

  if (!query && !hasActiveFilters) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h4>${t('empty_search_title')}</h4>
        <p>${t('empty_search_desc')}</p>
      </div>
    `;
    searchStateDesc.textContent = "";
    return;
  }

  let results = state.titles.filter(item => {
    const matchesQuery = !query || item.title.toLowerCase().includes(query.toLowerCase());
    const matchesAuthor = !filters.author || (item.author && item.author.toLowerCase() === filters.author.toLowerCase());
    const matchesFormat = filters.format === 'all' || item.type.toLowerCase() === filters.format.toLowerCase();
    const matchesStatus = filters.status === 'all' || item.status === filters.status;
    const matchesGenre = filters.genres.length === 0 || (item.genre && filters.genres.every(g => item.genre.includes(g)));
    return matchesQuery && matchesAuthor && matchesFormat && matchesStatus && matchesGenre;
  });

  // Sorting
  switch (filters.sort) {
    case 'rating_desc': results.sort((a, b) => b.rating - a.rating); break;
    case 'latest': results.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)); break;
    case 'popular': results.sort((a, b) => b.views - a.views); break;
    case 'title_asc': results.sort((a, b) => a.title.localeCompare(b.title)); break;
    default: break; // relevance = urutan hasil pencocokan asli
  }

  const descLabel = state.lang === 'en' ? `Showing ${results.length} results` : `Menampilkan ${results.length} hasil`;
  searchStateDesc.textContent = query ? `${descLabel} untuk "${query}"` : descLabel;

  if (results.length === 0) {
    const notFoundTitle = state.lang === 'en' ? 'No Results Found' : 'Tidak Ada Hasil';
    const notFoundDesc = state.lang === 'en' ? 'We could not find any titles matching your filters.' : 'Maaf, kami tidak menemukan judul yang cocok dengan filter Anda.';
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search-minus"></i>
        <h4>${notFoundTitle}</h4>
        <p>${notFoundDesc}</p>
      </div>
    `;
  } else {
    grid.innerHTML = results.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
}

// Membuka tampilan pencarian dengan filter genre atau penulis yang sudah diisi (dipicu dari detail modal)
function searchByGenre(genre) {
  document.getElementById('detailsModal').classList.remove('active');
  state.searchQuery = "";
  state.searchFilters = { genres: [genre], status: 'all', format: 'all', sort: 'relevance', author: null };
  document.getElementById('searchQueryInput').value = "";
  const panel = document.getElementById('advancedSearchPanel');
  if (panel) panel.classList.add('show');
  switchView('search');
  renderGenreFilterChips();
}

function searchByAuthor(author) {
  document.getElementById('detailsModal').classList.remove('active');
  state.searchQuery = "";
  state.searchFilters = { genres: [], status: 'all', format: 'all', sort: 'relevance', author };
  document.getElementById('searchQueryInput').value = "";
  const panel = document.getElementById('advancedSearchPanel');
  if (panel) panel.classList.add('show');
  switchView('search');
  renderGenreFilterChips();
}

// ====== CARD CLICKS / EVENT REGISTRATION ======
function attachCardEvents() {
  // Bookmark Toggle
  document.querySelectorAll('.btn-bookmark-float').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation(); // Avoid opening detail modal
      const id = this.dataset.id;
      const res = state.toggleBookmark(id);
      
      if (!res.success) {
        showToast(res.message, true);
        openAuthModal('login');
      } else {
        const icon = this.querySelector('i');
        if (res.bookmarked) {
          this.classList.add('active');
          icon.className = 'fas fa-heart';
          showToast(t('toast_bookmark_added'));
        } else {
          this.classList.remove('active');
          icon.className = 'far fa-heart';
          showToast(t('toast_bookmark_removed'));
        }

        // Re-render conditional grids if active
        if (state.activeView === 'saved') renderSavedGrid();
        if (state.activeView === 'explore') renderExploreGrids();
      }
    });
  });

  // Card click -> Open Details
  document.querySelectorAll('.manga-card').forEach(card => {
    card.addEventListener('click', function() {
      const id = this.dataset.id;
      openDetailsModal(id);
    });
  });
}

// ====== DETAIL VIEWER MODAL ======
let currentDetailItemId = null;

function openDetailsModal(id) {
  const item = state.titles.find(t2 => t2.id === id);
  if (!item) return;
  currentDetailItemId = id;

  const overlay = document.getElementById('detailsModal');
  const isAnime = item.type.toLowerCase() === 'anime';
  const unitLabel = isAnime ? (state.lang === 'en' ? 'Episode' : 'Episode') : (state.lang === 'en' ? 'Chapter' : 'Chapter');

  // Show/hide Watch Anime button
  const watchBtn = document.getElementById('detailWatchAnimeBtn');
  if (watchBtn) {
    watchBtn.style.display = isAnime ? 'inline-flex' : 'none';
    watchBtn.innerHTML = `<i class="fas fa-play-circle"></i> ${t('btn_watch_anime')}`;
    watchBtn.onclick = () => {
      overlay.classList.remove('active');
      openAnimeComingSoon(item);
    };
  }

  // Modal elements
  const hero = overlay.querySelector('.detail-header-hero');
  const imgContainer = overlay.querySelector('.detail-cover');
  const title = overlay.querySelector('.detail-header-info h2');
  const tagsContainer = overlay.querySelector('.detail-info-tags');
  const authorRow = overlay.querySelector('#detailAuthorRow');
  const genreList = overlay.querySelector('#detailGenreList');
  const metaVal1 = overlay.querySelector('#detailMetaVal1');
  const metaVal2 = overlay.querySelector('#detailMetaVal2');
  const metaVal3 = overlay.querySelector('#detailMetaVal3');
  const desc = overlay.querySelector('.detail-description-text');
  const readBtn = overlay.querySelector('.btn-detail-read');
  const bookmarkBtn = overlay.querySelector('.btn-detail-bookmark');
  const chaptersContainer = overlay.querySelector('#detailChaptersList');

  // Background and Cover
  const fallbackBg = item.color || 'var(--surface-tertiary)';
  if (item.coverUrl) {
    hero.style.backgroundImage = `url('${item.coverUrl}')`;
    imgContainer.innerHTML = `
      <img
        src="${item.coverUrl}"
        alt="${item.title}"
        style="width:100%;height:100%;object-fit:cover;border-radius:12px;"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
      >
      <div class="card-img-placeholder" style="display:none;background:${fallbackBg};width:100%;height:100%;">
        <i class="fas fa-book"></i>
      </div>
    `;
  } else {
    hero.style.backgroundImage = '';
    hero.style.background = fallbackBg;
    imgContainer.innerHTML = `
      <div class="card-img-placeholder" style="background:${fallbackBg};width:100%;height:100%;">
        <i class="fas fa-book"></i>
      </div>
    `;
  }

  title.textContent = item.title;

  // Tags
  const statusLabel = translateStatus(item.status);
  tagsContainer.innerHTML = `
    <span class="detail-tag" style="background: var(--accent-coral);">${item.type}</span>
    <span class="detail-tag">${statusLabel}</span>
    <span class="detail-tag"><i class="fas fa-eye"></i> ${item.views.toLocaleString()}</span>
  `;

  // Author (clickable)
  if (authorRow) {
    if (item.author) {
      authorRow.innerHTML = `<button type="button" class="author-link" data-author="${item.author}"><i class="fas fa-feather-alt"></i> ${t('author_label')} ${item.author}</button>`;
      const authorBtn = authorRow.querySelector('.author-link');
      if (authorBtn) authorBtn.onclick = () => searchByAuthor(item.author);
    } else {
      authorRow.innerHTML = '';
    }
  }

  // Genre chips (clickable)
  if (genreList) {
    const genres = item.genre || [];
    genreList.innerHTML = genres.map(g => `<button type="button" class="genre-chip" data-genre="${g}">${translateGenre(g)}</button>`).join('');
    genreList.querySelectorAll('.genre-chip').forEach(chip => {
      chip.onclick = () => searchByGenre(chip.dataset.genre);
    });
  }

  const totalCount = item.chapters || item.episodes || 0;

  // Meta grid
  metaVal1.innerHTML = `<i class="fas fa-star"></i> ${item.rating}`;
  metaVal2.textContent = `${totalCount} ${unitLabel}`;
  metaVal3.textContent = statusLabel;

  desc.textContent = getLocalizedDesc(item);

  // Action buttons — sembunyikan "Mulai Membaca" untuk konten Anime
  readBtn.style.display = isAnime ? 'none' : 'inline-flex';
  readBtn.innerHTML = `<i class="fas fa-book-open"></i> ${t('btn_start_reading')}`;
  readBtn.onclick = () => {
    overlay.classList.remove('active');
    openReader(item.id, totalCount);
  };

  // Bookmark active state
  updateDetailBookmarkBtn(bookmarkBtn, item.id);
  bookmarkBtn.onclick = () => {
    const res = state.toggleBookmark(item.id);
    if (!res.success) {
      overlay.classList.remove('active');
      showToast(res.message, true);
      openAuthModal('login');
    } else {
      updateDetailBookmarkBtn(bookmarkBtn, item.id);
      showToast(res.bookmarked ? t('toast_bookmark_added') : t('toast_bookmark_removed'));
      
      // Sync grids
      if (state.activeView === 'saved') renderSavedGrid();
      if (state.activeView === 'explore') renderExploreGrids();
    }
  };

  // Generate daftar chapter (manga/manhwa/manhua) ATAU daftar episode (anime)
  let chaptersHTML = '';
  
  // Show at most last 15 chapters/eps, in descending order
  const maxChapters = Math.min(totalCount, 15);
  for (let i = totalCount; i > totalCount - maxChapters; i--) {
    const pubDate = new Date(new Date(item.dateAdded).getTime() - ((totalCount - i) * 24 * 60 * 60 * 1000)).toLocaleDateString(state.lang === 'en' ? 'en-US' : 'id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

    const clickAction = isAnime
      ? `event.preventDefault(); document.getElementById('detailsModal').classList.remove('active'); openAnimeComingSoon(state.titles.find(t2 => t2.id === '${item.id}'), ${i});`
      : `event.preventDefault(); document.getElementById('detailsModal').classList.remove('active'); openReader('${item.id}', ${i});`;

    chaptersHTML += `
      <a href="#" class="chapter-item" onclick="${clickAction}">
        <div class="chapter-left">
          <span class="chapter-title">${unitLabel} ${i}</span>
          <span class="chapter-date">${state.lang === 'en' ? 'Released' : 'Rilis'}: ${pubDate}</span>
        </div>
        <div class="chapter-right">
          <i class="fas ${isAnime ? 'fa-play-circle' : 'fa-chevron-right'}"></i>
        </div>
      </a>
    `;
  }
  chaptersContainer.innerHTML = chaptersHTML || `<p style="font-size:0.85rem;color:var(--text-tertiary);text-align:center;padding:1rem;">${state.lang === 'en' ? 'No chapters available.' : 'Tidak ada chapter yang tersedia.'}</p>`;

  // Activate modal
  overlay.classList.add('active');
}

function updateDetailBookmarkBtn(btn, titleId) {
  const isSaved = state.isBookmarked(titleId);
  if (isSaved) {
    btn.classList.add('active');
    btn.innerHTML = '<i class="fas fa-heart"></i> Saved';
  } else {
    btn.classList.remove('active');
    btn.innerHTML = '<i class="far fa-heart"></i> Save';
  }
}

// ====== READER / WATCHER ENGINE STATE ======
let readerActiveItem = null;
let readerActiveIndex = 1; // Chapter or Episode number
let mangaLayoutMode = 'scroll'; // 'scroll' or 'page'
let mangaActivePage = 0; // Page index in page mode
const MANGA_PAGE_COUNT = 4; // Mock page count per chapter
let animePlayState = false;
let animeCurrentTimeVal = 0;
const ANIME_TOTAL_TIME = 1440; // 24 minutes in seconds
let animePlaybackInterval = null;
let animeSpeed = 1.0;
let animeQuality = '1080p';
let ambientGlowOn = true;
let videoCanvasContext = null;
let videoCanvasAnimId = null;
let canvasDrawPhase = 0;

function openReader(itemId, index) {
  const item = state.titles.find(t => t.id === itemId);
  if (!item) return;

  readerActiveItem = item;
  readerActiveIndex = index;

  const overlay = document.getElementById('readerModal');

  // Set Title and Subtitle
  document.getElementById('readerTitle').textContent = item.title;
  document.getElementById('readerSubtitle').textContent = `Chapter ${index}`;

  // Toggle Mode Groups
  const mangaControls = document.getElementById('mangaControls');
  const animeControls = document.getElementById('animeControls');
  const mangaContentArea = document.getElementById('mangaContentArea');
  const readerFooter = document.getElementById('readerFooter');

  if (mangaControls) mangaControls.style.display = 'flex';
  if (animeControls) animeControls.style.display = 'none';
  if (mangaContentArea) mangaContentArea.classList.add('active');
  if (readerFooter) readerFooter.style.display = 'flex';

  // Setup Manga Reader
  mangaActivePage = 0;
  initMangaReader();

  // Populate Chapter dropdown
  populateReaderDropdown();

  // Show Modal
  overlay.classList.add('active');
  
  // Update view count
  item.views += Math.floor(Math.random() * 5) + 1;
  state.saveTitles();

  // Catat ke riwayat baca jika user login
  if (state.currentUser) {
    state.addHistory(item.id, index);
  }
}

function closeReader() {
  const overlay = document.getElementById('readerModal');
  overlay.classList.remove('active');
  
  readerActiveItem = null;
}

// ====== MANGA READER LOGIC ======
function initMangaReader() {
  const container = document.getElementById('mangaContentArea');
  const scrollBtn = document.getElementById('modeScrollBtn');
  const pageBtn = document.getElementById('modePageBtn');

  // Set active visual state for buttons
  if (mangaLayoutMode === 'scroll') {
    scrollBtn.classList.add('active');
    pageBtn.classList.remove('active');
    container.className = 'reader-view-panel scroll-mode active';
  } else {
    scrollBtn.classList.remove('active');
    pageBtn.classList.add('active');
    container.className = 'reader-view-panel page-mode active';
  }

  renderMangaPages();
}

// Ambil array gambar untuk chapter yang sedang dibuka.
// Mendukung 2 format:
// 1) chapterImages sebagai OBJECT per-nomor-chapter -> { 1102: [...], 1101: [...] }
// 2) chapterImages sebagai ARRAY biasa (dipakai sama untuk semua chapter, mode lama)
// Kalau tidak ada data sama sekali, fallback ke coverUrl.
function getCurrentChapterImages() {
  const ci = readerActiveItem.chapterImages;
  if (ci) {
    if (Array.isArray(ci) && ci.length > 0) return ci;
    if (!Array.isArray(ci) && ci[readerActiveIndex] && ci[readerActiveIndex].length > 0) {
      return ci[readerActiveIndex];
    }
  }
  return [readerActiveItem.coverUrl || ''];
}

// Render chapter pages using real image URLs
function renderMangaPages() {
  const container = document.getElementById('mangaContentArea');
  const isScroll = mangaLayoutMode === 'scroll';

  // Get chapter images array — fall back to cover image or placeholder
  const images = getCurrentChapterImages();

  if (isScroll) {
    // Webtoon scroll: all images stacked vertically
    let pagesHTML = `<div class="reader-scroll-header"><span>${readerActiveItem.title}</span><span>Chapter ${readerActiveIndex}</span></div>`;
    images.forEach((src, i) => {
      pagesHTML += createMangaImageHTML(src, i + 1, images.length);
    });
    pagesHTML += `<div class="reader-chapter-end"><i class="fas fa-check-circle"></i><p>Chapter ${readerActiveIndex} ${state.lang === 'en' ? 'Complete' : 'Selesai'}</p></div>`;
    container.innerHTML = pagesHTML;
  } else {
    // Single page mode
    const src = images[mangaActivePage % images.length];
    container.innerHTML = `
      <div class="manga-page-navigation">
        <button class="btn-manga-nav" id="mangaPrevBtn" ${mangaActivePage === 0 ? 'disabled' : ''} onclick="changeMangaPage(-1)">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="btn-manga-nav" id="mangaNextBtn" ${mangaActivePage === images.length - 1 ? 'disabled' : ''} onclick="changeMangaPage(1)">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      ${createMangaImageHTML(src, mangaActivePage + 1, images.length)}
      <div class="manga-page-indicators">
        Halaman <span>${mangaActivePage + 1}</span> / ${images.length}
      </div>
    `;
  }
}

function createMangaImageHTML(src, pageNum, total) {
  if (!src) {
    return `<div class="manga-img-page manga-img-placeholder"><i class="fas fa-image"></i><p>Gambar tidak tersedia</p></div>`;
  }
  const safeTitle = (readerActiveItem ? readerActiveItem.title : 'kagami').replace(/[^a-z0-9]+/gi, '-').toLowerCase();
  const filename = `${safeTitle}-ch${readerActiveIndex}-hal${pageNum}.jpg`;
  return `
    <div class="manga-img-page">
      <img
        src="${src}"
        alt="Page ${pageNum}"
        class="manga-page-img"
        loading="lazy"
        onerror="this.parentElement.innerHTML='<div class=\'manga-img-placeholder\'><i class=\'fas fa-image\'></i><p>Gagal memuat gambar</p></div>'"
      />
      <button type="button" class="btn-download-page" title="Unduh Halaman" onclick="downloadImage('${src}', '${filename}')">
        <i class="fas fa-download"></i>
      </button>
      <div class="manga-img-page-num">${pageNum} / ${total}</div>
    </div>
  `;
}

// ====== UNDUH GAMBAR (Download Image Feature) ======
async function downloadImage(url, filename) {
  try {
    const resp = await fetch(url, { mode: 'cors' });
    if (!resp.ok) throw new Error('Fetch gagal');
    const blob = await resp.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(blobUrl), 2000);
    showToast(`⬇️ ${filename} ${t('toast_download_done')}`);
  } catch (err) {
    // Fallback jika gambar cross-origin tidak mengizinkan fetch (CORS)
    window.open(url, '_blank');
    showToast(t('toast_download_fail'), true);
  }
}

// Unduh seluruh halaman pada chapter yang sedang dibuka (dengan jeda agar tidak diblokir browser)
async function downloadCurrentChapter() {
  if (!readerActiveItem) return;
  const images = getCurrentChapterImages();

  if (images.length === 0 || !images[0]) {
    showToast(t('toast_download_none'), true);
    return;
  }

  showToast(`⬇️ ${t('toast_downloading')} ${images.length} ${state.lang === 'en' ? 'pages' : 'halaman'}...`);
  const safeTitle = readerActiveItem.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase();

  for (let i = 0; i < images.length; i++) {
    const filename = `${safeTitle}-ch${readerActiveIndex}-hal${i + 1}.jpg`;
    await downloadImage(images[i], filename);
    await new Promise(res => setTimeout(res, 400));
  }
}

function changeMangaPage(direction) {
  const images = getCurrentChapterImages();
  const newPage = mangaActivePage + direction;
  if (newPage >= 0 && newPage < images.length) {
    mangaActivePage = newPage;
    renderMangaPages();
    document.getElementById('mangaContentArea').scrollTop = 0;
  }
}

// ====== DROPDOWNS & NAV CONTROLS ======
function populateReaderDropdown() {
  const total = readerActiveItem.chapters || readerActiveItem.episodes || 0;
  const select = document.getElementById('readerChapterSelector');

  if (!select) return;

  let optionsHTML = '';
  for (let i = 1; i <= total; i++) {
    const isSelected = i === readerActiveIndex ? 'selected' : '';
    optionsHTML += `<option value="${i}" ${isSelected}>Chapter ${i}</option>`;
  }
  select.innerHTML = optionsHTML;

  // Handle dropdown select change
  select.onchange = function() {
    openReader(readerActiveItem.id, parseInt(this.value));
  };

  // Setup header/footer chapter controls disabled states
  const prevBtn = document.getElementById('prevChapBtn');
  const nextBtn = document.getElementById('nextChapBtn');

  if (prevBtn) {
    if (readerActiveIndex <= 1) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
      prevBtn.onclick = () => openReader(readerActiveItem.id, readerActiveIndex - 1);
    }
  }

  if (nextBtn) {
    if (readerActiveIndex >= total) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
      nextBtn.onclick = () => openReader(readerActiveItem.id, readerActiveIndex + 1);
    }
  }
}

// ====== ANIME COMING SOON ======
function openAnimeComingSoon(item, episodeNum = null) {
  const modal = document.getElementById('animeComingSoonModal');
  const titleEl = document.getElementById('animeCSTitle');
  const epEl = document.getElementById('animeCSEpisode');

  if (titleEl) titleEl.textContent = item.title;
  if (epEl) {
    epEl.textContent = episodeNum
      ? `Episode ${episodeNum} of ${item.episodes}`
      : `${item.episodes} Episode · ${item.type}`;
  }

  // Catat ke riwayat baca jika user login
  if (state.currentUser) {
    state.addHistory(item.id, episodeNum || 1);
  }

  modal.classList.add('active');
}


function openAuthModal(mode = 'login') {
  const modal = document.getElementById('authModal');
  modal.classList.add('active');
  switchAuthTab(mode);
}

function switchAuthTab(mode) {
  const loginTab = document.getElementById('tabLogin');
  const signupTab = document.getElementById('tabSignup');
  const loginPanel = document.getElementById('panelLogin');
  const signupPanel = document.getElementById('panelSignup');

  if (mode === 'login') {
    loginTab.classList.add('active');
    signupTab.classList.remove('active');
    loginPanel.classList.add('active');
    signupPanel.classList.remove('active');
  } else {
    signupTab.classList.add('active');
    loginTab.classList.remove('active');
    signupPanel.classList.add('active');
    loginPanel.classList.remove('active');
  }
}

function updateAuthUI() {
  const authBlock = document.getElementById('authBlock');
  const user = state.currentUser;
  
  if (user) {
    authBlock.innerHTML = `
      <div class="user-profile-badge" id="profileBadge">
        <img src="${user.avatar}" alt="Avatar">
        <span>${user.name}</span>
      </div>
    `;
    // Attach logout menu popup trigger or action
    document.getElementById('profileBadge').addEventListener('click', () => {
      if (confirm(`Halo, ${user.name}!\nApakah Anda ingin keluar (Log Out)?`)) {
        state.logout();
        updateAuthUI();
        showToast(t('toast_logout'));
        if (state.activeView === 'saved') {
          switchView('explore');
        } else {
          renderExploreGrids();
        }
      }
    });
  } else {
    authBlock.innerHTML = `
      <button class="btn-auth btn-auth-login" onclick="openAuthModal('login')"><i class="fas fa-user"></i> Log In</button>
      <button class="btn-auth btn-auth-signup" onclick="openAuthModal('signup')">Sign Up</button>
    `;
  }
}

// ====== SIMULATED GOOGLE AUTH (removed per request) ======

// ====== UPLOAD IMAGES / GRADIENTS ======
let selectedUploadCoverGradient = "linear-gradient(135deg, #1e3a8a, #3b82f6)";
let uploadedCoverDataUrl = null;

function setupUploadPageControls() {
  const fileInput = document.getElementById('uploadFile');
  const coverPreview = document.getElementById('coverPreview');
  const coverUrlInput = document.getElementById('uploadCoverUrl'); // Field URL
  const presetGradients = document.querySelectorAll('.gradient-preset');

  // Live preview saat URL diketik
  if (coverUrlInput) {
    coverUrlInput.addEventListener('input', function() {
      const url = this.value.trim();
      if (url) {
        uploadedCoverDataUrl = null;
        if (fileInput) fileInput.value = "";
        presetGradients.forEach(g => g.classList.remove('selected'));

        const testImg = new Image();
        testImg.onload = function() {
          coverPreview.innerHTML = `<img src="${url}" alt="Preview Cover" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;
        };
        testImg.onerror = function() {
          coverPreview.innerHTML = `
            <div style="display:flex;flex-direction:column;align-items:center;gap:8px;color:var(--accent-coral);">
              <i class="fas fa-exclamation-triangle" style="font-size:1.5rem;"></i>
              <small>URL tidak valid atau gambar tidak bisa dimuat</small>
            </div>
          `;
        };
        testImg.src = url;
      } else {
        coverPreview.innerHTML = `<i class="fas fa-cloud-upload-alt"></i><span>Pilih Cover</span>`;
      }
    });
  }
  
  // File upload cover reader
  if (fileInput) {
    fileInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        if (coverUrlInput) coverUrlInput.value = "";
        const reader = new FileReader();
        reader.onload = function(e) {
          uploadedCoverDataUrl = e.target.result;
          coverPreview.innerHTML = `<img src="${uploadedCoverDataUrl}" alt="Preview Cover">`;
          presetGradients.forEach(g => g.classList.remove('selected'));
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Preset gradient selection
  presetGradients.forEach(preset => {
    preset.addEventListener('click', function() {
      presetGradients.forEach(g => g.classList.remove('selected'));
      this.classList.add('selected');
      
      const style = window.getComputedStyle(this);
      selectedUploadCoverGradient = style.backgroundImage;
      uploadedCoverDataUrl = null;
      if (fileInput) fileInput.value = "";
      if (coverUrlInput) coverUrlInput.value = "";
      
      coverPreview.innerHTML = `
        <div style="background: ${selectedUploadCoverGradient}; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.7);">
          <i class="fas fa-image" style="font-size: 2rem;"></i>
        </div>
      `;
    });
  });

  // Form submission
  const uploadForm = document.getElementById('uploadForm');
  if (uploadForm) {
    uploadForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      if (!state.currentUser) {
        showToast(t('toast_upload_login_required'), true);
        openAuthModal('login');
        return;
      }

      const titleVal = document.getElementById('uploadTitle').value.trim();
      const typeVal = document.getElementById('uploadType').value;
      const chaptersVal = document.getElementById('uploadChapters').value;
      const ratingVal = document.getElementById('uploadRating').value;
      const descVal = document.getElementById('uploadDescription').value.trim();
      const coverUrlVal = coverUrlInput ? coverUrlInput.value.trim() : "";
      const authorVal = document.getElementById('uploadAuthor') ? document.getElementById('uploadAuthor').value.trim() : "";
      const genreRaw = document.getElementById('uploadGenre') ? document.getElementById('uploadGenre').value.trim() : "";
      const genreVal = genreRaw ? genreRaw.split(',').map(g => g.trim()).filter(Boolean) : [];

      if (!titleVal || !chaptersVal || !ratingVal) {
        showToast(t('toast_upload_required_fields'), true);
        return;
      }

      // PRIORITAS: URL input > base64 file > gradient
      let finalCoverUrl = null;
      if (coverUrlVal) {
        finalCoverUrl = coverUrlVal;
      } else if (uploadedCoverDataUrl) {
        finalCoverUrl = uploadedCoverDataUrl;
      }

      // Add to state list
      const newItem = state.addTitle(
        titleVal,
        typeVal,
        ratingVal,
        chaptersVal,
        descVal,
        finalCoverUrl,
        selectedUploadCoverGradient,
        authorVal,
        genreVal
      );

      showToast(`🎉 ${t('toast_upload_success')} ${typeVal}: "${newItem.title}"!`);
      
      // Reset form
      uploadForm.reset();
      uploadedCoverDataUrl = null;
      if (coverUrlInput) coverUrlInput.value = "";
      coverPreview.innerHTML = `<i class="fas fa-cloud-upload-alt"></i><span>Pilih Cover</span>`;
      
      // Redirect to home/explore
      switchView('explore');
    });
  }
}


// ====== DYNAMIC FAVICON GENERATOR ======
function generateDynamicFavicon() {
  const canvas = document.createElement('canvas');
  canvas.width = 192;
  canvas.height = 192;
  const ctx = canvas.getContext('2d');
  
  // Draw circular gold gradient background
  const grad = ctx.createRadialGradient(96, 96, 20, 96, 96, 96);
  grad.addColorStop(0, '#f7d875');
  grad.addColorStop(1, '#c99f2b');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(96, 96, 90, 0, Math.PI * 2);
  ctx.fill();
  
  ctx.strokeStyle = '#b8860b';
  ctx.lineWidth = 6;
  ctx.stroke();

  // Draw text '福'
  ctx.fillStyle = '#2d1f04';
  ctx.font = 'bold 110px "Segoe UI", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('福', 96, 96);
  
  const iconUrl = canvas.toDataURL('image/png');
  
  // Replace links
  document.querySelectorAll("link[rel*='icon'], link[rel='apple-touch-icon']").forEach(link => {
    link.href = iconUrl;
  });
}

// ====== INITIALIZE EVENT HANDLERS ======
document.addEventListener('DOMContentLoaded', () => {
  // Setup standard navigation click bindings
  document.querySelectorAll('[data-view-btn]').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const view = this.dataset.viewBtn;
      const category = this.dataset.category;
      
      if (category) {
        switchView('category-view', { category });
      } else {
        switchView(view);
      }
    });
  });

  // Top header search binds (transfers views to Search and sets query)
  const headerSearchInput = document.getElementById('headerSearchInput');
  if (headerSearchInput) {
    headerSearchInput.addEventListener('input', function() {
      state.searchQuery = this.value;
      
      if (state.activeView !== 'search' && this.value.trim() !== "") {
        // Shift context to search panel
        switchView('search');
        const mainSearch = document.getElementById('searchQueryInput');
        if (mainSearch) {
          mainSearch.value = this.value;
        }
      } else if (state.activeView === 'search') {
        const mainSearch = document.getElementById('searchQueryInput');
        if (mainSearch) {
          mainSearch.value = this.value;
        }
        renderSearchGrid();
      }
    });
  }

  // Dedicated search page input binds
  const searchQueryInput = document.getElementById('searchQueryInput');
  if (searchQueryInput) {
    searchQueryInput.addEventListener('input', function() {
      state.searchQuery = this.value;
      if (headerSearchInput) {
        headerSearchInput.value = this.value;
      }
      renderSearchGrid();
    });
  }

  // ====== ADVANCED SEARCH FILTER BINDINGS ======
  const toggleAdvBtn = document.getElementById('toggleAdvancedSearchBtn');
  const advPanel = document.getElementById('advancedSearchPanel');
  if (toggleAdvBtn && advPanel) {
    toggleAdvBtn.addEventListener('click', () => {
      advPanel.classList.toggle('show');
      toggleAdvBtn.classList.toggle('active');
    });
  }

  const filterFormatEl = document.getElementById('filterFormat');
  if (filterFormatEl) {
    filterFormatEl.addEventListener('change', function() {
      state.searchFilters.format = this.value;
      renderSearchGrid();
    });
  }

  const filterStatusEl = document.getElementById('filterStatus');
  if (filterStatusEl) {
    filterStatusEl.addEventListener('change', function() {
      state.searchFilters.status = this.value;
      renderSearchGrid();
    });
  }

  const filterSortEl = document.getElementById('filterSort');
  if (filterSortEl) {
    filterSortEl.addEventListener('change', function() {
      state.searchFilters.sort = this.value;
      renderSearchGrid();
    });
  }

  const resetFiltersBtn = document.getElementById('resetFiltersBtn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', () => {
      state.searchFilters = { genres: [], status: 'all', format: 'all', sort: 'relevance', author: null };
      if (filterFormatEl) filterFormatEl.value = 'all';
      if (filterStatusEl) filterStatusEl.value = 'all';
      if (filterSortEl) filterSortEl.value = 'relevance';
      renderGenreFilterChips();
      renderSearchGrid();
    });
  }

  renderGenreFilterChips();

  // ====== NOW TRENDING CAROUSEL NAV ======
  const trendingTrack = document.getElementById('trendingTrack');
  const trendingPrevBtn = document.getElementById('trendingPrevBtn');
  const trendingNextBtn = document.getElementById('trendingNextBtn');
  if (trendingTrack && trendingPrevBtn && trendingNextBtn) {
    trendingPrevBtn.addEventListener('click', () => trendingTrack.scrollBy({ left: -420, behavior: 'smooth' }));
    trendingNextBtn.addEventListener('click', () => trendingTrack.scrollBy({ left: 420, behavior: 'smooth' }));
  }

  // ====== LIBRARY TABS (Favorit / Riwayat) ======
  document.querySelectorAll('.lib-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.lib-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.lib-panel').forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      const panelId = this.dataset.libPanel;
      const panel = document.getElementById(panelId);
      if (panel) panel.classList.add('active');
    });
  });

  const clearHistoryBtn = document.getElementById('clearHistoryBtn');
  if (clearHistoryBtn) {
    clearHistoryBtn.addEventListener('click', () => {
      if (!state.currentUser) return;
      state.clearHistory();
      renderHistoryGrid();
      showToast(t('toast_history_cleared'));
    });
  }

  // ====== THEME TOGGLE (Dark/Light) ======
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  function applyTheme(theme) {
    state.theme = theme;
    localStorage.setItem('kagami_theme', theme);
    document.body.classList.toggle('light-theme', theme === 'light');
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) metaTheme.setAttribute('content', theme === 'light' ? '#f4f5f9' : '#0b0b0f');
  }
  applyTheme(state.theme);
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyTheme(state.theme === 'light' ? 'dark' : 'light');
    });
  }

  // ====== LANGUAGE SWITCHER (ID/EN) ======
  const langSwitcherBtn = document.getElementById('langSwitcherBtn');
  const langMenu = document.getElementById('langMenu');
  if (langSwitcherBtn && langMenu) {
    langSwitcherBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langMenu.classList.toggle('show');
    });
    document.addEventListener('click', () => langMenu.classList.remove('show'));
    langMenu.querySelectorAll('.lang-option').forEach(opt => {
      opt.addEventListener('click', (e) => {
        e.stopPropagation();
        applyLanguage(opt.dataset.lang);
        langMenu.classList.remove('show');
      });
    });
  }
  applyLanguage(state.lang);

  // Category chip filters click binding (Explore Page)
  document.querySelectorAll('.filter-chips .chip').forEach(chip => {
    chip.addEventListener('click', function() {
      const filter = this.dataset.filter;
      state.activeFilter = filter;
      updateFilterChips();
      renderExploreGrids();
      showToast(`${t('toast_filter_applied')}: ${filter.toUpperCase()}`);
    });
  });

  // Modal closers
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
      }
    });
    
    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
      });
    }
  });

  // Auth Modal Forms
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const pass = document.getElementById('loginPassword').value;
      
      const res = state.login(email, pass);
      if (res.success) {
        document.getElementById('authModal').classList.remove('active');
        updateAuthUI();
        showToast(`${t('toast_welcome_back')} ${res.user.name}!`);
        if (state.activeView === 'saved') renderSavedGrid();
        renderExploreGrids();
      } else {
        showToast(`❌ ${res.message}`, true);
      }
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('signupEmail').value.trim();
      const name = document.getElementById('signupName').value.trim();
      const pass = document.getElementById('signupPassword').value;
      
      const res = state.addUser(email, name, pass);
      if (res.success) {
        // Automatically log in
        state.login(email, pass);
        document.getElementById('authModal').classList.remove('active');
        updateAuthUI();
        showToast(`${t('toast_signup_success')} ${name}!`);
        renderExploreGrids();
      } else {
        showToast(`❌ ${res.message}`, true);
      }
    });
  }

  // (Login Google dihapus)

  // Details Modal Tab navigations
  document.querySelectorAll('.detail-tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.detail-tab-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.detail-panel').forEach(p => p.classList.remove('active'));
      
      this.classList.add('active');
      const targetPanel = document.getElementById(this.dataset.panel);
      if (targetPanel) targetPanel.classList.add('active');
    });
  });

  // Setup control points for Uploader Drawer
  setupUploadPageControls();

  // Install PWA banners listeners
  let deferredPrompt;
  const installBanner = document.getElementById('installBanner');
  const installAppBtn = document.getElementById('installAppBtn');
  const closeBannerBtn = document.getElementById('closeBannerBtn');

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBanner.classList.add('show');
  });

  if (installAppBtn) {
    installAppBtn.addEventListener('click', async () => {
      if (deferredPrompt) {
        deferredPrompt.prompt();
        const result = await deferredPrompt.userChoice;
        if (result.outcome === 'accepted') {
          showToast(t('toast_pwa_installed'));
          installBanner.classList.remove('show');
        }
        deferredPrompt = null;
      }
    });
  }

  if (closeBannerBtn) {
    closeBannerBtn.addEventListener('click', () => {
      installBanner.classList.remove('show');
    });
  }

  // ====== BIND READER EVENTS ======
  const closeReaderBtn = document.getElementById('closeReaderBtn');
  if (closeReaderBtn) {
    closeReaderBtn.addEventListener('click', closeReader);
  }

  // Manga Layout modes toggle
  const modeScrollBtn = document.getElementById('modeScrollBtn');
  const modePageBtn = document.getElementById('modePageBtn');

  if (modeScrollBtn && modePageBtn) {
    modeScrollBtn.addEventListener('click', () => {
      mangaLayoutMode = 'scroll';
      initMangaReader();
    });

    modePageBtn.addEventListener('click', () => {
      mangaLayoutMode = 'page';
      initMangaReader();
    });
  }

  // Ambient Glow Toggle
  const ambientGlowBtn = document.getElementById('ambientGlowBtn');
  if (ambientGlowBtn) {
    ambientGlowBtn.addEventListener('click', () => {
      ambientGlowOn = !ambientGlowOn;
      const area = document.getElementById('animeContentArea');
      if (ambientGlowOn) {
        ambientGlowBtn.classList.add('active');
        area.classList.add('ambient-active');
      } else {
        ambientGlowBtn.classList.remove('active');
        area.classList.remove('ambient-active');
      }
    });
  }

  // Video Controls clicks
  const videoPlayPauseBtn = document.getElementById('videoPlayPauseBtn');
  const videoOverlayPlayBtn = document.getElementById('videoOverlayPlayBtn');

  if (videoPlayPauseBtn) videoPlayPauseBtn.addEventListener('click', toggleAnimePlayback);
  if (videoOverlayPlayBtn) videoOverlayPlayBtn.addEventListener('click', toggleAnimePlayback);

  // Volume Slider
  const volumeSlider = document.getElementById('volumeSlider');
  if (volumeSlider) {
    volumeSlider.addEventListener('input', function() {
      handleVolumeSlider(parseInt(this.value));
    });
  }

  // Volume Mute Button toggle
  const videoMuteBtn = document.getElementById('videoMuteBtn');
  let lastVolume = 80;
  if (videoMuteBtn) {
    videoMuteBtn.addEventListener('click', () => {
      const slider = document.getElementById('volumeSlider');
      if (slider) {
        if (parseInt(slider.value) > 0) {
          lastVolume = parseInt(slider.value);
          handleVolumeSlider(0);
        } else {
          handleVolumeSlider(lastVolume);
        }
      }
    });
  }

  // Timeline Scrub
  const timelineEl = document.getElementById('videoTimeline');
  if (timelineEl) {
    const timelineContainer = timelineEl.parentElement;
    if (timelineContainer) {
      timelineContainer.addEventListener('mousedown', function(e) {
        handleTimelineScrub(e);
        
        // Support drag scrub
        const onMouseMove = (moveEvent) => handleTimelineScrub(moveEvent);
        const onMouseUp = () => {
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
        };
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      });
    }
  }

  // Dropdown lists: Quality & Speed toggles
  const qualityBtn = document.getElementById('qualityBtn');
  const qualityMenu = document.getElementById('qualityMenu');
  const speedBtn = document.getElementById('speedBtn');
  const speedMenu = document.getElementById('speedMenu');

  if (qualityBtn && qualityMenu) {
    qualityBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      qualityMenu.classList.toggle('show');
      if (speedMenu) speedMenu.classList.remove('show');
    });

    qualityMenu.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        qualityMenu.querySelectorAll('.dropdown-item').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
        animeQuality = this.dataset.quality;
        qualityBtn.textContent = animeQuality;
        qualityMenu.classList.remove('show');
        showToast(`Resolusi diubah ke: ${animeQuality}`);
      });
    });
  }

  if (speedBtn && speedMenu) {
    speedBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      speedMenu.classList.toggle('show');
      if (qualityMenu) qualityMenu.classList.remove('show');
    });

    speedMenu.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        speedMenu.querySelectorAll('.dropdown-item').forEach(d => d.classList.remove('active'));
        this.classList.add('active');
        animeSpeed = parseFloat(this.dataset.speed);
        if (videoElement) videoElement.playbackRate = animeSpeed;
        speedBtn.textContent = `${animeSpeed.toFixed(1)}x`;
        speedMenu.classList.remove('show');
        showToast(`Kecepatan putar diubah ke: ${animeSpeed}x`);
      });
    });
  }

  // Click outside to close dropdowns
  window.addEventListener('click', () => {
    if (qualityMenu) qualityMenu.classList.remove('show');
    if (speedMenu) speedMenu.classList.remove('show');
  });

  // Next Episode Button
  const videoNextBtn = document.getElementById('videoNextBtn');
  if (videoNextBtn) {
    videoNextBtn.addEventListener('click', () => {
      const total = readerActiveItem.type.toLowerCase() === 'anime' ? readerActiveItem.episodes : readerActiveItem.chapters;
      if (readerActiveIndex < total) {
        openReader(readerActiveItem.id, readerActiveIndex + 1);
        showToast(`Memutar Episode ${readerActiveIndex}...`);
      } else {
        showToast(t('toast_last_episode'), true);
      }
    });
  }

  // Fullscreen toggle simulation
  const videoFullscreenBtn = document.getElementById('videoFullscreenBtn');
  if (videoFullscreenBtn) {
    videoFullscreenBtn.addEventListener('click', () => {
      const videoWrapper = document.querySelector('.video-wrapper');
      if (!document.fullscreenElement) {
        if (videoWrapper) {
          videoWrapper.requestFullscreen().catch(err => {
            showToast(t('toast_fullscreen_unsupported'), true);
          });
        }
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Picture in Picture simulation
  const videoPipBtn = document.getElementById('videoPipBtn');
  if (videoPipBtn) {
    videoPipBtn.addEventListener('click', () => {
      showToast("💡 Picture-in-Picture diaktifkan (simulasi)");
    });
  }

  // Initialize display lists
  generateDynamicFavicon();
  updateAuthUI();
  switchView('explore');
  
  setTimeout(() => {
    showToast(t('toast_welcome_app'));
  }, 1000);
});
