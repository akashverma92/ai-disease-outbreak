#  AI Disease Outbreak Prediction

 **Live Demo**  
 [View Deployed App](https://your-render-app-url.com)

---

##  About the Project

AI Disease Outbreak Prediction is a web platform that uses machine learning models to forecast the number of cases for various infectious diseases (e.g., COVID-19, Polio, Measles). The system provides visual outputs in both 2D (map-style) and interactive 3D plots.

---

##  Tech Stack

| Layer      | Technology         |
|------------|--------------------|
| Backend    | Flask (Python)     |
| ML Models  | XGBoost via joblib |
| Frontend   | HTML (Jinja2)      |
| Graphs     | Plotly (3D), Matplotlib (2D) |
| Hosting    | Render             |

---

## 📌 Features

 Predict disease cases by year and country  
 Multiple diseases supported  
 2D map-style visualization  
 3D scatter plot visualization  
 Dynamic page routing for each disease

##  Local Development

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/disease-predictor.git
cd disease-predictor
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the App

```bash
python app.py
```

Then open `http://127.0.0.1:5000` in your browser.

---

##  Deploy on Render

1. Push this project to GitHub
2. Create a new Web Service on [https://render.com](https://render.com)
3. Set Build Command: `pip install -r requirements.txt`
4. Set Start Command: `gunicorn app:app`
5. Done 

##  Contact

Author: Ayush Verma || Akash Verma 
[LinkedIn](https://www.linkedin.com/in/ayush-verma92) | [GitHub](https://github.com/Ayushverma23)
[LinkedIn](https://www.linkedin.com/in/akash-verma92) | [GitHub](https://github.com/Akashverma92)