const testimonialsContainer = document.querySelector(".testimonial-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid beatae tempora quia quaerat voluptate officiis assumenda ipsam consectetur at. Voluptatem veniam nemo itaque error obcaecati animi aspernatur soluta vitae a accusantium, nulla perferendis accusamus aperiam ipsum ab dolorem quis debitis, ad, hic enim fugit ratione culpa fuga sequi? Expedita sapiente ipsa quos tenetur blanditiis, quia itaque debitis nobis saepe impedit nihil optio, soluta enim iusto voluptas. Sit exercitationem omnis quas!",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid beatae tempora quia quaerat voluptate officiis assumenda ipsam consectetur at. Voluptatem veniam nemo itaque error obcaecati animi aspernatur soluta vitae a accusantium, nulla perferendis accusamus aperiam ipsum ab dolorem quis debitis.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid beatae tempora quia quaerat voluptate officiis assumenda ipsam consectetur at Voluptatem veniam nemo itaque.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Grapic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid beatae tempora quia quaerat voluptate officiis assumenda ipsam consectetur at. Voluptatem veniam nemo itaque error obcaecati animi aspernatur soluta vitae a accusantium, nulla perferendis accusamus aperiam ipsum ab dolorem quis debitis, ad, hic enim fugit ratione culpa fuga sequi? Expedita sapiente ipsa quos tenetur blanditiis, quia itaque debitis nobis saepe impedit nihil optio, soluta enim iusto voluptas. Sit exercitationem omnis quas!",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.unsplash.com/photo-1675247116534-65b8d970144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid beatae tempora quia quaerat voluptate officiis assumenda ipsam consectetur at. Voluptatem veniam nemo itaque error obcaecati animi.",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/women/97.jpg",
    text: " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid beatae tempora quia quaerat voluptate officiis assumenda ipsam consectetur at Voluptatem veniam nemo itaque.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid beatae tempora quia quaerat voluptate officiis assumenda ipsam consectetur at. Voluptatem veniam nemo itaque error obcaecati animi.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid beatae tempora quia quaerat voluptate officiis assumenda ipsam consectetur at.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
