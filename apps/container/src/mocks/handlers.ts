import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get(`${window.location.origin}/stats`, async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
    http.get(`${window.location.origin}/crossers`, async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
    http.post(`${window.location.origin}/cross`, async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
    http.post(`${window.location.origin}/uncross`, async () => {
        return HttpResponse.json({
            crossed: 0,
            notCrossed: 0,
        });
    }),
];
