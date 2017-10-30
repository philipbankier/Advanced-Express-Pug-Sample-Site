/**
 * GET /
 * Home page.
 */
exports.home = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

/**
 * GET /
 * Articles page.
 */
exports.articles = (req, res) => {
  res.render('coolStuff/articles', {
    title: 'Articles'
  });
};

/**
 * GET /
 * About page.
 */
exports.about = (req, res) => {
  res.render('about', {
    title: 'About'
  });
};

