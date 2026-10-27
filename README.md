# Website Resmi & Dokumen Publik VISIONA (GitHub Pages)

Direktori ini (`c:\laragon\www\visiona\gh-pages`) memuat berkas website publik resmi **VISIONA** (Vision Assessment & Eye Health Screening System) yang dikembangkan oleh **Xodetech** (Pencipta: Zakky Mubaraq).

Website ini dirancang khusus sebagai **portal informasi resmi dan halaman distribusi aplikasi desktop** (Windows & macOS), sekaligus memuat dokumen kebijakan privasi dan syarat layanan yang memenuhi persyaratan Google Identity Platform (OAuth 2.0).

---

## 1. Struktur Berkas

```
gh-pages/
├── assets/
│   ├── css/
│   │   └── style.css            # Stylesheet utama (desain premium, responsif, zero external CDN)
│   ├── images/
│   │   ├── visiona-logo-dark.png# Logo resmi VISIONA
│   │   ├── app-screenings-preview.png # Screenshot asli antarmuka modul skrining desktop
│   │   ├── favicon.ico
│   │   └── ...                  # Ikon aplikasi
│   └── js/
│       └── main.js              # Interaksi ringan (mobile drawer menu, dynamic year)
├── backup_initial/              # Cadangan berkas sebelum redesign
├── index.html                   # Halaman beranda utama resmi
├── privacy.html                 # Kebijakan Privasi resmi
├── terms.html                   # Syarat & Ketentuan Layanan (Medical Disclaimer)
└── README.md                    # Dokumentasi ini
```

---

## 2. Cara Menguji dan Membuka Website Secara Lokal

Anda dapat membuka dan memeriksa tampilan website secara lokal melalui salah satu cara berikut:

### Cara 1: Buka Langsung di Browser
Klik dua kali berkas `index.html` pada File Explorer:
`C:\laragon\www\visiona\gh-pages\index.html`
Website akan terbuka langsung di browser default (Chrome, Firefox, Edge, Safari) tanpa perlu menjalankan server web. Seluruh aset gambar, CSS, dan skrip bekerja secara mandiri secara lokal.

### Cara 2: Menjalankan Local Web Server Sederhana (Opsional)
Jalankan perintah berikut di terminal:
```bash
cd c:\laragon\www\visiona\gh-pages
php -S localhost:8080
```
Lalu buka: `http://localhost:8080` di browser.

---

## 3. Langkah Publikasi ke GitHub Pages & GitHub Releases (Ketika Sudah Disetujui)

Saat pemilik proyek siap memublikasikan website dan mendistribusikan aplikasi VISIONA:

### A. Rilis Biner Aplikasi Desktop (GitHub Releases):
1. Masuk ke repositori GitHub `visiona`.
2. Buka menu **Releases** &rarr; **Draft a new release**.
3. Buat rilis baru (misal tag: `latest`).
4. Unggah kedua berkas biner mandiri yang telah dikompilasi di folder `dist/`:
   - `dist/VISIONA-Setup.exe` (Installer Windows)
   - `dist/VISIONA-Portable.exe` (Aplikasi Portabel Windows)
5. Simpan rilis. Tautan unduhan otomatis aktif melalui:
   - `https://github.com/<username>/visiona/releases/latest/download/VISIONA-Setup.exe`
   - `https://github.com/<username>/visiona/releases/latest/download/VISIONA-Portable.exe`

### B. Publikasi Website ke GitHub Pages:
1. Unggah seluruh isi folder `gh-pages/` (termasuk folder `assets/`).
2. Masuk ke **Settings** &rarr; **Pages** di repositori tersebut.
3. Pada **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` / `root`
   - Klik **Save**.
4. Situs akan aktif di alamat:
   - Beranda: `https://<username>.github.io/<nama-repo>/`
   - Kebijakan Privasi: `https://<username>.github.io/<nama-repo>/privacy.html`
   - Syarat & Ketentuan: `https://<username>.github.io/<nama-repo>/terms.html`
