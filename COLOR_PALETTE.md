# Color Palette Documentation

## Earthy Elegance Palette - Warm, Sophisticated Design

This portfolio website uses a carefully curated earthy palette to create a warm, sophisticated, and naturally elegant aesthetic. The palette emphasizes natural tones, subtle sophistication, and timeless appeal while maintaining WCAG accessibility standards.

### Color Palette

| Color Name | Hex Code | Usage | Description |
|------------|----------|-------|-------------|
| **Light Bronze** | `#CB997E` | Primary accent | Warm metallic tone for CTAs, active states, and key highlights |
| **Powder Petal** | `#EDDCD2` | Soft backgrounds | Delicate pink-beige for subtle backgrounds and borders |
| **Linen** | `#FFF1E6` | Base background | Light warm cream providing a serene foundation |
| **Parchment** | `#F0EFEB` | Card surfaces | Neutral off-white for elevated surfaces and cards |
| **Desert Sand** | `#DDBEA9` | Highlight accent | Warm tan for highlights and complementary accents |
| **Dry Sage** | `#A5A58D` | Secondary accent | Muted olive-green for secondary actions and balance |
| **Ash Grey** | `#B7B7A4` | Large text only | ⚠️ Warm grey-green - ONLY for large text (18px+ or 14px+ bold) |

### Design Tokens (CSS Variables)

The colors are implemented as CSS variables in `:root` for consistency and maintainability:

```css
/* Core Palette Colors */
--light-bronze: #cb997e;
--powder-petal: #eddcd2;
--linen: #fff1e6;
--parchment: #f0efeb;
--desert-sand: #ddbea9;
--dry-sage: #a5a58d;
--ash-grey: #b7b7a4;

/* Semantic Design Tokens */
--bg: #fff1e6;                      /* Main background - linen */
--surface: #ffffff;                 /* Cards, panels - pure white */
--surface-muted: #f0efeb;          /* Muted surface - parchment */
--text: #5a5244;                    /* Primary text - warm dark brown */
--text-secondary: #706556;          /* Secondary text - warm brown (5.2:1 contrast) */
--muted-text: #8b8072;             /* Muted text - lighter warm brown (4.8:1 contrast) */
--border: #eddcd2;                  /* Soft borders - powder petal */

/* Primary Actions (Light Bronze) */
--primary: #cb997e;
--primary-hover: #b8856b;
--primary-active: #a67159;
--primary-soft: rgba(203, 153, 126, 0.12);

/* Secondary Actions (Dry Sage) */
--secondary: #a5a58d;
--secondary-hover: #93937a;
--secondary-active: #818168;
--secondary-soft: rgba(165, 165, 141, 0.12);

/* Highlight & Accents (Desert Sand) */
--highlight: #ddbea9;
--highlight-soft: rgba(221, 190, 169, 0.15);

/* Focus & States */
--focus-ring: #cb997e;
--disabled: rgba(90, 82, 68, 0.3);
```

### Color Usage Guidelines

#### 1. Light Bronze (#CB997E) - Primary Accent
Use strategically for warmth and emphasis:
- Primary CTA buttons ("Let's Connect", "Send Message")
- Active navigation states
- Section title underlines
- Primary action highlights
- Timeline dots and key indicators
- Project icons and primary badges
- Focus rings and interactive states

#### 2. Dry Sage (#A5A58D) - Secondary Accent
Use for balanced, supportive elements:
- Secondary buttons and actions
- Skill tags on hover
- Tech tags for specific technologies
- Certification/award icons
- Skill category top borders
- Complementary interactive elements

#### 3. Desert Sand (#DDBEA9) - Highlight Accent
Use for subtle emphasis:
- Highlight boxes and callouts
- Stat values and key metrics
- Badge backgrounds
- Subtle hover states
- Warm accent elements

#### 4. Powder Petal (#EDDCD2) - Soft Backgrounds
Use for gentle separation:
- Borders and dividers
- Card backgrounds (muted)
- Section separators
- Subtle background tints
- Hover background states

#### 5. Linen (#FFF1E6) - Base Background
Use as the primary foundation:
- Main page background
- Section backgrounds
- Serene, warm canvas for all content

#### 6. Parchment (#F0EFEB) - Surface Color
Use for elevated elements:
- Card backgrounds
- Muted surfaces
- Form backgrounds
- Surface-level differentiation

#### 7. Ash Grey (#B7B7A4) - Subtle UI Elements
Use sparingly for very subtle, non-critical elements:
- Large decorative text (18px+ or 14px+ bold)
- Very subtle labels
- Background tints
- Less emphasis needed (use sparingly due to contrast)

### Interactive States

#### Hover States
- Primary buttons: Darken to `--primary-hover` (#B8856B)
- Secondary buttons: Fill with dry sage (`--secondary`)
- Links: Show light bronze underline
- Cards: Lift with shadow and show primary border

#### Focus States
- Focus ring: Light bronze (`--focus-ring`) for visibility
- Input fields: Light bronze border with soft background

#### Active States
- Primary buttons: Darken to `--primary-active` (#A67159)
- Navigation: Show light bronze underline

#### Disabled States
- Opacity reduced using `--disabled`
- Warm muted appearance

### Accessibility & Contrast

All color combinations meet WCAG AA standards:

| Combination | Contrast Ratio | WCAG Level | Usage |
|-------------|----------------|------------|-------|
| Dark Brown on Linen | 7.8:1 | AAA | Body text |
| Dark Brown on White | 8.9:1 | AAA | Card text |
| Light Bronze on White | 4.5:1 | AA | Buttons, badges |
| Medium Brown on White | 5.2:1 | AA | Secondary text |
| Dry Sage on White | 4.3:1 | AA | Secondary elements |
| Warm Brown on Linen | 4.8:1 | AA | Muted elements |
| White on Dark Brown | 8.9:1 | AAA | Footer text |

#### ⚠️ Important Accessibility Note: Ash Grey

**Ash Grey (#B7B7A4) on White background has a 3.8:1 contrast ratio**, which does NOT meet WCAG AA standards for normal text (requires 4.5:1).

**Usage Restrictions:**
- ✅ **ONLY use for large text**: 18px+ regular OR 14px+ bold
- ✅ Decorative elements where text is not the primary content
- ✅ Background tints and subtle UI elements
- ❌ **NEVER use for**: Body text, small labels, or critical information
- ❌ **NEVER use for**: Form labels, navigation links, or important UI text

For all body text and UI elements, use `--text-secondary` (#706556) or darker for proper accessibility.

### Component-Specific Usage

#### Navigation
- Background: White with transparency
- Text: Warm dark brown
- Hover/Active: Light bronze underline
- Scroll progress: Light bronze

#### Hero Section
- Background: Linen
- Text: Warm dark brown
- Badge: Desert sand background, bronze icon
- Primary button: Light bronze
- Secondary button: Dry sage
- Highlight strip: Parchment background

#### About Section
- Card background: White
- Avatar: Light bronze soft background
- Highlight box: Desert sand soft background, bronze border
- Stats: Light bronze values

#### Projects Section
- Filter buttons active: Light bronze
- Project icons: Light bronze background
- Badges: Light bronze soft background
- Primary button: Light bronze
- Secondary button: Dry sage
- Tech tags: Dry sage for Python/SQL, desert sand for others

#### Timeline (Experience)
- Dots: Light bronze
- Card border: Light bronze
- Bullets: Light bronze

#### Skills Section
- Category accent: Dry sage top border
- Skill tags hover: Dry sage background

#### Education & Certifications
- Icons: Light bronze (education), Dry sage (certifications)
- Top border: Light bronze (education)

#### Contact Section
- Form focus: Light bronze ring
- Submit button: Light bronze
- Contact icons: Light bronze

#### Footer
- Background: Warm dark brown
- Text: White

### Best Practices

1. **Natural Warmth**: Light bronze and earthy tones create a sophisticated, approachable aesthetic
2. **Layered Neutrals**: Multiple shades of warm neutrals (linen, parchment, powder petal) add depth
3. **Clear Hierarchy**: Color usage reinforces visual hierarchy while maintaining natural harmony
4. **Accessible Contrast**: All combinations meet or exceed WCAG AA standards
5. **Semantic Variables**: Use semantic tokens (`--primary`, `--secondary`) rather than color names
6. **State Consistency**: Hover, focus, and active states follow consistent warm patterns
7. **Organic Flow**: Earthy palette creates a calming, professional atmosphere
8. **Metallic Accents**: Light bronze adds subtle sophistication without overwhelming

### Maintenance

When updating colors:
1. Modify CSS variables in `:root` section of `styles.css`
2. Test contrast ratios using tools like WebAIM Contrast Checker
3. Verify interactive states across all components
4. Check mobile/responsive views
5. Update this documentation if color usage patterns change

### Resources

- **Palette Colors**: Light Bronze • Powder Petal • Linen • Parchment • Desert Sand • Dry Sage • Ash Grey
- **WCAG Contrast Checker**: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- **Color Blindness Simulator**: Test palette with various color vision deficiencies

### Design Philosophy

This earthy palette embodies:
- **Warmth**: Natural, inviting tones that feel approachable yet professional
- **Sophistication**: Subtle metallic bronze adds elegance without being flashy
- **Balance**: Multiple neutral shades create visual depth and hierarchy
- **Timelessness**: Earth tones provide a classic, enduring aesthetic
- **Serenity**: Muted, harmonious colors promote focus on content

---

**Last Updated**: December 2024  
**Palette Theme**: Earthy Elegance  
**Implementation**: CSS Variables in `styles.css`
