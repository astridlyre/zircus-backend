;(() => {
    const q = id => document.getElementById(id)
    const template = q('inventory-item-template')
    const inventoryList = q('inventory-items')
    const filters = q('inventory-items-filters')
    const filtersTemplate = q('inventory-items-filters-template')
    const spinner = q('spinner')
    let items = []

    const renderArr = fragment => arr =>
        arr.forEach(item => {
            const clone = template.content.cloneNode(true)
            const el = clone.querySelector('li')
            const img = clone.querySelector('img')
            const title = clone.querySelector('.inventory__item__name')
            const size = clone.querySelector('.inventory__item__size')
            const color = clone.querySelector('.inventory__item__color')
            const quantity = clone.querySelector('.item-quantity-input')
            const isActive = clone.querySelector('.item-isactive-input')
            const remove = clone.querySelector('.remove-button')

            el.id = item.type
            img.src = `https://zircus.netlify.app/${item.images.sm_a}`
            img.alt = item.name
            title.textContent = item.name
            size.textContent = item.size
            color.textContent = item.color
            quantity.value = item.quantity
            item.active && (isActive.checked = true)
            remove.addEventListener('click', () => el.remove())
            items.push(el)
            fragment.appendChild(clone)
        })

    const renderInventory = inventory => {
        const fragment = new DocumentFragment()
        for (const [key, val] of Object.entries(inventory)) {
            const clone = filtersTemplate.content.cloneNode(true)
            const button = clone.querySelector('button')
            let filtered = false
            button.classList.add('active')
            button.addEventListener('click', () => {
                if (!filtered) {
                    button.classList.remove('active')
                    items.forEach(item => {
                        if (item.id.startsWith(key))
                            item.classList.add('hidden')
                    })
                    filtered = true
                } else {
                    button.classList.add('active')
                    items.forEach(item => {
                        if (item.id.startsWith(key))
                            item.classList.remove('hidden')
                    })
                    filtered = false
                }
            })
            button.textContent = key
            filters.append(clone)
            renderArr(fragment)(val)
        }
        spinner.classList.add('hidden')
        inventoryList.appendChild(fragment)
    }

    fetch('https://zircus.herokuapp.com/api/inv')
        .then(data => data.json())
        .then(renderInventory)
})()
