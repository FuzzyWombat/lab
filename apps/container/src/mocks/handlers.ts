import { http, HttpResponse } from 'msw';
//Mock Database
import { db } from './database/db';
//mock Quotes
import quotes from './data/quotes';

export const handlers = [
    http.get(`${window.location.origin}/stats`, async () => {
        try {
            const crossers = db.allCrossers.findFirst({
                where: {
                    key: {
                        equals: 5,
                    },
                },
            });

            return HttpResponse.json({
                crossed: crossers?.activeCrossers.length,
                notCrossed: crossers?.inactiveCrossers.length,
            });
        } catch (error) {
            console.log(error);

            return HttpResponse.error();
        }
    }),
    http.get(`${window.location.origin}/crossers`, async () => {
        try {
            const crossers = db.allCrossers.findFirst({
                where: {
                    key: {
                        equals: 5,
                    },
                },
            });

            return HttpResponse.json({
                activeCrossers: crossers?.activeCrossers ? crossers.activeCrossers : [],
                inactiveCrossers: crossers?.inactiveCrossers ? crossers.inactiveCrossers : [],
            });
        } catch (error) {
            console.log(error);

            return HttpResponse.error();
        }
    }),
    http.post(`${window.location.origin}/switch/:status/:id`, async ({ request, params }) => {
        const { id, status } = params;

        try {
            if (status === 'crossed') {
                const crosser = db.crossed.findFirst({
                    where: {
                        id: {
                            equals: parseInt(id as string),
                        },
                    },
                    strict: true,
                });

                db.crossed.delete({
                    where: {
                        id: {
                            equals: parseInt(id as string),
                        },
                    },
                });

                const newNotCrossed = db.notCrossed.create({ ...crosser, status: 'not crossed' });

                db.allCrossers.update({
                    where: {
                        key: {
                            equals: 5,
                        },
                    },
                    data: {
                        inactiveCrossers: (prev) => [...prev, newNotCrossed],
                        activeCrossers: (prev) => prev,
                    },
                });
            } else {
                const crosser = db.notCrossed.findFirst({
                    where: {
                        id: {
                            equals: parseInt(id as string),
                        },
                    },
                    strict: true,
                });

                db.notCrossed.delete({
                    where: {
                        id: {
                            equals: parseInt(id as string),
                        },
                    },
                });

                const newCrossed = db.crossed.create({ ...crosser, status: 'crossed' });

                db.allCrossers.update({
                    where: {
                        key: {
                            equals: 5,
                        },
                    },
                    data: {
                        inactiveCrossers: (prev) => prev,
                        activeCrossers: (prev) => [...prev, newCrossed],
                    },
                });
            }

            return new HttpResponse(null, { status: 200 });
        } catch (error) {
            console.log(error);

            return HttpResponse.error();
        }
    }),
    //Normally you would never do this but this is too simplify the example for the lab
    http.get(`${window.location.origin}/quotes`, async () => {
        try {
            return HttpResponse.json({data: quotes});
        } catch (error) {
            console.log(error);

            return HttpResponse.error();
        }
    }),
];
