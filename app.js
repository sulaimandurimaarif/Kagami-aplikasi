// ====== INITIAL DATA ======
const DEFAULT_TITLES = [
  { id: "m-1", title: "Solo Leveling", type: "Manhwa", rating: 4.9, chapters: 179, color: "linear-gradient(135deg, #1e3a8a, #3b82f6)", description: "In a world where hunters must battle deadly monsters to protect mankind, Sung Jinwoo, the weakest hunter of all mankind, finds himself in a struggle for survival in a double dungeon. After surviving a near-death trial, he awakens with a unique system that allows him to level up without limits.", dateAdded: "2026-01-10", views: 24500, status: "Completed" },
  { id: "m-2", title: "One Piece", type: "Manga", rating: 4.8, chapters: 1102, coverUrl: "https://github.com/sulaimandurimaarif/Manga-Cover/blob/main/One%20Piece.png?raw=true", description: "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!", dateAdded: "2026-05-15", views: 98000, status: "Ongoing" },
  { id: "m-3", title: "Noblesse", type: "Manhwa", rating: 4.7, chapters: 544, color: "linear-gradient(135deg, #4c1d95, #8b5cf6)", description: "Rai awakens from his 820-year sleep. He starts his new life as a student in a high school founded by his loyal servant, Frankenstein. But his peaceful days are soon interrupted by mysterious attackers known as the Union.", dateAdded: "2025-11-20", views: 18400, status: "Completed" },
  { id: "m-4", title: "Tower of God", type: "Manhwa", rating: 4.6, chapters: 590, color: "linear-gradient(135deg, #064e3b, #10b981)", description: "What do you desire? Money and wealth? Honor and pride? Authority and power? Revenge? Or something that transcends all of them? Whatever you desire—it is here. Tower of God. Reach the top, and everything will be yours.", dateAdded: "2026-07-01", views: 42000, status: "Ongoing" },
  { id: "m-5", title: "Jujutsu Kaisen", type: "Manga", rating: 4.8, chapters: 271, color: "linear-gradient(135deg, #1e1b4b, #4338ca)", description: "In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered. Should any demon consume Sukuna's body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the living from the undead!", dateAdded: "2026-06-25", views: 67000, status: "Completed" },
  { id: "m-6", title: "Battle Through the Heavens", type: "Manhua", rating: 4.5, chapters: 402, color: "linear-gradient(135deg, #831843, #ec4899)", description: "In a land where no magic exists. A land where the strong make the rules and weak have to obey. A land filled with alluring treasures and beauty, yet also filled with unforeseen danger. Xiao Yan, who had shown talents none had seen in decades, suddenly lost everything three years ago. What magic caused him to lose all of his powers?", dateAdded: "2026-02-14", views: 15900, status: "Ongoing" },
  { id: "m-7", title: "My Hero Academia", type: "Manga", rating: 4.4, chapters: 398, color: "linear-gradient(135deg, #172554, #1d4ed8)", description: "Middle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all, gives him a chance to change his destiny...", dateAdded: "2026-04-18", views: 35000, status: "Completed" },
  { id: "m-8", title: "The Breaker", type: "Manhwa", rating: 4.7, chapters: 200, color: "linear-gradient(135deg, #0f172a, #334155)", description: "The new English teacher, Chun-Woo, is not your ordinary teacher. Shioon, a victim of constant bullying, accidentally witnesses Chun-Woo's martial arts power, and begs Chun-Woo to make him his disciple.", dateAdded: "2025-09-05", views: 12000, status: "Completed" },
  { id: "m-9", title: "Martial Peak", type: "Manhua", rating: 4.3, chapters: 2400, color: "linear-gradient(135deg, #14532d, #22c55e)", description: "The journey to the martial peak is a lonely, solitary and long struggle. In the face of adversity, you must survive and remain unyielding. Only then can you break through and continue on your journey to become the strongest.", dateAdded: "2026-07-15", views: 89000, status: "Ongoing" },
  { id: "m-10", title: "Demon Slayer", type: "Manga", rating: 4.9, chapters: 205, color: "linear-gradient(135deg, #7f1d1d, #ef4444)", description: "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a demon slayer to turn his sister back into a human.", dateAdded: "2026-03-30", views: 75000, status: "Completed" },
  { id: "m-11", title: "Chainsaw Man", type: "Manga", rating: 4.7, chapters: 150, color: "linear-gradient(135deg, #451a03, #f97316)", description: "Denji is a teenage boy living with a Chainsaw Devil named Pochita. Due to the debt his father left behind, he has been living a rock-bottom life while repaying his debt by harvesting devil corpses with Pochita. One day, Denji is betrayed and killed. As his consciousness fades, he makes a contract with Pochita and gets revived as Chainsaw Man.", dateAdded: "2026-05-02", views: 51000, status: "Ongoing" },
  { id: "m-12", title: "Tales of Demons and Gods", type: "Manhua", rating: 4.6, chapters: 455, color: "linear-gradient(135deg, #3f2b96, #a8c0ff)", description: "Killed by a Sage Emperor and reborn as his 13-year-old self, Nie Li was given a second chance at life. A second chance to change everything, save his loved ones and his beloved city. He shall once again battle with the Sage Emperor to avenge his death.", dateAdded: "2026-06-12", views: 33000, status: "Ongoing" },
  
  // Anime items
  { id: "a-1", title: "Jujutsu Kaisen", type: "Anime", rating: 4.8, episodes: 24, color: "linear-gradient(135deg, #1e1b4b, #4338ca)", description: "Yuuji Itadori, a high school student who harbors extraordinary physical abilities, swallows the finger of Ryomen Sukuna, a curse, to save a friend. He joins the Tokyo Metropolitan Jujutsu Technical High School to find all of Sukuna's fingers and exorcise the curse.", dateAdded: "2026-06-25", views: 88000, status: "Completed" },
  { id: "a-2", title: "Demon Slayer", type: "Anime", rating: 4.9, episodes: 44, color: "linear-gradient(135deg, #7f1d1d, #ef4444)", description: "Tanjiro Kamado's journey to slay demons and rescue his sister Nezuko is beautifully animated by Ufotable. Spanning multiple television seasons and blockbuster movies, this is a modern global phenomenon.", dateAdded: "2026-03-30", views: 120000, status: "Completed" },
  { id: "a-3", title: "One Piece", type: "Anime", rating: 4.7, episodes: 1100, color: "linear-gradient(135deg, #7c2d12, #f97316)", description: "The legendary anime adaptation of Eiichiro Oda's masterpiece manga. Luffy and his Straw Hat crew sail across the sea in search of the legendary One Piece.", dateAdded: "2026-05-15", views: 150000, status: "Ongoing" },
  { id: "a-4", title: "Attack on Titan", type: "Anime", rating: 4.8, episodes: 87, color: "linear-gradient(135deg, #312e81, #1e1b4b)", description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born of hunger but what seems to be out of pleasure.", dateAdded: "2025-12-05", views: 95000, status: "Completed" },
  { id: "a-5", title: "Spy x Family", type: "Anime", rating: 4.7, episodes: 25, color: "linear-gradient(135deg, #065f46, #0f766e)", description: "A spy on an undercover mission gets married and adopts a child as part of his cover. His wife is a deadly assassin and his daughter is a telepath, but they all hide their secrets from each other.", dateAdded: "2026-04-10", views: 48000, status: "Completed" }
];

const DEFAULT_USERS = [
  { email: "guest@kagami.com", name: "Guest Kagami", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Guest", password: "password123" }
];

// ====== STATE ENGINE ======
class AppState {
  constructor() {
    this.titles = JSON.parse(localStorage.getItem('kagami_titles')) || DEFAULT_TITLES;
    this.users = JSON.parse(localStorage.getItem('kagami_users')) || DEFAULT_USERS;
    this.currentUser = JSON.parse(localStorage.getItem('kagami_session')) || null;
    this.searchQuery = "";
    this.activeFilter = "all"; // 'all', 'manga', 'manhwa', 'manhua', 'anime'
    this.activeView = "explore"; // 'explore', 'latest', 'saved', 'upload', 'search', 'category-view'
    this.viewAllCategory = null; // Used when activeView is 'category-view'
    
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
      return { success: false, message: "Email sudah terdaftar!" };
    }
    const avatar = avatarUrl || `https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(name)}`;
    const newUser = { email, name, password, avatar, bookmarks: [] };
    this.users.push(newUser);
    this.saveUsers();
    return { success: true, user: newUser };
  }

  login(email, password) {
    const user = this.users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
    if (!user) return { success: false, message: "Email atau password salah!" };
    
    this.currentUser = {
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      bookmarks: user.bookmarks || []
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
      bookmarks: user.bookmarks || []
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

  addTitle(title, type, rating, chaptersCount, description, coverDataUrl = null, coverGradient = null) {
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
      status: "Ongoing"
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
      return { success: false, message: "Silakan log in terlebih dahulu untuk menyimpan!" };
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
    if (item.dataset.view === viewName || (viewName === 'category-view' && item.dataset.view === 'explore')) {
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
  } else if (viewName === 'category-view') {
    state.viewAllCategory = options.category;
    renderCategoryGrid(options.category);
  } else if (viewName === 'search') {
    document.getElementById('searchQueryInput').focus();
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

  let coverHTML = '';
  if (item.coverUrl) {
    coverHTML = `<img src="${item.coverUrl}" alt="${item.title}" loading="lazy">`;
  } else {
    coverHTML = `
      <div class="card-img-placeholder" style="background: ${item.color || 'var(--surface-tertiary)'}">
        <i class="fas ${isAnime ? 'fa-video' : 'fa-book'}"></i>
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

// ====== RENDER EXPLOITS ======
function renderExploreGrids() {
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
        <h4>Akses Dibatasi</h4>
        <p>Silakan log in terlebih dahulu untuk melihat daftar judul yang Anda simpan.</p>
        <button class="btn-auth btn-auth-signup" style="margin-top: 10px;" onclick="openAuthModal('login')">Log In Sekarang</button>
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
        <h4>Belum Ada Favorit</h4>
        <p>Judul yang Anda simpan akan muncul di sini. Cari judul menarik dan klik ikon hati!</p>
      </div>
    `;
  } else {
    grid.innerHTML = savedTitles.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
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
    grid.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><h4>Kategori Kosong</h4></div>`;
  } else {
    grid.innerHTML = filtered.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
}

function renderSearchGrid() {
  const grid = document.getElementById('searchResultsGrid');
  const query = state.searchQuery.trim();
  const searchStateDesc = document.getElementById('searchStateDesc');
  
  if (!grid) return;

  if (!query) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search"></i>
        <h4>Mulailah Mengetik...</h4>
        <p>Cari manga, manhwa, manhua favorit Anda berdasarkan judul.</p>
      </div>
    `;
    searchStateDesc.textContent = "Ketik judul untuk memulai pencarian";
    return;
  }

  const results = state.titles.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
  searchStateDesc.textContent = `Menampilkan ${results.length} hasil untuk "${query}"`;

  if (results.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-search-minus"></i>
        <h4>Tidak Ada Hasil</h4>
        <p>Maaf, kami tidak menemukan judul dengan kata kunci "${query}". Coba periksa ejaan Anda.</p>
      </div>
    `;
  } else {
    grid.innerHTML = results.map(item => createMangaCard(item)).join('');
  }
  attachCardEvents();
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
          showToast('✅ Berhasil disimpan ke favorit!');
        } else {
          this.classList.remove('active');
          icon.className = 'far fa-heart';
          showToast('💔 Dihapus dari favorit');
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
function openDetailsModal(id) {
  const item = state.titles.find(t => t.id === id);
  if (!item) return;

  const overlay = document.getElementById('detailsModal');
  const isAnime = item.type.toLowerCase() === 'anime';

  // Modal elements
  const hero = overlay.querySelector('.detail-header-hero');
  const imgContainer = overlay.querySelector('.detail-cover');
  const title = overlay.querySelector('.detail-header-info h2');
  const tagsContainer = overlay.querySelector('.detail-info-tags');
  const metaVal1 = overlay.querySelector('#detailMetaVal1');
  const metaVal2 = overlay.querySelector('#detailMetaVal2');
  const metaVal3 = overlay.querySelector('#detailMetaVal3');
  const desc = overlay.querySelector('.detail-description-text');
  const readBtn = overlay.querySelector('.btn-detail-read');
  const bookmarkBtn = overlay.querySelector('.btn-detail-bookmark');
  const chaptersContainer = overlay.querySelector('#detailChaptersList');

  // Background and Cover
  if (item.coverUrl) {
    hero.style.backgroundImage = `url('${item.coverUrl}')`;
    imgContainer.innerHTML = `<img src="${item.coverUrl}" alt="${item.title}">`;
  } else {
    hero.style.background = item.color || 'var(--surface-tertiary)';
    imgContainer.innerHTML = `
      <div class="card-img-placeholder" style="background: ${item.color || 'var(--surface-tertiary)'}; width:100%; height:100%;">
        <i class="fas ${isAnime ? 'fa-video' : 'fa-book'}"></i>
      </div>
    `;
  }

  title.textContent = item.title;

  // Tags
  tagsContainer.innerHTML = `
    <span class="detail-tag" style="background: var(--accent-coral);">${item.type}</span>
    <span class="detail-tag">${item.status}</span>
    <span class="detail-tag"><i class="fas fa-eye"></i> ${item.views.toLocaleString()}</span>
  `;

  // Meta grid
  metaVal1.innerHTML = `<i class="fas fa-star"></i> ${item.rating}`;
  metaVal2.textContent = isAnime ? `${item.episodes} Episode` : `${item.chapters} Chapter`;
  metaVal3.textContent = item.status;

  desc.textContent = item.description;

  // Action buttons
  readBtn.innerHTML = isAnime ? '<i class="fas fa-play"></i> Watch Now' : '<i class="fas fa-book-open"></i> Read Now';
  readBtn.onclick = () => {
    overlay.classList.remove('active');
    showToast(isAnime ? `🎥 Memutar Anime: ${item.title}` : `📖 Membaca Manga: ${item.title}`);
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
      showToast(res.bookmarked ? '✅ Berhasil disimpan ke favorit!' : '💔 Dihapus dari favorit');
      
      // Sync grids
      if (state.activeView === 'saved') renderSavedGrid();
      if (state.activeView === 'explore') renderExploreGrids();
    }
  };

  // Generate mock chapters list
  const count = isAnime ? item.episodes : item.chapters;
  const label = isAnime ? 'Episode' : 'Chapter';
  const prefix = isAnime ? 'Ep' : 'Ch';
  let chaptersHTML = '';
  
  // Show at most last 15 chapters/eps, in descending order
  const maxChapters = Math.min(count, 15);
  for (let i = count; i > count - maxChapters; i--) {
    const pubDate = new Date(new Date(item.dateAdded).getTime() - ((count - i) * 24 * 60 * 60 * 1000)).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
    chaptersHTML += `
      <a href="#" class="chapter-item" onclick="event.preventDefault(); document.getElementById('detailsModal').classList.remove('active'); showToast('📖 Membuka ${label} ${i}: ${item.title}');">
        <div class="chapter-left">
          <span class="chapter-title">${label} ${i}</span>
          <span class="chapter-date">Rilis: ${pubDate}</span>
        </div>
        <div class="chapter-right">
          <i class="fas fa-chevron-right"></i>
        </div>
      </a>
    `;
  }
  chaptersContainer.innerHTML = chaptersHTML || `<p style="font-size:0.85rem;color:var(--text-tertiary);text-align:center;padding:1rem;">Tidak ada ${label.toLowerCase()} yang tersedia.</p>`;

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

// ====== AUTHENTICATION MODALS ======
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
        showToast("👋 Berhasil Log Out!");
        if (state.activeView === 'saved') {
          switchView('explore');
        } else {
          renderExploreGrids();
        }
      }
    });
  } else {
    authBlock.innerHTML = `
      <button class="btn-auth btn-auth-login" onclick="openAuthModal('login')"><i class="fab fa-google"></i> Log In</button>
      <button class="btn-auth btn-auth-signup" onclick="openAuthModal('signup')">Sign Up</button>
    `;
  }
}

// ====== SIMULATED GOOGLE AUTH ======
function triggerGoogleAuth() {
  showToast("🔄 Menyambungkan ke Google Auth...", false);
  const modal = document.getElementById('authModal');
  modal.classList.remove('active');

  // Trigger accounts prompt simulator after 1 second
  setTimeout(() => {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay active';
    overlay.id = 'googlePromptOverlay';
    overlay.style.zIndex = '9999';

    overlay.innerHTML = `
      <div class="modal-container" style="max-width:400px; padding:2rem; text-align:center;">
        <h3 style="font-weight:700; margin-bottom:1.5rem; display:flex; align-items:center; justify-content:center; gap:8px;">
          <i class="fab fa-google" style="color:#ea4335;"></i> Masuk dengan Google
        </h3>
        <p style="font-size:0.85rem; color:var(--text-secondary); margin-bottom:1.8rem;">Pilih akun Google Anda untuk melanjutkan ke Kagami</p>
        
        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:1.5rem;">
          <button class="google-acc-btn" data-email="sulai.gemini@gmail.com" data-name="Sulai Gemini" data-avatar="https://api.dicebear.com/7.x/adventurer/svg?seed=Sulai" style="display:flex; align-items:center; gap:12px; background:var(--surface-secondary); border:1px solid var(--border-color); color:white; padding:10px; border-radius:10px; cursor:pointer; text-align:left;">
            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Sulai" style="width:36px; height:36px; border-radius:50%; background:var(--surface-tertiary);" alt="Sulai">
            <div>
              <strong style="font-size:0.85rem; display:block;">Sulai Gemini</strong>
              <small style="color:var(--text-tertiary); font-size:0.75rem;">sulai.gemini@gmail.com</small>
            </div>
          </button>
          <button class="google-acc-btn" data-email="wibupremium@gmail.com" data-name="Wibu Premium" data-avatar="https://api.dicebear.com/7.x/adventurer/svg?seed=Wibu" style="display:flex; align-items:center; gap:12px; background:var(--surface-secondary); border:1px solid var(--border-color); color:white; padding:10px; border-radius:10px; cursor:pointer; text-align:left;">
            <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=Wibu" style="width:36px; height:36px; border-radius:50%; background:var(--surface-tertiary);" alt="Wibu">
            <div>
              <strong style="font-size:0.85rem; display:block;">Wibu Premium</strong>
              <small style="color:var(--text-tertiary); font-size:0.75rem;">wibupremium@gmail.com</small>
            </div>
          </button>
        </div>
        
        <button id="closeGooglePrompt" style="background:transparent; border:none; color:var(--text-secondary); font-size:0.85rem; font-weight:600; cursor:pointer;">Batal</button>
      </div>
    `;

    document.body.appendChild(overlay);

    // Cancel click
    document.getElementById('closeGooglePrompt').onclick = () => {
      document.body.removeChild(overlay);
    };

    // Account choice clicks
    overlay.querySelectorAll('.google-acc-btn').forEach(btn => {
      btn.onclick = function() {
        const email = this.dataset.email;
        const name = this.dataset.name;
        const avatar = this.dataset.avatar;
        
        const loggedInUser = state.loginGoogle(email, name, avatar);
        updateAuthUI();
        document.body.removeChild(overlay);
        showToast(`🎉 Selamat datang kembali, ${loggedInUser.name}!`);

        // Refresh views
        if (state.activeView === 'saved') renderSavedGrid();
        renderExploreGrids();
      };
    });

  }, 1000);
}

// ====== UPLOAD IMAGES / GRADIENTS ======
let selectedUploadCoverGradient = "linear-gradient(135deg, #1e3a8a, #3b82f6)";
let uploadedCoverDataUrl = null;

function setupUploadPageControls() {
  const fileInput = document.getElementById('uploadFile');
  const coverPreview = document.getElementById('coverPreview');
  const presetGradients = document.querySelectorAll('.gradient-preset');
  
  // File upload cover reader
  if (fileInput) {
    fileInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
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
      fileInput.value = ""; // Reset file selection
      
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
        showToast("⚠️ Silakan log in untuk mengunggah judul!", true);
        openAuthModal('login');
        return;
      }

      const titleVal = document.getElementById('uploadTitle').value.trim();
      const typeVal = document.getElementById('uploadType').value;
      const chaptersVal = document.getElementById('uploadChapters').value;
      const ratingVal = document.getElementById('uploadRating').value;
      const descVal = document.getElementById('uploadDescription').value.trim();

      if (!titleVal || !chaptersVal || !ratingVal) {
        showToast("⚠️ Silakan isi semua field wajib!", true);
        return;
      }

      // Add to state list
      const newItem = state.addTitle(
        titleVal,
        typeVal,
        ratingVal,
        chaptersVal,
        descVal,
        uploadedCoverDataUrl,
        selectedUploadCoverGradient
      );

      showToast(`🎉 Sukses mengunggah ${typeVal}: "${newItem.title}"!`);
      
      // Reset form
      uploadForm.reset();
      uploadedCoverDataUrl = null;
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

  // Category chip filters click binding (Explore Page)
  document.querySelectorAll('.filter-chips .chip').forEach(chip => {
    chip.addEventListener('click', function() {
      const filter = this.dataset.filter;
      state.activeFilter = filter;
      updateFilterChips();
      renderExploreGrids();
      showToast(`Filter: ${filter.toUpperCase()}`);
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
        showToast(`🎉 Selamat datang kembali, ${res.user.name}!`);
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
        showToast(`🎉 Akun berhasil dibuat! Selamat datang, ${name}!`);
        renderExploreGrids();
      } else {
        showToast(`❌ ${res.message}`, true);
      }
    });
  }

  // Google Logins trigger hooks
  document.querySelectorAll('.btn-google-action').forEach(btn => {
    btn.addEventListener('click', triggerGoogleAuth);
  });

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
          showToast('✅ Kagami berhasil dipasang!');
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

  // Initialize display lists
  generateDynamicFavicon();
  updateAuthUI();
  switchView('explore');
  
  setTimeout(() => {
    showToast("📚 Selamat datang di Kagami!");
  }, 1000);
});
