# Main Feedback Page - Design Analysis

## Overview
The Main Feedback Page ("Страница обратной связи сотрудника") is the primary page for viewing and managing employee feedback. The page has a fixed layout with multiple sections including navigation, content area, and sidebars.

## Page Layout Structure

### Main Container
- **Display**: `flex`
- **Flex Direction**: `column`
- **Align Items**: `center`
- **Width**: `1440px`
- **Height**: `900px`
- **Background**: `var(--page/primary, #ffffff)` (white)

## Page Sections (Top to Bottom)

### 1. Top Navigation Bar (🛠️ Main Navigation Bar)
**Position**: Normal flow (top of page)
**Width**: `1440px`
**Padding**: `20px` vertical
**Background**: `var(--page/primary, #ffffff)`
**Border**: Bottom border with inner shadow effect (`inset 0px -0.5px 0px 0px var(--bank/primitive/border, rgba(174,174,174,0.45))`)

**Structure:**
- **Logo Section** (Left):
  - Logo "Athena" (96px × 30px)
  - Padding: `20px` horizontal

- **Navigation Buttons** (Center):
  - Flex container with gap: `10px`
  - Buttons:
    - "Главная" (Home) - with Home icon (24px)
    - "Задачи" (Tasks) - with Events icon (24px)
    - "Поиск" (Search) - with Search icon (24px)
    - "Сервисы" (Services) - with Lightning icon (24px)
    - "Админка" (Admin) - with Incognito icon (24px)
  - Button styling:
    - Padding: `15px` horizontal, `10px` vertical
    - Border radius: `10px`
    - Gap: `10px` between icon and text
    - Typography: TTN 500/M (16px, Medium, line-height 20px, letter-spacing 0.16px)
    - Color: `var(--primitive/primary, #191919)`

- **User Section** (Right):
  - Avatar (34px × 34px) with initials "БА"
  - User name: "Бурлин Александр"
  - Typography: TTN 500/M (16px, Medium, line-height 20px, letter-spacing 0.16px)
  - Actions:
    - Face ID icon (24px)
    - Settings/Gear icon (24px)
  - Gap: `20px` between elements
  - Padding: `20px` horizontal

### 2. Main Content Area
**Position**: Normal flow
**Layout**: Flex column
**Gap**: `30px` (XL)
**Padding**: 
  - Top: `0`
  - Bottom: `60px` (5XL)
  - Horizontal: `0`
**Width**: Full width
**Overflow**: `clip`

**Sub-sections:**

#### 2.1 Header Section
**Padding**: `20px` (M) horizontal
**Gap**: `30px` (XL) between elements

**Page Header:**
- Title: "Все события" (All Events)
- Typography: TTN 600/4XL (36px, DemiBold, line-height 40px, letter-spacing 0)
- Color: `var(--primitive/primary, #191919)`
- Padding: `30px` top, `0` bottom

**Search & Filters:**
- Width: `720px`
- Gap: `15px` (S) between search and filters

**Search Bar:**
- Uses **SearchInput** component from Design System
- Height: `32px`
- Input styling:
  - Background: `var(--container/transparent-1, rgba(25,25,25,0.05))`
  - Border radius: `10px` (Rounding 2,5x)
  - Padding: `10px` horizontal
  - Gap: `10px` between icon and placeholder
  - Search icon: `18px`
  - Placeholder text: "Поиск активности или автора"
  - Typography: TTN 400/M (16px, Regular, line-height 20px, letter-spacing 0.16px)
  - Color: `var(--primitive/neutral-4, #949494)`

**Chip Carousel (Filters):**
- Flex container with gap: `10px`
- Chips:
  - "Период" (Period) - dropdown chip
  - "Активность" (Activity) - dropdown chip
  - "Навык" (Skill) - selected chip (brand color)
- Chip styling:
  - Background: `var(--container/transparent-1, rgba(25,25,25,0.05))`
  - Padding: `10px` horizontal, `7px` vertical
  - Border radius: `10px` (Rounding 2,5x)
  - Typography: TTN 500/S (14px, Medium, line-height 18px, letter-spacing 0.14px)
  - Selected chip color: `var(--primitive/brand, #835de1)`
  - Dropdown icon: `18px` chevron down

#### 2.2 List Section (Feedback Cards)
**Padding**: `20px` (M) horizontal
**Gap**: `15px` (S) between cards

**Feedback Card:**
- Background: `var(--bg/neutral-1, #f4f4f4)`
- Border radius: `15px` (S)
- Padding: `0` top, `10px` (XS) bottom
- Overflow: `clip`
- Width: Full width

**Card Structure:**
1. **Card Header (Title & Date)**:
   - Padding: `20px` (M) top, `15px` (S) bottom, `20px` (M) horizontal
   - Title: "Ревью" (Review)
   - Typography: TTN 500/L (18px, Medium, line-height 22px, letter-spacing 0)
   - Color: `var(--primitive/primary, #191919)`
   - Date: "19 октября 2025"
   - Typography: TTN 400/S (14px, Regular, line-height 18px, letter-spacing 0.14px)
   - Color: `var(--primitive/secondary, #676767)`
   - Gap: `2px` between title and date

2. **Cell: "От кого обратная связь"**:
   - Padding: `20px` horizontal, `10px` vertical
   - Label: "От кого обратная связь"
   - Typography: TTN 400/S (14px, Regular, line-height 18px, letter-spacing 0.14px)
   - Color: `var(--primitive/secondary, #676767)`
   - Content: Author name (e.g., "Иванов Александр Иванович")
   - Typography: TTN 400/L (18px, Regular, line-height 22px, letter-spacing 0)
   - Color: `var(--primitive/primary, #191919)`
   - Gap: `2px` between label and content

3. **Cell: "Сильные стороны"**:
   - Same structure as above
   - Label: "Сильные стороны"
   - Content: Strengths text (can be multi-line)

4. **Cell: "Зона роста"**:
   - Same structure as above
   - Label: "Зона роста"
   - Content: Growth zone text (can be multi-line)

5. **Link Cell (PageAction)**:
   - Padding: `20px` (M) horizontal, `10px` (XS) vertical
   - Border radius: `6px`
   - Gap: `10px` (XS)
   - Text: "Посмотреть навыки"
   - Typography: TTN 500/M (16px, Medium, line-height 20px, letter-spacing 0.16px)
   - Color: `var(--primitive/brand, #835de1)`
   - Overflow: `ellipsis`
   - White space: `nowrap`

### 3. Navigation Bar (Left Sidebar)
**Position**: `absolute`
**Top**: `74px` (from top navigation bar height)
**Left**: `0`
**Width**: `280px`
**Layout**: Flex column
**Gap**: `20px` (Spacing 5x)
**Gap between Navigation Bar and Navigation Menu**: `0` (no gap)

**Structure:**
- Uses NavigationBar component from Design System
- Contains:
  - Back button (40px × 40px)
  - Title section:
    - Title: "Обратная связь"
    - Typography: TTN 600/2XL (24px, DemiBold, line-height 30px)
    - Subtitle: "Константинопольский Василий Аркадьевич — Специалист"
    - Typography: TTN 500/XS (12px, Medium, line-height 15px, letter-spacing 0.12px)
    - Color: `var(--primitive/secondary, #676767)`
    - Gap: `6px` (Spacing 1,5x) between title and subtitle

### 4. Widget (Right Sidebar - Компетенции)
**Position**: `absolute`
**Top**: `74px` (from top navigation bar height)
**Left**: `1100px`
**Width**: `340px`
**Layout**: Flex column
**Gap**: `0px` (S)
**Padding**: `20px` (M) horizontal, `30px` (XL) vertical
**Overflow**: `clip`

**Widget Container:**
- Border: `1px solid var(--primitive/neutral-2, #d4d4d4)`
- Border radius: `18px` (Rounding 4,5x)

**Widget Title:**
- Title: "Компетенции" (Competencies)
- Typography: TTN 600/XL (20px, DemiBold, line-height 26px, letter-spacing 0)
- Color: `var(--primitive/primary, #191919)`
- Padding: `20px` top, `10px` bottom, `20px` horizontal
- Border radius: `16px` (Rounding 4x) top corners

**Widget Content:**
- Padding: `0` top, `10px` (XS) bottom
- List of competency items

**Competency Item:**
- Padding: `20px` horizontal, `10px` vertical
- Layout: Flex row
- Left Accessory (Avatar):
  - Size: `34px × 34px`
  - Background colors:
    - Warning: `rgba(252, 245, 227, 1)` (Bg/Warning 1)
    - Success: `rgba(221, 248, 239, 1)` (Bg/Success 1)
  - Icon: Face icon (16px) positioned at `9px` from top and left
  - Icon colors:
    - Neutral/Warning: `rgba(216, 77, 77, 1)` (Primitive/Error)
    - Happy/Success: `rgba(92, 173, 154, 1)` (Bg/Success)
  - Padding right: `12px`

- Content:
  - Title (e.g., "Знания", "Отношение к клиенту")
  - Typography: TTN 500/M (16px, Medium, line-height 20px, letter-spacing 0.16px)
  - Color: `var(--primitive/primary, #191919)`
  - Description (e.g., "Стоит обратить внимание", "Хорошо справляется")
  - Typography: TTN 400/S (14px, Regular, line-height 18px, letter-spacing 0.14px)
  - Color: `var(--primitive/secondary, #676767)`
  - Gap: `2px` between title and description

## Design Tokens Used

### Colors
- **Primary**: `#191919` (Primitive/Primary)
- **Secondary**: `#676767` (Primitive/Secondary)
- **Neutral 2**: `#d4d4d4` (Primitive/Neutral 2)
- **Neutral 4**: `#949494` (Primitive/Neutral 4)
- **Brand**: `#835de1` (Primitive/Brand)
- **Default Fixed**: `#ffffff` (Primitive/Default Fixed)
- **Page Primary**: `#ffffff` (Page/Primary)
- **Bg Neutral 1**: `#f4f4f4` (Bg/Neutral 1)
- **Container Transparent 1**: `rgba(25,25,25,0.05)` (Container/Transparent 1)
- **Translucent Neutral 4**: `rgba(25,25,25,0.45)` (Translucent/Primitive/Neutral 4)
- **Bank Border**: `rgba(174,174,174,0.45)` (Bank/Primitive/Border)
- **Error**: `#d84d4d` (Primitive/Error)
- **Success**: `#5cad9a` (Bg/Success)
- **Warning 1**: `#fcf5e3` (Bg/Warning 1)
- **Success 1**: `#ddf8ef` (Bg/Success 1)

### Spacing
- **XS**: `10px`
- **S**: `15px`
- **M**: `20px`
- **XL**: `30px`
- **5XL**: `60px`
- **Spacing 1,5x**: `6px`
- **Spacing 2,5x**: `10px`
- **Spacing 4x**: `16px`
- **Spacing 5x**: `20px`
- **Spacing 8x**: `32px`

### Rounding
- **Rounding 2,5x**: `10px`
- **Rounding 4x**: `16px`
- **Rounding 4,5x**: `18px`

### Typography
- **TTN 400/S**: 14px, Regular, line-height 18px, letter-spacing 0.14px
- **TTN 400/M**: 16px, Regular, line-height 20px, letter-spacing 0.16px
- **TTN 400/L**: 18px, Regular, line-height 22px, letter-spacing 0
- **TTN 500/XS**: 12px, Medium, line-height 15px, letter-spacing 0.12px
- **TTN 500/S**: 14px, Medium, line-height 18px, letter-spacing 0.14px
- **TTN 500/M**: 16px, Medium, line-height 20px, letter-spacing 0.16px
- **TTN 500/L**: 18px, Medium, line-height 22px, letter-spacing 0
- **TTN 600/XL**: 20px, DemiBold, line-height 26px, letter-spacing 0
- **TTN 600/2XL**: 24px, DemiBold, line-height 30px, letter-spacing 0
- **TTN 600/4XL**: 36px, DemiBold, line-height 40px, letter-spacing 0

## Component Usage

### Design System Components Used:
1. **NavigationBar** - Left sidebar navigation
2. **SearchInput** - Search bar in Main Content Area header (used instead of custom input)
3. **Chip** - Filter chips (dropdown and selected variants)
4. **FeedbackCard** - Individual feedback entries
5. **Cell** - Used within FeedbackCard for structured data
6. **PageAction** - "Посмотреть навыки" link in cards

## Layout Positioning Summary

1. **Top Navigation Bar**: Normal flow, top of page, full width (1440px)
2. **Main Content**: Normal flow, below top navigation, full width
3. **Navigation Bar**: Absolute positioned, left: 0, top: 74px, width: 280px
4. **Widget**: Absolute positioned, left: 1100px, top: 74px, width: 340px

## Implementation Notes

1. **Fixed Layout**: Page uses fixed dimensions (1440px × 900px)
2. **Absolute Positioning**: Navigation Bar and Widget use absolute positioning
3. **Component Reuse**: Leverage existing Design System components where possible
4. **Responsive Considerations**: Layout is fixed-width, may need responsive handling for different screen sizes
5. **Data Structure**: Feedback cards contain structured data that should map to FeedbackCard component props
6. **Interactive Elements**: Search, filters, and cards should be interactive
7. **Scrollable Content**: Main content area should be scrollable if content exceeds viewport height

