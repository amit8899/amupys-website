# Amupys Website v2

Pages:
- index.html
- apps/beats.html
- apps/getmp3.html
- apps/social.html
- support.html
- privacy.html
- terms.html

## APK versions
Edit only `app-data.js`.

Each app already has 6 slots:
- Latest version
- Previous version 1
- Previous version 2
- Previous version 3
- Previous version 4
- Previous version 5

Example:
{label:"Latest version",version:"3.2.1",date:"2026-10-18",size:"24.8 MB",url:"https://.../social-3.2.1.apk"}

Buttons stay disabled until `url` is filled.

## Support form
The support page collects name, email, application, subject and description.
It opens a pre-filled email to:
amupis232389@gmail.com

This requires no backend. If you later want direct server-side sending, add a Cloudflare Worker endpoint or transactional email provider. Never put SMTP credentials in frontend JavaScript.

## Deploy
Replace the existing site files in your repository with this package, commit, and push. Cloudflare will redeploy automatically if your project is Git-connected.

Before final publishing:
- replace UPDATE_ME values
- add APK URLs
- replace Privacy/Terms placeholders with final legal text
