# Project Cost Calculator

**Portfolio Test Product for CV** — an offline desktop calculator for quick IT project cost estimation. Created as a hands-on case study to demonstrate the end-to-end delivery of a practical Project Manager tool using AI (**Claude** and **Gemini**) — from defining product logic to publishing ready-to-use installers for macOS and Windows.

<img width="850" alt="Project Cost Calculator Interface" src="https://github.com/user-attachments/assets/25c88530-15a0-4902-bec3-9e7ea464d5b8" />

<details>
<summary><b>Show additional interface screenshots</b></summary>
<br>
<img width="850" alt="Parameter settings" src="https://github.com/user-attachments/assets/f2a6a137-487e-49da-896e-10e0e49905cc" />
<img width="850" alt="Calculation details" src="https://github.com/user-attachments/assets/b167b5ea-1af3-48db-a8c6-21f2b8662dee" />
<img width="850" alt="Final budget summary" src="https://github.com/user-attachments/assets/5755685a-2984-4f8c-b105-f595ef4592f0" />
</details>

## What This Tool Does

The calculator helps a Project Manager generate a preliminary development budget estimate in under a minute:

- **Role-Based Estimation:** separate planning for **QA**, **Dev 1**, **Dev 2**, and **Content Manager**.
- **Flexible Parameters:** quick adjustments for hours and hourly rates (`$/hr`).
- **Risk Management:** percentage buffer (`%`) with instant recalculation of the final project cost.
- **Full Privacy & Offline Mode:** runs locally on your machine with no internet connection, sign-ups, or third-party data sharing.

---

## How to Download & Test

Ready-to-use installers are available in the **[Releases](https://github.com/max-kravchenko27/project-cost-calculator-forCV/releases)** section:

### For macOS
1. Download the `.dmg` file matching your processor:
   - `Project.Cost.Calculator-1.0.0-arm64.dmg` — for modern MacBooks with Apple Silicon chips (M1–M4);
   - `Project.Cost.Calculator-1.0.0.dmg` — for older Intel-based Macs.
2. Open the downloaded file and drag the app icon into your **Applications** folder.
3. **First launch:** since the app is distributed without a paid Apple Developer certificate, macOS may block it initially. Click **Done**, open *System Settings → Privacy & Security*, scroll down, and click **Open Anyway**.

### For Windows
1. Download `Project.Cost.Calculator.Setup.1.0.0.exe` and run it.
2. If Windows SmartScreen displays a security warning, click **More info → Run anyway**.

---

## How It Was Built

- **AI-Driven Development:** product logic design, coding, and release configuration were executed using **Claude** and **Gemini**.
- **Tech Stack:** Electron, JavaScript, HTML, CSS.
- **Release Automation:** configured GitHub Actions CI/CD pipeline to automatically build installers for both macOS and Windows.
