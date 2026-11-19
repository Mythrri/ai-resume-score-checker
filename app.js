function checkResume() {
  let text = document.getElementById('resumeText').value.toLowerCase();
  let role = document.getElementById('jobRole').value;

  if (text.length < 50) {
    alert("Please paste your full resume - at least few lines!");
    return;
  }

  let skills = [];
  if (role === 'ai') {
    skills = ['python', 'machine learning', 'data', 'project', 'sql', 'internship', 'linkedin', 'github', 'communication', 'certificate'];
  } else if (role === 'web') {
    skills = ['html', 'css', 'javascript', 'project', 'react', 'github', 'internship', 'linkedin', 'communication', 'portfolio'];
  } else {
    skills = ['communication', 'excel', 'management', 'internship', 'leadership', 'project', 'linkedin', 'presentation', 'team', 'marketing'];
  }

  let found = [];
  let missing = [];
  skills.forEach(skill => {
    if (text.includes(skill)) found.push(skill);
    else missing.push(skill);
  });

  let score = Math.round((found.length / skills.length) * 100);

  document.getElementById('result').style.display = 'block';
  document.getElementById('scoreText').innerText = `Your AI Score: ${score} / 100`;
  document.getElementById('progressFill').style.width = score + '%';
  document.getElementById('foundList').innerText = found.length > 0 ? found.join(', ') : 'Nothing found';
  document.getElementById('missingList').innerText = missing.length > 0 ? missing.join(', ') : 'Nothing missing! Perfect!';
  
  let tip = '';
  if (score >= 80) tip = '🎉 Excellent! Your resume is ATS-ready. You can apply now.';
  else if (score >= 50) tip = '👍 Good, but add the missing keywords above to get more interview calls.';
  else tip = '⚠️ Your resume is weak. Add Projects, Internship, Skills and LinkedIn to improve.';
  document.getElementById('tipText').innerText = tip;

  document.getElementById('result').scrollIntoView({behavior: 'smooth'});
}
