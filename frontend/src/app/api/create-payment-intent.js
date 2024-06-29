import axios from "@/lib/axios";

export default async (req, res) => {
    // const response = await fetch('http://your-laravel-domain/api/create-payment-intent', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(req.body),
    // });
    console.log("req.body", req.body);
    const response = await axios
    .post('/api/create-payment-intent', req.body)
    .then(response => {
        res.status(response.status).json(response.data);
    })

    const data = await response.json();
    res.status(response.status).json(data);
};
