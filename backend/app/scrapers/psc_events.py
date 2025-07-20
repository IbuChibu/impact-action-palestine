import requests
from bs4 import BeautifulSoup

def scrape_psc_events():
    url = "https://palestinecampaign.org/events/"
    r = requests.get(url)
    soup = BeautifulSoup(r.text, "html.parser")

    results = []
    for event in soup.select("div.tribe-events-calendar-list__event"):
        title = event.select_one("h3").get_text(strip=True)
        date = event.select_one("time").get("datetime", "")
        link = event.select_one("a").get("href")
        results.append({
            "title": title,
            "date": date,
            "link": link,
            "source": "PSC"
        })
    return results