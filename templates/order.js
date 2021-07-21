const props = {
    title: 'order · zircus',
    siteUrl: 'https://zircus.netlify.app',
    siteName: 'zircus',
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

module.exports = () => `
<!DOCTYPE html>
<html lang="${order.lang}">
  <head>
    <title>${props.title}</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&family=Nunito:ital,wght@0,400;0,600;1,600&display=swap");
    @font-face {
      font-family: "Virgo 01";
      src: url("${props.siteUrl}/font/virgo.woff2") format("woff2");
    }
    :root {
      --light: #f9f8fa;
      --dark: #211b22;
      --gray-30: #e4e0e6;
      --teal: #82dbd7;
      --link: #45576e;
      --link-hover: #283341;
      --link-visited: #553a7b;
      --link-visited-hover: #491845;
      --heading-font-family: "Nunito", sans-serif;
      --site-font-family: "Nunito Sans", sans-serif;
      --accent-font-family: "Virgo 01", sans-serif;
      --doc-line-height: 1.75;
      --heading-line-height: 1.1;
      --base-unit: 0.325rem;
      --base-spacing: calc(var(--base-unit) * 4);
      --md-spacing: calc(var(--base-spacing) * 2);
      --lg-spacing: calc(var(--md-spacing) * 2);
      --big-radius: 1.25rem;
      --radius: 0.325rem;
      --letter-spacing: 0.1rem;
    }

    body {
      background-color: var(--dark);
      font-family: var(--site-font-family);
      padding: var(--base-spacing);
      width: 100vw;
      min-height: 100vh;
      margin: 0;
      box-sizing: border-box;
    }

    main {
      border-radius: var(--big-radius);
      background-color: var(--light);
      padding: var(--md-spacing);
    }

    header {
      display: flex;
      align-items: center;
      margin: var(--md-spacing) 0;
    }

    header a {
      text-decoration: none !important;
      border: 2px solid transparent;
      border-radius: var(--radius);
      padding: var(--base-unit);
      outline: none;
    }

    header a:focus,
    header a:hover {
      border-color: var(--teal);
    }

    h3::after {
      content: "·";
      position: absolute;
      bottom: -3.65rem;
      right: -2.25rem;
      font-family: var(--heading-font-family);
      font-size: 8rem;
      color: var(--teal);
    }

    h1 {
      font-family: var(--heading-font-family);
      letter-spacing: -0.1rem;
      font-size: 3rem;
    }

    h3 {
      font-family: var(--accent-font-family);
      position: relative;
      color: var(--light);
      font-size: 2rem;
      margin: 0;
    }

    address {
      margin-bottom: var(--base-spacing);
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      color: var(--link);
      text-decoration: none;
      outline-color: var(--teal);
    }

    a:hover,
    a:focus {
      color: var(--link-hover);
      text-decoration: underline;
    }

    a:visited {
      color: var(--link-visited);
    }

    a:visited:hover,
    a:visited:focus {
      color: var(--link-visited-hover);
    }

    img {
      max-width: var(--lg-spacing);
      object-fit: contain;
    }

    kbd {
      padding: var(--base-unit);
      background-color: var(--gray-30);
      border-radius: var(--radius);
    }

    .two-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .details {
      text-align: right;
    }

    .total {
      width: 100%;
      font-weight: 600;
      letter-spacing: var(--letter-spacing);
      margin-bottom: var(--base-spacing);
    }

    .products a {
      box-sizing: border-box;
      padding: var(--base-spacing);
      border-top: 2px solid var(--gray-30);
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--base-spacing);
      width: 100%;
      text-decoration: none;
      color: var(--dark);
    }

    .product span {
      padding: var(--base-unit);
    }

    .container {
      max-width: 720px;
      margin-left: auto;
      margin-right: auto;
    }
  </style>
  <body>
    <div class="container">
      <header>
        <a href="${props.siteUrl}"><h3>${props.siteName}</h3></a>
      </header>
      <main role="main">
        <h1>${props.heading[order.lang]}</h1>
        <div class="two-col">
          <address>
            <strong>${order.name}</strong><br />
            <a href="mailto:${order.email}">${order.email}</a
            ><br />
            ${order.streetAddress}<br />
            ${order.city}, ${order.state}<br />
            ${order.country} ${order.zip}<br />
          </address>
          <div class="details">
            <p class="total">${props.total[order.lang]}: $${order.total.toFixed(
    2
)}</p>
            <p>${props.orderId[order.lang]}: <kbd>${order.id}</kbd></p>
          </div>
        </div>
        <div class="products">
            ${order.items.map(item => {
                return `<a href="${props.siteUrl}/products/${item.name.en
                    .toLowerCase()
                    .split(' ')
                    .join('-')}${
                    order.lang !== 'en' ? `-${order.lang}` : ''
                }.html">
                <img
                src="${props.siteUrl}${item.images['sm_a']}"
                alt="${item.name[order.lang]}"
                />
                <p class="product">
                <span>${item.name[order.lang]}</span><span> ${
                    props.colors[item.color][order.lang]
                }</span>
                <span> ${item.size}</span>
                <span> ${item.quantity}</span>
                </p>
            </a>`
            })}
        </div>
      </main>
    </div>
  </body>
</html>
`
