const jobs = [
      {
        title: "Frontend Developer",
        company: "Tech Innovations",
        location: "Remote",
        description: "Build user interfaces using HTML, CSS, and JS."
      },
      {
        title: "UI/UX Designer",
        company: "Designify",
        location: "Delhi",
        description: "Create engaging interfaces and user experiences."
      },
      {
        title: "Web Developer",
        company: "CodeWorks",
        location: "Bangalore",
        description: "Develop full websites with interactive elements."
      }
    ];

    const jobList = document.getElementById("job-list");

    jobs.forEach(job => {
      const card = document.createElement("div");
      card.className = "job-card";

      card.innerHTML = `
        <h2>${job.title}</h2>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
        <button onclick="alert('Apply for ${job.title} at ${job.company}')">Apply Now</button>
      `;

      jobList.appendChild(card);
    });

function searchJobs() {
      const keyword = document.getElementById("searchInput").value.toLowerCase();
      const location = document.getElementById("locationInput").value.toLowerCase();
      const experience = document.getElementById("experienceInput").value;

      const filtered = jobs.filter(job =>
        (job.title.toLowerCase().includes(keyword) ||
         job.company.toLowerCase().includes(keyword)) &&
        (location === "" || job.location.toLowerCase().includes(location)) &&
        (experience === "" || String(job.experience) === experience)
      );

      renderJobs(filtered);
    }

    // Initial render
    renderJobs(jobs);    