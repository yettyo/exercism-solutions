/**
 * @author yetty
 * @since 23.11.2021
 */

function createVisitor(name, age, ticketID) {
    const visitor = {
        name: name,
        age: age,
        ticketID: ticketID,
    }
    return visitor;
}

function revokeTicket(visitor) {
    visitor.ticketID = null;
    return visitor;
}

function ticketStatus(tickets, ticketID) {
    for(let key in tickets) {
        if(ticketID == key) {
            if(tickets[key] == null) return 'not sold';
            else return 'sold to ' + tickets[key];
        }
    }
    return 'unknown ticket ID';
}

function simpleTicketStatus(tickets, ticketID) {
    for(let key in tickets) {
        if(ticketID == key) {
            if(tickets[key] == null) return 'invalid ticket !!!';
            else return tickets[key];
        }
    }
    return 'invalid ticket !!!';
}

function gtcVersion(visitor) {
    if(visitor.gtc != undefined) {
        if(visitor.gtc.signed) return visitor.gtc.version;
    }
}

var visitorYetty = createVisitor('yetty', 21, 'E69420');
visitorYetty = revokeTicket(visitorYetty);
const tickets = {
    '0H2AZ123': null,
    '23LA9T41': 'Verena Nardi',
  };

  const visitorNew = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: true,
      version: '2.1',
    },
  };

  const visitorNew2 = {
    name: 'Verena Nardi',
    age: 45,
    ticketId: 'H32AZ123',
    gtc: {
      signed: false,
      version: '2.1',
    },
  };