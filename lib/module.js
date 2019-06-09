const Content = require('adapt-authoring-content').Module;
/**
* @extends {Content}
*/
class Courses extends Content {
  /** @override */
  static get apiName() {
    return 'courses';
  }
  /** @override */
  addModels() {
    this.addModel({
      name: 'course',
      collectionName: 'courses',
      schema: Content.FrameworkSchemas.course
    });
  }
}

module.exports = Courses;
