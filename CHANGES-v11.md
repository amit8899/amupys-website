# Amupys Website v11

## Fixed issues

1. Dedicated app hero image
- The uploaded feature graphics are PNG files.
- `app-data.js` previously referenced `.jpg`, so the images could not load.
- All three apps now use the actual `.png` paths.
- `app-page.js` now binds `data-hero-image` to each app's `heroImage`.

2. Dedicated app actions
Each dedicated app page now shows:
- Google Play badge
- Download APK button
- Privacy Policy button

Behavior:
- Google Play opens the app's Play Store listing.
- Download APK smoothly scrolls to `#versions`.
- Privacy Policy opens that app's specific privacy-policy URL.

3. Homepage behavior
- Clicking the Beats card body opens `apps/beats.html`.
- Clicking the GetMp3 card body opens `apps/getmp3.html`.
- Clicking the Social card body opens `apps/social.html`.
- Homepage Download APK opens the matching app page at `#versions`.
- Homepage Google Play continues to open Google Play directly.

## Bugs found in the uploaded ZIP
- Beats homepage card incorrectly pointed to `apps/social.html`.
- Homepage APK buttons still had the `disabled` class.
- `heroImage` paths used `.jpg`, while the uploaded files are `.png`.
- `app-page.js` did not populate `data-hero-image`.
- Dedicated app pages only contained the Google Play action.

## Testing checklist
- Open each homepage card by clicking outside its buttons.
- Test each homepage Download APK button.
- Test each homepage Google Play badge.
- Open each dedicated app page and verify its 1024x500 hero image.
- Test Download APK smooth scroll to APK archive.
- Test app-specific Privacy Policy.
- Test Google Play link.
- Repeat at mobile width.

## Button styling refinement
- Google Play, Download APK, and Privacy Policy actions now align to the same visual height.
- Download APK and Privacy Policy now use the same dark button color, border, corner radius, and hover behavior.
- Homepage Download APK buttons use the same production styling.
- The user-provided CityPNG badge was reviewed as a visual reference, but its page states commercial use is not authorized; the existing Google Play badge asset is retained while matching the other buttons to its design.

## Unified action-button design update
- Removed the Google Play badge image from homepage and all dedicated app pages.
- Google Play is now a website-native text button with a play/store-style icon.
- Download APK uses the same button treatment with a download icon.
- Privacy Policy uses the same treatment with a privacy/shield icon.
- All three actions now share identical height, corner radius, background, border, typography and hover behavior.
- Homepage keeps the same navigation behavior: card body -> app page, Download APK -> app page #versions, Google Play -> Play Store.
- Dedicated pages keep: Google Play -> Play Store, Download APK -> smooth scroll, Privacy Policy -> app policy.
- Icons are embedded as lightweight inline SVG so production does not depend on a third-party icon host.
