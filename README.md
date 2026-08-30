# Survey Campaign Builder

A modern and interactive **Survey Campaign Builder** application that allows users to create and customize survey campaigns in real time.

The application provides a configuration panel for managing survey content and styling, along with a **live mobile preview** that updates instantly whenever changes are made.

---

## Setup Instruction

```bash
npm install
npm run dev
```

## ✨ Features

- Create and manage multiple survey questions
- Dynamically change the number of survey pages
- Edit question titles and subtitles
- Add, edit, and delete survey options
- Minimum option validation
- Additional comments functionality
- Conditional logic support
- Interactive question navigation
- Back and Next functionality
- Thank You page configuration
- Media/image upload support
- CTA button customization
- URL redirect functionality
- Real-time live mobile preview
- Content changes update instantly
- Styling changes update instantly
- Customizable colors, typography, spacing, borders, and radius
- Selected and unselected option styling
- CTA button styling
- Cross/close button functionality
- Responsive modern SaaS-style interface
- Live Builder Mode indicator


---

# 🛠 Tech Stack

The project is built using the following technologies:

| Technology | Purpose |
--------------------------
| React.js | Frontend UI development |
| Vite | Development environment and build tool |
| JavaScript | Application logic |
| Tailwind CSS | UI styling and responsive design |
| Context API | Global state management |
| useReducer | Complex application state handling |
| HTML5 | Application structure |
| CSS | Additional styling where required |

---

# 📁 Folder Structure

```text
simplified-survey-campaign-builder/
│
├── dist/
├── node_modules/
│
├── src/
│   │
│   ├── components/
│   │   │
│   │   ├── common/
│   │   │
│   │   ├── content/
│   │   │   ├── ConditionalLogic.jsx
│   │   │   ├── ContentPanel.jsx
│   │   │   ├── IntroductionSection.jsx
│   │   │   ├── QuestionOptions.jsx
│   │   │   ├── QuestionSection.jsx
│   │   │   └── ThankYouSection.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── BuilderLayout.jsx
│   │   │   └── Header.jsx
│   │   │
│   │   ├── preview/
│   │   │   ├── CommentPreview.jsx
│   │   │   ├── MobilePreview.jsx
│   │   │   ├── OptionPreview.jsx
│   │   │   ├── PreviewButton.jsx
│   │   │   ├── QuestionPreview.jsx
│   │   │   ├── SurveyPreview.jsx
│   │   │   └── ThankYouPreview.jsx
│   │   │
│   │   └── styling/
│   │       ├── AppearanceSettings.jsx
│   │       ├── CommentStyling.jsx
│   │       ├── CrossButtonStyling.jsx
│   │       ├── CTAButtonStyling.jsx
│   │       ├── OptionListStyling.jsx
│   │       ├── QuestionTitleStyling.jsx
│   │       ├── SelectedOptionStyling.jsx
│   │       ├── StylingPanel.jsx
│   │       ├── SubtitleStyling.jsx
│   │       ├── ThankYouStyling.jsx
│   │       └── UnselectedOptionStyling.jsx
│   │
│   ├── data/
│   │
│   ├── hooks/
│   │
│   ├── reducer/
│   │
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

```

## Deployment

Build with `npm run build`, then deploy the generated `dist` folder to Vercel, Netlify, GitHub Pages (with Vite base configuration if needed), or another static host.



