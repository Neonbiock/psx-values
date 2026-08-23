# PSX Values — GitHub Pages Starter

A modern static starter for a Pet Simulator X value-list website.

## Included

- Home page with latest changes and highest-value pets
- Searchable/filterable Values page
- Categories: All, Huges, Exclusives, Other
- Sorting by value, name, demand and release date
- Variant filtering
- Pet detail modal
- Trade calculator
- Changes/history page
- Demo admin panel
- Responsive mobile layout
- Browser localStorage for demo edits
- JSON export

## Important: admin security

The included Admin page is deliberately a **demo**. GitHub Pages is static, so a username/password embedded in frontend JavaScript would not be secure.

For a real public admin system, connect the frontend to a backend/database with proper authentication. Good options include Supabase, Firebase, or a small server/API.

## Run locally

You can simply open `index.html` in a browser.

For a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload `index.html`, `styles.css`, `app.js`, and `README.md`.
3. Go to Settings → Pages.
4. Choose the main branch and root folder.
5. Save and wait for GitHub Pages to deploy.

## Replacing the demo values

The demo pet records are near the top of `app.js` in `seedPets`.

Replace those records with the accurate values you want to publish. For a larger database, move the data into a JSON file or database once the backend is chosen.
