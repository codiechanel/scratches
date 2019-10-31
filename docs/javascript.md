# javascript

Using for loop in JSON

This one will work
```javascript
let map = { a: "cool"}

for (let mapKey in map) {
    console.log(map[mapKey])
}
```
this will error if you use `for-of`
```javascript
for (let mapKey of map) {

}
```
