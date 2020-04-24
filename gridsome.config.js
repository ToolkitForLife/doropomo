// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

console.log('process.env.NODE_ENV: ' + process.env.NODE_ENV);
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    siteName: 'Doropomo',
    siteUrl: 'https://ToolkitForLife.github.io',
    pathPrefix: isDev ? '' : '/doropomo',
    plugins: []
};
