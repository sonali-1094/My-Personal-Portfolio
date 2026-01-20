# Quick Reference Guide - Mobile Responsive CSS

## Responsive Breakpoints Used

```css
/* Mobile First - Phones (320px - 640px) */
@media (max-width: 640px) {
  /* Mobile styles here */
}

/* Tablets (641px - 1024px) */
@media (min-width: 641px) and (max-width: 1024px) {
  /* Tablet styles here */
}

/* Desktop (1025px+) */
@media (min-width: 1025px) {
  /* Desktop styles here */
}
```

---

## Responsive Typography Pattern

```css
/* Scales proportionally on all screens */
font-size: clamp(
  1.8rem,    /* minimum size */
  4vw,       /* ideal size (4% of viewport width) */
  2.5rem     /* maximum size */
);
```

**Used in:**
- Home hero heading
- Section titles
- All major headings

---

## Mobile-First Padding

```css
/* Base (mobile) */
padding: 1rem;

/* Tablet */
@media (min-width: 641px) {
  padding: 1.5rem;
}

/* Desktop */
@media (min-width: 1025px) {
  padding: 2rem;
}
```

---

## Component Layout Pattern

```css
/* Mobile: Single Column */
display: flex;
flex-direction: column;

/* Tablet: Add column layout */
@media (min-width: 641px) {
  display: grid;
  grid-template-columns: 1fr;
}

/* Desktop: Two Columns */
@media (min-width: 1025px) {
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}
```

---

## Button Accessibility

```css
/* Minimum touch size */
button, a {
  min-height: 48px;
}

/* Better focus visibility */
button:focus-visible {
  outline: 2px solid #000;
  outline-offset: 2px;
}
```

---

## Image Responsiveness

```css
/* Images scale with container */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Responsive sizing */
.image-container img {
  width: 100%;  /* Mobile: full width */
  max-width: 400px;  /* Cap maximum size */
  height: auto;  /* Maintain aspect ratio */
}
```

---

## Disabling Hover Effects on Mobile

```css
/* Desktop: Show hover effects */
.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Mobile: Disable hover effects */
@media (max-width: 640px) {
  .card:hover {
    transform: none;
    box-shadow: original-shadow;
  }
}
```

---

## Grid Auto-Fit Pattern

```css
/* Responsive grid that adjusts columns */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
}

/* On small screens: 1 column */
/* On medium: 2-3 columns */
/* On large: 3-4+ columns */
```

---

## Flexbox Responsive Wrap

```css
/* Desktop: Row layout */
.container {
  display: flex;
  gap: 2.5rem;
  flex-wrap: wrap;
}

/* Mobile: Stack items */
@media (max-width: 640px) {
  .container {
    flex-direction: column;
    gap: 1rem;
  }
}
```

---

## Form Input Mobile Sizing

```css
/* Prevent zoom on focus in iOS Safari */
input, textarea, select {
  font-size: 16px;  /* ≥16px prevents zoom */
  padding: 12px;     /* Touch-friendly padding */
  min-height: 48px;  /* Touch target minimum */
}
```

---

## Text Readability

```css
/* Mobile font sizing */
body {
  font-size: 14px;  /* Mobile */
}

@media (min-width: 641px) {
  body {
    font-size: 16px;  /* Tablet+ */
  }
}

/* Line height for readability */
p {
  line-height: 1.6;
}
```

---

## Common Responsive Values Used

| Property | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| Padding | 1rem | 1.5rem | 2rem |
| Gap | 1rem | 1.5rem | 2.5rem |
| Icon Size | 2rem | 2.5rem | 3rem |
| Button Size | 48px | 50px | 50px+ |
| Max Width | 100% | 100% | 1200px |
| Font Size | 14-16px | 16px | 16px+ |

---

## Testing Tips

### Quick Mobile Test in Browser
1. Open DevTools (F12)
2. Press Ctrl + Shift + M
3. Resize viewport to test
4. Check at: 320px, 480px, 640px, 768px, 1024px

### Test Real Devices
1. Find your IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Visit: `http://<YOUR-IP>:5174/`
3. Test on actual phone/tablet

### Check Performance
1. DevTools → Lighthouse
2. Run audit for mobile
3. Target score: 90+

---

## Performance Hints

✅ **Hidden on Mobile for Speed:**
- `.floating-shapes` - Animations disabled
- Complex hover effects - Simplified
- Heavy animations - Removed

✅ **Optimizations Made:**
- Font smoothing enabled
- Scrollbar styling optimized
- Touch-friendly UI
- No layout shift on load

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| Text too small | Use `clamp()` for scaling |
| Buttons hard to tap | Min 48px height/width |
| Overflow scrolling | Use `max-width: 100%` |
| Images cut off | Use aspect-ratio property |
| Animations slow | Hide on mobile |
| Form zoom iOS | Font-size ≥ 16px |

---

## Debugging Responsive Issues

```css
/* Temporary: Show breakpoint indicator */
@media (max-width: 640px) {
  body::before {
    content: "MOBILE";
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    background: red;
    color: white;
    padding: 10px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  body::before {
    content: "TABLET";
    background: orange;
  }
}

@media (min-width: 1025px) {
  body::before {
    content: "DESKTOP";
    background: green;
  }
}
```

---

## Resources for Further Learning

- [MDN Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [CSS Tricks Responsive Design](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)
- [Web.dev Responsive Design](https://web.dev/responsive-web-design-basics/)
- [Smashing Magazine Responsive Design](https://www.smashingmagazine.com/responsive-web-design/)

---

## Summary

Your portfolio now uses:
- ✅ **Mobile-first approach**
- ✅ **Three responsive breakpoints**
- ✅ **Fluid typography**
- ✅ **Touch-friendly design**
- ✅ **Performance optimized**
- ✅ **Accessibility compliant**

**Happy responsive designing! 🎉**
