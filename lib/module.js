const Api = require('adapt-authoring-api').Module;
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
          route: '/:id?',
          handlers: {
            post: Api.controller.post,
            get: Api.controller.get,
            put: Api.controller.put,
            delete: Api.controller.delete
          }
        }
      ]
    };
  }
}

module.exports = Courses;
