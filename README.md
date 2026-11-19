# 🎯 AI Resume Score Checker (ATS Analyzer)

An AI-powered tool that checks your resume and gives an ATS score out of 100, just like real companies do.

**Live Demo:** https://mythrri.github.io/ai-resume-score-checker/

## ✨ Features
- Paste any resume and get instant score
- Supports 3 Job Roles: AI / Data Science, Web Developer, Business / MBA
- Shows which keywords you have and which are missing
- Gives personalized tips to improve your resume
- Beautiful progress bar and mobile-friendly design

## 🧠 How It Works (AI Logic)
This project uses **Keyword Matching + NLP (Natural Language Processing)** - the same logic used by Applicant Tracking Systems (ATS) in companies:

1.  User selects job role (e.g. AI / Data Science)
2.  System loads a list of 10 important skills for that role
3.  AI scans the resume text for those keywords
4.  Score = (Found Keywords / Total Keywords) * 100
5.  AI shows missing keywords and gives improvement tips

Example:
`Resume has Python, Project, SQL -> Score: 30/100 -> Tip: Add Internship, LinkedIn, GitHub`

## 🛠️ Tech Stack
- HTML - Structure
- CSS - Styling
- JavaScript - AI Scoring Logic

## 🚀 How To Use
1. Open Live Demo link
2. Choose your Job Role
3. Paste your full resume text
4. Click "Check My Score"
5. Add the missing keywords shown to improve your score to 80+

## 🎯 Future Improvements
- Use Machine Learning to understand synonyms (e.g. "ML" = "Machine Learning")
- Add PDF resume upload
- Give grammar and formatting suggestions

## 👩‍💻 Author
**Mythrri**
Aspiring AI Student | Interested in Artificial Intelligence & Machine Learning
