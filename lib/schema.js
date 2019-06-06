const ContentSchema = require('adapt-authoring-content').Schema;
/**
* Abstract representation of Adapt content
*/
class CourseSchema extends ContentSchema {
  /** @override */
  static get name() {
    return 'course';
  }
  /** @override */
  static get attributes() {
    return Object.assign(super.attributes, {
      title: ContentSchema.Types.String,
      body: ContentSchema.Types.String
    });
  }
}

module.exports = CourseSchema;
