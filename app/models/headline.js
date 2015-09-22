import DS from 'ember-data';

export default DS.Model.extend({
  lead: DS.attr(),
  pictureURL: DS.attr(),
  bodyText: DS.attr()
});
