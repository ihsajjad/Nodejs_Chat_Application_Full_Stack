const decorateHtmlResponse = (title) => {
  return function (req, res, next) {
    console.log("line 3 : res");
    res.locals.html = true;
    res.locals.title = `${title} - ${process.env.App_Name}`;
    next();
  };
};

module.exports = decorateHtmlResponse;
