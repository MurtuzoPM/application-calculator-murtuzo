# Accessible Calculator 🧮

A small, accessible calculator web app built collaboratively by a **pair programming team**, following modern JavaScript practices and accessibility standards. The app supports basic arithmetic operations, keyboard input, and a visible calculation history, and is deployable on **GitHub Pages**.

---

## 🚀 Features (MVP)

* **Basic operations:** Addition (+), Subtraction (−), Multiplication (×), Division (÷)
* **Inputs:** Clickable buttons and keyboard entry (0–9, +, -, *, /, Enter, Backspace, .)
* **Clear functions:**

  * `C` → clears current entry
  * `AC` → resets everything
* **Chaining:** Performs operations left-to-right (no operator precedence by default)
* **Error handling:** Displays friendly messages for invalid input or division by zero
* **History:** Shows last 10 expressions with results

---

## 🧠 Technologies Used

* HTML5, CSS3, JavaScript (ES6+)
* ES Modules (`import` / `export`)
* Git & GitHub for version control and collaboration
* GitHub Pages for deployment

---

## 🧩 Folder Structure

```
accessible-calculator/
├── index.html          # Main UI layout
├── styles.css          # Styles and responsive layout
├── calculator.js       # Calculator class (logic + state)
├── app.js              # UI logic and event handling
├── .gitignore          # Git ignored files
└── README.md           # Documentation
```

---

## 🧑‍🤝‍🧑 Pair Programming Setup

This project is designed to be completed **in pairs**, using a **Driver/Navigator** workflow:

* **Driver:** Actively codes and implements the current task.
* **Navigator:** Reviews logic, catches bugs, and plans next steps.
* **Swap roles every 15–20 minutes.**

### Collaboration on GitHub

1. One teammate creates the repository on GitHub.
2. Add the other as a **collaborator** (Settings → Collaborators → Add People).
3. Clone the repo:

   ```bash
   git clone https://github.com/<username>/<repo>.git
   cd <repo>
   ```
4. Create branches for each feature:

   ```bash
   git checkout -b feature/calculator
   ```
5. Commit and push changes:

   ```bash
   git add .
   git commit -m "Implement calculator logic"
   git push origin feature/calculator
   ```
6. Open a Pull Request → Review → Merge into `dev` → Then `main` for final deployment.

---

## 🌿 Branch Strategy

| Branch      | Purpose                                                                      |
| ----------- | ---------------------------------------------------------------------------- |
| `main`      | Stable, deployable code (used for GitHub Pages)                              |
| `dev`       | Active development branch (merge tested features here)                       |
| `feature/*` | Individual or pair feature branches (e.g., `feature/ui`, `feature/keyboard`) |

---

## ✅ Acceptance Tests

| Test               | Expected Result                        |
| ------------------ | -------------------------------------- |
| 2 + 2 =            | 4                                      |
| 10 ÷ 4 =           | 2.5                                    |
| 5 ÷ 0 =            | “Cannot divide by zero” (state stable) |
| 100 → Backspace    | 10                                     |
| After 5 operations | History shows 5 newest-first           |

---

## 🔒 Accessibility Features

* Logical tab order and focus states
* `aria-live="polite"` for the display and history
* `aria-label` attributes on all buttons
* Visible focus ring for keyboard navigation

---

## 🧱 ES6+ Features Used

* Arrow functions
* Template literals
* Default parameters
* Destructuring
* Array methods (`forEach`, `unshift`, `pop`)
* Spread operator

---

## 🌈 Stretch Features (Optional)

Choose any 2+ of the following to extend the MVP:

* Operator precedence (Shunting-Yard parser)
* Theme toggle (light/dark) saved in `localStorage`
* Additional operations: %, ±, √, x^y
* Scrollable “tape” view and replay past calculations
* Internationalization of decimal separators

---

## 🧭 Deployment Instructions

1. Commit all changes to `main`:

   ```bash
   git checkout main
   git merge dev
   git push origin main
   ```
2. Go to **Settings → Pages**.
3. Under **Source**, choose `main` branch and `/ (root)`.
4. Wait a few minutes — your app will be live at:

   ```
   https://<username>.github.io/<repo>
   ```

---

## 🤝 Contributors

| Name      | Role                     |
| --------- | ------------------------ |
| Partner 1 | Frontend & Accessibility |
| Partner 2 | Logic & Deployment       |

*(Swap Driver/Navigator roles every 15–20 minutes for collaboration.)*

---

## 📜 License

This project is open source under the **MIT License**.

---

### 💡 Tip

To run locally:

```bash
python -m http.server 8000
# or
npx serve
```

Then open: [http://localhost:8000](http://localhost:8000)

---

Happy coding and collaborating! 💻🎯
