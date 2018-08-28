/// <reference types="node" />

import * as crypto from 'crypto';

declare const random: typeof crypto.randomBytes;

export = random;
