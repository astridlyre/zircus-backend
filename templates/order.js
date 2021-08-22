const props = {
  title: "order · zircus",
  siteUrl: "https://zircus.netlify.app",
  siteName: "zircus",
  orderUrl: {
    en: (email, orderId) =>
      `${this.siteUrl}/my-order/?email=${email}&orderId=${orderId}`,
    fr: (email, orderId) =>
      `${this.siteUrl}/fr/votre-ordre/?email=${email}&orderId=${orderId}`,
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
  colors: {
    yellow: {
      en: "Yellow",
      fr: "Jaune",
    },
    teal: {
      en: "Teal",
      fr: "Sarcelle",
    },
    purple: {
      en: "Purple",
      fr: "Pourpre",
    },
    black: {
      en: "Black",
      fr: "Noir",
    },
    stripe: {
      en: "Striped",
      fr: "Rayé",
    },
  },
};

module.exports = {
  orderTemplateText: (order) => `
    ${props.siteName}

    ${props.heading[order.lang]}

    ${props.orderId[order.lang]}: ${order.id}
    ${props.total[order.lang]}: ${order.total}

    ${order.name}
    ${order.email}
    ${order.streetAddress}
    ${order.city}, ${order.state}
    ${order.country} ${order.zip}
    
    ---------------
    ${
    order.items
      .map(
        (item) =>
          `${item.name[order.lang]} - ${
            props.colors[item.color][order.lang]
          } (${item.size}) - x${item.quantity}`,
      )
      .join("\n")
  }
    ---------------

    ${props.siteName}
    ${props.siteUrl} 
    View your order at: ${
    props.orderUrl[order.lang](order.email, order.orderId)
  }
    Your unique order identifier is: ${order.identifier}
    `,
  orderTemplate: (order) => `
<!DOCTYPE html>
<html lang="${order.lang}">
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
        padding: 24;
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
    props.homeLink[order.lang]
  }">
          <img src="${props.siteUrl}/logo.png" alt="Zircus Logo" style="height: 32px; object-fit: contain" />
        </a>
      </header>
      <main role="main" style="padding: 4px">
        <h1>${props.heading[order.lang]}</h1>
        <p><a href="${
    props.orderUrl[order.lang](order.email, order.orderId)
  }">View status of order on Zircus website</a>. Your order identifier is: <kbd style="padding: 2px 4px; font-size: 16px; border-radius: 4px; background-color: #e4e0e6; margin-left: 2px">${order.identifier}</kbd></p>
        <div style="display: flex; justify-content: space-between; margin-top: 24px">
          <address>
            <strong>${order.name}</strong><br />
            <a href="mailto:${order.email}">${order.email}</a><br />
            <a href="tel:${order.phone}">${order.phone}</a><br />
            ${order.streetAddress}<br />
            ${order.city}, ${order.state}<br />
            ${order.country} ${order.zip}<br />
          </address>
          <div style="text-align: right">
            <p>${
    props.orderId[order.lang]
  }: <kbd style="font-size: 16px; padding: 2px 4px; background-color: #e4e0e6; border-radius: 4px; margin-left: 2px">${order.id}</kbd></p>
            <p><strong>Status: ${
    order.hasShipped ? "shipped" : "not yet shipped"
  }</strong></p>
            <p><strong>${props.total[order.lang]}: $${
    order.total.toFixed(2)
  }</strong></p>
          </div>
        </div>
        <div style="margin-top: 24px">
            ${
    order.items
      .map((item) => {
        return `<a href="${props.siteUrl}/products/${
          item.name.en
            .toLowerCase()
            .split(" ")
            .join("-")
        }${order.lang !== "en" ? `-${order.lang}` : ""}.html" style="
                    border-top: 2px solid #e4e0e6;
                    box-sizing: border-box;
                    padding: 12px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    width: 100%;
                    text-decoration: none;
                    color: #211b22;
                ">
                <img
                src="${props.siteUrl}${item.images["sm_a"]}"
                alt="${item.name[order.lang]}"
                style="object-fit: contain; height: 48px;"
                />
                <p><span>${item.name[order.lang]}</span> - <span>${
          props.colors[item.color][order.lang]
        }</span> - <span>(${item.size})</span> - <span>x${item.quantity}</span>
                </p>
            </a>`;
      })
      .join("\n")
  }
        </div>
      </main>
    </div>
  </body>
</html>
`,
};
