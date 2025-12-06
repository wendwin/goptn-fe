export interface SetupStudentRequestBody {
  profile: {
    school_name: string;
    city: string;
    average_grade: number;
  };
  ptn_choices: {
    university_name: string;
    major: string;
  }[];
  entry_paths: string[];
}

export interface PersonalisasiData {
  sekolah: string;
  kota: string;
  rataRaport: string;
  pilihanPTN1: string;
  jurusan1: string;
  pilihanPTN2: string;
  jurusan2: string;
  pilihanPTN3: string;
  jurusan3: string;
  jalur: string[];
}


export async function setupStudent(payload: SetupStudentRequestBody) {
  const token = localStorage.getItem("token");

  if (!token) {
    throw new Error("Token tidak ditemukan. Harap login kembali.");
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/student/setup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  let data;

  try {
    data = await res.json();
  } catch {
    throw new Error("Response is not valid JSON");
  }

  if (!res.ok) {
    throw new Error(data.message || "Gagal menyimpan personalisasi");
  }

  return data;
}
