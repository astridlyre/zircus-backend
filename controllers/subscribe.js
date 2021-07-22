let subs = []

module.exports = {
    push: sub => subs.push(sub),
    filter: sub => (subs = subs.filter(s => s !== sub)),
    broadcast: data => {
        console.log(data)
        console.log(subs)
        subs.forEach(sub => sub.send(data))
    },
}
