// === SUPABASE CLOUD CONFIGURATION ===
// Paste your Supabase project credentials here to go live on the cloud database!
// If left blank, the system automatically runs on a secure browser LocalStorage database fallback.
const SUPABASE_URL = "https://wgbqrbciydwkwdvxpqrg.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_4GydGLQ74EBJN8WLDPZGSg_jv-uznYr";

let supabaseClient = null;

// Initialize Supabase if keys are provided
if (SUPABASE_URL && SUPABASE_ANON_KEY) {
  try {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log("Supabase Client initialized successfully!");
  } catch (err) {
    console.error("Supabase failed to initialize:", err);
  }
}

// System Passcode for Admin CMS Portal
const CMS_PASSCODE = "nati-cosmos-2026";

// Default First Launch Article (NASA Kepler-186f analysis written in Nati's human voice)
const defaultArticles = [
  {
    id: "kepler-186f",
    title: "My First Attempt at Exoplanet Modeling: Approximating Kepler-186f with High School Physics",
    date: "July 15, 2026",
    category: "Astrophysics",
    excerpt: "Last week, during a quiet calculus class, I started wondering: how do astronomers actually prove a planet in deep space is habitable? I decided to take out my calculator and try using Kepler's laws to model the orbit of Kepler-186f from scratch. Here is what I found!",
    readTime: "6 min read",
    content: `
      <p>Hi everyone! Welcome to my cosmic journal. This is my very first post, and I wanted to share a little project I worked on in my bedroom last weekend. I've always loved looking at the stars, but lately, I've been wanting to go beyond just looking at cool NASA photos. I wanted to see if I could use the actual physics and math I learn in high school to calculate the parameters of an alien world myself.</p>
      
      <p>My target: <strong>Kepler-186f</strong>. It was discovered in 2014 and is famous for being the first Earth-sized exoplanet found in the habitable zone of its star. But how do we actually prove that it has a stable orbit and gets the right amount of heat? Let's break it down using basic classical physics!</p>
      
      <h3>Step 1: Finding the Distance using Kepler's Third Law</h3>
      
      <p>So, the first thing I needed to find was the planet's average distance from its host star (which astronomers call the semi-major axis, represented by the letter \(a\)). Since Kepler-186 is a red dwarf star, it's much smaller and dimmer than our Sun.</p>
      
      <p>From NASA's Kepler database, we know that Kepler-186f completes one full orbit (its "year") in about <strong>129.9 Earth days</strong>. To find the distance, I immediately thought of <strong>Kepler's Third Law of Planetary Motion</strong>. In physics class, we learned Isaac Newton's beautiful formulation of this law:</p>
      
      <div class="math-block">
        <div class="math-label">Newton's Form of Kepler's 3rd Law</div>
        <div class="math-formula">
          \\[T^2 = \\frac{4\\pi^2}{G(M_* + m_p)} a^3\\]
        </div>
      </div>
      
      <p>When I first saw this, I panicked because there are so many massive numbers—the gravitational constant \(G\), the mass of the star \(M_*\), and the mass of the planet \(m_p\). But since planets are tiny compared to stars, we can just pretend the planet's mass is zero (\(M_* + m_p \\approx M_*\)). </p>
      
      <p>Even better, I found an amazing mathematical shortcut! If we measure the orbit period \(T\) in Earth years, the distance \(a\) in Astronomical Units (AU), and the stellar mass \(M_*\) in Solar Masses (where 1.0 is our Sun), all the complicated constants (\(G\) and \(4\\pi^2\)) cancel out beautifully! The math collapses into this simple formula:</p>
      
      <div class="math-block">
        <div class="math-label">The Beautiful Simplified Version</div>
        <div class="math-formula">
          \\[a^3 = M_* \\cdot T^2\\]
        </div>
      </div>
      
      <p>This felt like magic! Let's plug in the actual values. For the star Kepler-186, its mass is about <strong>0.54 times our Sun's mass</strong> (\(M_* = 0.54\)). The orbital period \(T\) is 129.9 days, which I converted to Earth years:</p>
      
      <div class="math-block">
        <div class="math-label">Converting Period to Years</div>
        <div class="math-formula">
          \\[T = \\frac{129.9}{365.25} \\approx 0.3556\\text{ years}\\]
        </div>
      </div>
      
      <p>Now, let's solve for the orbital distance \(a\):</p>
      
      <div class="math-block">
        <div class="math-label">My Calculation</div>
        <div class="math-formula">
          \\[a = \\sqrt[3]{0.54 \\cdot (0.3556)^2} = \\sqrt[3]{0.0683} \\approx 0.409\\text{ AU}\\]
        </div>
      </div>
      
      <p>I got <strong>0.409 AU</strong>! (Which means it's about 41% of the distance from Earth to the Sun).</p>
      
      <p><em>Self-Correction/Note:</em> When I looked up NASA's official verified value, they have the distance listed as about <strong>0.36 AU</strong>. I was a bit confused why my calculation was slightly higher. After doing some reading, I realized my simplified model assumes a perfectly circular orbit, whereas Kepler-186f has a slightly elliptical orbit. Still, I was incredibly excited that a 400-year-old pencil-and-paper equation got me so close to NASA's high-tech satellites!</p>
      
      <h3>Step 2: How Fast is the Planet Moving?</h3>
      
      <p>Now that I had the distance, I wanted to find its average orbital velocity (speed, \(v\)). In physics class, we learned that a planet stays in orbit because the gravitational pull of the star balances the centrifugal force of the orbit. Setting these equal gives us this elegant equation:</p>
      
      <div class="math-block">
        <div class="math-label">Orbital Velocity</div>
        <div class="math-formula">
          \\[v = \\sqrt{\\frac{G M_*}{a}}\\]
        </div>
      </div>
      
      <p>Again, using relative values compared to Earth's average speed (\(29.78\\text{ km/s}\)):</p>
      
      <div class="math-block">
        <div class="math-label">Speed Calculation</div>
        <div class="math-formula">
          \\[v = 29.78 \\cdot \\sqrt{\\frac{M_*}{a}} \\approx 29.78 \\cdot \\sqrt{\\frac{0.54}{0.36}} \\approx 36.5\\text{ km/s}\\]
        </div>
      </div>
      
      <p>Kepler-186f is racing through space at <strong>36.5 kilometers per second</strong>! That is much faster than Earth (which travels at 29.8 km/s). It makes perfect sense—because the planet is orbiting much closer to its host star, it has to move faster to avoid falling into it!</p>
      
      <h3>Step 3: Calculating received energy (Stellar Flux)</h3>
      
      <p>To determine if the planet is warm enough for liquid water, we need to know how much light energy (flux, \(F\)) it receives. This follows the <strong>inverse-square law</strong>. Comparing it to Earth's flux (represented as 1.0):</p>
      
      <div class="math-block">
        <div class="math-label">Relative Flux Formula</div>
        <div class="math-formula">
          \\[\\frac{F}{F_\\oplus} = \\frac{L_* / L_\\odot}{(a / a_\\oplus)^2}\\]
        </div>
      </div>
      
      <p>Since Kepler-186 is a cool red dwarf, its total light output (luminosity, \(L_*\)) is only <strong>5.5% of our Sun's</strong> (\(L_* = 0.055\)). Plugging in the numbers:</p>
      
      <div class="math-block">
        <div class="math-label">Light Intensity Calculation</div>
        <div class="math-formula">
          \\[\\frac{F}{F_\\oplus} = \\frac{0.055}{(0.36)^2} \\approx 0.42\\]
        </div>
      </div>
      
      <p>This is the most mind-blowing part: Kepler-186f only gets about <strong>42%</strong> of the light energy that Earth gets. It must be a very dim, twilight world! However, if it has a nice thick atmosphere (like a cozy greenhouse blanket), 42% is actually plenty of energy to keep the planet warm and host liquid oceans.</p>
      
      <h3>What this taught me</h3>
      
      <p>Doing these calculations myself made exoplanets feel real, rather than just abstract drawings on the internet. It showed me that math and physics aren't just for tests—they are the keys we use to explore worlds we can't even see with our own eyes. I can't wait to model more star systems soon! Let me know what you think in the comments, and stay tuned for my next entry!</p>
    `
  }
];

// Active database article state
let articles = [];

// Load articles from Supabase with LocalStorage fallback
async function loadArticles() {
  if (supabaseClient) {
    try {
      // Fetch from Supabase Cloud DB
      let { data, error } = await supabaseClient
        .from('articles')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      
      // If database is empty, auto-migrate the default article
      if (!data || data.length === 0) {
        console.log("Database empty. Performing initial migration...");
        const initialMigrateObj = {
          id: defaultArticles[0].id,
          title: defaultArticles[0].title,
          date: defaultArticles[0].date,
          category: defaultArticles[0].category,
          excerpt: defaultArticles[0].excerpt,
          read_time: defaultArticles[0].readTime,
          content: defaultArticles[0].content
        };
        const { error: insertError } = await supabaseClient
          .from('articles')
          .insert([initialMigrateObj]);
        
        if (insertError) {
          console.error("Migration insert failed:", insertError);
        } else {
          console.log("Migration successful!");
          return loadArticles(); // Reload
        }
      } else {
        // Map database fields to JavaScript properties
        articles = data.map(row => ({
          id: row.id,
          title: row.title,
          date: row.date,
          category: row.category,
          excerpt: row.excerpt,
          readTime: row.read_time,
          content: row.content
        }));
      }
    } catch (err) {
      console.error("Failed to fetch from Supabase Cloud. Falling back to local storage...", err);
      loadArticlesLocal();
    }
  } else {
    // If no client, read from localStorage
    loadArticlesLocal();
  }

  // Render lists
  renderArticles();
  renderCMSArticleList();
}

function loadArticlesLocal() {
  const localData = localStorage.getItem('nati_space_articles');
  if (localData) {
    articles = JSON.parse(localData);
  } else {
    articles = [...defaultArticles];
    localStorage.setItem('nati_space_articles', JSON.stringify(articles));
  }
}

// Secret backdoor Admin menu injection
function checkBackdoorAdmin() {
  const urlParams = new URLSearchParams(window.location.search);
  const isBackdoorActive = urlParams.get('admin') === 'true';
  const isAuthorized = sessionStorage.getItem('cms_authorized') === 'true';

  if (isBackdoorActive || isAuthorized) {
    const navList = document.getElementById('nav-list');
    const adminTab = document.getElementById('admin-tab');

    if (navList && adminTab && !document.querySelector('[data-tab="admin"]')) {
      // 1. Reveal Admin DOM tab structure
      adminTab.style.display = 'block';

      // 2. Inject secret Admin button to navbar
      const li = document.createElement('li');
      li.innerHTML = `<button class="nav-link" data-tab="admin">Admin</button>`;
      navList.appendChild(li);

      // 3. Re-initialize tab listeners
      setupTabs();
      
      console.log("Backdoor Admin Portal activated successfully.");
    }
  }
}

// App Navigation & Router
function setupTabs() {
  const navButtons = document.querySelectorAll('.nav-link, .nav-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  navButtons.forEach(btn => {
    // Prevent duplicate event handlers
    btn.removeAttribute('listener');
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
  });

  const updatedNavButtons = document.querySelectorAll('.nav-link, .nav-btn');
  updatedNavButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      // Update active nav button
      updatedNavButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update active tab content
      tabContents.forEach(tab => {
        tab.classList.remove('active');
        if (tab.id === `${tabId}-tab`) {
          tab.classList.add('active');
        }
      });

      // Special tab active behaviors
      if (tabId === 'articles') {
        showArticlesFeed();
      } else if (tabId === 'admin') {
        checkAuth();
      }
    });
  });
}

// Show articles feed, hide full article view
function showArticlesFeed() {
  document.getElementById('articles-feed-view').style.display = 'block';
  document.getElementById('article-full-view').classList.remove('active');
}

// Render Articles Feed
function renderArticles() {
  const feed = document.getElementById('articles-feed-view');
  if (!feed) return;

  feed.innerHTML = `
    <div class="articles-feed">
      ${articles.map(article => `
        <article class="article-item" data-id="${article.id}">
          <div class="article-item-meta">
            <span>${article.date}</span> &bull; 
            <span>${article.category}</span> &bull; 
            <span>${article.readTime}</span>
          </div>
          <h2 class="article-item-title">
            <a href="#" onclick="return false;">${article.title}</a>
          </h2>
          <p class="article-item-excerpt">${article.excerpt}</p>
          <a href="#" class="read-link" onclick="return false;">Read full entry &rarr;</a>
        </article>
      `).join('')}
    </div>
  `;

  // Attach click events
  const cards = feed.querySelectorAll('.article-item');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      viewArticle(id);
    });
  });
}

// View Full Article
function viewArticle(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;

  const feedView = document.getElementById('articles-feed-view');
  const fullView = document.getElementById('article-full-view');

  feedView.style.display = 'none';
  fullView.classList.add('active');

  fullView.innerHTML = `
    <button class="back-btn" id="article-back-btn">&larr; Back to all entries</button>
    <article>
      <div class="full-post-meta">
        <span>Published: ${article.date}</span> &bull; 
        <span>Category: ${article.category}</span> &bull; 
        <span>${article.readTime}</span>
      </div>
      <h1 class="full-post-title">${article.title}</h1>
      <div class="article-content">${article.content}</div>
    </article>
  `;

  document.getElementById('article-back-btn').addEventListener('click', () => {
    showArticlesFeed();
  });

  // Scroll smoothly to top of reader
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-run MathJax to render equations beautifully
  if (window.MathJax) {
    window.MathJax.typesetPromise();
  }
}

// === ADMIN & DATABASE CRUD SYSTEM ===

function checkAuth() {
  const isAuth = sessionStorage.getItem('cms_authorized') === 'true';
  const gate = document.getElementById('admin-auth-gate');
  const dashboard = document.getElementById('admin-dashboard-view');
  const err = document.getElementById('auth-error-msg');

  if (isAuth) {
    gate.style.display = 'none';
    dashboard.style.display = 'block';
    renderCMSArticleList();
  } else {
    gate.style.display = 'block';
    dashboard.style.display = 'none';
    err.style.display = 'none';
  }
}

function setupAdminAuth() {
  const form = document.getElementById('admin-login-form');
  const input = document.getElementById('admin-password-input');
  const err = document.getElementById('auth-error-msg');
  const logoutBtn = document.getElementById('admin-logout-btn');

  if (form) {
    form.addEventListener('submit', () => {
      if (input.value === CMS_PASSCODE) {
        sessionStorage.setItem('cms_authorized', 'true');
        input.value = "";
        checkAuth();
      } else {
        err.style.display = 'block';
        input.value = "";
      }
    });
  }

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sessionStorage.removeItem('cms_authorized');
      checkAuth();
      
      // Hide admin tab from nav menu on logout to reset backdoor
      setTimeout(() => {
        window.location.href = window.location.pathname; // Clean redirect to wipe url param
      }, 500);
    });
  }
}

// Insert Text Templates into CMS Content TextArea (Rich helper)
window.insertTemplate = function(type) {
  const textarea = document.getElementById('cms-content');
  if (!textarea) return;

  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const originalVal = textarea.value;

  let textToInsert = "";
  if (type === 'p') {
    textToInsert = "<p>Your paragraph text here...</p>\n";
  } else if (type === 'h3') {
    textToInsert = "<h3>Sub-heading title</h3>\n";
  } else if (type === 'math') {
    textToInsert = `
<div class="math-block">
  <div class="math-label">Universal Gravitation</div>
  <div class="math-formula">
    \\\\[F_g = G \\\\frac{m_1 m_2}{r^2}\\\\]
  </div>
</div>\n`;
  }

  textarea.value = originalVal.substring(0, start) + textToInsert + originalVal.substring(end);
  textarea.focus();
  textarea.selectionStart = start + textToInsert.length;
  textarea.selectionEnd = start + textToInsert.length;
};

// Render mini-list of articles in CMS side-panel with Delete buttons
function renderCMSArticleList() {
  const list = document.getElementById('cms-article-list');
  if (!list) return;

  if (articles.length === 0) {
    list.innerHTML = `<p style="color: #888888; font-size:0.85rem; text-align:center;">No publications found.</p>`;
    return;
  }

  list.innerHTML = articles.map(article => `
    <div class="cms-article-item">
      <div>
        <div class="cms-article-item-title">${article.title}</div>
        <div class="cms-article-item-date">${article.date} &bull; ${article.category}</div>
      </div>
      <button class="cms-delete-btn" data-id="${article.id}">Delete</button>
    </div>
  `).join('');

  // Attach delete handlers
  list.querySelectorAll('.cms-delete-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.getAttribute('data-id');
      if (confirm(`Are you sure you want to delete "${id}"? This will remove it from the database.`)) {
        await deleteArticleRecord(id);
      }
    });
  });
}

// Publish/Insert Article Record from Raw Memo or Advanced Form
async function setupCMSPublishForm() {
  const form = document.getElementById('cms-publish-form');
  if (!form) return;

  const rawNoteInput = document.getElementById('cms-raw-note');
  const fileInput = document.getElementById('memo-file-input');
  const dropzone = document.getElementById('memo-dropzone');
  const previewBar = document.getElementById('memo-preview-bar');
  const titleDisplay = document.getElementById('detected-title-display');
  const readTimeDisplay = document.getElementById('detected-readtime-display');

  const titleInput = document.getElementById('cms-title');
  const idInput = document.getElementById('cms-id');
  const categoryInput = document.getElementById('cms-category');
  const readTimeInput = document.getElementById('cms-read-time');
  const excerptInput = document.getElementById('cms-excerpt');

  // Helper: Parse memo text into structured parts
  function parseMemoText(text) {
    if (!text || !text.trim()) {
      if (previewBar) previewBar.style.display = 'none';
      return;
    }

    const lines = text.split('\n');
    let title = "";
    let bodyStartIndex = 0;

    // Find first non-empty line as title
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim()) {
        title = lines[i].trim().replace(/^#+\s*/, ''); // strip leading # if markdown
        bodyStartIndex = i + 1;
        break;
      }
    }

    const bodyLines = lines.slice(bodyStartIndex);
    const bodyText = bodyLines.join('\n').trim();

    // Auto-calculate read time (roughly 180 words or 350 chars per min)
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.round(wordCount / 160));
    const readTime = `${minutes} min`;

    // Auto-generate excerpt (first 140 chars of body)
    const excerpt = bodyText.replace(/[\n\r]+/g, ' ').substring(0, 140) + (bodyText.length > 140 ? '...' : '');

    // Auto-generate slug
    let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    if (!slug) {
      slug = 'note-' + Date.now().toString(36);
    }

    // Update UI & Hidden Fields
    if (titleInput && !titleInput.dataset.edited) titleInput.value = title || "My Space Note";
    if (idInput && !idInput.dataset.edited) idInput.value = slug;
    if (readTimeInput && !readTimeInput.dataset.edited) readTimeInput.value = readTime;
    if (excerptInput && !excerptInput.dataset.edited) excerptInput.value = excerpt || "A study note from Nati's Space Lab.";
    if (categoryInput && !categoryInput.value) categoryInput.value = "Space Notes";

    if (titleDisplay) titleDisplay.textContent = title || "(1行目を入力してください)";
    if (readTimeDisplay) readTimeDisplay.textContent = readTime;
    if (previewBar) previewBar.style.display = 'block';
  }

  // Handle Raw Text Typing / Pasting
  if (rawNoteInput) {
    rawNoteInput.addEventListener('input', () => {
      parseMemoText(rawNoteInput.value);
    });
  }

  // Handle File Upload (.txt)
  if (fileInput) {
    fileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        rawNoteInput.value = event.target.result;
        parseMemoText(rawNoteInput.value);
      };
      reader.readAsText(file);
    });
  }

  // Drag and drop onto textarea or dropzone
  [rawNoteInput, dropzone].forEach(el => {
    if (!el) return;
    el.addEventListener('dragover', (e) => {
      e.preventDefault();
      el.style.borderColor = '#111';
    });
    el.addEventListener('dragleave', (e) => {
      e.preventDefault();
      el.style.borderColor = '';
    });
    el.addEventListener('drop', (e) => {
      e.preventDefault();
      el.style.borderColor = '';
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        const file = e.dataTransfer.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          rawNoteInput.value = event.target.result;
          parseMemoText(rawNoteInput.value);
        };
        reader.readAsText(file);
      }
    });
  });

  // Track if user manually edited advanced fields
  [titleInput, idInput, readTimeInput, excerptInput].forEach(inp => {
    if (inp) inp.addEventListener('input', () => { inp.dataset.edited = "true"; });
  });

  // Format raw text to clean HTML paragraphs
  function formatRawToHtml(text) {
    // If it already has HTML tags like <p> or <h3>, keep it
    if (/<p>|<h[1-6]>|<div/i.test(text)) {
      return text;
    }

    // Split text into lines, exclude the first title line
    const lines = text.split('\n');
    let bodyStartIndex = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim()) {
        bodyStartIndex = i + 1;
        break;
      }
    }

    const bodyText = lines.slice(bodyStartIndex).join('\n').trim();
    if (!bodyText) {
      return `<p>${escapeHtml(text)}</p>`;
    }

    // Split by double newlines into paragraphs
    const paragraphs = bodyText.split(/\n\s*\n/);
    return paragraphs.map(p => {
      const cleanP = p.trim();
      // If it's a math block, preserve as is
      if (cleanP.startsWith('\\[') || cleanP.startsWith('$$') || cleanP.startsWith('<div class="math-block"')) {
        return cleanP;
      }
      return `<p>${escapeHtml(cleanP).replace(/\n/g, '<br>')}</p>`;
    }).join('\n');
  }

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  // Handle Form Submit
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const rawNote = rawNoteInput.value.trim();
    if (!rawNote && !titleInput.value) {
      alert("メモ帳の内容を貼り付けるか、ファイルを選択してください！");
      return;
    }

    // Parse memo if not already parsed
    parseMemoText(rawNote);

    const title = titleInput.value || "Untitled Space Note";
    const id = idInput.value || ('note-' + Date.now().toString(36));
    const category = categoryInput.value || "Space Notes";
    const readTime = readTimeInput.value || "2 min";
    const excerpt = excerptInput.value || "A study note from Nati's Space Lab.";
    
    // Auto format content to HTML paragraphs
    const content = formatRawToHtml(rawNote);

    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const dateFormatted = new Date().toLocaleDateString('en-US', options);

    const newArticle = {
      id,
      title,
      category,
      readTime,
      excerpt,
      content,
      date: dateFormatted
    };

    // Save record
    await saveArticleRecord(newArticle);

    // Reset Form
    form.reset();
    [titleInput, idInput, readTimeInput, excerptInput].forEach(inp => {
      if (inp) inp.removeAttribute('data-edited');
    });
    if (previewBar) previewBar.style.display = 'none';

    alert("🎉 記事をブログに公開しました！");
    
    // Switch back to articles tab to view it
    document.querySelector('[data-tab="articles"]').click();
  });
}

// Core Database Save Logic (Supabase Upsert or localStorage Fallback)
async function saveArticleRecord(article) {
  if (supabaseClient) {
    try {
      const dbRow = {
        id: article.id,
        title: article.title,
        date: article.date,
        category: article.category,
        excerpt: article.excerpt,
        read_time: article.readTime,
        content: article.content
      };

      const { error } = await supabaseClient
        .from('articles')
        .upsert([dbRow], { onConflict: 'id' });

      if (error) throw error;
      console.log("Upserted successfully to Supabase cloud!");
    } catch (err) {
      console.error("Cloud database write error:", err);
      alert("Error saving to cloud database. Writing locally to browser fallback.");
      saveArticleLocal(article);
    }
  } else {
    saveArticleLocal(article);
  }

  await loadArticles();
}

function saveArticleLocal(article) {
  const index = articles.findIndex(a => a.id === article.id);
  if (index !== -1) {
    articles[index] = article;
  } else {
    articles.unshift(article);
  }
  localStorage.setItem('nati_space_articles', JSON.stringify(articles));
}

// Core Database Delete Logic (Supabase Delete or localStorage Fallback)
async function deleteArticleRecord(id) {
  if (supabaseClient) {
    try {
      const { error } = await supabaseClient
        .from('articles')
        .delete()
        .eq('id', id);

      if (error) throw error;
      console.log("Deleted record successfully from Supabase!");
    } catch (err) {
      console.error("Cloud database delete error:", err);
      alert("Error deleting from cloud database. Deleting from browser local fallback.");
      deleteArticleLocal(id);
    }
  } else {
    deleteArticleLocal(id);
  }

  await loadArticles();
}

function deleteArticleLocal(id) {
  articles = articles.filter(a => a.id !== id);
  localStorage.setItem('nati_space_articles', JSON.stringify(articles));
}

// Bootstrapping
window.addEventListener('DOMContentLoaded', async () => {
  setupTabs();
  
  // Set up Secret Backdoor Admin
  checkBackdoorAdmin();
  setupAdminAuth();
  await setupCMSPublishForm();
  
  // Initial load
  await loadArticles();
});
