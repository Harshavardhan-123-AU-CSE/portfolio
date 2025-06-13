// ✅ Form validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !email || !message) return alert("All fields are required!");
  if (!emailRegex.test(email)) return alert("Invalid email format!");

  alert("Form submitted successfully!");
});

// ✅ Basic spinning cube with Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas"), alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 2;

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshNormalMaterial({ wireframe: false });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
