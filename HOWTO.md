# isaac-sims.com — How to update your site

## File structure
```
Website/
├── index.html          ← Home page
├── about.html          ← About page (edit bio text directly in this file)
├── explore.html        ← Explore grid page
├── explore-item.html   ← Explore item detail (auto-populated)
├── project.html        ← Project detail (auto-populated)
├── store.html          ← Store page
├── css/styles.css      ← All visual styling
├── js/
│   ├── data.js         ← ★ EDIT THIS to add/update projects & products
│   └── main.js         ← Site logic (don't edit unless confident)
└── images/
    ├── projects/       ← Put project images here
    ├── explore/        ← Put explore images here
    ├── store/          ← Put store product images here
    ├── about/          ← Put your portrait photo here
    └── sketch.png      ← The home page sketch illustration
```

---

## How to add a new project

1. Open `js/data.js`
2. Copy the first project block (starting with `{` and ending with `},`)
3. Paste it at the very top of the `projects` array (before the first item)
4. Update all the fields — especially `id`, `number`, `title`, `year`, `category`
5. Add your image to `images/projects/` and update `previewImage` and `images`
6. Save the file — done!

---

## How to add images

- Project images → `images/projects/your-image.jpg`
- Explore images → `images/explore/your-image.jpg`
- Store product images → `images/store/your-image.jpg`
- Your portrait → `images/about/portrait.jpg` (then update about.html)
- Home sketch → `images/sketch.png` (then uncomment the `<img>` tag in index.html)

Images can be JPG or PNG. Keep them under 2MB each for fast loading.

---

## How to update the About page

Open `about.html` and edit the text directly inside the `<p>` tags in the bio section, and the contact details below.

To add your portrait photo:
1. Put your photo in `images/about/portrait.jpg`
2. In `about.html`, find the `about-photo-placeholder` div and replace it with:
   `<img class="about-photo" src="images/about/portrait.jpg" alt="Isaac Sims">`

---

## How to activate the store (Snipcart setup)

1. Go to https://snipcart.com → create a free account
2. In your dashboard → Account → API Keys → copy your **Public API Key**
3. Open `store.html`, find `YOUR_PUBLIC_API_KEY` and replace it with your key
4. In Snipcart dashboard → Account → Payment → connect your Stripe account
5. Stripe will deposit money directly to your bank account

Products are managed in `js/data.js` under the `storeProducts` array.

---

## How to deploy to Netlify (free hosting)

1. Go to https://github.com and create a free account
2. Create a new repository called `website`
3. Upload all these files to that repository
4. Go to https://netlify.com and sign up (free)
5. Click "Add new site" → "Import from Git" → connect your GitHub → select your repo
6. Click Deploy — your site will be live in ~1 minute at a `.netlify.app` URL

### Connecting your domain (isaac-sims.com)

1. In Netlify: Site settings → Domain management → Add custom domain → type `isaac-sims.com`
2. Netlify will show you 4 nameservers (like `dns1.p01.nsone.net`)
3. Log in to wherever your domain is registered
4. Find DNS / Nameserver settings → replace existing nameservers with Netlify's 4
5. Wait up to 48 hours for it to propagate (usually much faster)
6. SSL/HTTPS is automatic and free via Netlify

---

## Updating the site after it's live

1. Edit your files locally
2. Go to GitHub → your repository → drag and drop the changed files
3. Netlify automatically redeploys within ~30 seconds
