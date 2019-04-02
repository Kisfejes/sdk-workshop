const { readFileSync } = require('fs');
const { join } = require('path');

let inventoryItems = [];
try {
  inventoryItems = JSON.parse(
    readFileSync(join(__dirname, 'inventory-items.json'))
  );
} catch (err) {
  console.log(err);
}

// Simulating network and db query delay
function _wait(waitMs) {
  return new Promise(resolve => {
    setTimeout(resolve, waitMs);
  });
}

module.exports = app => {
  app.get('/inventory', async (_, res) => {
    await _wait(420);
    res.send(inventoryItems);
  });

  app.delete('/inventory/:id', async (req, res) => {
    const { id } = req.params;

    await _wait(420);
    const itemToDeleteIndex = inventoryItems.findIndex(item => item.id === id);
    if (itemToDeleteIndex === -1) {
      return res.status(404).send({ message: `No item found with id: ${id}` });
    }

    res.status(201).send();
  });

  app.post('/inventory', async (req, res) => {
    // No input validation, YOLO
    await _wait(420);

    inventoryItems.push(req.body);
    res.status(201).send();
  });
};
