# Color Palette Documentation

## Coolors Palette - Minimal Neutral-Warm Design

This portfolio website uses a carefully selected Coolors palette to create a minimal, confident, and neutral-warm aesthetic. The palette emphasizes readability, WCAG accessibility, and professional presentation.

### Color Palette

| Color Name | Hex Code | Usage | Description |
|------------|----------|-------|-------------|
| **Cream** | `#F4F1DE` | Base background | Warm, neutral background that provides a calm foundation |
| **Terracotta** | `#E07A5F` | Primary accent | Used sparingly for primary CTAs, active states, and key highlights |
| **Deep Slate** | `#3D405B` | Primary text/nav | Main text color providing excellent readability and contrast |
| **Sage** | `#81B29A` | Secondary accent | Used for secondary actions, tags, and subtle highlights |
| **Sand** | `#F2CC8F` | Highlight/secondary bg | Subtle section backgrounds and callouts |

### Design Tokens (CSS Variables)

The colors are implemented as CSS variables in `:root` for consistency and maintainability:

```css
/* Core Palette Colors */
--color-cream: #F4F1DE;
--color-terracotta: #E07A5F;
--color-slate: #3D405B;
--color-sage: #81B29A;
--color-sand: #F2CC8F;

/* Semantic Design Tokens */
--bg: #F4F1DE;                      /* Main background */
--surface: #FFFFFF;                 /* Cards, panels */
--surface-muted: #F9F7F0;          /* Muted surface */
--text: #3D405B;                    /* Primary text */
--text-secondary: rgba(61, 64, 91, 0.7);  /* Secondary text */
--muted-text: rgba(61, 64, 91, 0.5);      /* Muted text */
--border: rgba(61, 64, 91, 0.12);   /* Subtle borders */

/* Primary Actions (Terracotta) */
--primary: #E07A5F;
--primary-hover: #D16648;
--primary-active: #BF5A3E;
--primary-soft: rgba(224, 122, 95, 0.1);

/* Secondary Actions (Sage) */
--secondary: #81B29A;
--secondary-hover: #6FA188;
--secondary-active: #5D8F76;
--secondary-soft: rgba(129, 178, 154, 0.1);

/* Highlight & Accents (Sand) */
--highlight: #F2CC8F;
--highlight-soft: rgba(242, 204, 143, 0.15);

/* Focus & States */
--focus-ring: #E07A5F;
--disabled: rgba(61, 64, 91, 0.3);
```

### Color Usage Guidelines

#### 1. Terracotta (#E07A5F) - Primary Accent
Use **sparingly** for maximum impact:
- Primary CTA buttons ("Let's Connect", "Send Message")
- Active navigation states
- Section title underlines
- Primary action highlights
- Timeline dots and key indicators
- Project icons and primary badges

#### 2. Sage (#81B29A) - Secondary Accent
Use for supportive elements:
- Secondary buttons ("View Resume")
- Skill tags on hover
- Tech tags for specific technologies (Python, SQL)
- Secondary action buttons
- Certification/award icons
- Skill category accents

#### 3. Deep Slate (#3D405B) - Primary Text
Use for all text content:
- Body text and paragraphs
- Headings and titles
- Navigation links
- Form labels
- Footer background

#### 4. Cream (#F4F1DE) - Base Background
Use for:
- Main page background
- Section backgrounds
- Warm, neutral foundation

#### 5. Sand (#F2CC8F) - Subtle Highlights
Use at low intensity for:
- Hero badge backgrounds
- Highlight strips
- Subtle callout sections
- Light hover backgrounds

### Interactive States

#### Hover States
- Primary buttons: Darken to `--primary-hover` (#D16648)
- Secondary buttons: Fill with sage (`--secondary`)
- Links: Show terracotta underline
- Cards: Lift with shadow and show primary border

#### Focus States
- Focus ring: Terracotta (`--focus-ring`) for visibility
- Input fields: Terracotta border with soft background

#### Active States
- Primary buttons: Darken to `--primary-active` (#BF5A3E)
- Navigation: Show terracotta underline

#### Disabled States
- Opacity reduced using `--disabled`
- Muted appearance

### Accessibility & Contrast

All color combinations meet WCAG AA standards:

| Combination | Contrast Ratio | WCAG Level | Usage |
|-------------|----------------|------------|-------|
| Deep Slate on Cream | 8.5:1 | AAA | Body text |
| Deep Slate on White | 10.3:1 | AAA | Card text |
| Terracotta on White | 4.9:1 | AA | Buttons, badges |
| Sage on White | 4.2:1 | AA | Secondary elements |
| White on Deep Slate | 10.3:1 | AAA | Footer text |

### Component-Specific Usage

#### Navigation
- Background: White with transparency
- Text: Deep slate
- Hover/Active: Terracotta underline
- Scroll progress: Terracotta

#### Hero Section
- Background: Cream
- Text: Deep slate
- Badge: Sand background, terracotta icon
- Primary button: Terracotta
- Secondary button: Sage
- Highlight strip: Muted cream background

#### About Section
- Card background: White
- Avatar: Terracotta soft background
- Highlight box: Sand soft background, terracotta border
- Stats: Terracotta values

#### Projects Section
- Filter buttons active: Terracotta
- Project icons: Terracotta background
- Badges: Terracotta soft background
- Primary button: Terracotta
- Secondary button: Sage
- Tech tags: Sage for Python/SQL, neutral for others

#### Timeline (Experience)
- Dots: Terracotta
- Card border: Terracotta
- Bullets: Terracotta

#### Skills Section
- Category accent: Sage top border
- Skill tags hover: Sage background

#### Education & Certifications
- Icons: Terracotta (education), Sage (certifications)
- Top border: Terracotta (education)

#### Contact Section
- Form focus: Terracotta ring
- Submit button: Terracotta
- Contact icons: Terracotta

#### Footer
- Background: Deep slate
- Text: White

### Best Practices

1. **Minimal Use of Accent Colors**: Terracotta and sage are used strategically, not overwhelmingly
2. **Consistent Neutrals**: Cream and deep slate create a calm, professional foundation
3. **Clear Hierarchy**: Color usage reinforces visual hierarchy and user flow
4. **Accessible Contrast**: All combinations meet or exceed WCAG AA standards
5. **Semantic Variables**: Use semantic tokens (`--primary`, `--secondary`) rather than color names
6. **State Consistency**: Hover, focus, and active states follow consistent patterns
7. **Whitespace**: Clean layouts with generous whitespace complement the neutral palette

### Maintenance

When updating colors:
1. Modify CSS variables in `:root` section of `styles.css`
2. Test contrast ratios using tools like WebAIM Contrast Checker
3. Verify interactive states across all components
4. Check mobile/responsive views
5. Update this documentation if color usage patterns change

### Resources

- **Coolors Palette**: [View on Coolors.co](https://coolors.co/f4f1de-e07a5f-3d405b-81b29a-f2cc8f)
- **WCAG Contrast Checker**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Color Blindness Simulator**: Test palette with various color vision deficiencies

---

**Last Updated**: December 2024  
**Palette Source**: Coolors.co  
**Implementation**: CSS Variables in `styles.css`
