import { useRouter } from "next/router";
import UserLayout from "../../components/user/UserLayout";
import Card from "../../components/Card";

const identitas = () => {
  // {
  //   title:"Ir. H. Moch Najib, MM",
  //   nidn: "0720076202",
  //   noTelp:"0823456764"
  // },
  // {
  //   image:"/public/iman.webp",
  //   title:"Iman Santoso, SE, MM",
  //   nidn: "0710127402",
  //   noTelp:"0817544955"
  // },
  // {
  //   image:"/public/khairul.webp",
  //   title:"H. Chairul Anam, S.Kom, MM",
  //   nidn: "0730076801",
  //   noTelp:"087755611777"
  // },
  // {
  //   image:"/public/hadiq.jpg",
  //   title:"Hadiq, ST, M.Kom",
  //   nidn: "0713077804",
  //   noTelp:"08233482010"
  // },
  // {
  //   image:"/public/yulian.jpg",
  //   title:"Dwi Yulian R.L., S.Kom, M.Kom",
  //   nidn: "0713078001",
  //   noTelp:"081330692838"
  // },
  // {
  //   image:"/public/yulian.jpg",
  //   title:"Rachman Yulianto, S.Kom, M.Kom",
  //   nidn: "0711077704",
  //   noTelp:"087857333604"
  // },
  // {
  //   image:"/public/madi.jpg",
  //   title:"Nur Ahmadi Indartono ST, M.Kom",
  //   nidn: "0724107301",
  //   noTelp:"	085334269309"
  // },
  // {
  //   image:"/public/jun.jpg",
  //   title:"Djuniharto, SE, S.Kom, M.Kom",
  //   nidn: "0726067101",
  //   noTelp:"0818356202"
  // },

  return (
    <UserLayout>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <Card />
          </div>
        </div>
      </div>
    </UserLayout>
  );
};

export default identitas;
