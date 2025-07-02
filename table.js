 const data = JSON.parse(localStorage.getItem("assetData"));

    if (data) {
      const row = `
        <tr>
          <td>${data.assetType}</td>
          <td>${data.spec}</td>
          <td>${data.model}</td>
          <td>${data.assetName}</td>
          <td>${data.brand}</td>
          <td>${data.serial}</td>
          <td>${data.warranty}</td>
          <td>${data.value}</td>
        </tr>
      `;
      document.getElementById("tableBody").innerHTML = row;
    } else {
      document.getElementById("tableBody").innerHTML = `<tr><td colspan="8">No data submitted.</td></tr>`;
    }