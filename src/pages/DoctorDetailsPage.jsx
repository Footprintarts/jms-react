import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { doctors } from "../assets/data/doctors";
import DocNotFound from "../Components/DocNotFound";
import DoctorClient from "../Components/DoctorClient";

const DoctorDetailsPage = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    // Fetching simulation
    const fetchedDoctor = doctors.find((doc) => doc.id == id);
    setDoctor(fetchedDoctor);
  }, [id]);

  // Fallback
  if (!doctor) {
    return <DocNotFound />;
  }

  return <DoctorClient doctor={doctor} />;
};

export default DoctorDetailsPage;
