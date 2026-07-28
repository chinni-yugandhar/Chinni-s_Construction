# Chinni's Construction — Professional Construction Company Website

A premium, fully responsive website for **Chinni's Construction**, a contractor business offering home construction, mason work, centering, ironwork, and construction material rentals. Built with Flask, Bootstrap 5, and modern frontend technologies.

---

## Folder Structure

```
chinnis-construction/
├── app.py                      # Flask application (routes + enquiry API)
├── requirements.txt            # Python dependencies
├── README.md                   # This file
├── .gitignore
├── templates/                  # Jinja2 HTML templates
│   ├── base.html               # Shared layout (navbar + footer + scripts)
│   ├── home.html               # Home page
│   ├── about.html              # About page
│   ├── services.html           # Services page
│   ├── projects.html           # Projects gallery
│   ├── rent_materials.html     # Rent Materials page
│   ├── contact.html            # Contact page with form
│   └── enquiry.html            # Enquiry / Get Quote page
└── static/                     # Static assets served by Flask
    ├── css/
    │   └── style.css           # All custom styling
    ├── js/
    │   ├── main.js             # Navbar, counters, scroll effects
    │   ├── contact.js          # Contact & enquiry form handler (Web3Forms)
    │   └── projects.js         # Project filter + lightbox
    └── images/                 # (Place your own business photos here)
```

---

## Pages

| Page | Route | Purpose |
|------|-------|---------|
| Home | `/` | Hero, services preview, projects, testimonials, FAQ |
| About | `/about` | Company story, values, experience stats |
| Services | `/services` | 6 service cards + process steps |
| Projects | `/projects` | Filterable gallery with lightbox |
| Rent Materials | `/rent-materials` | 6 rental item cards |
| Contact | `/contact` | Contact info + form + WhatsApp/Call/Email buttons |
| Enquiry | `/enquiry` | Detailed project enquiry form |

---

## Services

1. **1 BHK Construction**
2. **2 BHK Construction**
3. **3 BHK Construction**
4. **Compound Wall**
5. **Round Tank**
6. **All Mason Work**

## Rent Materials

1. Centering Sticks
2. Iron Sheets
3. Boxes
4. Gedanchies
5. Millars
6. Other Mason-Related Items

---

## Contact Form Setup (Free — Web3Forms)

This project uses [Web3Forms](https://web3forms.com) — a free, no-backend form service that sends form submissions to your email.

### Setup Steps

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email address and get your free **Access Key**
3. Set it as an environment variable:

   ```bash
   export WEB3FORMS_ACCESS_KEY="your-access-key-here"
   ```

   Or edit `app.py` and replace the placeholder:

   ```python
   WEB3FORMS_ACCESS_KEY = os.environ.get("WEB3FORMS_ACCESS_KEY", "YOUR_ACCESS_KEY")
   ```

4. All form submissions (Contact + Enquiry) will be delivered to your email automatically.

> **Alternative free options:** EmailJS or Netlify Forms also work. The form code is in `static/js/contact.js` and can be adapted.

---

## Local Development

### Prerequisites

- Python 3.9+
- pip

### Run locally

```bash
# 1. Create a virtual environment
python -m venv venv
source venv/bin/activate        # On Windows: venv\Scripts\activate

# 2. Install dependencies
pip install -r requirements.txt

# 3. (Optional) Set your Web3Forms key
export WEB3FORMS_ACCESS_KEY="your-key"

# 4. Run the app
python app.py
```

Visit **http://localhost:5000** in your browser.

---

## Customization

### Change business contact details

Edit `app.py` → `inject_globals()`:

```python
"business_name": "Chinni's Construction",
"business_phone": "+91 98765 43210",
"business_phone_raw": "919876543210",
"business_email": "chinniconstruction@gmail.com",
"business_location": "Hyderabad, Telangana, India",
```

### Change footer team photos

Edit `templates/base.html` → footer section. Replace the `src` URLs of the three `<img>` tags with your own photos. Place images in `static/images/` and reference as:

```html
<img src="{{ url_for('static', filename='images/supervisor1.jpg') }}" alt="Supervisor 1">
```

### Change colors

Edit `static/css/style.css` → `:root` variables at the top.

### Add real project photos

Replace the Pexels placeholder image URLs in `templates/projects.html` with your own photos, or add files to `static/images/` and reference them with `url_for('static', ...)`.

---

## Features

- Fully responsive, mobile-first design
- Sticky navbar with smooth scroll
- Animated hero with statistics counters
- Service cards with hover effects
- Filterable project gallery with lightbox
- Testimonials section
- FAQ accordion
- Rent materials cards
- Contact + Enquiry forms (Web3Forms — free email delivery)
- Floating WhatsApp button
- WhatsApp, Call, and Email quick action buttons
- Footer with three circular photos and rainbow-style border
- AOS scroll animations
- Bootstrap 5 + Bootstrap Icons
- Google Fonts (Inter + Oswald)
- Clean, scalable folder structure
- Production-ready with Gunicorn

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Flask (Python) |
| Templates | Jinja2 |
| Frontend | HTML5, CSS3, Bootstrap 5 |
| JavaScript | Vanilla JS + Bootstrap JS |
| Forms | Web3Forms (free) |
| Animations | AOS (Animate On Scroll) |
| Icons | Bootstrap Icons |
| Fonts | Google Fonts |
| Images | Pexels (free stock photos) |
| Deployment | Render / PythonAnywhere / Railway |

---

## License

This project is built for Chinni's Construction. Free to use and modify for the business.

---

**For business purpose, contact us. Anyone with work can call or text us.**
