BST.prototype.insertCallback = function(event)
{
  var insertedValue = this.insertField.value;
  // Get text value
  insertedValue = this.normalizeNumber(insertedValue, 4);
  if (insertedValue != "")
  {
    // set text value
    this.insertField.value = "";
    this.implementAction(this.insertElement.bind(this), insertedValue);
    this.updateExplanation("Insert", insertedValue); // Update explanation dynamically
  }
}

BST.prototype.deleteCallback = function(event)
{
  var deletedValue = this.deleteField.value;
  if (deletedValue != "")
  {
    deletedValue = this.normalizeNumber(deletedValue, 4);
    this.deleteField.value = "";
    this.implementAction(this.deleteElement.bind(this),deletedValue);    
    this.updateExplanation("Delete", deletedValue); // Update explanation dynamically
  }
}

BST.prototype.findCallback = function(event)
{
  var findValue;
  findValue = this.normalizeNumber(this.findField.value, 4);
  this.findField.value = "";
  this.implementAction(this.findElement.bind(this),findValue);
  this.updateExplanation("Find", findValue); // Update explanation dynamically
}

// Dynamic explanation update function
BST.prototype.updateExplanation = function(action, value) {
  var explanationElement = document.getElementById("dynamic-explanation");
  if (action === "Insert") {
    explanationElement.innerHTML = `
      <p>Inserting value <strong>${value}</strong> into the Binary Search Tree (BST).</p>
      <p>The value will be placed in the correct position by traversing the tree from the root.</p>
      <ul>
        <li><strong>Left Child:</strong> If the value is less than the current node's value, it goes to the left.</li>
        <li><strong>Right Child:</strong> If the value is greater, it goes to the right.</li>
      </ul>
    `;
  } else if (action === "Delete") {
    explanationElement.innerHTML = `
      <p>Deleting value <strong>${value}</strong> from the Binary Search Tree (BST).</p>
      <p>If the node has no children, it will be removed. If it has one or two children, the tree will be adjusted accordingly.</p>
    `;
  } else if (action === "Find") {
    explanationElement.innerHTML = `
      <p>Searching for value <strong>${value}</strong> in the Binary Search Tree (BST).</p>
      <p>The tree will be traversed from the root to find the value.</p>
      <ul>
        <li>If the value is less than the current node, look left.</li>
        <li>If the value is greater than the current node, look right.</li>
      </ul>
    `;
  }
}
