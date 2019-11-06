/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(
  (function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe("RSS Feeds", function() {
      /* This is our first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty. Experiment with this before you get started on
       * the rest of this project. What happens when you change
       * allFeeds in app.js to be an empty array and refresh the
       * page?
       */
      it("are defined", function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

      /* TODO: Write a test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it("have URLs and they are not empty", function() {
        // each feed
        for (feed of allFeeds) {
          // each feed has URL
          expect(feed.url).toBeDefined();
          // each URL is not empty
          expect(feed.url.length).not.toBe(0);
        }
      });

      /* TODO: Write a test that loops through each feed
       * in the allFeeds object and ensures it has a name defined
       * and that the name is not empty.
       */
      it("have names and they are not empty", function() {
        // each feed
        for (feed of allFeeds) {
          // each feed has name
          expect(feed.name).toBeDefined();
          // each name is not empty
          expect(feed.name.length).not.toBe(0);
        }
      });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe("The menu", function() {
      /* TODO: Write a test that ensures the menu element is
       * hidden by default. You'll have to analyze the HTML and
       * the CSS to determine how we're performing the
       * hiding/showing of the menu element.
       */
      it("is hidden by default", function() {
        // the body element should have the class "menu-hidden"
        // for hiding the menu
        expect(document.body.className).toBe("menu-hidden");
      });

      /* TODO: Write a test that ensures the menu changes
       * visibility when the menu icon is clicked. This test
       * should have two expectations: does the menu display when
       * clicked and does it hide when clicked again.
       */
      it("changes visibility when clicked", function() {
        // get menu icon
        const menuIcon = $(".menu-icon-link");
        // function to toggle the class of body element
        // when the icon is clicked
        function toggleClass() {
          menuIcon.on("click", function() {
            $("body").toggleClass("menu-hidden");
          });
        }
        // click to show menu
        toggleClass();
        // body no longer has the class "menu-hidden"
        expect(document.body.className).not.toBeDefined;
        // click to hide menu
        toggleClass();
        // body has the class "menu-hidden"
        expect(document.body.className).toBe("menu-hidden");
      });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe("Initial Entries", function() {
      /* TODO: Write a test that ensures when the loadFeed
       * function is called and completes its work, there is at least
       * a single .entry element within the .feed container.
       * Remember, loadFeed() is asynchronous so this test will require
       * the use of Jasmine's beforeEach and asynchronous done() function.
       */
      // get the container that holds all feeds
      const container = document.querySelector(".feed");
      // before expectation
      beforeEach(function(done) {
        // first entry in allFeeds array
        const index = 0;
        // call loadFeed function and pass on the done function
        // to know whenever loadFeed completes its work
        loadFeed(index, done);
      });
      it("are loaded", function(done) {
        // expect that container's first child exists
        expect(container.firstChild).toBeDefined();
        // call done() function here to declare that this expectation
        // relies on the async operation defined above
        done();
      });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe("New Feed Selection", function() {
      /* TODO: Write a test that ensures when a new feed is loaded
       * by the loadFeed function that the content actually changes.
       * Remember, loadFeed() is asynchronous.
       */
      const container = document.querySelector(".feed");
      // save initial content of the container
      const innerHtml = container.innerHTML;
      beforeEach(function(done) {
        // second entry in allFeeds array
        const index = 1;
        // call loadFeed
        loadFeed(index, done);
      });
      it("changes content", function(done) {
        // expect that the content of container now is different
        // than the initial content
        expect(container.innerHTML).not.toEqual(innerHtml);
        // call done()
        done();
      });
    });
  })()
);
