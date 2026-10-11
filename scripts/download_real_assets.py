import urllib.request
import urllib.parse
import json
import os
import ssl

ctx = ssl.create_default_context()
headers = {'User-Agent': 'ChinaOlympicDocPipeline/1.0 (educational documentary pipeline)'}

def get_image_direct_url(title):
    api_url = f'https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&format=json'
    req = urllib.request.Request(api_url, headers=headers)
    with urllib.request.urlopen(req, context=ctx) as response:
        data = json.loads(response.read().decode('utf-8'))
        pages = data['query']['pages']
        for k, v in pages.items():
            if 'imageinfo' in v:
                return v['imageinfo'][0]['url']
    return None

def download_file(url, target_path):
    print(f"Downloading {url} to {target_path}...")
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, context=ctx) as resp, open(target_path, 'wb') as out:
        out.write(resp.read())
    print(f"Saved: {target_path} ({os.path.getsize(target_path)} bytes)")

downloads = [
    # 1. Quan Hongchan Paris 2024 (Real Olympic Champion)
    ("File:Quan_Hongchan_at_the_2024_Olympics.png", "public/images/stock/10_quan_hongchan_diving.jpg"),
    
    # 2. Zheng Qinwen Paris 2024 (Real Gold Medalist)
    ("File:Qinwen Zheng - 2024 Olympics.jpg", "public/images/stock/11_zheng_qinwen_tennis.jpg"),

    # 3. Table Tennis - Ma Long (Real Olympic Goat)
    ("File:Ma Long (2024).png", "public/images/stock/05_table_tennis_olympic.jpg"),

    # 4. Weightlifting - Rio 2016 69kg Gold Medalist Shi Zhiyong
    ("File:Rio 2016 - Weightlifting men's 69 kg (29049401030).jpg", "public/images/stock/04_weightlifting_chalk_hands.jpg"),
    
    # 5. Chinese Kids / Youth Gymnastics Training
    ("File:Kids gymnastics - China team ‐ Lake Macquarie ICG 2014.jpg", "public/images/stock/03_gymnastics_youth_academy.jpg"),
]

for title, target_path in downloads:
    try:
        url = get_image_direct_url(title)
        if url:
            download_file(url, target_path)
        else:
            print(f"FAILED to find URL for {title}")
    except Exception as e:
        print(f"ERROR downloading {title}: {e}")

print("Download process completed.")
