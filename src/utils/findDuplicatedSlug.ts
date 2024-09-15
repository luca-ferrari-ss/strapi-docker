import { errors } from "@strapi/utils";

const { ApplicationError } = errors;

// Retrieve locale value of this post
const getLocale = async (id: any, service: any) => {
  const res = await strapi.service(service).findOne(id);

  return res.locale;
};

// Find, if already exist, another post with the same slug in the same locale of this post
export async function findDuplicatedSlug(
  event: { params: { where?: any; data?: any } },
  service: string
) {
  const DEFAULT_LOCALE = process.env.STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE;
  const { data } = event.params;
  const id = event.params?.where?.id ?? null;

  // If we are creating a new entry and `data.locale` exists, use it. Otherwise, use default locale
  const locale = !id
    ? data.locale ?? DEFAULT_LOCALE
    : await getLocale(id, service);

  // Find an entry with the same slug and locale
  const res = await strapi.db
    .query(service)
    .findOne({ where: { slug: data.slug, locale: locale } });

  // Throw an error if a matching slug exists in the chosen locale
  if (res && id != res.id) {
    throw new ApplicationError("Slug already exists in the selected locale!");
  }
}
