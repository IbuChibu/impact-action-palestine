import requests
from bs4 import BeautifulSoup

def scrape_change_petitions():
    url = "https://www.change.org/search?q=palestine"
    headers = {"User-Agent": "Mozilla/5.0"}
    r = requests.get(url, headers=headers)
    soup = BeautifulSoup(r.text, "html.parser")

    results = []
    for card in soup.select("a[href^='/p/']"):
        title = card.get_text(strip=True)
        link = "https://www.change.org" + card.get("href")
        results.append({
            "title": title,
            "link": link,
            "source": "Change.org"
        })
    return results