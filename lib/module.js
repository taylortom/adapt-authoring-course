const Api = require('adapt-authoring-api');
const Schemas = require('adapt-authoring-framework').schemas;
/**
* @extends {Api}
*/
class Courses extends Api {
  /** @override */
  static get def() {
    return {
      name: 'courses',
      schemas: [ Schemas.course ],
      routes: [
        {
          route: '/:_id?',
          handlers: {
            post: Courses.requestHandler(),
            get: Courses.requestHandler(),
            put: Courses.requestHandler(),
            delete: Courses.requestHandler()
          }
        }
      ]
    };
  }
}

module.exports = Courses;
