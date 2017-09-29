# Node Eforo API
## This Module is not yet deployed
to NPM and this readme should be considered a draft of features
to guide future development.

### Purpose
A fully tested single lightweight wrapper for interacting with the eforo API

### Class
Eforo

```javascript
import Eforo from 'eforo-api'
```

### Setup Creds
An api key is required for interacting with the eforo platform

```javascript
Eforo.setup(process.env.MY_API_KEY);
```

### You can now interact with any endpoint
```javascript
Eforo.getItems({ status: 'IN_QUEUE', page: 1 });
```

## Public Methods

### getItems(options)
```javascript
Eforo.getItems(options)
```

Options
1. external_id
2. inventory_id
3. status
4. page

```javascript
Eforo.getItems({ status: 'IN_QUEUE' })
  .then(results => /* send products to front end or save here */);
Eforo.getItems({ status: Eforo.constants.status.IN_QUEUE });
  .then(results => /* send products to front end or save here */);
```

### getEbayListings(options)

```javascript
Eforo.getEbayListings(())
```
