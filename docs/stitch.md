## stitch
delete by id
```javascript
import { ObjectId } from 'bson'
const objectId = new ObjectId(stringId)

deleteOne({ _id: objectId })
```
for some reason if I simply use a string,
it failed to match
