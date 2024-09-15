import { findDuplicatedSlug } from "../../../../utils/findDuplicatedSlug";

module.exports = {
  async beforeCreate(event: any) {
    await findDuplicatedSlug(event, "api::page.page");
  },

  async beforeUpdate(event: any) {
    await findDuplicatedSlug(event, "api::page.page");
  },
};
