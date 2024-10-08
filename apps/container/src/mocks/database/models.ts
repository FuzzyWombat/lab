import { primaryKey, manyOf } from '@mswjs/data';

export const crossersModel = {
    key: primaryKey(Number),
    activeCrossers: manyOf('crossed'),
    inactiveCrossers: manyOf('notCrossed'),
};

export const crosserModel = {
    id: primaryKey(Number),
    name: String,
    status: String,
};
