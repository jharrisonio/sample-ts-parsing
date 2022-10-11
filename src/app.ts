import http from 'http';
import { Parser } from './ts-parser';

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    const parser = new Parser('./sample-files/index.ts');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(parser.getTree(), null, 2));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});