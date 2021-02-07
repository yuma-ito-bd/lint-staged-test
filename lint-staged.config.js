module.exports = {
    '**/*.ts': (fileNames) => [
        // for Linux only
        // `tsc --showConfig -p tsconfig-lint-staged.json | jq -j '.compilerOptions | to_entries | map("--" + .key + " " + (.value | tostring)) | @sh' | xargs -t -I {} sh -c 'npx tsc --noEmit {} ${fileNames.join(' ')}'`,
        // for Windows (Linuxでも動く)
        `tsc --showConfig -p tsconfig-lint-staged.json | jq -j ".compilerOptions | to_entries | map(\\"--\\" + .key + \\" \\" + (.value | tostring)) | @sh" | xargs -t -I {} sh -c 'npx tsc --noEmit {} ${fileNames.join(' ')}'`,
        `eslint ${fileNames.join(' ')} --fix`,
        `prettier --write ${fileNames.join(' ')}`,
    ],
};
