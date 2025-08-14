const lighthouse = require('lighthouse').default;
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

async function runLighthouse(url, name) {
  const chrome = await chromeLauncher.launch({chromeFlags: ['--headless']});
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
  };

  const runnerResult = await lighthouse(url, options);
  await chrome.kill();

  const metrics = {
    name,
    url,
    lcp: runnerResult.lhr.audits['largest-contentful-paint'].numericValue,
    fcp: runnerResult.lhr.audits['first-contentful-paint'].numericValue,
    ttfb: runnerResult.lhr.audits['server-response-time'].numericValue,
    cls: runnerResult.lhr.audits['cumulative-layout-shift'].numericValue,
    performanceScore: runnerResult.lhr.categories.performance.score * 100
  };

  return metrics;
}

async function measureBaseline() {
  const baseUrl = 'http://localhost:3000';
  const pages = [
    { url: `${baseUrl}/story`, name: 'Portuguese Story Page' },
    { url: `${baseUrl}/en/story`, name: 'English Story Page' },
    { url: `${baseUrl}/`, name: 'Portuguese Homepage' },
    { url: `${baseUrl}/en`, name: 'English Homepage' },
    { url: `${baseUrl}/menu`, name: 'Portuguese Menu' },
    { url: `${baseUrl}/en/menu`, name: 'English Menu' }
  ];

  console.log('🔍 Running baseline performance measurements...\n');

  const results = [];
  for (const page of pages) {
    try {
      console.log(`Testing ${page.name}...`);
      const metrics = await runLighthouse(page.url, page.name);
      results.push(metrics);
      console.log(`✅ ${page.name}: LCP ${metrics.lcp}ms, FCP ${metrics.fcp}ms, TTFB ${metrics.ttfb}ms\n`);
    } catch (error) {
      console.error(`❌ Error testing ${page.name}:`, error.message);
    }
  }

  // Save baseline results
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `baseline-${timestamp}.json`;
  const filepath = path.join(__dirname, filename);
  
  fs.writeFileSync(filepath, JSON.stringify(results, null, 2));
  console.log(`📊 Baseline results saved to: ${filename}\n`);

  // Display summary
  console.log('📈 BASELINE METRICS SUMMARY');
  console.log('================================');
  results.forEach(result => {
    console.log(`${result.name}:`);
    console.log(`  LCP: ${result.lcp}ms`);
    console.log(`  FCP: ${result.fcp}ms`);
    console.log(`  TTFB: ${result.ttfb}ms`);
    console.log(`  Performance Score: ${result.performanceScore}`);
    console.log('');
  });

  return results;
}

if (require.main === module) {
  measureBaseline().catch(console.error);
}

module.exports = { runLighthouse, measureBaseline };