from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

def draw_centered_text(draw, y, text, font, fill, width, line_spacing=1.3):
    lines = text.split('\n')
    total_h = 0
    line_sizes = []
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        w = bbox[2] - bbox[0]
        h = bbox[3] - bbox[1]
        line_sizes.append((w, h))
        total_h += h * line_spacing
    
    curr_y = y
    for i, line in enumerate(lines):
        w, h = line_sizes[i]
        x = (width - w) // 2
        draw.text((x, curr_y), line, font=font, fill=fill)
        curr_y += h * line_spacing

def process():
    brain_dir = Path(r"C:\Users\SAMSUNG\.gemini\antigravity\brain\a8800f3f-a645-410b-9fc3-b293c349fde6")
    out_dir = Path(r"c:\Users\SAMSUNG\Desktop\jamyeong-school\ebook-20years-experience\images")
    out_dir.mkdir(parents=True, exist_ok=True)
    
    font_bold = "C:/Windows/Fonts/malgunbd.ttf"
    font_reg = "C:/Windows/Fonts/malgun.ttf"
    
    # 1. Cover
    cover_bg = Image.open(brain_dir / "ebook_cover_bg_1790328310331.jpg").convert("RGB")
    W, H = cover_bg.size
    draw = ImageDraw.Draw(cover_bg)
    
    # Category / Lead text
    draw_centered_text(draw, 90, "퇴직 전에 시작하는 4050 무자본 지식창업 & 첫 전자책 출판", 
                       ImageFont.truetype(font_reg, 22), (164, 92, 64), W) # Terracotta accent
    # Main Title
    draw_centered_text(draw, 145, "내 20년 경험이\n월급 외 100만 원이 되는 법", 
                       ImageFont.truetype(font_bold, 42), (44, 38, 48), W, line_spacing=1.35)
    # Author at bottom
    draw_centered_text(draw, 1140, "자명스쿨 지음 · 자명북스", 
                       ImageFont.truetype(font_reg, 22), (80, 75, 72), W)
    
    cover_bg.save(out_dir / "cover.png")
    print("Cover generated.")
    
    # Chapter info
    chapters = [
        ("ch01_bg_1790328348051.jpg", "ch01.png", "CHAPTER 01", "내 20년 인생에서\n팔리는 경험 발굴하기", "보통의 경험을 특별한 지식으로 바꾸는 4단계"),
        ("ch02_bg_1790328372372.jpg", "ch02.png", "CHAPTER 02", "완벽주의를 버리고\n첫 타깃 독자 1명 정하기", "누구에게 팔 것인가? 나와 3년 전의 나"),
        ("ch03_bg_1790328389038.jpg", "ch03.png", "CHAPTER 03", "3일 만에 끝내는\n목차 구성과 원고 작성법", "부담 없는 30페이지 전자책 프레임워크"),
        ("ch04_bg_1790328407314.jpg", "ch04.png", "CHAPTER 04", "디자인 몰라도 예쁘게\n완성하는 전자책 제작", "무료 도구와 AI로 표지와 내지 완성하기"),
        ("ch05_bg_1790328424600.jpg", "ch05.png", "CHAPTER 05", "퇴직 전 첫 100만 원 매출을\n만드는 실전 판매 루트", "크몽, 탈잉, 와디즈, 블로그에서 고객을 만나는 법"),
    ]
    
    for bg_name, out_name, ch_tag, title, sub in chapters:
        im = Image.open(brain_dir / bg_name).convert("RGB")
        draw = ImageDraw.Draw(im)
        draw_centered_text(draw, 110, ch_tag, ImageFont.truetype(font_bold, 24), (164, 92, 64), W)
        draw_centered_text(draw, 160, title, ImageFont.truetype(font_bold, 36), (44, 38, 48), W, line_spacing=1.35)
        draw_centered_text(draw, 275, sub, ImageFont.truetype(font_reg, 20), (100, 95, 92), W)
        im.save(out_dir / out_name)
        print(f"{out_name} generated.")
        
    # Copyright background
    cp_bg = Image.open(brain_dir / "copyright_bg_1790328329984.jpg").convert("RGB")
    cp_bg.save(out_dir / "copyright.png")
    print("Copyright bg saved.")

if __name__ == "__main__":
    process()
