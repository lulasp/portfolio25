# portfolio25

Personal portfolio site (serpapinto.pt). Gatsby v4 static site.

## Build environment — important
- **Node 14.16.0 required** (pinned in `.nvmrc`). Run `nvm use` before anything.
  Newer Node (17+) breaks this old Gatsby/webpack stack: OpenSSL 3
  `digital envelope routines::unsupported`, and a strict-`exports` postcss error.
- **Use yarn, not npm.** The lockfile is `yarn.lock`; `npm install` re-resolves
  deps and breaks graphql ("from another module or realm").
- If native modules fail to load after a Node switch (e.g. `sharp` ABI mismatch),
  `rm -rf node_modules && yarn install`.

## Commands
- Dev:   `nvm use && yarn develop`  → http://localhost:8000
- Build: `nvm use && yarn build`    → output in `public/`
- Serve build locally: `yarn serve` → http://localhost:9000

## Deploy (shared cPanel host, FTP only — no SSH)
- Build output is the whole **`public/`** dir. Upload its *contents* to
  `public_html/` on the server (so `index.html` lands at the web root).
- **The domain is behind Cloudflare**, which does NOT proxy FTP. FTP must target
  the **origin server IP `185.32.190.5`**, not `serpapinto.pt` or `ftp.serpapinto.pt`
  (those resolve to Cloudflare / don't resolve, and hang forever).
- FTP user `lulasp@serpapinto.pt`, port 21, explicit FTPS. Password lives in
  `~/.netrc` (chmod 600) — never commit it.
- Deploy with lftp:
  ```
  lftp -u lulasp@serpapinto.pt ftp://185.32.190.5 -e "
    set ftp:ssl-force true; set ftp:ssl-protect-data true; set ssl:verify-certificate no;
    mirror -R --delete --verbose public/ public_html/; quit"
  ```
- After deploy, hard-refresh https://serpapinto.pt (Cmd+Shift+R); Cloudflare may cache.

## CV / resume
- Served at `/Luis-Serpa-Pinto-CV.pdf` (in both `static/` and `public/`).
  Referenced in `src/components/nav.js` and `src/components/menu.js`.
