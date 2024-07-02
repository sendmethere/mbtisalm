const job_info = [
    {
        "no": 1,
        "image": "1.png",
        "job": "초등교사",
        "mbti": "ESFJ",
        "href": "https://solar-bone-db8.notion.site/1c23310a6a2a4ba29baf55430f1d9c65?pvs=25"
    },
    {
        "no": 2,
        "image": "2.png",
        "job": "회계사",
        "mbti": "ISTJ",
        "href": "https://solar-bone-db8.notion.site/348b010466a644a19052ecd20bad7e5b?pvs=25"
    },
    {
        "no": 3,
        "image": "3.png",
        "job": "법률가(검사,판사,변호사)",
        "mbti": "INTJ",
        "href": "https://solar-bone-db8.notion.site/e9cab676732d4a4fbb1e9648f94a79d8?pvs=25"
    },
    {
        "no": 4,
        "image": "4.png",
        "job": "공무원",
        "mbti": "ISTJ",
        "href": "https://solar-bone-db8.notion.site/69c6469fc0844fc5adbbf8af074969a3?pvs=25"
    },
    {
        "no": 5,
        "image": "5.png",
        "job": "간호사",
        "mbti": "ISFJ",
        "href": "https://solar-bone-db8.notion.site/ffc6fd8a9e4b48e29662414a6c755d19?pvs=25"
    },
    {
        "no": 6,
        "image": "6.png",
        "job": "상담사",
        "mbti": "INFJ",
        "href": "https://solar-bone-db8.notion.site/555c6fc2fd8f496aa505c7e0fd654c74?pvs=25"
    },
    {
        "no": 7,
        "image": "7.png",
        "job": "사회복지사",
        "mbti": "ISFJ",
        "href": "https://solar-bone-db8.notion.site/92fed13fcb6b46a592c6f41823d5c010?pvs=25"
    },
    {
        "no": 8,
        "image": "8.png",
        "job": "작가",
        "mbti": "INFJ",
        "href": "https://solar-bone-db8.notion.site/6db4922287c949f3ae1399e0832ba822?pvs=25"
    },
    {
        "no": 9,
        "image": "9.png",
        "job": "소프트웨어 개발자",
        "mbti": "INTP",
        "href": "https://solar-bone-db8.notion.site/9918d0b1bf3f4a0ca114d16c56fbd28c?pvs=25"
    },
    {
        "no": 10,
        "image": "10.png",
        "job": "사육사",
        "mbti": "ISFP",
        "href": "https://solar-bone-db8.notion.site/10af7e16eedf4decaf087e216cff86c9?pvs=25"
    },
    {
        "no": 11,
        "image": "11.png",
        "job": "과학자",
        "mbti": "INTJ",
        "href": "https://solar-bone-db8.notion.site/1196feff881f48b784d8ef2a33103410?pvs=25"
    },
    {
        "no": 12,
        "image": "12.png",
        "job": "프로그래머",
        "mbti": "INTP",
        "href": "https://solar-bone-db8.notion.site/51d17c4898214c1b938515fd119666dd?pvs=25"
    },
    {
        "no": 13,
        "image": "13.png",
        "job": "엔지니어",
        "mbti": "ISTP",
        "href": "https://solar-bone-db8.notion.site/af4009a572e54db4a28c39f13f7b3812?pvs=25"
    },
    {
        "no": 14,
        "image": "14.png",
        "job": "소방관",
        "mbti": "ISTP",
        "href": "https://solar-bone-db8.notion.site/50eb85e2a3db492480eb09ee4426a814?pvs=25"
    },
    {
        "no": 15,
        "image": "15.png",
        "job": "경찰관",
        "mbti": "ISTP",
        "href": "https://solar-bone-db8.notion.site/0763588a3b544fe3b98855145597d3a0?pvs=25"
    },
    {
        "no": 16,
        "image": "16.png",
        "job": "비행기 조종사",
        "mbti": "ISTP",
        "href": "https://solar-bone-db8.notion.site/7e88d12e24394600a6e287f8d296188e?pvs=25"
    },
    {
        "no": 17,
        "image": "17.png",
        "job": "패션 디자이너",
        "mbti": "ISFP",
        "href": "https://solar-bone-db8.notion.site/4ec3b9b4f97949b78c07d1ecfccdb762?pvs=25"
    },
    {
        "no": 18,
        "image": "18.png",
        "job": "사진작가",
        "mbti": "ISFP",
        "href": "https://solar-bone-db8.notion.site/1a8b83dbaa704258b0ab7793b1f012e4?pvs=25"
    },
    {
        "no": 19,
        "image": "19.png",
        "job": "물리치료사",
        "mbti": "ISFP",
        "href": "https://solar-bone-db8.notion.site/3aa565434d1242d49006c27dfacd3aef?pvs=25"
    },
    {
        "no": 20,
        "image": "20.png",
        "job": "예술치료사",
        "mbti": "INFP",
        "href": "https://solar-bone-db8.notion.site/26b89370833448c2846caa5ed81e678f?pvs=25"
    },
    {
        "no": 21,
        "image": "21.png",
        "job": "도서관 사서",
        "mbti": "INFP",
        "href": "https://solar-bone-db8.notion.site/1aba2ef93d234ab39abacc6d2e286045?pvs=25"
    },
    {
        "no": 22,
        "image": "22.png",
        "job": "아나운서",
        "mbti": "ENFJ",
        "href": "https://solar-bone-db8.notion.site/34b99493b7cb427b8be0d1d48c7bc73c?pvs=25"
    },
    {
        "no": 23,
        "image": "23.png",
        "job": "철학자",
        "mbti": "INTP",
        "href": "https://solar-bone-db8.notion.site/934820e3e5ea4eb9b864caebc55f8e6c?pvs=25"
    },
    {
        "no": 24,
        "image": "24.png",
        "job": "수학자",
        "mbti": "INTP",
        "href": "https://solar-bone-db8.notion.site/8eeec39bf1264846b7921440186011fd?pvs=25"
    },
    {
        "no": 25,
        "image": "25.png",
        "job": "탐정",
        "mbti": "ESTP",
        "href": "https://solar-bone-db8.notion.site/47304e2897ae46d5b9701820bb677564?pvs=25"
    },
    {
        "no": 26,
        "image": "26.png",
        "job": "은행원",
        "mbti": "ESTJ",
        "href": "https://solar-bone-db8.notion.site/486a983c7d444f4c96588ef8f44ea451?pvs=25"
    },
    {
        "no": 27,
        "image": "27.png",
        "job": "연예인",
        "mbti": "ESFP",
        "href": "https://solar-bone-db8.notion.site/158c6f070c2946158fb79b6b7bcdf837?pvs=25"
    },
    {
        "no": 28,
        "image": "28.png",
        "job": "여행가이드",
        "mbti": "ESFP",
        "href": "https://solar-bone-db8.notion.site/efcca386be104a15ae98991d21bb3523?pvs=25"
    },
    {
        "no": 29,
        "image": "29.png",
        "job": "마케팅 전문가",
        "mbti": "ENFP",
        "href": "https://solar-bone-db8.notion.site/f7e056e288c54204b134fe60a980636b?pvs=25"
    },
    {
        "no": 30,
        "image": "30.png",
        "job": "기업가(CEO)",
        "mbti": "ENFJ",
        "href": "https://solar-bone-db8.notion.site/CEO-d806415f0b2c4eda9b09d6c6d776753e?pvs=25"
    },
    {
        "no": 31,
        "image": "31.png",
        "job": "발명가",
        "mbti": "ENTP",
        "href": "https://solar-bone-db8.notion.site/01837788329446f7b19e9af56d175d0d?pvs=25"
    },
    {
        "no": 32,
        "image": "32.png",
        "job": "군인",
        "mbti": "ESTJ",
        "href": "https://solar-bone-db8.notion.site/4972a2a140d44121a9d71ac28255922e?pvs=25"
    },
    {
        "no": 33,
        "image": "33.png",
        "job": "의사",
        "mbti": "ISFJ",
        "href": "https://solar-bone-db8.notion.site/bfbf8068a76f4f21861b6f94b3886d77?pvs=25"
    },
    {
        "no": 34,
        "image": "34.png",
        "job": "심리학자",
        "mbti": "ENFJ",
        "href": "https://solar-bone-db8.notion.site/f5b42756a5854bae8653999875da45d2?pvs=25"
    },
    {
        "no": 35,
        "image": "35.png",
        "job": "예술가",
        "mbti": "ISFJ",
        "href": "https://solar-bone-db8.notion.site/b4e2ece1e0d7495982adb56c7febea49?pvs=25"
    },
    {
        "no": 36,
        "image": "36.png",
        "job": "운동선수",
        "mbti": "ISTP",
        "href": "https://solar-bone-db8.notion.site/d4579a9de2334cc3b7d594b1a30a3472?pvs=25"
    },
    {
        "no": 37,
        "image": "37.png",
        "job": "교수",
        "mbti": "ENTJ",
        "href": "https://solar-bone-db8.notion.site/2790a713890d4137bd20d3c3ad138c53?pvs=25"
    },
    {
        "no": 38,
        "image": "38.png",
        "job": "컴퓨터 보안 전문가",
        "mbti": "INTJ",
        "href": "https://solar-bone-db8.notion.site/fb01847ac1d8479a82d62a85ff42a5af?pvs=25"
    },
    {
        "no": 39,
        "image": "39.png",
        "job": "그래픽 디자이너",
        "mbti": "ENTP",
        "href": "https://solar-bone-db8.notion.site/e7616483ee454f509e8d3c7461ad1f07?pvs=25"
    },
    {
        "no": 40,
        "image": "40.png",
        "job": "사회학자",
        "mbti": "ENTP",
        "href": "https://solar-bone-db8.notion.site/bcf4f21980674ae69fdd58794edbde42?pvs=25"
    },
    {
        "no": 41,
        "image": "41.png",
        "job": "영양사",
        "mbti": "INFP",
        "href": "https://solar-bone-db8.notion.site/e53537dee9674809b95d2ba19bfc7e9d?pvs=25"
    },
    {
        "no": 42,
        "image": "42.png",
        "job": "작곡가",
        "mbti": "INFP",
        "href": "https://solar-bone-db8.notion.site/3047deaeca54477dac4c69b8b47412e6?pvs=25"
    },
    {
        "no": 43,
        "image": "43.png",
        "job": "기자",
        "mbti": "ESTP",
        "href": "https://solar-bone-db8.notion.site/af15098afb0e4cb1b8651a42a870ab74?pvs=25"
    },
    {
        "no": 44,
        "image": "44.png",
        "job": "카레이서",
        "mbti": "ISTP",
        "href": "https://solar-bone-db8.notion.site/f1df4bbc3da44e16839999bdb72dc7b8?pvs=25"
    },
    {
        "no": 45,
        "image": "45.png",
        "job": "코미디언",
        "mbti": "ESFP",
        "href": "https://solar-bone-db8.notion.site/4528926caae84de09b3e27dd6fabea96?pvs=25"
    },
    {
        "no": 46,
        "image": "46.png",
        "job": "승무원",
        "mbti": "ESFP",
        "href": "https://solar-bone-db8.notion.site/efd75cb95fb24cf89f5dfa14f1f01359?pvs=25"
    },
    {
        "no": 47,
        "image": "47.png",
        "job": "물리치료사",
        "mbti": "ISFP",
        "href": "https://solar-bone-db8.notion.site/efe3669134784c7f8fae7cd4c380d9da?pvs=25"
    },
    {
        "no": 48,
        "image": "48.png",
        "job": "보험설계사",
        "mbti": "ESTJ",
        "href": "https://solar-bone-db8.notion.site/ba9f9037d943438aa28175132dbbf06c?pvs=25"
    },
    {
        "no": 49,
        "image": "49.png",
        "job": "펀드 매니저",
        "mbti": "ISTJ",
        "href": "https://solar-bone-db8.notion.site/7fd234ca8ced444a8f5060fc3a0d872f?pvs=25"
    },
    {
        "no": 50,
        "image": "50.png",
        "job": "교사",
        "mbti": "ISTJ",
        "href": "https://solar-bone-db8.notion.site/75b580a57de74a7782b36044d93f6501?pvs=25"
    },
    {
        "no": 51,
        "image": "51.png",
        "job": "재무 설계사",
        "mbti": "ISTJ",
        "href": "https://solar-bone-db8.notion.site/1af18a8e4a5842d78b886edc892d671a?pvs=25"
    },
    {
        "no": 52,
        "image": "52.png",
        "job": "법률 연구원",
        "mbti": "ISTJ",
        "href": "https://solar-bone-db8.notion.site/4d267b6e492b498c9b2d3edf97e72c54?pvs=25"
    },
    {
        "no": 53,
        "image": "53.png",
        "job": "기상학자",
        "mbti": "ISTJ",
        "href": "https://solar-bone-db8.notion.site/b575350cc1654324bef66aee4dd8d69a?pvs=25"
    },
    {
        "no": 54,
        "image": "54.png",
        "job": "음악가",
        "mbti": "ISFJ",
        "href": "https://solar-bone-db8.notion.site/9e1e366870b44073adb36e5dfd971d37?pvs=25"
    },
    {
        "no": 55,
        "image": "55.png",
        "job": "리포터",
        "mbti": "ENFJ",
        "href": "https://solar-bone-db8.notion.site/2703c9d08dc540d9bbd0f16198d68094?pvs=25"
    },
    {
        "no": 56,
        "image": "56.png",
        "job": "노인복지사",
        "mbti": "INFJ",
        "href": "https://solar-bone-db8.notion.site/a1cc1bc406eb4480bf8c382fc4f26af1?pvs=25"
    },
    {
        "no": 57,
        "image": "57.png",
        "job": "저널리스트",
        "mbti": "INFJ",
        "href": "https://solar-bone-db8.notion.site/21e578414ef74c76820d4659f660b4be?pvs=25"
    },
    {
        "no": 58,
        "image": "58.png",
        "job": "공인중개사",
        "mbti": "ESTP",
        "href": "https://solar-bone-db8.notion.site/de684881779e44fab8682dba8c992d11?pvs=25"
    },
    {
        "no": 59,
        "image": "59.png",
        "job": "치위생사",
        "mbti": "ISFJ",
        "href": "https://solar-bone-db8.notion.site/b8b2ac849f2b4b4e91ad0036f24cb64b?pvs=25"
    },
    {
        "no": 60,
        "image": "60.png",
        "job": "방송 MC",
        "mbti": "ENFJ",
        "href": "https://solar-bone-db8.notion.site/MC-3417d0e075c7407db12ace266bd908ec?pvs=25"
    }
]

export default job_info;