// See http://brunch.io for documentation.
// main configuration file for brunch.io

// module export to output configuration for generated files
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: {'app.css':/^app/},

  }
};

// module exports for babel, generated sass, and brunch plugins
exports.plugins = {
  babel: {
    presets: ['es2015', 'env','latest']
  },
  sass: {
    options: {
      includePaths: [
        'node_modules/foundation-sites/scss',
        'node_modules/motion-ui/src',
        'node_modules/font-awesome/scss',
        'app/scss/custom'
      ],
      precision: 8
    }
  },
  copycat: {
    verbose: true,
    onlyChanged: true,
    "fonts": [
      "node_modules/font-awesome/fonts"
    ],
    "images": [
      "app/assets/images"
    ],
    "media": [
      "app/assets/media"
    ]
  }
};

// module exports for babel, adding global variables from node_modules
exports.npm = {
  enabled: true,
  compilers: ['babel-brunch'],
  globals: {
    $: 'jquery',
    jQuery: 'jquery',
    MotionUI: 'motion-ui',
    foundation: 'foundation-sites'
  }
};
