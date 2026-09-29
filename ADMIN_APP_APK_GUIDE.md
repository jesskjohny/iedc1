# 📱 IEDC Admin Studio — Android Mobile App & APK Guide

The **IEDC Content & Hosting Studio Admin App** (`admin.html`) is now fully configured as a native Android App project!

---

## ⚡ Method 1: Instant 1-Tap Mobile Admin App Install (No PC Required)

Install the Admin Studio directly onto your Android phone:

1. Open your live website link to `admin.html` (e.g. `https://your-domain.com/admin.html` or your Cloudflare live tunnel URL + `/admin.html`) in **Chrome** / **Edge** on your Android phone.
2. Tap the **"📱 ADMIN APK"** button at the top of the Studio navbar.
3. Tap **"📲 INSTALL ADMIN APP ON ANDROID"** (or Chrome menu `⋮` -> *"Add to Home screen"* / *"Install App"*).
4. The **IEDC Admin Studio App** will install directly into your Android phone's home screen and app drawer as a standalone native app!

---

## 🛠️ Method 2: Compile Standalone `.apk` via Android Studio & Capacitor

The native Android project has been initialized in the `android/` directory!

Run the build & sync command:
```bash
npm run build:android
```

Then open in Android Studio:
```bash
npm run open:android
```
- Inside Android Studio, click **Build > Build Bundle(s) / APK(s) > Build APK(s)** to output your signed `iedc-admin-studio.apk` file!

---

## 🌐 Method 3: Cloud 1-Click APK Generator (PWABuilder)

1. Go to [pwabuilder.com](https://www.pwabuilder.com).
2. Enter your live `admin.html` URL (e.g. `https://your-domain.com/admin.html` or Cloudflare live tunnel link + `/admin.html`).
3. Click **Package for Stores** -> **Android** -> **Download APK**.
4. PWABuilder automatically compiles your signed `iedc-admin-studio.apk` file in the cloud!
