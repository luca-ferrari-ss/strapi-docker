import { findDuplicatedSlug } from "../../../../utils/findDuplicatedSlug";

module.exports = {
  async beforeCreate(event: any) {
    await findDuplicatedSlug(event, "api::agenda.agenda");
  },

  async beforeUpdate(event: any) {
    await findDuplicatedSlug(event, "api::agenda.agenda");
  },
};
