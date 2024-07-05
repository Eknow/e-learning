import CurriAngel from "assets/CV_ANGEL_MEZA.pdf";
import Angelimg from "assets/profile_renteria.jpeg";
import Crissimg from "assets/profile_criss.jpeg";
import CurriCriss from "assets/CV_CRISS.pdf";
import EhiranImg from "assets/profile_rodriguez.jpg";
import CurriEhiran from "assets/CV_EHIRAN.pdf";

const users = [
    {
        id: 1,
        name: "Renteria Meza Angel Eduardo",
        email: "Renteria@example.com",
        password: "password123",
        imageUrl: Angelimg,
        curriculumUrl: CurriAngel,
    },
    {
        id: 2,
        name: "Rodriguez Cuellar Ehiran Evenezer",
        email: "Rodriguez@example.com",
        password: "password123",
        imageUrl: EhiranImg,
        curriculumUrl: CurriEhiran,
    },
    {
        id: 3,
        name: "Aguirre Vazquez Cristopher",
        email: "Aguirre@example.com",
        password: "password123",
        imageUrl: Crissimg,
        curriculumUrl: CurriCriss,
    },
];

export default users;
