const props = {
    title: 'order · zircus',
    siteUrl: 'https://zircus.netlify.app',
    siteName: 'zircus',
    homeLink: {
        en: 'Go to Zircus Home Page',
        fr: "Page d'accueil Zircus",
    },
    orderId: {
        en: 'Order Id',
        fr: 'Id de commande',
    },
    heading: {
        en: 'Thanks for your order',
        fr: 'Merci pour votre commande',
    },
    total: {
        en: 'Total',
        fr: 'Total',
    },
    colors: {
        yellow: {
            en: 'Yellow',
            fr: 'Jaune',
        },
        teal: {
            en: 'Teal',
            fr: 'Sarcelle',
        },
        purple: {
            en: 'Purple',
            fr: 'Pourpre',
        },
        black: {
            en: 'Black',
            fr: 'Noir',
        },
        stripe: {
            en: 'Striped',
            fr: 'Rayé',
        },
    },
}

const order = {
    lang: 'fr',
    name: 'Erin Burton',
    email: 'erin.burton@outlook.com',
    streetAddress: '34900 McCabe Place',
    city: 'Abbotsford',
    state: 'British Columbia',
    country: 'Canada',
    zip: 'V3G 1H1',
    total: 154.34,
    id: '547897a890c8903801801',
    items: [
        {
            name: {
                en: 'Pouch front briefs',
                fr: 'Culottes avant-poche',
            },
            color: 'teal',
            size: 'md',
            quantity: 3,
            images: {
                sm_a: '/assets/img/products/masked/pf-teal-a-400.png',
            },
        },
        {
            name: {
                en: 'Flat front briefs',
                fr: 'Culottes avant-plat',
            },
            color: 'yellow',
            size: 'md',
            quantity: 2,
            images: {
                sm_a: '/assets/img/products/masked/ff-yellow-a-400.png',
            },
        },
    ],
}

module.exports = {
    orderTemplateText: order => `
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
    ${order.items
        .map(
            item =>
                `${item.name[order.lang]} - ${
                    props.colors[item.color][order.lang]
                } (${item.size}) - x${item.quantity}`
        )
        .join('\n')}
    ---------------

    ${props.siteName}
    ${props.siteUrl} 
    `,
    orderTemplate: order => `
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
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 24px;
        padding: 12px;
        ">
    <style>
    
    @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Nunito:ital,wght@0,400;0,600;1,600&display=swap");

    header a {
      text-decoration: none !important;
      border: 2px solid transparent;
      border-radius: 4px;
      padding: 4px;
      outline: none;
    }

    header a:focus,
    header a:hover {
      border-color: #82dbd7;
    }

    h1 {
      font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
        sans-serif;
      letter-spacing: -2px;
      font-size: 2.5rem;
      line-height: 0.9;
    }

    address {
      margin-bottom: 12px;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      color: #45576e;
      text-decoration: none;
      outline-color: var(--teal);
    }

    a:hover,
    a:focus {
      color: #283341;
      text-decoration: underline;
    }

    a:visited {
      color: #553a7b;
    }

    a:visited:hover,
    a:visited:focus {
      color: #491845;
    }

    kbd {
      padding: 4px;
      background-color: #e4e0e6;
      border-radius: 4px;
    }

    span {
      padding: 4px;
    }

    </style>
      <header style="
          padding: 12px;
          color: #211b22;
          display: flex;
          align-items: center;
          padding: 4px;
        ">
      <a href="${props.siteUrl}" style="color: #211b22;" aria-label="${
        props.homeLink[order.lang]
    }">
        <img src="${
            props.siteUrl
        }/logo.png" alt="Zircus Logo" style="height: 32px; object-fit: contain;" />
      </a>
      </header>
      <main role="main" style="padding: 8px;">
        <h1>${props.heading[order.lang]}</h1>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
          <address>
            <strong>${order.name}</strong><br />
            <a href="mailto:${order.email}">${order.email}</a
            ><br />
            ${order.streetAddress}<br />
            ${order.city}, ${order.state}<br />
            ${order.country} ${order.zip}<br />
          </address>
          <div>
            <p style="
                width: 100%;
                font-weight: 600;
                letter-spacing: 2px;
                margin-bottom: 4px;
            ">${props.total[order.lang]}: $${order.total.toFixed(2)}</p>
            <p>${props.orderId[order.lang]}: <kbd>${order.id}</kbd></p>
          </div>
        </div>
        <div>
            ${order.items
                .map(item => {
                    return `<a href="${props.siteUrl}/products/${item.name.en
                        .toLowerCase()
                        .split(' ')
                        .join('-')}${
                        order.lang !== 'en' ? `-${order.lang}` : ''
                    }.html" style="
                    border-top: 2px solid #e4e0e6;
                    box-sizing: border-box;
                    padding: 4px 0;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 4px;
                    width: 100%;
                    text-decoration: none;
                    color: #211b22;
                ">
                <img
                src="${props.siteUrl}${item.images['sm_a']}"
                alt="${item.name[order.lang]}"
                style="object-fit: contain; height: 48px;"
                />
                <ul style="margin-left: auto;">
                <li><strong style="padding: 4px;">${
                    item.name[order.lang]
                }</strong></li>
                <li>
                    <span>${props.colors[item.color][order.lang]}</span>
                    <span>(${item.size})</span>
                    <span>-</span><span>x${item.quantity}</span>
                </li>
                </ul>
            </a>`
                })
                .join('\n')}
        </div>
      </main>
    </div>
  </body>
</html>
`,
}
