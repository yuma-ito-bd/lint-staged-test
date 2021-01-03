module.exports = {
    '**/*.ts': (fileNames) => [
        'tsc -p tsconfig-lint-staged.json --noEmit',
        `eslint ${fileNames.join(' ')} --fix`,
        `prettier --write ${fileNames.join(' ')}`,
    ],
};
