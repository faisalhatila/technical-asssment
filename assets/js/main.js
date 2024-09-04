const notificationComponent = document.getElementById('notificationsComponent')
const notificationIcon = document.getElementById('notificationButton')

notificationIcon.addEventListener('click', () => {
    if (notificationComponent.style.display === 'none') {
        notificationComponent.style.display = 'block'
    }
    else {
        notificationComponent.style.display = 'none'
    }

})
const listItems = document.querySelectorAll('#daysList li');

// Add a click event listener to each <li>
listItems.forEach(item => {
    item.addEventListener('click', function () {
        // Remove 'active' class from all <li> elements
        listItems.forEach(li => li.classList.remove('active-day'));

        // Add 'active' class to the clicked <li> element
        this.classList.add('active-day');
    });
});


const circularProgress = document.querySelectorAll(".circular-progress");

Array.from(circularProgress).forEach((progressBar) => {
    const progressValue = progressBar.querySelector(".percentage");
    const innerCircle = progressBar.querySelector(".inner-circle");
    let startValue = 0,
        endValue = Number(progressBar.getAttribute("data-percentage")),
        speed = 10,
        progressColor = progressBar.getAttribute("data-progress-color");

    const progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        progressValue.style.color = `${progressColor}`;

        innerCircle.style.backgroundColor = `${progressBar.getAttribute(
            "data-inner-circle-color"
        )}`;

        progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6
            }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
        if (startValue === endValue) {
            clearInterval(progress);
        }
    }, speed);
});


const leaveRequestData = [
    {
        id: 1,
        userImage: '/assets/img/User2Avatar.png',
        name: 'Mark Jacobs',
        period: [
            '31 Mar, 2023 09:00 AM', '31 Mar, 2023 18:00 PM'
        ],
        days: '1.0',
        leave_type: 'Annual Leave',
        status: 'pending',
    },
    {
        id: 2,
        userImage: '/assets/img/User1Avatar.svg',
        name: 'Charlie Kristen',
        period: [
            '10 Apr, 2023 09:00 AM', '11 Apr, 2023 18:00 PM'
        ],
        days: '2.0',
        leave_type: 'Annual Leave',
        status: 'pending',
    },
    {
        id: 3,
        userImage: '/assets/img/User2Avatar.png',
        name: 'Nur Fariha binti Maslan',
        period: [
            '21 Apr, 2023 09:00 AM', '24 Apr, 2023 18:00 PM'
        ],
        days: '2.0',
        leave_type: 'Hospital Leave',
        status: 'pending',
    },
    {
        id: 4,
        userImage: '/assets/img/User2Avatar.png',
        name: 'Nishant Talwar',
        period: [
            '31 Mar, 2023 09:00 AM', '31 Mar, 2023 18:00 PM'
        ],
        days: '1.0',
        leave_type: 'Annual Leave',
        status: 'approved',
    },
    {
        id: 5,
        userImage: '/assets/img/User1Avatar.svg',
        name: 'Simon Minter',
        period: [
            '10 Apr, 2023 09:00 AM', '11 Apr, 2023 18:00 PM'
        ],
        days: '2.0',
        leave_type: 'Annual Leave',
        status: 'approved',
    },
]

const leaveRequestTableBody = document.getElementById('leaveRequestTableBody');

leaveRequestData.forEach((leave) => {
    // Create a new table row element
    const tr = document.createElement('tr');
    tr.className = 'table-body-row';

    // Determine the row content based on the status
    if (leave.status === 'pending') {
        tr.innerHTML = `
            <td class="table-col check-col pending-request">
                <input type="checkbox" />
            </td>
            <td class="table-col name-col">
                <img src="${leave.userImage}" />
                <label class="user-name">${leave.name}</label>
            </td>
            <td class="table-col period-col">
                <span class="period-col-span">
                    <label>${leave.period[0]}</label>
                    <label>${leave.period[1]}</label>
                </span>
            </td>
            <td class="table-col days-col">
                <label>${leave.days}</label>
            </td>
            <td class="table-col leave-col">
                <label>${leave.leave_type}</label>
            </td>
            <td class="table-col actions-col">
                <span class="actions-col-span">
                    <span class="buttons-span">
                        <button class="reject">REJECT</button>
                        <button class="approve">APPROVE</button>
                    </span>
                    <img src="/assets/img/RightIcon.svg" />
                </span>
            </td>
        `;
    } else {
        tr.innerHTML = `
            <td class="table-col check-col approved-request">
                <input type="checkbox" />
            </td>
            <td class="table-col name-col">
                <img src="${leave.userImage}" />
                <label class="user-name">${leave.name}</label>
            </td>
            <td class="table-col period-col">
                <span class="period-col-span">
                    <label>${leave.period[0]}</label>
                    <label>${leave.period[1]}</label>
                </span>
            </td>
            <td class="table-col days-col">
                <label>${leave.days}</label>
            </td>
            <td class="table-col leave-col">
                <label>${leave.leave_type}</label>
            </td>
            <td class="table-col actions-col">
                <span class="actions-col-span">
                    <span class="approved-buttons-span">
                        <button class="approve">APPROVED</button>
                    </span>
                    <img src="/assets/img/RightIcon.svg" />
                </span>
            </td>
        `;
    }

    // Append the row to the table body
    leaveRequestTableBody.appendChild(tr);
});