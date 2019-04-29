import {expectType} from 'tsd';
import uniqueString = require('.');

expectType<string>(uniqueString());
