const props = {
  title: "order · zircus",
  siteUrl: "https://zircus.netlify.app",
  siteName: "zircus",
  orderUrl: {
    en: (email, orderId) =>
      `${props.siteUrl}/my-order/?email=${email}&orderId=${orderId}`,
    fr: (email, orderId) =>
      `${props.siteUrl}/fr/votre-ordre/?email=${email}&orderId=${orderId}`,
  },
  homeLink: {
    en: "Go to Zircus Home Page",
    fr: "Page d'accueil Zircus",
  },
  orderId: {
    en: "Order Id",
    fr: "Id de commande",
  },
  heading: {
    en: "Thanks for your order",
    fr: "Merci pour votre commande",
  },
  total: {
    en: "Total",
    fr: "Total",
  },
  emailFooter: {
    en:
      "This email was sent automatically. Please do not reply directly to this email. For support inquiries please contact us at ",
    fr:
      "Cet e-mail a été envoyé automatiquement. Veuillez ne pas répondre directement à cet e-mail. Pour les demandes d'assistance, veuillez nous contacter à ",
  },
  supportEmail: "support@zircus.ca",
};

module.exports = {
  orderTemplateText: (order) => `
    ${props.siteName}

    ${props.heading[order.preferredLanguage]}

    ${props.orderId[order.preferredLanguage]}: ${order.id}
    ${props.total[order.preferredLanguage]}: ${order.total}

    ${order.name}
    ${order.email}
    ${order.address.line1}
    ${order.address.line2}
    ${order.address.city}, ${order.address.state}
    ${order.address.country} ${order.address.postalCode}
    
    ---------------
    ${
    order.items
      .map(
        (item) => item.name,
      )
      .join("\n")
  }
    ---------------

    ${props.siteName}
    ${props.siteUrl} 
    View your order at: ${
    props.orderUrl[order.preferredLanguage](order.email, order.orderId)
  }
    Your unique order identifier is: ${order.identifier}

    ${props.emailFooter}${props.supportEmail}.
    `,
  orderTemplate: (order) => `
<!DOCTYPE html>
<html lang="${order.preferredLanguage}">
  <head>
    <title>${props.title}</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div style="
        color: #211b22;
        background-color: #f9f8fa;
        font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
          sans-serif;
        max-width: 736px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 24px;
        padding: 24px;
        line-height: 1.5;
        ">
    <style>
    @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Nunito:ital,wght@0,400;0,600;1,600&display=swap");
    </style>
      <header style="
        color: #211b22;
        display: flex;
        align-items: center;
        padding: 4px;
      ">
        <a href="${props.siteUrl}" style="color: #211b22" aria-label="${
    props.homeLink[order.preferredLanguage]
  }">
          <img src="${props.siteUrl}/logo.png" alt="Zircus Logo" style="height: 32px; object-fit: contain" />
        </a>
      </header>
      <main role="main" style="padding: 4px">
        <h1 style="line-height: 1.2">${
    props.heading[order.preferredLanguage]
  }</h1>
        <p><a href="${
    props.orderUrl[order.preferredLanguage](order.email, order.orderId)
  }">View status of order on Zircus website</a>. Your order identifier is: <kbd style="padding: 2px 4px; font-size: 16px; border-radius: 4px; background-color: #e4e0e6; margin-left: 2px">${order.identifier}</kbd></p>
        <div style="margin-top: 24px">
          <address style="display: block">
            <strong>${order.name}</strong><br />
            <a href="mailto:${order.email}">${order.email}</a><br />
            <a href="tel:${order.phone}">${order.phone}</a><br />
            ${order.address.line1}<br />
            ${order.address.line2 ? `${order.address.line2}<br />` : ""}
            ${order.address.city}, ${order.address.state}<br />
            ${order.address.country} ${order.address.postalCode}<br />
          </address>
            <ul>
              <li>${
    props.orderId[order.preferredLanguage]
  }: <kbd style="font-size: 16px; padding: 2px 4px; background-color: #e4e0e6; border-radius: 4px; margin-left: 2px">${order.id}</kbd></li>
            <li><strong>Status: ${
    order.hasShipped ? "shipped" : "not yet shipped"
  }</strong></li>
            <li><strong>${props.total[order.preferredLanguage]}: $${
    order.total.toFixed(2)
  }</strong></li>
        </div>
        <div style="margin-top: 24px">
            ${
    order.items
      .map((item) => {
        return `<a href="${props.siteUrl}/products/${item.url}" style="
                    border-top: 2px solid #e4e0e6;
                    box-sizing: border-box;
                    padding: 12px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 8px;
                    width: 100%;
                    text-decoration: none;
                    color: #211b22;
                ">
                <img
                src="${props.siteUrl}${item.image}"
                alt="${item.name}"
                style="object-fit: contain; height: 48px; margin-right: 8px"
                />
                <p><span>${item.name}</span> - <span>x${item.quantity}</span></p>
            </a>`;
      })
      .join("\n")
  }
        </div>
      </main>
      <footer style="margin-top: 48px; padding-top: 48px; line-height: 1.2"><small>${
    props.emailFooter[order.preferredLanguage]
  }<a href="mailto:${props.supportEmail}">${props.supportEmail}</a>.</small></footer>
    </div>
  </body>
</html>
`,
};
