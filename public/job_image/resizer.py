import os
from PIL import Image

# 이미지 파일 확장자 목록
image_extensions = ['.png', '.jpg', '.jpeg', '.gif', '.bmp']

# 현재 폴더의 모든 파일을 검색
for file in os.listdir():
    # 파일 확장자가 이미지 확장자 목록에 있는지 확인
    if any(file.lower().endswith(ext) for ext in image_extensions):
        try:
            # 이미지 열기
            img = Image.open(file)
            # 이미지 크기 조정 (100x100)
            img = img.resize((100, 100), Image.Resampling.LANCZOS)
            # 원본 파일 덮어쓰기
            img.save(file)
            print(f"Resized {file}")
        except Exception as e:
            print(f"Failed to resize {file}: {e}")

print("All images have been resized.")
