import dayjs from 'dayjs';
import morgan from 'morgan';

// create a rotating write stream
// const accessLogStream = rfs.createStream('access.log', {
//     interval: '1d', // rotate daily
//     path: path.join(__dirname, '../')
// });

// const accessLogStream = fs.createWriteStream(path.join("./access.log"), {
//   flags: "a",
// });

export default function loader() {
    return morgan(
        (tokens, req, res) =>
            [
                '::',
                `[${dayjs(Date.now()).format('DD/MM/YY - hh:mm:ss')}]`,
                tokens.method(req, res),
                tokens.url(req, res),
                tokens.status(req, res),
                tokens.res(req, res, 'content-length'),
                tokens['response-time'](req, res),
                'ms'
            ].join(' ')
        // { stream: accessLogStream }
    );
}
