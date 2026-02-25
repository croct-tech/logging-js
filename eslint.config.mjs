import { defineConfig } from 'eslint/config';
import { configs } from '@croct/eslint-plugin';

const disabledRulePrefixes = ['@croct/', 'import-x/', 'newline-destructuring/', 'import-newlines/'];

const disabledRules = configs.typescript
    .flatMap((config) => Object.keys(config.rules ?? {}))
    .filter((rule) => disabledRulePrefixes.some((prefix) => rule.startsWith(prefix)))
    .reduce((rules, rule) => ({
        ...rules,
        [rule]: 'off',
    }), {});

export default defineConfig(
    configs.typescript,
    {
        rules: disabledRules,
    },
);
