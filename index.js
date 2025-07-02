const form = document.getElementById('assetForm');
    const cancelBtn = document.getElementById('cancelBtn');

    form.addEventListener('submit', function(event) {
      event.preventDefault();

      const assetType = document.getElementById('assetType').value;
      const spec = document.getElementById('spec').value;
      const model = document.getElementById('Model').value;
      const assetName = document.getElementById('assetName').value;
      const brand = document.getElementById('Brand').value;
      const serial = document.getElementById('serial').value;
      const warranty = document.getElementById('Warranty').value;
      const value = document.getElementById('value').value;

      const assetData = {
        assetType,
        spec,
        model,
        assetName,
        brand,
        serial,
        warranty,
        value
      };

      localStorage.setItem("assetData", JSON.stringify(assetData));

      window.location.href = "table.html";
    });

    cancelBtn.addEventListener('click', function () {
      if (confirm("Are you sure you want to clear the form?")) {
        form.reset();
      }
    });