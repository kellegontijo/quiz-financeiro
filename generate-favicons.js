const favicons = require('favicons').default;
const fs = require('fs');
const path = require('path');

const source = 'public/favicon.png'; // Source image(s). `string`, `buffer` or array of `string`
const configuration = {
  path: "/", // Path for overriding default icons path. `string`
  appName: "Quiz Financeiro", // Your application's name. `string`
  appShortName: "QuizFin", // Your application's short_name. `string`. Optional. If not set, appName will be used
  appDescription: "Quiz de Perfil Financeiro para Conscientização", // Your application's description. `string`
  developerName: "Kelle Gontijo", // Your (or your developer's) name. `string`
  developerURL: "https://github.com/kellegontijo/quiz-financeiro", // Your (or your developer's) URL. `string`
  dir: "auto", // Primary text direction for name, short_name, and description
  lang: "pt-BR", // Primary language for name and short_name
  background: "#189AB4", // Background colour for flattened icons. `string`
  theme_color: "#189AB4", // Theme color user for example in Android's task switcher. `string`
  appleStatusBarStyle: "black-translucent", // Style for Apple status bar: "black-translucent", "default", "black". `string`
  display: "standalone", // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
  orientation: "any", // Default orientation: "any", "natural", "landscape", "landscape-primary", "landscape-secondary", "portrait", "portrait-primary", or "portrait-secondary". `string`
  scope: "/", // set of URLs that the browser considers within your app
  start_url: "/", // Start URL when launching the application from a device. `string`
  version: "1.0", // Your application's version string. `string`
  logging: true, // Print logs to console? `boolean`
  pixel_art: false, // Keeps pixels "sharp" when scaling. Only supported in offline mode.
  loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
  icons: {
    // Platform Options:
    // - offset - offset in percentage
    // - background:
    //   * false - use default
    //   * true - force use default, e.g. set background for Android icons
    //   * color - set background for the specified icons
    //   * mask - apply mask in order to create circle icon (applied by default for firefox). `boolean`
    //   * overlayGlow - apply glow effect after mask has been applied (applied by default for firefox). `boolean`
    //   * overlayShadow - apply drop shadow after mask has been applied .`boolean`
    //
    android: true, // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    appleIcon: true, // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    favicons: true, // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    windows: true, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
    yandex: false // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }`
  }
};

const callback = (error, response) => {
  if (error) {
    console.log('Error generating favicons:', error.message); // Error description e.g. "An unknown error has occurred"
    return;
  }
  
  console.log('Favicons generated successfully!');
  console.log('Response keys:', Object.keys(response));
  
  // Write the manifest file
  if (response.manifest) {
    fs.writeFileSync(
      path.join('public', 'manifest.json'),
      JSON.stringify(response.manifest, null, 2)
    );
    console.log('Manifest file created');
  } else {
    console.log('No manifest data in response');
  }
  
  // Write the HTML meta tags to a file
  if (response.html) {
    fs.writeFileSync(
      path.join('public', 'favicons.html'),
      response.html.join('\n')
    );
    console.log('Favicons HTML file created');
  } else {
    console.log('No HTML data in response');
  }
  
  // Write all the icons to the public directory
  if (response.images) {
    response.images.forEach(image => {
      fs.writeFileSync(
        path.join('public', image.name),
        image.contents
      );
    });
    console.log('Icon files created:', response.images.length);
  } else {
    console.log('No image data in response');
  }
};

// Generate the favicons
console.log('Generating favicons...');
favicons(source, configuration, callback);