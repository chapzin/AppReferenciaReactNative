# AppReferenciaReactNative
Aqui uma aplicação base para referencia de configurado eslint, editorconfig, babel root

Adicionar seguintes pacotes


yarn add eslint babel-eslint babel-plugin-root-import  eslint-import-resolver-babel-plugin-root-import react-devtools


adicionar o .editorconfig

rodar o eslint pra inicializar
yarn eslint --init

alterar o .eslintrc.json para:

{
  "parser": "babel-eslint",
  "extends": ["airbnb", "plugin:react-native/all"],
  "plugins": ["react-native", "jsx-a11y", "import"],
  "env": {
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [".jsx", ".js"]
      }
    ],
    "import/prefer-default-export": "off"
  },
  "globals": {
    "__DEV__": true
  },
  "settings": {
    "import/resolver": {
      "babel-plugin-root-import": {}
    }
  }
}


alterar o .babelrc para:

{
  "presets": ["module:metro-react-native-babel-preset"],
  "plugins": [
    [
      "babel-plugin-root-import",
      {
        "rootPathSuffix": "src"
      }
    ]
  ],
  "env": {
    "production": {
      "plugins": [
        [
          "babel-plugin-root-import",
          {
            "rootPathSuffix": "src"
          }
        ]
      ]
    }
  }
}

