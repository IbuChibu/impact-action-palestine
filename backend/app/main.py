from fastapi import FastAPI
from supabase import create_client, Client
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path=".env")

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("Missing Supabase credentials in .env")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Welcome to the Impact Action Palestine API"}

@app.get("/actions")
def get_actions():
    response = supabase.table("activism_actions").select("*").execute()
    return response.data

from app.utils.scrape_and_insert import run_scrapers_and_insert

@app.post("/scrape")
def scrape_now():
    run_scrapers_and_insert()
    return {"message": "Scraping and inserting complete."}