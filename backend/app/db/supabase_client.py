import os
from supabase import create_client
from dotenv import load_dotenv

# Load .env variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

if not SUPABASE_URL or not SUPABASE_KEY:
    raise ValueError("Supabase credentials not found in .env file.")

supabase = create_client(SUPABASE_URL, SUPABASE_KEY)

def insert_action(data):
    supabase.table("activism_actions").insert(data).execute()