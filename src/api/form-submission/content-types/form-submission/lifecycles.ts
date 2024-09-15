/**
 * Utility function to transform a camelCase key
 * into a human-readable format, e.g., "userName" -> "User name"
 */
const transformCamelCaseKey = (key) => {
  const words = key.replace(/([A-Z])/g, " $1").toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
};

/**
 * Utility function to transform all keys in an object from camelCase
 * into a human-readable format by splitting words and capitalizing the first
 */
const transformKeysCamelCase = (obj) => {
  return Object.keys(obj).reduce((acc, key) => {
    const newKey = transformCamelCaseKey(key);
    acc[newKey] = obj[key]; // Retain original value
    return acc;
  }, {});
};

module.exports = {
  async afterCreate(event: any) {

    // Email destination address
    const toEmail = event?.result?.toEmail;

    if (toEmail) {
      // Importing lodash for email templates
      const _ = require("lodash");

      try {
        const formData = event?.result?.formData;
        const attachmentId = event?.params?.data?.attachment?.connect[0];

        let attachmentName = null;
        let attachmentUrl = null;

        // Retrieving attachment file from attachment id
        if (!(typeof attachmentId === "undefined" || attachmentId === null)) {
          try {
            const file = await strapi.entityService.findOne(
              "plugin::upload.file",
              attachmentId
            );
            attachmentName = file.name;
            attachmentUrl = file.url;
          } catch (error) {
            console.log("Error retrieving attachment", error);
          }
        }

        // Modify only the "file" key in the formData to use attachmentUrl
        if (formData?.file) {
          formData["file"] = attachmentUrl; // Update just the file key
        }

        // Transform the camelCase keys to human-readable format
        const transformedFormData = transformKeysCamelCase(formData);

        // Dynamic HTML template
        const htmlTemplate = `
<html>
  <body>
    <h1>Ciao, questi sono i dati del form che sono stati compilati:</h1>
    <ul>
      <% _.forEach(data, function(value, key) { %>
        <li><strong><%= key %>:</strong> <%= value %></li>
      <% }) %>
    </ul>
  </body>
</html>
`;

        // Dynamic plain-text template
        const textTemplate = `
Ciao, questi sono i dati del form che sono stati compilati:

<% _.forEach(data, function(value, key) { %>
  <%= key %>: <%= value %>
<% }) %>
`;

        // Compile the templates
        const compiledHtml = _.template(htmlTemplate);
        const compiledText = _.template(textTemplate);

        // Generate the final HTML and plain-text content with data
        const resultHtml = compiledHtml({ data: transformedFormData });
        const resultText = compiledText({ data: transformedFormData });

        await strapi.plugins["email"].services.email.send({
          to: toEmail,
          // From email not needed, using the default from address
          subject: "Hai ricevuto un nuovo messaggio dal sito web!",
          html: resultHtml,
          text: resultText,
          attachments: [
            {
              filename: attachmentName,
              path: attachmentUrl,
            },
          ],
        });
      } catch (error) {
        console.error("Error sending email:", error);
      }
    } else {
      return;
    }
  },
};
