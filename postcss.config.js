console.log('PostCSS Sorting Config Loaded');

module.exports = {
  plugins: [
    require('postcss-sorting')({
      order: [
        'custom-properties', // Custom CSS properties (e.g., --main-color)
        'dollar-variables',  // SCSS variables (e.g., $primary-color)
        'at-variables',      // SCSS at-variables (e.g., @mixin, @include)
        'declarations',      // CSS properties
        'rules',             // Standard CSS rules (e.g., body, p, div)
        'at-rules',          // CSS at-rules (e.g., @media, @keyframes)
      ],
      'properties-order': [
        // Positioning
        'position', 'z-index', 'top', 'right', 'bottom', 'left',

        // Box Model
        'display', 'float', 'clear', 'overflow',

        // Dimensions
        'width', 'min-width', 'max-width', 'height', 'min-height', 'max-height',

        // Spacing
        'margin', 'padding',

        // Borders & Appearance
        'border', 'border-radius', 'box-shadow', 'outline',

        // Typography
        'font', 'font-style', 'font-variant', 'font-weight', 'font-size', 
        'line-height', 'letter-spacing', 'text-align', 'text-transform', 'color',

        // Background & Effects
        'background', 'background-color', 'background-image', 'background-size',
        'opacity', 'visibility',

        // Animation & Transform
        'animation', 'transition', 'transform'
      ],
      'unspecified-properties-position': 'bottom', // Place unspecified properties at the bottom
    }),
    require('autoprefixer'), // Automatically add vendor prefixes
  ],
};
