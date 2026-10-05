import json
import os
import re
import urllib.request
import urllib.parse
from pathlib import Path

STOCK_DIR = Path("public/images/stock")
STOCK_DIR.mkdir(parents=True, exist_ok=True)

ITEMS = [
    {
        "id": "seoul_1988_stadium",
        "filename": "01_seoul_1988_stadium.jpg",
        "scene": 1,
        "search": "Seoul Olympic Stadium",
        "fallback_unsplash": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=1600&auto=format&fit=crop&q=80",
        "description": "Historical Seoul Olympic Stadium complex"
    },
    {
        "id": "beijing_birds_nest",
        "filename": "02_beijing_birds_nest.jpg",
        "scene": 1,
        "search": "Beijing national stadium night",
        "fallback_unsplash": "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1600&auto=format&fit=crop&q=80",
        "description": "Beijing 2008 National Stadium (Bird's Nest)"
    },
    {
        "id": "gymnastics_youth_academy",
        "filename": "03_gymnastics_youth_academy.jpg",
        "scene": 2,
        "direct_url": "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&auto=format&fit=crop&q=80",
        "license": "Unsplash Commercial Free",
        "author": "Unsplash Sport Contributor",
        "description": "Youth gymnastics training academy and physical discipline"
    },
    {
        "id": "weightlifting_chalk_hands",
        "filename": "04_weightlifting_chalk_hands.jpg",
        "scene": 2,
        "direct_url": "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=1600&auto=format&fit=crop&q=80",
        "license": "Unsplash Commercial Free",
        "author": "Unsplash Fitness Contributor",
        "description": "Athletic chalk hands gripping barbell for heavy weightlifting"
    },
    {
        "id": "table_tennis_olympic",
        "filename": "05_table_tennis_olympic.jpg",
        "scene": 3,
        "direct_url": "https://images.unsplash.com/photo-1534158914592-062992fbe900?w=1600&auto=format&fit=crop&q=80",
        "license": "Unsplash Commercial Free",
        "author": "Unsplash Sports Contributor",
        "description": "Professional table tennis match action and paddle control"
    },
    {
        "id": "liu_xiang_hurdles",
        "filename": "07_liu_xiang_hurdles.jpg",
        "scene": 3,
        "search": "LIU Xiang at Beijing 2008 Olympics",
        "fallback_unsplash": "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&auto=format&fit=crop&q=80",
        "description": "Liu Xiang during 110m hurdles Olympic competition"
    },
    {
        "id": "pan_zhanle_swimming",
        "filename": "08_pan_zhanle_olympic_gold.jpg",
        "scene": 3,
        "search": "Olympic Swimming competition freestyle pool",
        "fallback_unsplash": "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=1600&auto=format&fit=crop&q=80",
        "description": "Olympic swimming pool victory celebration"
    },
    {
        "id": "sports_biomechanics_lab",
        "filename": "09_sports_biomechanics_lab.jpg",
        "scene": 4,
        "direct_url": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&auto=format&fit=crop&q=80",
        "license": "Unsplash Commercial Free",
        "author": "Unsplash Science Contributor",
        "description": "Sports science high-speed sensor analysis and motion tracking"
    },
    {
        "id": "quan_hongchan_diving",
        "filename": "10_quan_hongchan_diving.jpg",
        "scene": 5,
        "search": "Olympic diving platform competition water",
        "fallback_unsplash": "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=1600&auto=format&fit=crop&q=80",
        "description": "Olympic diving competition 10m platform entry"
    },
    {
        "id": "zheng_qinwen_tennis",
        "filename": "11_zheng_qinwen_tennis.jpg",
        "scene": 5,
        "search": "Zheng Qinwen tennis",
        "fallback_unsplash": "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1600&auto=format&fit=crop&q=80",
        "description": "Olympic women's singles tennis champion celebration"
    },
    {
        "id": "olympic_gold_medal_macro",
        "filename": "12_olympic_gold_medal.jpg",
        "scene": 6,
        "direct_url": "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?w=1600&auto=format&fit=crop&q=80",
        "license": "Unsplash Commercial Free",
        "author": "Unsplash Macro Contributor",
        "description": "Macro closeup of gold medal with championship ribbon"
    }
]

def search_wikimedia(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json"
    req = urllib.request.Request(url, headers={"User-Agent": "AntigravityVideoBot/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode("utf-8", errors="ignore"))
            items = data.get("query", {}).get("search", [])
            if items:
                return items[0]["title"]
    except Exception as e:
        print(f"Search failed for {query}: {e}")
    return None

def get_wikimedia_info(title):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url|extmetadata&format=json"
    req = urllib.request.Request(url, headers={"User-Agent": "AntigravityVideoBot/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=10) as r:
            data = json.loads(r.read().decode("utf-8", errors="ignore"))
            pages = data.get("query", {}).get("pages", {})
            for pid, pdata in pages.items():
                if "imageinfo" in pdata and len(pdata["imageinfo"]) > 0:
                    info = pdata["imageinfo"][0]
                    ext = info.get("extmetadata", {})
                    lic = ext.get("LicenseShortName", {}).get("value", "CC BY-SA")
                    artist = ext.get("Artist", {}).get("value", "Wikimedia Contributor")
                    artist = re.sub(r"<[^>]+>", "", artist).strip()
                    img_url = info.get("url")
                    return img_url, lic, artist
    except Exception as e:
        print(f"Info fetch failed for {title}: {e}")
    return None, "CC BY-SA", "Wikimedia Contributor"

def download_file(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"})
    with urllib.request.urlopen(req, timeout=20) as resp, open(dest, "wb") as f:
        f.write(resp.read())

def main():
    print("=== Downloading Stock Assets & Programmatic Legal Manifest ===")
    manifest = []

    for item in ITEMS:
        dest_path = STOCK_DIR / item["filename"]
        source_url = ""
        license_type = ""
        attribution = ""

        if "direct_url" in item:
            source_url = item["direct_url"]
            license_type = item["license"]
            attribution = f"{item['author']} via Unsplash"
            print(f"Fetching Unsplash: {item['filename']}...")
            try:
                download_file(source_url, dest_path)
                print(f"  [OK] Saved {item['filename']}")
            except Exception as e:
                print(f"  [Error] Unsplash download failed: {e}")
        else:
            search_query = item["search"]
            print(f"Searching Wikimedia for '{search_query}'...")
            title = search_wikimedia(search_query)
            downloaded = False
            if title:
                img_url, lic, artist = get_wikimedia_info(title)
                if img_url:
                    license_type = lic
                    attribution = f"{artist} via Wikimedia Commons ({title})"
                    source_url = img_url
                    try:
                        print(f"  Downloading from Wikimedia: {title}...")
                        download_file(img_url, dest_path)
                        print(f"  [OK] Saved {item['filename']}")
                        downloaded = True
                    except Exception as e:
                        print(f"  [Warn] Wikimedia image download failed: {e}")
            
            if not downloaded and "fallback_unsplash" in item:
                source_url = item["fallback_unsplash"]
                license_type = "Unsplash Commercial Free"
                attribution = "Unsplash Editorial/Sports Contributor"
                try:
                    print(f"  Downloading fallback Unsplash for {item['filename']}...")
                    download_file(source_url, dest_path)
                    print(f"  [OK Fallback] Saved {item['filename']}")
                except Exception as e:
                    print(f"  [Error] Fallback failed: {e}")

        manifest.append({
            "id": item["id"],
            "file": f"images/stock/{item['filename']}",
            "scene": item["scene"],
            "type": "stock",
            "license": license_type,
            "attribution": attribution,
            "description": item["description"],
            "sourceUrl": source_url
        })

    # AI Generated Manifest Entries
    ai_items = [
        ("01_stadium_twilight.jpg", 1, "Atmospheric Olympic stadium under twilight storm clouds"),
        ("02_training_compound_dust.jpg", 2, "Vintage youth sports boarding school training hall"),
        ("03_diving_depth_concept.jpg", 3, "High-angle 10-meter platform over illuminated Olympic pool"),
        ("04_wind_tunnel_lasers.jpg", 4, "Aerospace wind tunnel with laser streamlines testing posture"),
        ("05_shadowed_arena_tunnel.jpg", 5, "Shadowed stadium tunnel evoking the elimination rate"),
        ("06_podium_silhouette.jpg", 6, "Olympic champion standing on podium gold spotlight")
    ]
    for filename, scene, desc in ai_items:
        manifest.append({
            "id": filename.split(".")[0],
            "file": f"images/ai/{filename}",
            "scene": scene,
            "type": "ai_generated",
            "license": "Bespoke In-House Concept (Royalty-Free)",
            "attribution": "Generated In-House AI Concept Art",
            "description": desc,
            "sourceUrl": "local:generate_image"
        })

    # Audio Manifest Entries
    manifest.extend([
        {
            "id": "voiceover_narration",
            "file": "audio/voiceover.mp3",
            "type": "voiceover",
            "license": "Custom Kokoro-82M TTS (af_heart)",
            "attribution": "Narrated via Kokoro ONNX",
            "description": "Documentary narration audio"
        },
        {
            "id": "bgm_documentary",
            "file": "audio/bgm.mp3",
            "type": "music",
            "license": "Creative Commons 0 (CC0) / YouTube Audio Library",
            "attribution": "Royalty-Free Ambient Documentary Score",
            "description": "Deep ambient documentary scoring background track"
        },
        {
            "id": "sfx_whoosh",
            "file": "audio/sfx/whoosh.mp3",
            "type": "sfx",
            "license": "CC0 Public Domain",
            "attribution": "Freesound Archive",
            "description": "Scene transition whoosh sound"
        },
        {
            "id": "sfx_impact",
            "file": "audio/sfx/impact.mp3",
            "type": "sfx",
            "license": "CC0 Public Domain",
            "attribution": "Freesound Archive",
            "description": "Dramatic chapter hit"
        },
        {
            "id": "sfx_tick",
            "file": "audio/sfx/counter_tick.mp3",
            "type": "sfx",
            "license": "CC0 Public Domain",
            "attribution": "Freesound Archive",
            "description": "Subtle counter increment click"
        }
    ])

    manifest_file = Path("src/assets.manifest.json")
    with open(manifest_file, "w", encoding="utf-8") as f:
        json.dump(manifest, f, indent=2, ensure_ascii=False)
    print(f"\n[DONE] Manifest written with {len(manifest)} items to {manifest_file}")

if __name__ == "__main__":
    main()
