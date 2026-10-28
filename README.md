<div align="center">

<img src="https://raw.githubusercontent.com/Chaxyzzz/Visiona/main/assets/images/visiona-logo-dark.png" alt="VISIONA Logo" width="140">

# VISIONA

### Vision Assessment & Eye Health Screening System

**A Desktop-Based Digital Eye Health Screening Application**

Aplikasi desktop untuk skrining mandiri kesehatan mata, membantu pengguna mengenali kondisi penglihatan awal melalui serangkaian pemeriksaan digital, melihat hasil, serta meninjau riwayat skrining secara terstruktur.

<br>

[![Platform](https://img.shields.io/badge/Platform-Windows%20%7C%20macOS-2563EB?style=flat-square)](#platform-support)
[![Application](https://img.shields.io/badge/Application-Desktop-475569?style=flat-square)](#)
[![Developer](https://img.shields.io/badge/Developer-Xodetech-6D28D9?style=flat-square)](#credits)
[![Purpose](https://img.shields.io/badge/Purpose-Eye%20Health%20Screening-0F766E?style=flat-square)](#medical-disclaimer)

**Technology, thoughtfully built.**

</div>

---

## Overview

VISIONA merupakan aplikasi desktop yang dikembangkan oleh **Xodetech** untuk menyediakan pengalaman skrining kesehatan mata secara mandiri melalui komputer.

Aplikasi ini menggabungkan pemeriksaan penglihatan digital, penyajian hasil, riwayat pemeriksaan, dan pemantauan hasil sebelumnya dalam satu lingkungan aplikasi.

### Key Features

| Feature | Description |
|---|---|
| **Eye Screening** | Delapan modul pemeriksaan penglihatan digital. |
| **Screening Results** | Menampilkan hasil dari pemeriksaan yang telah diselesaikan. |
| **Screening History** | Membantu pengguna meninjau pemeriksaan sebelumnya. |
| **Progress Monitoring** | Memudahkan perbandingan hasil skrining dari waktu ke waktu. |
| **Personal Profile** | Pengelolaan profil dan preferensi pengguna. |
| **Educational Resources** | Informasi mengenai kesehatan mata dan keterbatasan skrining digital. |
| **Desktop Experience** | Antarmuka yang dirancang untuk penggunaan pada komputer. |

---

## Application Preview

<div align="center">

<img src="gh-pages/assets/images/app-screenings-preview.png" alt="VISIONA — Eye Screening Interface" width="850">

*Antarmuka modul skrining VISIONA.*

</div>

---

## Screening Modules

VISIONA menyediakan delapan modul skrining penglihatan digital.

<table>
<tr>
<td width="50%" valign="top">

### 01 — Symptom Questionnaire

Kuesioner untuk membantu pengguna mengenali dan mencatat gejala terkait penglihatan.

### 02 — Visual Acuity

Pemeriksaan ketajaman penglihatan mata kanan dan kiri secara terpisah.

### 03 — Color Vision

Skrining kemampuan membedakan warna melalui pengujian visual.

### 04 — Astigmatism

Pemeriksaan awal untuk mengidentifikasi pola penglihatan yang mungkin berkaitan dengan astigmatisme.

</td>
<td width="50%" valign="top">

### 05 — Contrast Sensitivity

Skrining kemampuan membedakan objek berdasarkan perbedaan kontras.

### 06 — Visual Field

Pemeriksaan sederhana untuk mengeksplorasi persepsi area penglihatan.

### 07 — Near Vision

Skrining kemampuan melihat objek pada jarak dekat.

### 08 — Amsler Grid

Pemeriksaan menggunakan kisi Amsler untuk membantu mengenali perubahan persepsi garis atau pola visual.

</td>
</tr>
</table>

> **Important:** Seluruh modul merupakan alat skrining digital. Hasilnya bukan diagnosis medis dan tidak menggantikan pemeriksaan oleh dokter mata.

---

## Application Workflow

Diagram berikut menggambarkan alur utama penggunaan VISIONA.

```mermaid
flowchart TD
    A([Start VISIONA]) --> B[Authentication, if required]
    B --> C[Dashboard]
    C --> D[Select Screening Module]

    D --> E1[Symptom Questionnaire]
    D --> E2[Visual Acuity]
    D --> E3[Color Vision]
    D --> E4[Astigmatism]
    D --> E5[Contrast Sensitivity]
    D --> E6[Visual Field]
    D --> E7[Near Vision]
    D --> E8[Amsler Grid]

    E1 --> F[Complete Screening]
    E2 --> F
    E3 --> F
    E4 --> F
    E5 --> F
    E6 --> F
    E7 --> F
    E8 --> F

    F --> G[View Screening Results]
    G --> H[Save Results Locally]
    H --> I[Screening History]
    I --> C

    style A fill:#2563eb,color:#ffffff,stroke:#2563eb
    style C fill:#eff6ff,color:#1d4ed8,stroke:#93c5fd
    style F fill:#eff6ff,color:#1d4ed8,stroke:#93c5fd
    style G fill:#f0fdf4,color:#166534,stroke:#86efac
    style H fill:#f8fafc,color:#334155,stroke:#cbd5e1
```

*Diagram ini merupakan gambaran konseptual alur aplikasi. Autentikasi, penyimpanan, dan navigasi mengikuti implementasi aktual pada versi aplikasi yang digunakan.*

---

## Platform Support

| Platform | Availability |
|---|---|
| **Windows 10 / 11 — 64-bit** | Ikuti ketersediaan paket installer pada bagian distribusi. |
| **macOS — Intel & Apple Silicon** | Paket harus tersedia dan tervalidasi sebelum dapat diunduh. |
| **Linux** | Tidak termasuk platform target resmi. |

### Download

Kunjungi halaman distribusi resmi VISIONA untuk memeriksa paket yang tersedia.

**Website:** `https://chaxyzzz.github.io/Visiona/`

> Ketersediaan unduhan bergantung pada paket rilis yang benar-benar telah dipublikasikan. Jangan menganggap suatu platform tersedia hanya karena tercantum pada tabel.

---

## Privacy & Data Handling

VISIONA dirancang sebagai aplikasi desktop mandiri dengan fokus pada data pribadi pengguna.

Prinsip pengelolaan data yang dituju meliputi:

- Hasil skrining dan riwayat pemeriksaan disimpan secara lokal pada komputer pengguna.
- Data setiap pengguna harus dibatasi sesuai mekanisme autentikasi dan kepemilikan data yang diterapkan.
- Informasi akun digunakan sesuai kebutuhan autentikasi aplikasi.
- Pengguna perlu memahami lokasi penyimpanan data sebelum menghapus aplikasi atau memindahkan komputer.

Baca dokumen resmi berikut untuk mengetahui kebijakan dan ketentuan yang berlaku:

- [Privacy Policy](gh-pages/privacy.html)
- [Terms & Conditions](gh-pages/terms.html)

*Penjelasan ini merangkum rancangan privasi aplikasi. Detail penyimpanan dan pemrosesan data harus mengikuti implementasi aktual serta isi dokumen kebijakan yang dipublikasikan.*

---

## Technology

VISIONA menggunakan teknologi aplikasi desktop dan komponen pendukung sesuai implementasi proyek.

| Component | Technology |
|---|---|
| Desktop runtime | Electron |
| Application interface | HTML, CSS, JavaScript |
| Backend | PHP |
| Local database | SQLite |
| Packaging | Electron Builder |

*Daftar ini menjelaskan teknologi yang digunakan dalam rancangan proyek. Konfigurasi dan versi dependensi dapat berbeda menurut build.*

---

## Medical Disclaimer

VISIONA dikembangkan untuk mendukung skrining awal kesehatan mata, bukan untuk menetapkan diagnosis atau menggantikan konsultasi medis.

- Hasil skrining tidak memastikan ada atau tidaknya suatu penyakit mata.
- Akurasi pemeriksaan digital dapat dipengaruhi ukuran dan resolusi layar, skala tampilan, pencahayaan, jarak pengamatan, serta kondisi perangkat.
- Hasil normal tidak menjamin bahwa mata sepenuhnya sehat.
- Keluhan yang menetap atau hasil yang mengkhawatirkan perlu dikonsultasikan kepada tenaga medis profesional.
- Kehilangan penglihatan secara mendadak, nyeri mata berat, atau perubahan penglihatan mendadak memerlukan pertolongan medis segera.

**Gunakan VISIONA sebagai sarana skrining dan edukasi, bukan sebagai pengganti pemeriksaan profesional.**

---

## Project Structure

Struktur ringkas direktori website publik VISIONA:

```text
visiona/
├── gh-pages/
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── images/
│   │   │   ├── visiona-logo-dark.png
│   │   │   ├── app-screenings-preview.png
│   │   │   └── favicon.ico
│   │   └── js/
│   │       └── main.js
│   ├── index.html
│   ├── privacy.html
│   ├── terms.html
│   └── README.md
│
├── dist/
│   └── Application release artifacts
│
└── README.md
```

*Struktur di atas merupakan ilustrasi. Pastikan lokasi file sesuai dengan struktur repositori yang sebenarnya.*

---

## Credits

<div align="center">

**VISIONA**

Vision Assessment & Eye Health Screening System

Developed by **Xodetech**

Creator: **Zakky Mubaraq**

[Official Website](https://chaxyzzz.github.io/Visiona/) · [GitHub Repository](https://github.com/Chaxyzzz/Visiona)

<br>

*Technology, thoughtfully built.*

</div>
