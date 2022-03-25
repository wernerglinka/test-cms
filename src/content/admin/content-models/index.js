import pages from "./pages.js";
import posts from "./posts.js";
import data from "./data.js";

console.log(pages);

const { CMS, initCMS: init } = window;
// This global flag enables manual initialization.
window.CMS_MANUAL_INIT = true;
init({
  config: {
    backend: {
      name: "git-gateway",
      branch: "main",
    },
    local_backend: {
      url: "http://localhost:3002/api/v1",
    },
    publish_mode: "editorial_workflow",
    media_folder: "src/assets/images",
    public_folder: "assets/images",
    collections: [pages, posts, data],
  },
});
