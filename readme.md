A light-weight utility to convert arabic digits to english or modern digits and vice versa.
the library contains two methods `toArabic`, and `fromArabic`.

### Installation
```java
$ npm i arabic-digits
```

### Usage
```javascript
import {toArabic} from 'arabic-digits';

toArabic(num, intOnly)
```

### Options
options are the same in both methods.

```javascript
num: string
```
a string containing the number to be converted. in `toArabic` method this parameter could be string | number.

```javascript
intOnly: boolean
```
if true the method will remove any other character that is not a digit.


### Eamples
passing number.
```javascript
import {toArabic} from 'arabic-digits';

toArabic(2020) //٢٠٢٠
```

passing string.
```javascript
import {toArabic} from 'arabic-digits';

toArabic("2020") //٢٠٢٠
```

passing mixed string.
```javascript
import {toArabic} from 'arabic-digits';

toArabic("22 Years Old") //٢٢ Years Old
```

passing mixed string and parsing it.
```javascript
import {toArabic} from 'arabic-digits';

toArabic("22 Years Old", true) //٢٢
```

all the above examples applies on `fromArabic` also. 
