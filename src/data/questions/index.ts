import type { Pregunta } from '../../core/types';
import { part01 } from './part-01';
import { part02 } from './part-02';
import { part03 } from './part-03';
import { part04 } from './part-04';
import { part05 } from './part-05';
import { part06 } from './part-06';
import { part07 } from './part-07';

export const questions: Pregunta[] = [
    ...part01,
    ...part02,
    ...part03,
    ...part04,
    ...part05,
    ...part06,
    ...part07,
];
