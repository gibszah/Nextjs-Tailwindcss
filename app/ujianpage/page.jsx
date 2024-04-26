"use client";
import React, { useEffect, useState } from "react";

const getMatpel = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/matpel", {
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
  const [idmatpelId, setIdMatpelId] = useState("");
  const [ujianname, setUjianName] = useState("");
  const [matpel, setMatpel] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { matpels } = await getMatpel();
        setMatpel(matpels);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  console.log("matpel apa: ", matpel);
  const handleSiswa = async (e) => {
    e.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      const res = await fetch("http://localhost:3000/api/namaujian", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          namaujian: ujianname,
          idmatpelId,
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
            Create Matpel
          </h1>
          <form
            onSubmit={handleSiswa}
            className="box-border px-6 py-4 bg-white border rounded shadow-md border-emerald-700"
          >
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_name"
                id="floating_name"
                className="block py-2.5 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setUjianName(e.target.value)}
                value={ujianname}
                required
              />
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nama Ujian
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <label
                htmlFor="floating_email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mata Pelajaran
              </label>
              <select
                className="w-full max-w-xs text-sm bg-green-300 select-bordered select-sm select"
                required
                value={idmatpelId}
                onChange={(e) => setIdMatpelId(e.target.value)}
              >
                <option value="">Pilih Matpel</option>
                {matpel?.map((t) => {
                  return (
                    <option key={t._id} value={t._id}>
                      {t.namamatpel}
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
