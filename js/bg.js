jQuery(document).ready(function() {
  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  particlesJS.load('particles-js', 'https://raw.githubusercontent.com/DanilReznickyi/json-particles/main/config.json', function() {
  console.log('callback - particles.js config loaded');
  });
});