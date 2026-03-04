export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const userAgent = request.headers.get('user-agent') || '';

        // Crawler detection
        const isCrawler = /bot|crawler|spider|googlebot|bingbot|yandex/i.test(userAgent);

        if (isCrawler) {
            // Return pre-rendered HTML for basic SEO
            return new Response(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <title>Court Mate - Smart AI Agent & BWF Calendar</title>
              <meta name="description" content="AI-powered badminton tournament simulation and analysis tool. Find tournaments, simulate results, get personalized recommendations based on BWF rankings.">
              <meta name="keywords" content="badminton, BWF, tournament, simulator, AI, analysis, ranking, player search">
              <meta property="og:title" content="Court Mate - Smart Badminton Tournament Assistant">
              <meta property="og:description" content="AI-powered tournament analysis for badminton players">
              <meta property="og:image" content="https://courtmate.pages.dev/og-image.jpg">
              <meta property="og:url" content="https://courtmate.pages.dev">
              <meta property="og:type" content="website">
            </head>
            <body>
              <h1>Court Mate</h1>
              <h2>Smart AI Agent & BWF Calendar</h2>
              <p>Intelligent tournament simulation and player analysis for badminton players, tailored to BWF regulations.</p>
              <nav>
                <a href="/">Home</a>
                <a href="/?sim=true">Tournament Simulator</a>
                <a href="/?search=true">Player Search</a>
              </nav>
            </body>
          </html>
        `, {
                headers: {
                    'content-type': 'text/html;charset=UTF-8',
                    'cache-control': 'public, max-age=3600'
                }
            });
        }

        // Serve normal SPA application to regular users
        return env.ASSETS.fetch(request);
    }
};

