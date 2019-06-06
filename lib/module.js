const Content = require('adapt-authoring-content');
const path = require('path');

class Courses extends Content.Module {
  /** @override */
  get schemaPaths() {
    return {
      course: path.join(__dirname, 'schema')
    };
  }
}

module.exports = Courses;
