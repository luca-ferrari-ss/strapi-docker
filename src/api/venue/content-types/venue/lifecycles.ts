import { findDuplicatedSlug } from "../../../../utils/findDuplicatedSlug";

module.exports = {
  async beforeCreate(event: any) {
    await findDuplicatedSlug(event, "api::venue.venue");
  },

  async beforeUpdate(event: any) {
    await findDuplicatedSlug(event, "api::venue.venue");
  },
};
