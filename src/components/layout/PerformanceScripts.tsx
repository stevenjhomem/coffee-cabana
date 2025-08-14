export default function PerformanceScripts() {
  return (
    <script dangerouslySetInnerHTML={{
      __html: `
        // Defer video loading until after LCP - only on homepage
        document.addEventListener('DOMContentLoaded', function() {
          // Only preload video on homepage routes that use HeroSection
          var path = window.location.pathname;
          var isHomepage = path === '/' || path === '/en' || path.match(/^\\/[a-z]+$/);
          
          if (isHomepage) {
            // Video will be loaded on-demand by HeroSection component
            // No need to preload since it's not immediately visible
          }
        });
        
        // Service worker cleanup - only clear outdated caches
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.getRegistrations().then(function(registrations) {
            registrations.forEach(function(registration) {
              if (registration.scope.includes('old-domain') || registration.scope.includes('sw.js')) {
                registration.unregister();
              }
            });
          });
        }
      `
    }} />
  )
}
