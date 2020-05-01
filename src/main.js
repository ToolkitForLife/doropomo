// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}

import VueGtm from 'vue-gtm';
import VueRouter from 'vue-router';
const router = new VueRouter({ routes, mode, linkActiveClass });
 
Vue.use(VueGtm, {
  id: 'GTM-WC4HCDW', // Your GTM single container ID or array of container ids ['GTM-xxxxxxx', 'GTM-yyyyyyy']
/*   queryParams: { // Add url query string when load gtm.js with GTM ID (optional)
    gtm_auth:'AB7cDEf3GHIjkl-MnOP8qr',
    gtm_preview:'env-4',
    gtm_cookies_win:'x'
  }, */
  enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
  debug: true, // Whether or not display console logs debugs (optional)
  loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional) 
  vueRouter: router, // Pass the router instance to automatically sync with router (optional)
  ignoredViews: ['homepage'] // If router, you can exclude some routes name (case insensitive) (optional)
});