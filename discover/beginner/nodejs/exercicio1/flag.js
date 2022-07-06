const getFlag = function(flag) {
    const flagIndex = process.argv.indexOf(flag) + 1;
    return process.argv[flagIndex];
}

module.exports = getFlag;