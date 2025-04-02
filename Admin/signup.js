document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = this.username.value;
    const email = this.email.value;
    const pw = this.password.value;
    const phone = this.phone.value;
    const confirmPw = this.confirmPassword.value;
    const pwError = document.getElementById('pwError');

    // 비밀번호 일치 확인
    if (pw !== confirmPw) {
      pwError.style.display = 'block';
      return;
    } else {
      pwError.style.display = 'none';
    }

    // 부모창 함수 호출
    if (window.opener && typeof window.opener.handleJoinSuccess === 'function') {
      window.opener.handleJoinSuccess(username, email, phone);
    }

    // 팝업 닫기
    window.close();
  });
});


