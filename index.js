function renderEmployee() {
    const employeeWrapper = document.querySelector('.team')

    const employees = getEmployee()

    const employeesHTML = employees.map(employee => {
        return `<div class="team__member">
        <figure class="team__member--img--mask">
            <img src="${employee.url}" alt="" class="team__member--img">
        </figure>

        <h4 class="team__member--name">${employee.firstName} ${employee.lastName}</h4>
        <p class="team__member--department">${employee.department}</p>
        <a href="mailto:${employee.email}" class="team__member--email link__hover--effect">${employee.email}</a>

        <button class="team__member--details-button">View Details ></button>
    </div>`
    }).join("");

    employeeWrapper.innerHTML = employeesHTML

}

setTimeout(() => {
    renderEmployee()
});

{/*  */}

function getEmployee() {
    return [
      {
        employeeID: 001,
        firstName: "Manish",
        lastName: "Manwani",
        url: "assets/manish-profile.png",
        email: "manish@email.com",
        department: "Frontend Engineer",
        departmentDesc: "Frontend Engineers work on the frontend of the website"
      },
      {
        employeeID: 002,
        firstName: "Jack",
        lastName: "Haines",
        url: "assets/manish-profile.png",
        email: "jack@email.com",
        department: "Frontend Engineer",
        departmentDesc: "Frontend Engineers work on the frontend of the website"
      },
      {
        employeeID: 003,
        firstName: "Daniel",
        lastName: "West",
        url: "assets/manish-profile.png",
        email: "danny@email.com",
        department: "Frontend Engineer",
        departmentDesc: "Frontend Engineers work on the frontend of the website"
      },
      {
        employeeID: 004,
        firstName: "Tom",
        lastName: "Mears",
        url: "assets/manish-profile.png",
        email: "tom@email.com",
        department: "Fullstack Engineer",
        departmentDesc: "Fullstack Engineers work on everything"
      },
      {
        employeeID: 005,
        firstName: "Meg",
        lastName: "Williams",
        url: "assets/manish-profile.png",
        email: "meg@email.com",
        department: "Backend Engineer",
        departmentDesc: "Backend Engineers don't have a life"
      },
      {
        employeeID: 006,
        firstName: "Emily",
        lastName: "Boston",
        url: "assets/manish-profile.png",
        email: "emily@email.com",
        department: "Backend Engineer",
        departmentDesc: "Backend Engineers don't have a life"
      },
      
    ];
  }
  