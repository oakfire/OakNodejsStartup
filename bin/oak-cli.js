#!/usr/bin/env node

var program = require('../lib/oak-cli');
/** 参数为空时显示帮助信息 */
if(process.argv.length < 3) {
    process.argv.push('-h');
}
program.parse(process.argv);
