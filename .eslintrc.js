module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import",
        "css-modules",
        "jest"
    ],
    "rules": {
        "indent": [1, "tab"],
        "no-tabs": 0,
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "jsx-a11y/anchor-is-valid": ["error", {
            "components": ["Link"],
            "specialLink": ["to", "hrefLeft", "hrefRight"],
            "aspects": ["noHref", "invalidHref", "preferButton"]
        }],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        'react/jsx-closing-bracket-location': [1, 'tag-aligned'],
        "react/jsx-indent": [1, "tab"],
        "react/jsx-indent-props": [1, 0],
        "no-param-reassign": ["error", { "props": true, "ignorePropertyModificationsFor": ["registration"] }],
        "one-var": ["error", "never "]
    },
    "globals": {
        "document": true,
        "window": true,
        "navigator": true,
        "fetch": true
    },
    "env": {
        "jest/globals": true
    }
};
