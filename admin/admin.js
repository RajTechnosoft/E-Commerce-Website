function showDashboard(e) {
  e.classList.remove("hide");
  e.classList.add("show");
}
function hideDashboard(e) {
  e.classList.remove("show");
  e.classList.add("hide");
}
// creating global variable
let show = false;
// calling the show and hide function on the click of icon
let togleDashBtn = document.querySelector(".dashMenu");
togleDashBtn.addEventListener("click", (e) => {
  let dashContent = document.querySelector(".leftNavContent");
  if (!show) {
    showDashboard(dashContent);
    show = true;
  } else {
    hideDashboard(dashContent);
    show = false;
  }
});
// alert("i am working");

// all users data in an array
const users = [
  {
    dp: "../images/pizza1.jpg",
    name: "Amit Sharma",
    email: "amit.sharma@example.com",
    location: "Delhi, India",
    joinedDate: "2023-02-15",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Neha Verma",
    email: "neha.verma@example.com",
    location: "Mumbai, India",
    joinedDate: "2023-03-10",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Rahul Singh",
    email: "rahul.singh@example.com",
    location: "Lucknow, India",
    joinedDate: "2023-04-21",
    blocked: true,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Pooja Yadav",
    email: "pooja.yadav@example.com",
    location: "Jaipur, India",
    joinedDate: "2023-05-05",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Arjun Mehta",
    email: "arjun.mehta@example.com",
    location: "Bangalore, India",
    joinedDate: "2023-06-11",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Sneha Kapoor",
    email: "sneha.kapoor@example.com",
    location: "Chennai, India",
    joinedDate: "2023-07-15",
    blocked: true,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Vikram Arora",
    email: "vikram.arora@example.com",
    location: "Kolkata, India",
    joinedDate: "2023-08-20",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Divya Nair",
    email: "divya.nair@example.com",
    location: "Hyderabad, India",
    joinedDate: "2023-09-12",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Rohan Gupta",
    email: "rohan.gupta@example.com",
    location: "Pune, India",
    joinedDate: "2023-10-05",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Anjali Rao",
    email: "anjali.rao@example.com",
    location: "Ahmedabad, India",
    joinedDate: "2023-11-01",
    blocked: true,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Karan Joshi",
    email: "karan.joshi@example.com",
    location: "Surat, India",
    joinedDate: "2023-12-10",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Meera Das",
    email: "meera.das@example.com",
    location: "Nagpur, India",
    joinedDate: "2024-01-15",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Siddharth Malhotra",
    email: "siddharth.malhotra@example.com",
    location: "Indore, India",
    joinedDate: "2024-02-20",
    blocked: true,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Riya Sen",
    email: "riya.sen@example.com",
    location: "Bhopal, India",
    joinedDate: "2024-03-12",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Aditya Kumar",
    email: "aditya.kumar@example.com",
    location: "Patna, India",
    joinedDate: "2024-04-18",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Priya Mishra",
    email: "priya.mishra@example.com",
    location: "Kanpur, India",
    joinedDate: "2024-05-22",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Manoj Tiwari",
    email: "manoj.tiwari@example.com",
    location: "Agra, India",
    joinedDate: "2024-06-10",
    blocked: true,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Sonali Chauhan",
    email: "sonali.chauhan@example.com",
    location: "Varanasi, India",
    joinedDate: "2024-07-05",
    blocked: false,
  },
  {
    dp: "../images/pizza1.jpg",
    name: "Rajat Verma",
    email: "rajat.verma@example.com",
    location: "Lucknow, India",
    joinedDate: "2024-08-01",
    blocked: false,
  },
];
// creating dynamic all users details using map function
let usersContainer = document.querySelector("#allUsers");
usersContainer.innerHTML = users
  .map((item) => {
    return `
    <div class="userCard">
            <div class="dp"><img src=${item.dp} alt="dp" /></div>
            <table>
              <tr>
                <td>Name :</td>
                <td>${item.name}</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>${item.email}</td>
              </tr>
              <tr>
                <td>Location :</td>
                <td>${item.location}</td>
              </tr>
              <tr>
                <td>Joined :</td>
                <td>${item.joinedDate}</td>
              </tr>
              <tr>
                <td><button class="bgred">${
                  item.blocked ? "unblock" : "Block"
                }</button></td>
                <td><button class="bggreen">Remove</button></td>
              </tr>
            </table>
          </div>
    `;
  })
  .join("");
// creating a responsive menu
