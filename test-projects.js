// Test script to verify projects data
const fs = require('fs');
const path = require('path');

try {
  const projectsPath = path.join(__dirname, 'app/data/projects.user.json');
  const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));
  
  console.log('✅ Projects data loaded successfully!');
  console.log(`📊 Total projects: ${projects.length}`);
  
  console.log('\n📋 Project list:');
  projects.forEach((project, index) => {
    console.log(`${index + 1}. ${project.title} (order: ${project.order || 'not set'})`);
    console.log(`   - Tags: ${project.tags ? project.tags.join(', ') : 'none'}`);
    console.log(`   - GitHub: ${project.github || 'none'}`);
    console.log(`   - Live: ${project.hosted || 'none'}`);
    console.log('');
  });
  
  // Check for Erpica specifically
  const erpica = projects.find(p => p.title.includes('Erpica'));
  if (erpica) {
    console.log('🎉 Erpica project found:');
    console.log(JSON.stringify(erpica, null, 2));
  } else {
    console.log('❌ Erpica project NOT found in the data');
  }
  
} catch (error) {
  console.error('❌ Error loading projects data:', error.message);
}
