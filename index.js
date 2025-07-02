const form = document.getElementById('assetForm');
  const tableBody = document.getElementById('assetTable').querySelector('tbody');
  const cancelBtn = document.getElementById('cancelBtn');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const assetType = document.getElementById('assetType').value;
    const spec = document.getElementById('spec').value;
    const model = document.getElementById('Model').value;
    const assetName = document.getElementById('assetName').value;
    const Brand = document.getElementById('Brand').value;
    const serial = document.getElementById('serial').value;
    const Warranty = document.getElementById('Warranty').value;
    const value = document.getElementById('value').value;

    const newRow = tableBody.insertRow();
    newRow.insertCell().textContent = assetType;
    newRow.insertCell().textContent = spec;
    newRow.insertCell().textContent = model;
    newRow.insertCell().textContent = assetName;
    newRow.insertCell().textContent = Brand;
    newRow.insertCell().textContent = serial;
    newRow.insertCell().textContent = Warranty;
    newRow.insertCell().textContent = value;

    form.reset();
  });

  cancelBtn.addEventListener('click', function() {
    if (confirm("Are you sure you want to clear the form?")) {
      form.reset();
    }
  });