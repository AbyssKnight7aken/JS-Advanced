function ticketSorter(tickets, sorting) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const ticketsArr = [];

    tickets.map((line) => {
        const [destination, price, status] = line.split('|');
        ticketsArr.push(new Ticket(destination, price, status));
    })

    return ticketsArr.sort((a, b) => {
        if (typeof a[sorting] === 'number') {
            return a[sorting] - b[sorting];
        } else {
            return a[sorting].localeCompare(b[sorting]);
        }
    })

}

ticketSorter([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')