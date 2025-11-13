# Font Configuration Guide

## Overview

This website uses a combination of **Roslindale** and **Graphik** fonts as specified in the design requirements.

## Font Pairing

### Roslindale (Serif)
- **Usage**: Headings (h1, h2, h3, h4, h5, h6)
- **Type**: Elegant serif typeface
- **Designer**: David Jonathan Ross (DJR)
- **Characteristics**: Distinctive, classic, with elegant curves

### Graphik (Sans-serif)
- **Usage**: Body text, navigation, UI elements
- **Type**: Clean, modern sans-serif
- **Designer**: Commercial Type
- **Characteristics**: Geometric, highly readable, professional

## Current Implementation

The website currently uses **Crimson Pro** (Roslindale-style) and **Inter** (Graphik-style) as high-quality alternatives from Google Fonts because:

1. Roslindale and Graphik are premium fonts requiring paid licenses
2. These alternatives provide similar aesthetic qualities
3. They are freely available through Google Fonts

## How to Use the Actual Roslindale & Graphik Fonts

If you have licenses for the actual fonts, follow these steps:

### Step 1: Obtain Font Files

Purchase or license the fonts from:
- **Roslindale**: https://djr.com/roslindale or Adobe Fonts
- **Graphik**: https://commercialtype.com/catalog/graphik or Adobe Fonts

### Step 2: Add Font Files to Project

1. Create a `/fonts` directory in the project root
2. Add the following font files (WOFF2 and WOFF formats recommended):
   ```
   /fonts/
   ├── Roslindale-Regular.woff2
   ├── Roslindale-Regular.woff
   ├── Roslindale-Bold.woff2
   ├── Roslindale-Bold.woff
   ├── Graphik-Regular.woff2
   ├── Graphik-Regular.woff
   ├── Graphik-Medium.woff2
   ├── Graphik-Medium.woff
   ├── Graphik-Semibold.woff2
   ├── Graphik-Semibold.woff
   ├── Graphik-Bold.woff2
   └── Graphik-Bold.woff
   ```

### Step 3: Update CSS

In `styles.css`, uncomment the `@font-face` declarations at the top of the file (lines 17-74) to load the font files.

### Step 4: Update Font Variables

In `styles.css`, update the CSS variables (around line 110-113) to use the actual font names:

```css
--font-family: 'Graphik', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-family-heading: 'Roslindale', Georgia, serif;
--font-family-mono: 'Graphik', 'Courier New', monospace;
```

### Step 5: Update HTML (Optional)

If using Adobe Fonts instead of self-hosting, replace the Google Fonts links in `index.html` with your Adobe Fonts kit code:

```html
<link rel="stylesheet" href="https://use.typekit.net/YOUR-KIT-ID.css">
```

Then update the CSS variables to use the font names provided by Adobe Fonts.

## Font Fallbacks

The current implementation includes proper fallback stacks:

- **Headings**: `'Crimson Pro', Georgia, serif`
  - Falls back to Georgia (serif) if Crimson Pro fails to load
  
- **Body Text**: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
  - Falls back to system fonts if Inter fails to load

## Font Weights Used

The following font weights are used throughout the site:

- **300** (Light): Minimal use
- **400** (Regular): Body text, normal paragraph text
- **500** (Medium): Some UI elements
- **600** (Semibold): Navigation links, subheadings
- **700** (Bold): Section titles, strong emphasis
- **800** (Extra Bold): Hero title, major headings

## License Considerations

⚠️ **Important**: 
- Roslindale and Graphik are **premium commercial fonts**
- Licenses must be purchased for production use
- The current Google Fonts alternatives (Crimson Pro and Inter) are free and open-source
- If deploying to a website, ensure you have proper web font licenses

## Performance Optimization

The implementation includes:
- `font-display: swap` for better perceived performance
- Preconnect hints for faster font loading
- WOFF2 format prioritized for smaller file sizes
- Fallback fonts to prevent FOUT (Flash of Unstyled Text)

## Testing

To verify the fonts are loading correctly:

1. Open browser DevTools
2. Go to Network tab
3. Filter by "Font"
4. Reload the page
5. Verify font files are loading with 200 status

## Support

For licensing questions:
- Roslindale: support@djr.com
- Graphik: info@commercialtype.com

For Adobe Fonts: helpx.adobe.com/fonts.html
