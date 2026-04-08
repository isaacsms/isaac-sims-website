// ============================================================
// MAIN JS — Site Interactivity
// ============================================================

/* global projects, exploreItems, storeProducts */

// --- Utilities ---
function getParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}
function getProject(id)     { return projects.find(p => p.id === id); }
function getExploreItem(id) { return exploreItems.find(e => e.id === id); }


// ============================================================
// HOME PAGE
// Hover over a project → right panel shows its image,
// upper-left popup shows title (serif) + brief description.
// Mobile: tap title → go to project page (no hover state).
// ============================================================

function initHomePage() {
  const list    = document.getElementById('project-list');
  const right   = document.getElementById('home-right');
  const popup   = document.getElementById('project-popup');
  if (!list || !right) return;

  // --- Build list items ---
  projects.forEach(project => {
    const li = document.createElement('li');
    li.className = 'project-list-item';
    li.dataset.id = project.id;

    li.innerHTML = `
      <span class="proj-title">${project.title}</span>
      <span class="proj-year">${project.year}<sup>(${project.number})</sup></span>
      <span class="proj-category">${project.category}</span>
    `;

    // Desktop: hover shows preview + popup
    li.addEventListener('mouseenter', () => {
      showHomePreview(project);
      if (popup) showPopup(popup, project);
    });

    // Clicking always navigates to project page
    li.addEventListener('click', () => {
      window.location.href = `project.html?id=${project.id}`;
    });

    list.appendChild(li);
  });

  // Hide popup when mouse leaves the left panel
  const leftPanel = document.querySelector('.home-left');
  if (leftPanel && popup) {
    leftPanel.addEventListener('mouseleave', () => {
      popup.classList.remove('visible');
      // Return to default (first/most recent project)
      if (projects.length > 0) showHomePreview(projects[0]);
    });
  }

  // --- Build one <img> per project in the right panel ---
  // All are stacked absolutely; only the active one is visible.
  projects.forEach(project => {
    const img = document.createElement('img');
    img.className = 'home-preview-image';
    img.dataset.id = project.id;
    img.alt = project.title;

    if (project.previewImage) {
      img.src = project.previewImage;
      img.onerror = () => {
        // If the image file doesn't exist, replace with placeholder
        img.style.display = 'none';
        const ph = document.createElement('div');
        ph.className = 'home-right-placeholder';
        ph.dataset.id = project.id;
        right.appendChild(ph);
      };
    }

    right.appendChild(img);
  });

  // Default: show most recent project (first in array)
  if (projects.length > 0) {
    showHomePreview(projects[0]);
  }
}

function showHomePreview(project) {
  document.querySelectorAll('.home-preview-image').forEach(img => {
    img.classList.toggle('visible', img.dataset.id === project.id);
  });
  document.querySelectorAll('.home-right-placeholder').forEach(ph => {
    ph.style.display = ph.dataset.id === project.id ? 'block' : 'none';
  });
}

function showPopup(popup, project) {
  popup.querySelector('.popup-title').textContent = project.title;
  popup.querySelector('.popup-desc').textContent  = project.description;
  popup.classList.add('visible');
}


// ============================================================
// PROJECT DETAIL PAGE
// Left panel sticks, right panel (images) scrolls.
// To add images: update the project's `images` array in data.js
// ============================================================

function initProjectPage() {
  const container = document.getElementById('project-container');
  if (!container) return;

  const id      = getParam('id');
  const project = id ? getProject(id) : null;

  if (!project) {
    container.innerHTML = '<p style="padding:60px 22px;font-size:13px;color:#999;">Project not found.</p>';
    return;
  }

  document.title = `${project.title} — isaac-sims.com`;

  // Build stacked images for the right panel
  let imagesHTML = '';
  if (project.images && project.images.length > 0) {
    imagesHTML = project.images.map(src =>
      `<img src="${src}" alt="${project.title}"
        onerror="this.outerHTML='<div class=\\"project-image-placeholder\\">Image coming soon</div>'">`
    ).join('');
  } else {
    // Placeholder until real images are added
    imagesHTML = `
      <div class="project-image-placeholder">Add images to images/projects/ and update data.js</div>
      <div class="project-image-placeholder"></div>
    `;
  }

  // Build meta block
  let metaHTML = `<p><sup class="meta-number">${project.number}</sup>`;
  if (project.for)         metaHTML += `For: ${project.for}<br>`;
  metaHTML += `Type: ${project.type || project.category}<br>`;
  metaHTML += `Year: ${project.year_detail || project.year}</p>`;
  if (project.about)       metaHTML += `<p class="about-text">${project.about}</p>`;
  if (project.contribution) metaHTML += `<p class="contribution-text">My contribution to this project included;<br>${project.contribution}</p>`;

  container.innerHTML = `
    <div class="project-layout">
      <div class="project-left">
        <a href="index.html" class="back-link">← back</a>
        <h1 class="project-title">${project.title} (${project.number})</h1>
        <p class="project-short-desc">${project.description}</p>
        <div class="project-meta">${metaHTML}</div>
      </div>
      <div class="project-right">
        ${imagesHTML}
      </div>
    </div>
  `;
}


// ============================================================
// EXPLORE PAGE
// Grid with: images + text codes + random empty spacers.
// Items fade in on page load.
// Category tabs filter visible items.
// ============================================================

function initExplorePage() {
  const grid = document.getElementById('explore-grid');
  const tabs = document.querySelectorAll('.explore-tab');
  if (!grid) return;

  // --- Build grid with randomly-placed spacers ---
  // Shuffle the items slightly so the grid feels less ordered
  const shuffled = [...exploreItems]; // keep original order for now
  // (If you want random order, uncomment the next line:)
  // shuffled.sort(() => Math.random() - 0.5);

  shuffled.forEach((item, index) => {
    // Randomly insert a spacer before some items (25% chance, varies height)
    if (Math.random() < 0.28 && index > 0) {
      const spacer = document.createElement('div');
      spacer.className = 'explore-spacer';
      const heights = [40, 70, 100, 130, 55, 85];
      spacer.style.height = heights[Math.floor(Math.random() * heights.length)] + 'px';
      spacer.dataset.category = item.category; // spacers follow same filter
      grid.appendChild(spacer);
    }

    // Build the item element
    const el = document.createElement('a');
    el.className = 'explore-item';
    el.dataset.category = item.category;
    el.href = `explore-item.html?id=${item.id}`;

    if (item.type === 'image') {
      el.classList.add('explore-item-image');
      el.innerHTML = item.image
        ? `<img src="${item.image}" alt="${item.caption || ''}"
            onerror="this.parentElement.innerHTML='<div class=\\"img-placeholder\\" style=\\"aspect-ratio:1\\"></div>'">`
        : `<div class="img-placeholder" style="aspect-ratio:1"></div>`;
    } else {
      el.innerHTML = `<div class="explore-item-text">${item.label}</div>`;
    }

    grid.appendChild(el);

    // Staggered fade-in: each item animates in with a small delay
    const delay = index * 55; // ms between each item appearing
    setTimeout(() => {
      el.classList.add('faded-in');
    }, delay);
  });

  // --- Category filter tabs ---
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Show/hide items and their associated spacers
      document.querySelectorAll('.explore-item, .explore-spacer').forEach(el => {
        const match = category === 'all' || el.dataset.category === category;
        el.classList.toggle('hidden', !match);
      });
    });
  });
}


// ============================================================
// EXPLORE ITEM DETAIL PAGE
// Shows one explore item with back/forward navigation.
// ============================================================

function initExploreItemPage() {
  const container = document.getElementById('explore-item-container');
  if (!container) return;

  const id   = getParam('id');
  const item = id ? getExploreItem(id) : null;

  if (!item) {
    container.innerHTML = '<p style="padding:60px 22px;font-size:13px;color:#999;">Item not found.</p>';
    return;
  }

  // Back / forward navigation
  const currentIndex = exploreItems.indexOf(item);
  const prevItem = currentIndex > 0 ? exploreItems[currentIndex - 1] : null;
  const nextItem = currentIndex < exploreItems.length - 1 ? exploreItems[currentIndex + 1] : null;

  const backBtn = document.getElementById('explore-back');
  const fwdBtn  = document.getElementById('explore-forward');

  if (backBtn) {
    if (prevItem) {
      backBtn.addEventListener('click', () => { window.location.href = `explore-item.html?id=${prevItem.id}`; });
    } else {
      backBtn.style.visibility = 'hidden';
    }
  }

  if (fwdBtn) {
    if (nextItem) {
      fwdBtn.addEventListener('click', () => { window.location.href = `explore-item.html?id=${nextItem.id}`; });
    } else {
      fwdBtn.style.visibility = 'hidden';
    }
  }

  // Render content
  const imageHTML = item.image
    ? `<img src="${item.image}" alt="${item.caption || item.label || ''}"
        onerror="this.outerHTML='<div class=\\"img-placeholder\\"></div>'">`
    : `<div class="img-placeholder"></div>`;

  container.innerHTML = `
    <div class="explore-item-layout">
      <div class="explore-item-left">
        <div class="explore-item-caption">
          ${item.caption ? item.caption + '<br>' : ''}
          ${item.location || ''}
        </div>
        ${item.date  ? `<div class="explore-item-date">${item.date}</div>`  : ''}
        ${item.label ? `<div class="explore-item-date" style="margin-top:8px">${item.label}</div>` : ''}
      </div>
      <div class="explore-item-right">${imageHTML}</div>
    </div>
  `;
}


// ============================================================
// STORE PAGE
// Products loaded from data.js — edit storeProducts there.
// Snipcart handles cart + checkout (set your API key in store.html).
// ============================================================

function initStorePage() {
  const grid = document.getElementById('store-grid');
  if (!grid) return;

  storeProducts.forEach(product => {
    const price = `$${product.price.toFixed(2)} NZD`;

    const el = document.createElement('div');
    el.className = 'store-item';

    const imageHTML = product.image
      ? `<img class="store-item-image" src="${product.image}" alt="${product.name}"
          onerror="this.outerHTML='<div class=\\"store-item-image-placeholder\\"></div>'">`
      : `<div class="store-item-image-placeholder"></div>`;

    const buyHTML = product.available
      ? `<button class="snipcart-add-item"
            data-item-id="${product.id}"
            data-item-price="${product.price}"
            data-item-url="/store.html"
            data-item-description="${product.description}"
            data-item-image="${product.image || ''}"
            data-item-name="${product.name}">
            Add to cart
          </button>`
      : `<span class="sold-out">Sold out</span>`;

    el.innerHTML = `
      ${imageHTML}
      <div class="store-item-name">${product.name}</div>
      <div class="store-item-description">${product.description}</div>
      <div class="store-item-price">${price}</div>
      ${buyHTML}
    `;

    grid.appendChild(el);
  });
}


// ============================================================
// INIT — detect which page we're on and run the right function
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  if (body.classList.contains('page-home'))         initHomePage();
  if (body.classList.contains('page-project'))      initProjectPage();
  if (body.classList.contains('page-explore'))      initExplorePage();
  if (body.classList.contains('page-explore-item')) initExploreItemPage();
  if (body.classList.contains('page-store'))        initStorePage();
});
