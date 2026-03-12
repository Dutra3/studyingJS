import re
import time
import random
import pdfplumber
import requests
import pandas as pd
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

# ================= CONFIG =================

PDF_PATH = "random_list.pdf"
OUTPUT_FILE = "results.xlsx"

HEADERS = {
    "User-Agent": "Mozilla/5.0"
}

EMAIL_REGEX = r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
PHONE_REGEX = r"(\+1\s?)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}"

EMAIL_TEMPLATE = """Subject: Job Application – {{position}}

Hello,

My name is Gabriel and I am applying for the {{position}} position listed on XXXXXX.
I have experience with software development, teamwork, and long working hours.

I am available for the job program and can start as required.
My resume is attached for your review.

Thank you for your time.

Best regards,
Gabriel
"""

# ================= PDF =================

def extract_links_from_pdf(pdf_path):
    links = set()
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text = page.extract_text() or ""
            found = re.findall(
                r"https://testjobs\.com/jobs/[A-Z0-9-]+",
                text
            )
            links.update(found)
    return list(links)

# ================= POSITION =================

def extract_position_name(html_text):
    patterns = [
        r"Job Title\s*</[^>]+>\s*<[^>]+>\s*([^<]+)",
        r"Occupation\s*</[^>]+>\s*<[^>]+>\s*([^<]+)",
        r"Job Duties\s*</[^>]+>\s*<[^>]+>\s*([^<]+)"
    ]

    for pattern in patterns:
        match = re.search(pattern, html_text, re.IGNORECASE)
        if match:
            return match.group(1).strip()

    return "Worker"

# ================= SCRAPING =================

def scrape_static_page(url):
    try:
        r = requests.get(url, headers=HEADERS, timeout=15)
        soup = BeautifulSoup(r.text, "html.parser")

        text = soup.get_text(" ")
        html = r.text

        emails = re.findall(EMAIL_REGEX, text)
        phones = re.findall(PHONE_REGEX, text)
        position = extract_position_name(html)

        return list(set(emails)), list(set(phones)), position
    except:
        return [], [], "Worker"

def scrape_dynamic_page(url):
    emails, phones, position = [], [], "Worker"

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        try:
            page.goto(url, timeout=30000)
            content = page.content()

            emails = re.findall(EMAIL_REGEX, content)
            phones = re.findall(PHONE_REGEX, content)
            position = extract_position_name(content)
        except:
            pass

        browser.close()

    return list(set(emails)), list(set(phones)), position

# ================= PROCESS =================

def process_link(link):
    emails, phones, position = scrape_static_page(link)

    if not emails and not phones:
        emails, phones, position = scrape_dynamic_page(link)

    if emails:
        status = "EMAIL_FOUND"
        preferred = "Email"
        email_body = EMAIL_TEMPLATE.replace("{{position}}", position)
    elif phones:
        status = "PHONE_ONLY"
        preferred = "Phone"
        email_body = ""
    else:
        status = "NO_CONTACT_FOUND"
        preferred = "None"
        email_body = ""

    return {
        "job_link": link,
        "position": position,
        "email": emails[0] if emails else "",
        "phone": phones[0] if phones else "",
        "preferred_contact": preferred,
        "status": status,
        "email_draft": email_body
    }

# ================= MAIN =================

def main():
    links = extract_links_from_pdf(PDF_PATH)
    print(f"Found {len(links)} job links\n")

    results = []

    for i, link in enumerate(links, 1):
        print(f"[{i}/{len(links)}] Processing: {link}")
        data = process_link(link)
        results.append(data)

        time.sleep(random.uniform(2, 5))

    df = pd.DataFrame(results)
    df.to_excel(OUTPUT_FILE, index=False)

    print(f"\n✅ Done! Results saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
