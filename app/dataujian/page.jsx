"use client";
import React, { useEffect, useState } from "react";

const getSiswa = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/siswa", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("error loading topics: ", error);
  }
};

const getUjian = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/namaujian", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to fetch data");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.log("error loading topics: ", error);
  }
};

const UjianPage = () => {
  const [siswaname, setSiswaname] = useState("");
  const [ujianname, setUjianName] = useState("");
  const [siswa, setSiswa] = useState([]);
  const [ujian, setUjian] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { siswas } = await getSiswa();
        const { ujians } = await getUjian();
        setSiswa(siswas);
        setUjian(ujians);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleSiswa = async (e) => {
    e.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const res = await fetch("http://localhost:3000/api/dataujian", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          pesertaNis: siswaname,
          ujianId: ujianname,
        }),
      });

      if (res.ok) {
        setUjianName("");

        console.log("data tersimpan");
      } else {
        console.error("Error creating product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="">
          <h1 className="mb-3 text-4xl font-black text-center text-gray-900 dark:text-white w-96">
            Data Ujian Siswa
          </h1>
          <form
            onSubmit={handleSiswa}
            className="box-border px-6 py-4 bg-white border rounded shadow-md border-emerald-700"
          >
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama Siswa
              </label>
              <select
                className="w-full max-w-xs text-sm bg-green-300 select-bordered select-sm select"
                required
                value={siswaname}
                onChange={(e) => setSiswaname(e.target.value)}
              >
                <option value="">Pilih Siswa</option>
                {siswa?.map((t) => {
                  return (
                    <option key={t._id} value={t.nis && t.name}>
                      {t.name} & {t.nis}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama Ujian
              </label>
              <select
                className="w-full max-w-xs text-sm bg-green-300 select-bordered select-sm select"
                required
                value={ujianname}
                onChange={(e) => setUjianName(e.target.value)}
              >
                <option value="">Pilih Ujian</option>
                {ujian?.map((t) => {
                  return (
                    <option key={t._id} value={t.namaujian && t._id}>
                      {t.namaujian} & {t.idmatpel}
                    </option>
                  );
                })}
              </select>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UjianPage;
