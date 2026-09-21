# Student Dashboard

## Install and run

Requires Node 20+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build into dist/
npm run lint
```

## How it's structured

```
src/
├─ App.jsx              page layout, reads dashboard-data.json and passes the data down
├─ App.css / index.css  layout, colours and global styles
└─ components/
   ├─ Card              white box used by every section
   ├─ ProgressBar       "22/44 lessons  50%" + green bar (used by ContinueCard and CourseRow)
   ├─ Sidebar
   ├─ Header
   ├─ Welcome
   ├─ Campuses
   ├─ ContinueCard
   ├─ CoursesTable      table + CourseRow (one row per course)
   ├─ HoursChart        bar chart made with divs
   ├─ Announcements
   └─ Chats             tabs + ChatGroup (opens/closes)
```

## Notes:
- My approach was first to read the task as many times as needed to understand the goal before starting, which I identied as creating the reusable components `src\components` for the figma design provided.
- I initiated a git repo and used vite for server and it auto created the folder structure.
- I identified the required `src\components` myself and let AI takeover from here creating the exact "for loops" that populates the cards with html, css styles and linking to the main  `src\App.jsx`.
- Depending on the agency and team structure I would have followed a certain way approach to git keeping, such as features branchs, commits message, PRs etc, but for this project I sufficed by creating the repo and commiting on the main branch.


## What I'd do next

- Add component tests.
- Make the notifications live via websockets.
- Add keyboard support.
- Migrate to TypeScript so the prop shape and data types are checked by the compiler.
- Replace the placeholders with real images.
- Dark mode.
## Time spent

_Roughly X hours_ **3**
