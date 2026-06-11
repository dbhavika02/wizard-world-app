const dns = require("dns");

dns.resolveSrv(
    "_mongodb._tcp.wizard-cluster.cx98rgz.mongodb.net",
    (err, addresses) => {
        if (err) {
            console.log(err);
        } else {
            console.log(addresses);
        }
    }
);