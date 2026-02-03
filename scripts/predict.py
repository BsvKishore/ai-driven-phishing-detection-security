import joblib
model = joblib.load("phishing_model.pkl")
vectorizer = joblib.load("vectorizer.pkl")
def predict_email(text):
 X = vectorizer.transform([text])
 pred = model.predict(X)[0]
 return pred
email = input("Paste email content: ")
print("Prediction:", predict_email(email))
