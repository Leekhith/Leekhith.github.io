const input = document.getElementById("searchInput");
const resultsList = document.getElementById("results");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  const filtered = data.filter(item => item.toLowerCase().includes(query));
  resultsList.innerHTML = filtered.map(item => `<li>${item}</li>`).join("");
});
