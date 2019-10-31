# React

An alternative way of generating a list

If we have an array, we normally use:
```javascript
{list.map(x=><div>{x}</div>)}
```
Sometimes we have a map so we need to convert it:
```javascript
let list = Array.from(Object.entries(map));
```
But you can skip all the conversion
```javascript
function createList() {
        const arr = []
        for (const key in map) {
            let val = map[key]
            let ele = <div key={key}>{val}</div>
            arr.push(ele)
        }
        return arr
    }
```
then in your jsx you simply 
```javascript
{ createList() }
```
I don't prefer this method, but it actually
demonstrates that you can put your jsx in an array


