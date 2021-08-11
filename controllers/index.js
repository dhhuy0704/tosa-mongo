'use strict';

const index = async (req, res, next) => {
  try {
      const title = {text: 'This is index page'};

      res.render('index', title);
  } catch (e) {
      next(e);
  }
}

const Controllers = {
  index
};

module.exports = Controllers;
