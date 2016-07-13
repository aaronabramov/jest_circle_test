/**
 * Copyright (c) 2014, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

// Run CircleCI build

const path = require('path');
const exec = require('child_process').execSync;
const PROJECT_ROOT = path.resolve(__dirname, '..');

const run = (cmd, cwd) => {
  cwd || (cwd = process.cwd());
  process.stdout.write('-> ' + cmd + ' cwd: ' + cwd + '\n');
  exec(cmd, {cwd, stdio: [0, 1, 2]});
};

run('rm -rf ./node_modules', PROJECT_ROOT);
run('npm i -g npm', PROJECT_ROOT);
run('npm i', PROJECT_ROOT);
run('npm test', PROJECT_ROOT);
