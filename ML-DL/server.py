from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
from bs4 import BeautifulSoup

app = FastAPI()

# Allow the Next.js dev server (3000) to access this API from the browser
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
)

@app.get('/scrap')
def scrap():
    url = 'https://nextjs.org/docs'
    
    response = requests.get(url)
    soup = BeautifulSoup(response.text, "html.parser")
    
    content = soup.select_one(".prose")

    text = content.get_text("\n", strip=True)

    return {"data": text}