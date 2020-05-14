// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Doropomo',
    // siteUrl: 'https://ToolkitForLife.github.io',
    siteUrl: 'https://doropomo.app',
    siteDescription: "Inverted Pomodoro focused for a truly work/life balance",
    titleTemplate: `%s | doropomo.app`,
    icon: 'src/favicon.png',
    plugins: [
        {
        use: 'gridsome-plugin-gtm',
        options: {
            id: 'GTM-WC4HCDW',
            enabled: true,
            debug: true
        }
      }
    ]
};
