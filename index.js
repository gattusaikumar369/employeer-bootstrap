const jobList = [
    { date: '2024-11-01', role: 'Frontend Developer', status: 'Open', salary: 30000, applications: 700 },
    { date: '2024-11-02', role: 'Backend Developer', status: 'Open', salary: 35000, applications: 520 },
    { date: '2024-11-03', role: 'Full Stack Developer', status: 'Open', salary: 40000, applications: 610 },
    { date: '2024-11-04', role: 'Data Analyst', status: 'Open', salary: 28000, applications: 450 },
    { date: '2024-11-05', role: 'UI/UX Designer', status: 'Closed', salary: 32000, applications: 390 },
    { date: '2024-11-06', role: 'Product Manager', status: 'Open', salary: 50000, applications: 710 },
    { date: '2024-11-07', role: 'QA Engineer', status: 'Closed', salary: 29000, applications: 380 },
    { date: '2024-11-08', role: 'Mobile Developer', status: 'Open', salary: 45000, applications: 340 },
    { date: '2024-11-09', role: 'DevOps Engineer', status: 'Open', salary: 48000, applications: 670 },
    { date: '2024-11-10', role: 'Data Scientist', status: 'Open', salary: 60000, applications: 820 },
    { date: '2024-11-01', role: 'Frontend Developer', status: 'Open', salary: 30000, applications: 700 },
    { date: '2024-11-02', role: 'Backend Developer', status: 'Open', salary: 35000, applications: 520 },
    { date: '2024-11-03', role: 'Full Stack Developer', status: 'Open', salary: 40000, applications: 610 },
    { date: '2024-11-04', role: 'Data Analyst', status: 'Open', salary: 28000, applications: 450 },
    { date: '2024-11-05', role: 'UI/UX Designer', status: 'Closed', salary: 32000, applications: 390 },
    { date: '2024-11-06', role: 'Product Manager', status: 'Open', salary: 50000, applications: 710 },
    { date: '2024-11-07', role: 'QA Engineer', status: 'Closed', salary: 29000, applications: 380 },
    { date: '2024-11-08', role: 'Mobile Developer', status: 'Open', salary: 45000, applications: 340 },
    { date: '2024-11-09', role: 'DevOps Engineer', status: 'Open', salary: 48000, applications: 670 },
    { date: '2024-11-10', role: 'Data Scientist', status: 'Open', salary: 60000, applications: 820 },
    { date: '2024-11-11', role: 'Machine Learning Engineer', status: 'Open', salary: 65000, applications: 300 },
    { date: '2024-11-12', role: 'Cybersecurity Analyst', status: 'Open', salary: 55000, applications: 410 },
    { date: '2024-11-13', role: 'Database Administrator', status: 'Open', salary: 45000, applications: 230 },
    { date: '2024-11-14', role: 'System Architect', status: 'Closed', salary: 70000, applications: 150 },
    { date: '2024-11-15', role: 'Software Engineer', status: 'Open', salary: 38000, applications: 900 },
    { date: '2024-11-16', role: 'Business Analyst', status: 'Open', salary: 32000, applications: 570 },
    { date: '2024-11-17', role: 'Marketing Specialist', status: 'Open', salary: 30000, applications: 250 },
    { date: '2024-11-18', role: 'Content Writer', status: 'Closed', salary: 25000, applications: 500 },
    { date: '2024-11-19', role: 'HR Specialist', status: 'Open', salary: 33000, applications: 340 },
    { date: '2024-11-20', role: 'Financial Analyst', status: 'Open', salary: 45000, applications: 200 },
    { date: '2024-11-21', role: 'Technical Support Engineer', status: 'Closed', salary: 28000, applications: 150 },
    { date: '2024-11-22', role: 'Cloud Solutions Architect', status: 'Open', salary: 75000, applications: 380 },
    { date: '2024-11-23', role: 'Network Engineer', status: 'Open', salary: 40000, applications: 360 },
    { date: '2024-11-24', role: 'Project Manager', status: 'Open', salary: 65000, applications: 430 },
    { date: '2024-11-25', role: 'Sales Executive', status: 'Open', salary: 27000, applications: 510 },
    { date: '2024-11-26', role: 'Digital Marketing Manager', status: 'Closed', salary: 55000, applications: 600 },
    { date: '2024-11-27', role: 'Graphic Designer', status: 'Open', salary: 30000, applications: 470 },
    { date: '2024-11-28', role: 'IT Support Specialist', status: 'Open', salary: 29000, applications: 190 },
    { date: '2024-11-29', role: 'Product Designer', status: 'Open', salary: 45000, applications: 310 },
    { date: '2024-11-30', role: 'Research Scientist', status: 'Open', salary: 70000, applications: 260 }
];

function toggleMenu(event) {
    const dotsDiv = event.target.closest('.dots-data-cnt').querySelector('.dots-div');
    dotsDiv.classList.toggle('open');
}

function closeMenu() {
    document.querySelectorAll('.dots-div').forEach(menu => {
        menu.classList.remove('open');
    });
}

// Close the dropdown if clicked outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('.dots-data-cnt')) {
        closeMenu();
    }
});


flatpickr("#dateRange", {
    mode: "range", // Enable range selection
    dateFormat: "d-M-Y"
  });




  const rowsPerPage = 5;
  let currentPage = 1;
  let filteredJobs = jobList; // Initialize with the full list
  
  const tableBody = document.getElementById("table-body");
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  
  // Function to display current page items
  function displayPage(page) {
      tableBody.innerHTML = ""; // Clear previous rows
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
      const paginatedItems = filteredJobs.slice(start, end);
  
      paginatedItems.forEach(job => {
          const row = document.createElement("tr");
          row.classList.add("body-tr");
  
          row.innerHTML = `
              <td>${job.date}</td>
              <td>${job.role}</td>
              <td>${job.status}</td>
              <td>${job.salary}</td>
              <td><span class="view-application">View Application(${job.applications})</span></td>
              <td class="icon-cnt">
                  <i class="fab fa-linkedin icon"></i>
                  <i class="fab fa-whatsapp icon"></i>
              </td>
              <td class="dots-data-cnt">
                  <button class="dot-btn" onclick="toggleMenu(event)">
                      <i class="fas fa-ellipsis-v"></i>
                  </button>
                  <div class="dots-div">
                      <div class="dot-name" onclick="closeMenu()">View Job</div>
                      <div class="dot-name" onclick="closeMenu()">Edit Job</div>
                      <div class="dot-name" onclick="closeMenu()">Close Job</div>
                  </div>
              </td>
          `;
          
          tableBody.appendChild(row);
      });
  
      // Enable/Disable previous and next buttons based on the current page
      previousButton.disabled = currentPage === 1;
      nextButton.disabled = currentPage === Math.ceil(filteredJobs.length / rowsPerPage);
  }
  
  // Function to go to previous and next pages
  function goToPreviousPage() {
      if (currentPage > 1) {
          currentPage--;
          displayPage(currentPage);
      }
  }
  
  function goToNextPage() {
      if (currentPage < Math.ceil(filteredJobs.length / rowsPerPage)) {
          currentPage++;
          displayPage(currentPage);
      }
  }
  
  // Function to filter jobs based on search input
  function filterJobs() {
      const searchTerm = document.getElementById("search").value.toLowerCase();
      filteredJobs = jobList.filter(job =>
          job.role.toLowerCase().includes(searchTerm)
      );
      currentPage = 1; // Reset to the first page after filtering
      displayPage(currentPage); // Display the first page of filtered results
  }
  
  // Attach event listeners
  previousButton.addEventListener("click", goToPreviousPage);
  nextButton.addEventListener("click", goToNextPage);
  document.getElementById("search").addEventListener("input", filterJobs);
  
  // Initialize pagination on load
  displayPage(currentPage);