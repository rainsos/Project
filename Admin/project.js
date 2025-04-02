// 시간설정 

function updateTime() {
  const now = new Date();

  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');

  const hh = String(now.getHours()).padStart(2, '0');
  const mi = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');

  const formatted = `🕒 ${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
  const timeDiv = document.getElementById('currentTime');
  if (timeDiv) timeDiv.textContent = formatted;
}

// 최초 실행 + 매초마다 업데이트
updateTime();
setInterval(updateTime, 1000);


// 회원 가입

  document.getElementById('signUpBtn').addEventListener('click', () => {
    window.open('signup.html', 'signupPopup', 'width=500,height=750');
  });

// 팝업 열기
document.getElementById('signUpBtn').addEventListener('click', () => {
  window.joinPopup = window.open('signup.html', 'signupPopup', 'width=500,height=700');
});

// 팝업에서 호출될 함수
function handleJoinSuccess(username, email) {
  const joinResult = document.getElementById('joinResult');

  joinResult.innerHTML = `
    <div class="alert alert-success mt-3 alert-dismissible fade show" id="joinAlert" role="alert">
      🎉 <strong>${username}</strong>님이 가입하셨습니다.<br>
      ✉️ 이메일: ${email}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  `;

  // 자동 제거
  setTimeout(() => {
    const alertBox = document.getElementById('joinAlert');
    if (alertBox) {
      alertBox.classList.remove('show');
      alertBox.classList.add('fade');
      setTimeout(() => alertBox.remove(), 300);
    }
  }, 3000);

  // 팝업 닫기
  if (window.joinPopup && !window.joinPopup.closed) {
    window.joinPopup.close();
  }
}


//다크모드 설정
const darkBtn = document.getElementById('darkModeBtn');

darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // 버튼 텍스트 바꾸기
  if (document.body.classList.contains('dark-mode')) {
    darkBtn.innerText = '라이트모드';
  } else {
    darkBtn.innerText = '다크모드';
  }
});


// 데이터 배열
const categories = ["상의", "하의", "신발", "패션잡화"];
const brands = ["Nike", "Adidas", "Puma", "Reebok", "Vans", "Levi's", "Zara", "Uniqlo", "Converse", "Tommy Hilfiger", "Supreme", "H&M", "Champion", "Fila", "Carhartt", "Patagonia", "Ralph Lauren", "Bape", "The North Face", "Under Armour"];
const products = ["스웨이드 크롭 재킷", "플리츠 미니 스커트", "청키 로퍼", "미니멀 가죽 백팩", "오버사이즈 블레이저", "와이드 레그 트라우저", "애니멀 프린트 앵클 부츠", "체인 장식 크로스백", "크롭트 카디건", "슬라우치 조거 팬츠", "빈티지 러닝 스니커즈", "퀼팅 레더 월렛", "그래픽 오버사이즈 티셔츠", "슬림핏 데님 진", "플랫폼 첼시 부츠", "버킷 햇", "크롭트 후디", "테크웨어 카고 팬츠", "레트로 하이탑 스니커즈", "스마트 워치", "시어 블라우스", "테일러드 쇼츠", "스포티 트랙 재킷", "미니멀 토트백", "폴로 셔츠", "디스트로이드 진", "하이탑 캔버스 스니커즈", "클러치 백", "워크웨어 재킷", "테이퍼드 슬랙스", "트레일 러닝화", "카드 홀더", "스트라이프 니트", "데님 오버롤", "러닝 캡", "플리스 베스트", "버뮤다 쇼츠", "스웨이드 슬립온", "레더 백팩", "드레이프 드레스", "테일러드 팬츠", "로우탑 스니커즈", "크로스바디 백", "프린지 장식 재킷", "슬라우치 핏 팬츠", "플랫 뮬", "레이어드 네크리스", "고어텍스 윈드브레이커", "다운 패딩 팬츠", "스포츠 샌들", "레더 스트랩 시계", "크롭트 탑", "하이테크 러닝 슈즈", "퀼팅 체인백", "오버사이즈 선글라스", "베이직 슬랙스", "플리스 후디", "보헤미안 맥시 드레스", "메탈릭 미니백", "스웨이드 첼시 부츠", "플로럴 프린트 블라우스", "테니스 스커트", "레트로 스니커즈", "패니 팩", "오버사이즈 니트 스웨터", "슬립 드레스", "하이웨이스트 팬츠", "러기지 토트백", "플랫폼 샌들", "카고 조거 팬츠", "스테이트먼트 이어링"];

// 제품 데이터 생성
const product_data = [];
for (let i = 0; i < 100; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const brand = brands[Math.floor(Math.random() * brands.length)];
  const product = products[Math.floor(Math.random() * products.length)];
  const price = Math.floor(Math.random() * 4901) * 100 + 10000; // 100원단위로 가격 형성 가격 범위 10,000 ~ 500,000 원
  const gender = Math.random() > 0.5 ? "남성" : "여성"; // 임의로 남성, 여성 할당

  product_data.push({
    category: category,
    brand: brand,
    product: product,
    price: price.toLocaleString(), // 천 단위 쉼표 추가
    gender: gender,
  });
}

// 페이지 관련 변수
const itemsPerPage = 10; // 한 페이지에 표시할 항목 수
let currentPage = 1; // 현재 페이지
let filteredData = product_data; // 필터된 데이터

// 필터링 함수
function filterProducts() {
  const categorySelect = document.getElementById("categorySelect").value;
  const genderSelect = document.getElementById("genderSelect").value;
  const productSearch = document.getElementById("productSearch").value.toLowerCase();

  filteredData = product_data.filter(item => {
    const matchesCategory = categorySelect ? item.category === categorySelect : true;
    const matchesGender = genderSelect ? item.gender === genderSelect : true;
    const matchesProduct = productSearch ? item.product.toLowerCase().includes(productSearch) : true;

    return matchesCategory && matchesGender && matchesProduct;
  });

  currentPage = 1; // 필터 후 첫 페이지로 돌아가도록 설정
  renderTable();
  renderPagination();
}

// 페이지 네이션 렌더링 함수
function renderPagination() {
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const pagination = document.getElementById("pagination");

  // 페이지 번호 생성
  pagination.innerHTML = '';

  // 이전 버튼 상단 스크롤 방지
  pagination.innerHTML += `<li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                            <a class="page-link" href="#" aria-label="Previous" onclick="changePage(${currentPage - 1}); event.preventDefault();">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>`;

  // 페이지 번호들 상단 스크롤 방지
  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `<li class="page-item ${currentPage === i ? 'active' : ''}">
                              <a class="page-link" href="#" onclick="changePage(${i}); event.preventDefault();">${i}</a>
                            </li>`;
  }

  // 다음 버튼 상단 스크롤 방지
  pagination.innerHTML += `<li class="page-item ${currentPage === totalPages ? 'disabled' : ''}">
                            <a class="page-link" href="#" aria-label="Next" onclick="changePage(${currentPage + 1}); event.preventDefault();">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>`;
}

// 페이지 변경 함수
function changePage(page) {
  if (page < 1 || page > Math.ceil(filteredData.length / itemsPerPage)) return;
  currentPage = page;
  renderTable();
  renderPagination();
}

// 테이블 데이터 렌더링 함수
function renderTable() {
  const product_data_Table = document.getElementById('product_data_Table');
  product_data_Table.innerHTML = '';

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const pageData = filteredData.slice(startIndex, endIndex);

  pageData.forEach((item) => {
    const row = product_data_Table.insertRow();
    row.insertCell(0).innerHTML = item.category;
    row.insertCell(1).innerHTML = item.brand;
    row.insertCell(2).innerHTML = item.product;
    row.insertCell(3).innerHTML = item.gender;
    row.insertCell(4).innerHTML = `${item.price}원`;
  });
}

// 초기 데이터 렌더링
renderTable();
renderPagination();
