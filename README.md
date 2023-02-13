# MCR foodbank playground

A place to create the functions that may be integrated into a google appSheets project

## Requirements
Several core pieces of functionality are required, the aim is to create a set of functions that will manipulate a given data set as needed with a set of placeholder data, and create a suite of tests to assert correct behaviour.

For ease of demonstration it is built in React.

### Functionality

#### Remove stock from a given centre by item

Given a centre, an item and a value, reduce a single items stock level by the specified amount. 
- Valid centre names and items only
- Positive integers only
- Cannot go below zero

#### Add stock to a given centre by item
Given a centre, an item and a value, increase a single items stock level by the specified amount. 
- Valid centre names and items only
- Positive integers only

#### Add stock to a given centre in bulk
Update multiple items at once for a given centre
- Valid centre names and items only
- Positive integers only
- May or may not include all items

#### Remove items from stock for a given centre by packing list
Input the number of packages given out at the end of a session and reduce all stock for that centre according to the packing list data
- Valid centre names and packing list sizes only
- Positive integers only for number of packages given out and their sizes

### Data
Placeholder data represented in JSON format will be used for the following data sets in these schemas:

#### Packing lists (uniform across all centres)

An array of items consisting of name, and an object specifying the amount of that item required for each size packing list:
```
{
  "items": [
    {
      "tea/coffee": {
        "amount": {
          "parcel-size-1": 1,
          "parcel-size-2": 1,
          "parcel-size-3": 1,
          "parcel-size-4": 1,
          "parcel-size-5": 1
        }
      }
    },
    {
      "beans": {
        "amount": {
          "parcel-size-1": 2,
          "parcel-size-2": 3,
          "parcel-size-3": 3,
          "parcel-size-4": 4,
          "parcel-size-5": 5
        }
      }
    },
    ...
  ]
}

```


#### Current stock (one list for each centre)

An array of items consisting of name, and an object specifying the current stock and the thresholds for red and amber status of that item:
```
{
  "items": [
    {
      "title": "teaCoffee",
      "stock": {
        "currentStock": 20,
        "redStockThreshold": 10,
        "amberStockThreshold": 15
      }
    },
    {
      "title": "rice",
      "stock": {
        "currentStock": 50,
        "redStockThreshold": 30,
        "amberStockThreshold": 40
      }
    },
    {
      "title": "pasta",
      "stock": {
        "currentStock": 40,
        "redStockThreshold": 15,
        "amberStockThreshold": 25
      }
    },
    ...
  ]
}
```

#### Available centres
An array of the available centres
```
{
  "centres": ["Warehouse", "Harpurhey", "St Peters House", "Openshaw"]
}

```

## Available Scripts

In the project directory, you can run:

### `npm start`
Start the project in browser

### `npm test`
Test the functions/components (TODO)
