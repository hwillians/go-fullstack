import { createServer } from 'http';

// creer un serveur 
const server = createServer((req, res) => {
    //  renvoyer une réponse peut importe la rêquete 
    res.end('voilà la réponse du serveur !');
});

// pour écuter le response (création du port)
server.listen(process.env.PORT || 3000);