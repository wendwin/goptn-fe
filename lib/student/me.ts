export async function getStudentMe() {
  const token = localStorage.getItem("token");

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/auth/student/me`, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Accept": "application/json"
    }
  });

  if (!res.ok) throw new Error("Gagal mengambil data student");
  return res.json();
}
