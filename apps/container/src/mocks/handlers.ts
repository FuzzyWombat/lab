import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get(`${window.location.origin}/assets/stats`, async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
    http.get('/crossers', async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
    http.post('/cross', async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
    http.get('/uncross', async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
];
