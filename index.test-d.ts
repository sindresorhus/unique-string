import {expectType} from 'tsd';
import uniqueString from './index.js';

expectType<string>(uniqueString());
