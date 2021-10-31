# tidiness.js
---

![](https://img.shields.io/github/v/tag/GrassoFederico/tidiness.js?color=%23181717&label=github&logo=github&style=plastic) ![](https://img.shields.io/github/languages/code-size/GrassoFederico/tidiness.js?color=%23181717&logo=github&style=plastic) ![](https://img.shields.io/github/downloads/GrassoFederico/tidiness.js/total?color=%23181717&logo=github&style=plastic) ![](https://img.shields.io/badge/dynamic/json?url=https://api.bitbucket.org/2.0/repositories/GrassoFederico/tidiness.js/refs/tags?sort=-name&style=plastic&logo=bitbucket&label=bitbucket&query=values[0].name&color=0052CC&prefix=v) 
![](https://img.shields.io/npm/v/tidiness.js?color=%23CB3837&logo=npm&style=plastic) ![](https://img.shields.io/bundlephobia/min/tidiness.js?color=%23CB3837&label=bundle%20size&logo=npm&style=plastic) ![](https://img.shields.io/npm/dt/tidiness.js?color=%23CB3837&logo=npm&style=plastic) ![](https://img.shields.io/jsdelivr/npm/hy/tidiness.js?color=%23E84D3D&label=downloads&logo=jsDelivr&logoColor=%23fff&style=plastic)
![](https://img.shields.io/github/license/GrassoFederico/tidiness.js?style=plastic) ![](https://img.shields.io/github/issues/GrassoFederico/tidiness.js?style=plastic)  ![](https://img.shields.io/github/forks/GrassoFederico/tidiness.js?style=plastic) ![](https://img.shields.io/github/stars/GrassoFederico/tidiness.js?style=plastic)
![](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FGrassoFederico%2Ftidiness.js)

Syntax highlighter javascript plugin

### Installing
---

Using npm:
```
$ npm install tidiness.js
```

Using pnpm:
```
$ pnpm install tidiness.js
```

Using yarn:
```
$ yarn add tidiness.js
```

Using jsDelivr CDN:
```
<script src="https://cdn.jsdelivr.net/npm/tidiness.js@1.2.3/dist/index.js"></script>
```

Using unpkg CDN:
```
<script src="https://unpkg.com/tidiness.js@1.2.3/dist/index.js"></script>
```

### Usage

---

#### note: CommonJS

In order to gain the TypeScript typings (for intellisense / autocomplete) while using CommonJS imports with `require()` use the following approach:

```
require('tidiness.js/dist/index.js')
```

Performing a `tidy-up` operation:
```
<div tidy-up>
    {"test": "test", array: [1,2,3]}
</div>
```

### Example
---

Let's try to display a very huge JSON file inside an HTML tag.

![](http://fedegrasso.altervista.org/img/tidiness.js/before.png)

Too complicated! :fearful:
Let's try again by adding the `tidy-up` attribute as explained above:

![](http://fedegrasso.altervista.org/img/tidiness.js/after.png)

Much better now! :white_check_mark: