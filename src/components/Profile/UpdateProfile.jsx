import { useState, useEffect } from "react";
import { Form, Container, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState(null);
    const [visa, setVisa] = useState(null);
    const [passport, setPassport] = useState(null);
    const [izin, setIzin] = useState(null);
    const navigate = useNavigate();
    const whoami = () => {
        axios
            .get('https://flightgo-be-server.up.railway.app/v1/api/current-user', {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            })
            .then((response) => {
                setName(response.data.name);
                setAddress(response.data.address)
                setPhone(response.data.phone)
            });
    };
    useEffect(() => {
        whoami();
    }, [])
    async function handleSubmit(e) {
        e.preventDefault();

        const form = new FormData();

        form.append("name", name);
        form.append("phone", phone);
        form.append("address", address);
        form.append("image_user", image);
        form.append("visa", visa);
        form.append("passport", passport);
        form.append("izin", izin);

        try {
            if (name === null || address === null || phone === null || image === null || visa === null || passport === null || izin === null) {
                toast("Isi Semua data");
            } else {
                // eslint-disable-next-line no-unused-vars
                const response = await axios.put(
                    "https://flightgo-be-server.up.railway.app/v1/api/users",
                    form,
                    {
                        headers: {
                            Authorization: "Bearer " + localStorage.getItem("token"),
                            "Content-Type": "multipart/form-data",
                        },
                    }
                );
                setTimeout(() => {
                    navigate("/profile");
                    window.location.reload();
                }, 1000);
                swal({
                    title: "Berhasil!",
                    text: "Profil Updated",
                    icon: "success",
                    button: "Oke",
                });
            }
        } catch (error) {
            swal(error.response.data.message);
        }
    }
    return (
        <Container className="mt-5">
            <Button className="mt-2 mb-4 me-3" style={{ backgroundColor: "#F97316" }} href="/profile">
                Kembali
            </Button>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="my-2 mt-3">
                    <Form.Label>Nama <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nama Kamu"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mt-2">
                    <Form.Label>Alamat <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Contoh: Jalan Asoka dalam no.5"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Label>No. Handphone <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Contoh: 0812345678"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Picture <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="file"
                        id="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Visa <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="file"
                        id="image"
                        onChange={(e) => setVisa(e.target.files[0])}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Passport <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="file"
                        id="image"
                        onChange={(e) => setPassport(e.target.files[0])}
                        required
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Permit/Izin Tinggal <small className='text-danger d-inline'>*</small></Form.Label>
                    <Form.Control
                        type="file"
                        id="image"
                        onChange={(e) => setIzin(e.target.files[0])}
                        required
                    />
                </Form.Group>
                <Button className="mt-2 mb-4 bg-success" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default EditProfile