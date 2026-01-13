// Simple script to upload projects to Firebase
const fs = require('fs');
const path = require('path');

// Read the projects data
const projectsPath = path.join(__dirname, 'app/data/projects.user.json');
const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

console.log('📁 Projects to upload:', projects.length);
console.log('🔗 Firebase URL: https://urjit-portfolio-app-default-rtdb.firebaseio.com');
console.log('\n⚠️  IMPORTANT: Update Firebase Security Rules first!');
console.log('Go to: https://console.firebase.google.com/project/urjit-portfolio-app/database');
console.log('Set rules to:');
console.log(`{
  "rules": {
    ".read": true,
    ".write": true
  }
}`);

console.log('\n📋 Projects preview:');
projects.forEach((project, index) => {
  console.log(`${index + 1}. ${project.title}`);
});

console.log('\n✅ Ready to upload once Firebase rules are updated!');
console.log('💡 After updating rules, restart your dev server and visit /projects page');
