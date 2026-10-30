---
version: alpha
name: "وجهة"
description: "An Arabic RTL educational platform connecting students directly with individual teachers, each with an independent learning space, courses, lessons, exams, and results."
sourceUrl: null

colors:
  primary: "#16827e"
  on-primary: "#ffffff"
  background: "#f6f8f9"
  surface: "#ffffff"
  border: "#e3eae6"
  text: "#203c48"
  text-muted: "#879297"
  text-secondary: "#7e9293"
  navy: "#173442"
  surface-soft: "#edf5f1"
  surface-raised: "#ffffff"
  primary-soft: "#eaf5f0"
  focus: "#65bfb5"

typography:
  display:
    fontFamily: "Tajawal, sans-serif"
    fontSize: "clamp(45px, 4.9vw, 68px)"
    fontWeight: 800
    lineHeight: 1.3
    letterSpacing: -1.6px
  heading:
    fontFamily: "Tajawal, sans-serif"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 1.5
  body:
    fontFamily: "Tajawal, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0px
  mono:
    fontFamily: "Tajawal, sans-serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.8

spacing:
  base: 2px
  scale: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 80]

radius:
  sm: 7px
  md: 11px
  lg: 15px

shadows:
  card: "0 8px 20px #203c4808"
  elevated: "0 14px 45px #203c481a"

motion:
  duration-fast: 180ms
  duration-base: 200ms
  duration-slow: 300ms
  easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"

breakpoints: [480px, 760px, 1000px, 1050px, 1200px, 1450px]

themes:
  dark:
    primary: "#78cfb6"
    on-primary: "#092d2a"
    background: "#0d191f"
    surface: "#15252d"
    border: "#2a3d44"
    text: "#e4eeeb"
    text-muted: "#91a8a2"
    text-secondary: "#b0c2bc"
    surface-soft: "#1c3037"
    surface-raised: "#20353d"
    primary-soft: "#1c3936"
    focus: "#90ddc5"
    elevated-shadow: "0 14px 45px #0005"

surfaces:
  landing-light: "#fcfcf9"
  landing-section-light: "#eff4ef"
  brand-panel-light: "#183f43"
  brand-panel-dark: "#173b3e"
---

## Rationale

**وجهة** means “destination” or “direction.” Its identity should make learning feel like a clear, supported journey: choose a teacher, register with that teacher, and enter their learning space. The teacher—not an institution—is the central relationship.

Navy provides structure and trust; teal identifies actions and progress. Warm off-white landing surfaces and muted sage details soften the product without making it playful or distracting. Tajawal anchors the interface in Arabic rather than treating RTL as a mirrored English layout.

The landing page introduces the service and helps students choose. The student portal is denser and more task-oriented, supporting courses, lessons, files, exams, results, notifications, and profile management. Both share the same calm visual language and light/dark modes.

**Status and scope:** This document describes the current React, TypeScript, Vite, and Tailwind CSS v4 prototype, with explicit guidance for future work. Authentication, teacher subdomains, and learning records are local simulations—not production services. No public source URL has been established, so `sourceUrl` is intentionally `null`.

The front matter summarizes reusable roles, not a claim that every component already uses centralized tokens. Color values come from the existing theme. Typography roles summarize component styles; the spacing scale is a recommended working scale over the current bespoke measurements. `themes` and `surfaces` extend the requested structure for the existing dark mode and marketing surfaces.

## 1. Visual Theme & Atmosphere

The design language is **calm, teacher-led, and quietly encouraging**. It should feel like an organized personal learning environment, not an institutional administration system, a competitive game, or an AI chat product.

- **Hierarchy before decoration:** Clear headings, short supporting copy, and one obvious primary action per context.
- **Soft structure:** Pale backgrounds, white cards, fine borders, and moderate rounding.
- **Human presence:** Teacher names, portraits or initials, specialties, and space identities matter more than institutional branding.
- **Restrained depth:** Use shadows for hover feedback and overlays; ordinary cards primarily rely on borders.
- **Purposeful imagery:** Preserve the current study photograph, muted course illustrations, book motif, and subtle orbital decoration. Do not make photography a prerequisite for understanding content.

The brand combines a bold Arabic wordmark with a slightly rotated, rounded teal book mark. Keep the name **وجهة** consistent in visible copy, document titles, and downloadable materials.

Useful voice examples:

- “تعلّم اليوم. حدّد وجهتك.”
- “اختر معلّمك”
- “تعلّم مع المعلّم”
- “خطوة بعد خطوة.”

Copy should be direct, supportive, and free of exaggerated promises, invented testimonials, or unsupported achievement claims.

## 2. Color System

### Primary palette

| Role | Light | Dark | Purpose |
| --- | --- | --- | --- |
| Primary | `#16827e` | `#78cfb6` | Primary actions, active controls, progress |
| On-primary | `#ffffff` | `#092d2a` | Text and icons on primary fills |
| Background | `#f6f8f9` | `#0d191f` | Student portal canvas |
| Surface | `#ffffff` | `#15252d` | Cards, forms, dialogs, navigation |
| Soft surface | `#edf5f1` | `#1c3037` | Grouped information and supporting sections |
| Raised surface | `#ffffff` | `#20353d` | Elevated or hover surfaces |
| Border | `#e3eae6` | `#2a3d44` | Card edges, fields, separators |
| Text | `#203c48` | `#e4eeeb` | Headings and primary information |
| Secondary text | `#7e9293` | `#b0c2bc` | Supporting descriptions; see contrast caveats below |
| Muted text | `#879297` | `#91a8a2` | Tertiary metadata; see contrast caveats below |
| Primary soft | `#eaf5f0` | `#1c3936` | Selected backgrounds and success-adjacent emphasis |
| Focus | `#65bfb5` | `#90ddc5` | Existing keyboard-focus treatment |

### Marketing surfaces

The light landing and registration pages use a warmer canvas, `#fcfcf9`, rather than the portal's cooler `#f6f8f9`. The “how it works” section uses `#eff4ef`. Deep teal panels use approximately `#183f43` on landing/registration and `#173f43` in the portal hero. Their dark-mode counterpart is `#173b3e`.

These are related surface treatments, not separate brands.

### Supporting and semantic colors

- **Subject accents:** Soft teal, blue, sand, and purple distinguish teacher covers, course art, and icon tiles. Existing light icon pairs are teal `#218b7b` / `#eaf5f0`, blue `#698bb2` / `#edf2fa`, sand `#bb9a61` / `#faf4e8`, and purple `#9a87be` / `#f1eef8` (foreground / background).
- **Success:** Existing light success badges use `#328d79` on `#ecf6ef`. Pair color with a check icon or explicit label.
- **Warning:** Existing light warning badges use `#b69558` on `#fbf6e9`. Dark warning tokens are `#e6c48a` on `#3b3427`.
- **Error:** Existing light error text includes `#b65353`; form errors use `#b25550`. Dark danger tokens are `#f0aaa3` on `#3e2a2c`.

Light semantic styles currently vary by component; do not assume these pairs are universally accessible. Keep results, deadlines, validation, and destructive actions understandable without color alone.

For new work, prefer `--surface-*`, `--text-*`, `--border-color`, `--accent`, `--accent-contrast`, `--accent-soft`, and `--focus-ring` over additional hard-coded colors. The front-matter `primary` role corresponds to CSS `--accent`; `background` corresponds to `--surface-page`.

## 3. Typography

### Font family and delivery

**Tajawal** is the shared Arabic UI and brand family. Its Google Fonts files are self-hosted under `public/fonts/tajawal/` and loaded through `@font-face` in `src/index.css`, with weights **400, 500, 700, and 800**, followed by `sans-serif`. The SIL Open Font License is included with the files. Keep the Arabic and Latin glyphs available locally so blocked third-party requests cannot change the layout.

Do not add a second display face or custom font dependency just to differentiate sections. Arabic readability and consistent shaping take precedence over novelty.

There is **no dedicated monospace family** in the current product. The `mono` role preserves the supplied document shape but records the existing teacher-domain treatment: inherited Tajawal, usually 10px, with `dir="ltr"`. It is not a true monospace style.

### Scale and hierarchy

| Role | Existing size | Weight | Treatment |
| --- | --- | --- | --- |
| Landing display | `clamp(45px, 4.9vw, 68px)` | 800 | 1.3 line-height; component tracking of -1.6px |
| Landing section heading | 31–35px | 700 | Approximately 1.5 line-height |
| Portal page heading | 29px | 800 | 1.45 line-height |
| Registration heading | 30px | 800 | Reduces to 26px on mobile |
| Portal section heading | 17–19px | 700 | Compact but clearly separated from body copy |
| Card title | 15–19px | 700 | Allow Arabic wrapping; avoid truncating essential identity |
| Reading text | 14–16px | 400 | 1.8–2 line-height for lessons and explanatory copy |
| Controls and metadata | 9–13px | 400–700 | Existing compact styles; apply accessibility guidance below |

The front-matter `heading` role is the 32px marketing section heading, not a replacement for every portal `h2`. Its `body` role is a reusable 14px baseline rather than a globally enforced body size.

Landing breakpoints currently set the display heading to 51px at widths up to 1050px, including mobile. Keep new headings responsive to content and test long Arabic phrases rather than assuming the display clamp controls every viewport.

**Arabic-specific rules:** Use natural tracking for new body text; do not propagate the hero's negative letter-spacing to controls or reading content. Preserve connected letterforms, diacritics, and enough leading. Use `dir="ltr"` for domains, email, phone numbers, and code-like fragments without changing the surrounding RTL reading order. Reuse `num` and `date` helpers in `src/data.ts` for localized values.

## 4. Components & Patterns

### Teacher-first landing page

Preserve this journey:

**Choose a teacher → register with that teacher → enter that teacher's space.**

The landing page is available at `#/welcome` and through “عن وجهة”. Its primary actions move students toward the teacher directory. **Do not add login to the landing page.** Existing login screens do not establish its eventual placement.

- **Header:** Wordmark, section navigation, theme switch, and “اختر معلّمك”.
- **Hero:** Large two-line message, short explanation, a primary journey CTA, study photograph, and static supporting cards.
- **Teacher directory:** Arabic-aware search, specialty chips, sorting, result count, and teacher cards.
- **Teacher cards:** Subject cover, portrait or initials, name, short bio, course information, simulated domain, profile preview, comparison, and teacher-specific registration CTA.
- **Profile preview:** Native dialog with teacher identity, overview/course tabs, and expandable course outlines.
- **Comparison:** Maximum two teachers, a floating selection tray, and a comparison dialog. On narrow screens, the comparison table may scroll horizontally within its own container.
- **Journey explanation:** Three **static** steps, not clickable demo controls.
- **FAQ:** Native `details` / `summary` disclosure rows.
- **Closing CTA:** Deep teal panel returning students to teacher selection.

**Removed patterns:** Do not reintroduce the guided teacher-matching assistant, sample lesson/progress playground, retryable landing quiz, or interactive journey details unless explicitly requested. Teacher search, filtering, profile previews, comparison, and registration remain part of the product.

### Buttons and controls

- **Primary:** Teal fill, contrasting label, moderate rounding, and an optional outline icon. Existing portal buttons are usually at least 40px high; major landing buttons are 48px.
- **Secondary:** White/themed surface, fine border, and teal text. Do not make secondary actions compete with the main CTA.
- **Text action:** Teal label with a small directional icon; reserve for supplementary navigation.
- **Filter chips:** Rounded specialty labels with a filled selected state and `aria-pressed`.
- **Theme switch:** Sun/moon treatment with a text label on wider screens and an accessible switch name at all widths.

Use the existing `Icon` SVG system in `src/App.tsx`: 24×24 viewBox, no fill, `currentColor`, 1.65px stroke, round caps and joins. Typical rendered sizes are 17–25px. Do not introduce emoji or mix unrelated icon styles.

### Teacher-specific registration

Registration uses `#/register/:teacherId`. Keep the selected teacher's name, specialty, and simulated address visible near the form. On desktop, a deep teal story panel accompanies a restrained form column; on mobile, the story panel collapses to a compact brand header.

Maintain visible field labels, inline validation, password visibility controls, confirmation feedback, and consent. Label the experience as simulated; do not imply real authentication or working subdomains.

### Student portal

- **Shell:** Right-side navigation, top bar, workspace switcher, contextual page title, theme control, and account/notification actions.
- **Dashboard:** Deep teal welcome panel, summary statistics, continue-learning card, course cards, and supporting exam/notification panels.
- **Courses and lessons:** Illustration or cover, teacher context, enrollment/access state, progress track, files, and a clear next action.
- **Exams:** Instructions before starting; focused attempt layout with timer, question map, answer states, and explicit submission confirmation.
- **Results:** Score hierarchy, completion state, answer review, and appropriate next actions.
- **Profiles and notifications:** Simple bordered panels, readable rows, explicit read states, and confirmation before resetting local data.
- **Overlays:** Native dialogs for decisions and previews; toasts for supplementary status, not the only location of important errors.

Teacher spaces must remain visibly distinct. Do not present one teacher's courses, progress, or results as another's. The study assistant remains deferred.

## 5. Spacing & Layout

### Spacing

Use the front-matter scale as a **recommended 2px-based vocabulary**, not as an inventory of existing CSS variables:

- **2–8px:** Icon alignment, badge padding, and tightly related metadata.
- **12–16px:** Inline control gaps and compact card interiors.
- **20–32px:** Standard panel padding, form grouping, and grid gaps.
- **48–80px:** Marketing section rhythm and major narrative separation.

The current implementation also uses bespoke values such as 17, 18, 22, 25, 39, 55, and 65px. Match nearby component patterns when making small changes rather than silently re-spacing the whole product.

### Containers and grids

- **Landing:** Maximum content width of 1160px, initially `calc(100% - 96px)`, with centered logical margins. Desktop hero uses two columns.
- **Teacher grid:** Four columns on wide screens, two at 1050px and below, one at 480px and below.
- **Portal:** A 246px fixed right sidebar, reducing to 222px at 1200px and below; a content region with typical desktop padding of 31px vertically and 39px horizontally.
- **Content maximum:** Portal `.main` has a maximum width of 1800px, separate from the landing container.
- **Course grid:** Three columns by default, two at 1200px and below, one at 480px and below. Dashboard course cards use two columns before the narrow layout.
- **Reading and forms:** Keep lines comfortable; registration form width is capped at 420px. Standard confirmation dialogs are approximately 440px wide.

### Radius and elevation

Small controls generally use 7–8px rounding, cards 10–13px, and major panels/dialogs 14–17px. Use full circles for avatars and status dots, and pill shapes for specialty filters. The hero photograph's large asymmetric corner is an intentional marketing exception.

The `card` shadow is the current course-card **hover** shadow, not a universal resting-card treatment. `elevated` matches the discovery overlay/tray shadow. Dark overlays use the darker shadow defined under `themes.dark`.

### Responsive behavior

| Breakpoint | Current responsibilities |
| --- | --- |
| ≤480px | Single-column teacher/course grids and compact portal spacing |
| ≤760px | Single-column hero and forms; hidden landing section nav; right-side mobile drawer; compact theme control |
| ≤1000px | Stacked portal content/aside and simplified lesson/profile layouts |
| ≤1050px | Two-column teacher grid and tighter marketing layout |
| ≤1200px | Narrower portal sidebar and two-column course grid |
| ≥1450px | Increased portal padding and roomier dashboard/registration layouts |

Prefer logical properties such as `margin-inline`, `padding-inline`, and `inset-inline` in new CSS. Keep the document `lang="ar"` and `dir="rtl"`. Directional navigation should follow RTL intent; do not mirror nondirectional icons or reorder technical strings blindly.

## 6. Motion & Interaction

Motion should confirm actions, not turn the learning experience into a showcase.

- **180ms:** Discovery dialogs and interaction details, using `cubic-bezier(0.2, 0.7, 0.3, 1)`.
- **200ms:** Common button, card, and disclosure-icon transitions.
- **250ms:** Existing mobile sidebar slide.
- **300ms:** Progress-track updates.

The front-matter durations summarize these patterns; only the 180ms interaction duration and custom easing are currently shared CSS variables. Other component transitions use their own declarations, often with browser-default easing.

Existing teacher/course cards lift by approximately 3–4px on hover. Discovery dialogs enter with a short fade and 8px vertical translation. Keep decorative hero cards static. Avoid autoplay, parallax, looping celebration effects, and animations that delay access to lesson or exam controls.

**States to preserve:** Hover, visible keyboard focus, selected/pressed, disabled, empty search results, validation error, success feedback, and urgent exam timing. Use text or shape changes alongside color.

**Theme behavior:** Follow the system preference until the user explicitly chooses a mode; retain the choice locally and sync it between tabs. The HTML shell applies the initial theme before React mounts. Use theme variables for new components rather than assuming white surfaces.

**Reduced motion:** Existing discovery styles suppress their entrance and hover motion under `prefers-reduced-motion: reduce`. Future work should extend that behavior to any new animations and smooth scrolling. Do not describe the current stylesheet as a complete global reduced-motion implementation.

## Accessibility

### Contrast ratios

Approximate WCAG contrast calculations for solid sRGB token pairs:

| Foreground / background | Ratio | Interpretation |
| --- | --- | --- |
| `#203c48` / `#f6f8f9` | 10.94:1 | Meets AAA for normal text |
| `#ffffff` / `#16827e` | 4.64:1 | Meets AA for normal text |
| `#e4eeeb` / `#0d191f` | 15.08:1 | Meets AAA for normal text |
| `#092d2a` / `#78cfb6` | 8.03:1 | Meets AAA for normal text |
| `#91a8a2` / `#15252d` | 6.24:1 | Meets AA for normal text |
| `#879297` / `#f6f8f9` | 2.99:1 | Fails AA for normal text |
| `#7e9293` / `#ffffff` | 3.27:1 | Fails AA for normal text |

These calculations are not a full accessibility audit. Opacity, photography, component overrides, and actual rendered sizes require separate checks.

**Known limitations:** Several current light-mode descriptions and metadata styles are too faint or too small. Do not reuse muted colors for essential small text. For new content, use the primary text color or a separately verified darker secondary color. Small sage badges and captions also need review.

The existing light focus color `#65bfb5` has only about **2.17:1** contrast against white. Its 3px outline establishes a visible treatment but does not by itself establish adequate contrast. Strengthen future focus indicators with a verified darker outline or a two-tone treatment; retain the 3–4px offset where appropriate.

### Minimum requirements for future work

- **Text:** Aim for 4.5:1 for normal text and 3:1 for large text. Prefer at least 14px for secondary reading text and 16px for extended lesson content; the prototype's 9–12px metadata styles are existing limitations, not a recommended minimum.
- **Targets:** Aim for at least 44×44 CSS pixels for primary touch controls. This aligns with WCAG 2.2 AAA target sizing; the AA target-size criterion is generally 24×24px with exceptions. Existing 34–41px icon controls and compact chips need review.
- **Focus:** Every interactive element needs a clearly visible keyboard focus state. Never remove an outline without an equivalent replacement. Ensure sticky trays and dialogs do not obscure focused controls.
- **Forms:** Use visible labels, `aria-invalid`, associated error descriptions, and explicit required/consent instructions. Do not rely on placeholder text or color alone.
- **Dialogs and tabs:** Keep accessible names, Escape dismissal, contained dialog focus, focus return to the opener, and keyboard tab navigation. The current teacher preview uses a native modal dialog and arrow/Home/End tab navigation; verify these behaviors when changing it.
- **Announcements:** Use polite status regions for result counts and noncritical confirmations. Reserve alerts for urgent or blocking issues.
- **Images and icons:** Provide useful alternative text for meaningful imagery. Hide decorative SVGs and ornaments from assistive technology; label icon-only controls.
- **Reflow:** Check narrow screens, long Arabic names, larger text, and browser zoom. Contain comparison-table scrolling without causing whole-page horizontal overflow.
- **Motion:** Respect reduced-motion preferences; no information or action may depend on animation.

### Implementation reference

| File | Responsibility |
| --- | --- |
| `index.html` | Arabic/RTL document, title, initial theme |
| `src/index.css` | Font import, global styles, portal components and layout |
| `src/theme.css` | Semantic light/dark colors and theme overrides |
| `src/landing.css` | Marketing layout, teacher cards, static journey, FAQ |
| `src/auth.css` | Registration/login form and story-panel styling |
| `src/interactions.css` | Teacher discovery, preview/comparison, shared interaction tokens |
| `src/Theme.tsx`, `src/ThemeToggle.tsx` | Theme preference and switch behavior |
| `src/Landing.tsx` | Current landing composition and teacher-first CTAs |
| `src/TeacherDirectory.tsx`, `src/TeacherPreview.tsx` | Teacher search, filtering, previews, and comparison |
| `src/App.tsx` | Portal composition, local journey behavior, and shared icons |

This document does not change runtime styling or promise production functionality. Preserve the current product boundaries and use it as the design reference for subsequent changes.
