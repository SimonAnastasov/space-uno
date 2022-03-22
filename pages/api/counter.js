let counter = 0;

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.status(200).json({counter});
    }
    else if (req.method === 'PUT') {
        counter++;
        res.status(200).json({counter});
    }
}