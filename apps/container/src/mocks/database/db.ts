import { factory } from '@mswjs/data';
import { crosserModel, crossersModel } from './models';

export const db = factory({
    notCrossed: crosserModel,
    crossed: crosserModel,
    allCrossers: crossersModel,
});

//Normally would use larger data and map it out
const crossed = [
    db.crossed.create({ id: 1, status: 'crossed', name: 'Callum Crombie' }),
    db.crossed.create({ id: 2, status: 'crossed', name: 'Ron Sandy' }),
];
const notCrossed = [db.notCrossed.create({ id: 3, status: 'not crossed', name: 'Samantha Sanders' })];

db.allCrossers.create({
    key: 5,
    activeCrossers: crossed,
    inactiveCrossers: notCrossed,
});
