import { useState } from "react";

export default function useKanban() {

    const [statusModal, setStatusModal] = useState(false);
    const [judul, setJudul] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState("Tinggi");
    const [error, setError] = useState("");
    const [tasks, setTasks] = useState([
        {
        id: 1,
        title: "Desain UI Kanban",
        desc: "Slicing layout dasar pake Tailwind CSS Dark Mode",
        status: "todo", 
        priority: "Tinggi"
        },
        {
        id: 2,
        title: "Ngopi dan Rehat",
        desc: "Biar otak gak ngebul setelah kelar KasirApp",
        status: "ongoing", 
        priority: "Rendah"
        },
        {
        id: 3,
        title: "Setup Project React",
        desc: "Inisialisasi folder project dan install dependensi Tailwind",
        status: "done",   
        priority: "Sedang"
        }
    ]);

    const buttonKanan = (id, status) => { 
        let statusBaru = status;


        if (status === "todo") {
            statusBaru = "ongoing"; 
        } else if (status === "ongoing") {
            statusBaru = "done"; 
        }

        setTasks((prevTasks) =>
            prevTasks.map((tugas) =>
                tugas.id === id ? { ...tugas, status: statusBaru } : tugas
            )
        );
    };
    const buttonKiri = (id, status) => { 
        let statusBaru = status;


        if (status === "done") {
            statusBaru = "ongoing"; 
        } else if (status === "ongoing") {
            statusBaru = "todo"; 
        }

        setTasks((prevTasks) =>
            prevTasks.map((tugas) =>
                tugas.id === id ? { ...tugas, status: statusBaru } : tugas
            )
        );
    };

    const setModal = () => {
        setStatusModal(!statusModal);
    };

    const handleHapus = (id) => {
        const newList = tasks.filter((task) => task.id !== id);
        setTasks(newList);
    };

    const handleChangePriority = (e) => {
        setPriority(e.target.value);
    }

    const handleChangeJudul = (e) => {
        setJudul(e.target.value);
        setError("");
    }
    const handleChangeDesc = (e) => {
        setDesc(e.target.value);
        setError("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (judul.length === 0 || desc.length === 0) {
            setError("Masukan judul dan deskripsi dengan benar"); 
            return;
        }

        const tugas = {
            id: Date.now(),
            title: judul,
            desc: desc,
            status: "todo",
            priority: priority
        }

        setTasks([...tasks, tugas]);
        setJudul("");
        setDesc("")
        setError("");

        setModal();
    }

    return {
        tasks,
        statusModal,
        priority,
        judul,
        desc,
        error,
        buttonKanan,
        buttonKiri,
        handleHapus,
        handleChangeDesc,
        handleChangeJudul,
        setModal,
        handleSubmit,
        handleChangePriority
    };
}