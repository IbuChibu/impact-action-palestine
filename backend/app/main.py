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

from scrapers.change_org import scrape_change_petitions
from scrapers.psc_events import scrape_psc_events
from db.supabase_client import insert_action

def main():
    print("Scraping Change.org...")
    petitions = scrape_change_petitions()

    print("Scraping PSC events...")
    events = scrape_psc_events()

    print("Inserting into Supabase...")
    for item in petitions + events:
        try:
            insert_action(item)
            print(f"✅ Inserted: {item['title']}")
        except Exception as e:
            print(f"❌ Failed: {item['title']} – {e}")

if __name__ == "__main__":
    main()