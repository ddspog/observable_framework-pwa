const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

// See https://observablehq.com/framework/config for documentation.
export default {
  // The project’s title; used in the sidebar and webpage titles.
  title: "Template for an Observable Framework project for PWA apps.",

  // The pages and sections in the sidebar. If you don’t specify this option,
  // all pages will be listed in alphabetical order. Listing pages explicitly
  // lets you organize them into sections and have unlisted pages.
  // pages: [
  //   {
  //     name: "Examples",
  //     pages: [
  //       {name: "Dashboard", path: "/example-dashboard"},
  //       {name: "Report", path: "/example-report"}
  //     ]
  //   }
  // ],

  // Content to add to the head of the page, e.g. for a favicon:
  head: html`
    <!-- Imports the manifest to represent the web application. A web app must have a manifest to be a PWA. -->
    <link rel="manifest" href="manifest.json" />
    <link rel="icon" href="observable.png" type="image/png" sizes="32x32">`,

  // what to show in the footer (HTML) defaults to "Built with Observable."
  footer: html`
    <div>
      Built with <a href="https://observablehq.com/" target="_blank" rel="noopener noreferrer">Observable</a> on <a title="today">${(new Date()).toDateString().slice(4, 15)}</a>.
    </div>
    <script>
      if ('serviceWorker' in navigator) {
        window.onload = () => {
          navigator.serviceWorker.register(
            'service-worker.js'
          );
        }
      }
    </script>`,

  // The path to the source root.
  root: "src",

  // Some additional configuration options and their defaults:
  // theme: "default", // try "light", "dark", "slate", etc.
  // header: "", // what to show in the header (HTML)
  // sidebar: true, // whether to show the sidebar
  // toc: true, // whether to show the table of contents
  // pager: true, // whether to show previous & next links in the footer
  // output: "dist", // path to the output root for build
  // search: true, // activate search
  // linkify: true, // convert URLs in Markdown to links
  // typographer: false, // smart quotes and other typographic improvements
  // cleanUrls: true, // drop .html from URLs
};
