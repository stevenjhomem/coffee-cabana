const puppeteer = require('puppeteer');
const fs = require('fs');

async function measurePageMetrics(page, url, name) {
  await page.goto(url, { waitUntil: 'networkidle2' });
  
  // Get performance metrics
  const metrics = await page.evaluate(() => {
    return new Promise((resolve) => {
      // Use PerformanceObserver to get real metrics
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcpEntry = entries.find(entry => entry.entryType === 'largest-contentful-paint');
        if (lcpEntry) {
          observer.disconnect();
          resolve({
            lcp: lcpEntry.startTime,
            fcp: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
            navigationStart: performance.timing.navigationStart,
            domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
            loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart
          });
        }
      });
      observer.observe({entryTypes: ['largest-contentful-paint']});
      
      // Fallback after 5 seconds
      setTimeout(() => {
        observer.disconnect();
        resolve({
          lcp: 0,
          fcp: performance.getEntriesByType('paint').find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
          navigationStart: performance.timing.navigationStart,
          domContentLoaded: performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart,
          loadComplete: performance.timing.loadEventEnd - performance.timing.navigationStart
        });
      }, 5000);
    });
  });

  return { name, url, ...metrics };
}

async function runBaseline() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const baseUrl = 'http://localhost:3000';
  const pages = [
    { url: `${baseUrl}/story`, name: 'Portuguese Story Page' },
    { url: `${baseUrl}/en/story`, name: 'English Story Page' },
    { url: `${baseUrl}/`, name: 'Portuguese Homepage' },
    { url: `${baseUrl}/en`, name: 'English Homepage' }
  ];

  console.log('🔍 Running baseline performance measurements...\n');
  
  const results = [];
  for (const testPage of pages) {
    try {
      console.log(`Testing ${testPage.name}...`);
      const metrics = await measurePageMetrics(page, testPage.url, testPage.name);
      results.push(metrics);
      console.log(`✅ ${testPage.name}: LCP ${Math.round(metrics.lcp)}ms, FCP ${Math.round(metrics.fcp)}ms, Load ${Math.round(metrics.loadComplete)}ms\n`);
    } catch (error) {
      console.error(`❌ Error testing ${testPage.name}:`, error.message);
    }
  }

  await browser.close();

  // Save results
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `baseline-${timestamp}.json`;
  fs.writeFileSync(`scripts/${filename}`, JSON.stringify(results, null, 2));
  
  console.log('📊 BASELINE METRICS SUMMARY');
  console.log('================================');
  results.forEach(result => {
    console.log(`${result.name}:`);
    console.log(`  LCP: ${Math.round(result.lcp)}ms`);
    console.log(`  FCP: ${Math.round(result.fcp)}ms`);
    console.log(`  Load Complete: ${Math.round(result.loadComplete)}ms`);
    console.log('');
  });

  return results;
}

if (require.main === module) {
  runBaseline().catch(console.error);
}

module.exports = { runBaseline };