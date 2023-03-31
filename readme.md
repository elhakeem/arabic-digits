A light-weight utility to convert arabic digits to english or modern digits and vice versa.
the library contains two methods `toArabic`, and `fromArabic`.

### Installation
```shell
$ npm i arabic-digits // or yarn or pnpm
```

### Usage
```javascript
import {toArabic} from 'arabic-digits';

toArabic(num, intOnly)
```

### Options
options applies to the two methods.

```javascript
num: string
```
a string containing the number to be converted. in `toArabic` method this parameter could be string | number.

```javascript
intOnly: boolean
```
if true the method will remove any other character that is not a digit.


### Eamples
passing a number.
```javascript
import {toArabic} from 'arabic-digits';

toArabic(2020) //٢٠٢٠
```

passing a string.
```javascript
import {toArabic} from 'arabic-digits';

toArabic("2020") //٢٠٢٠
```

passing a mixed string.
```javascript
import {toArabic} from 'arabic-digits';

toArabic("22 Years Old") //٢٢ Years Old
```

passing a mixed string with parsing.
```javascript
import {toArabic} from 'arabic-digits';

toArabic("22 Years Old", true) //٢٢
```

all the above examples applies to `fromArabic` also. 
