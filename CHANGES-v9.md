# Amupys Website v9

## Homepage
- Restored full-card click behavior for all three app cards.
- Clicking the app card opens the dedicated app page.
- Clicking `Download APK` opens the dedicated app page directly at the APK/version section.
- Google Play button behavior is unchanged.

## Dedicated app pages
- Google Play badge remains visible.
- Added `Download APK` button beside Google Play; it scrolls to the APK versions section.
- Added an app-specific `Privacy Policy` button using each application's Google Sites privacy-policy URL.

## Test flow
1. Click card body -> dedicated app page.
2. Click homepage Download APK -> dedicated app page at `#versions`.
3. Click Google Play -> Play Store.
4. On app page, click Download APK -> smooth scroll to APK list.
5. On app page, click Privacy Policy -> correct app-specific policy.
