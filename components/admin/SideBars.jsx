import Script from "next/dist/client/script";
import Link from "next/dist/client/link";
const SideBars = ({ children }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0  " style={{backgroundColor:"#3b5998"}}>
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a
                href="#"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-5 d-none d-sm-inline">Menu</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start text-black"
                id="menu"
              >
                <li className="nav-item">
                  <Link href="/admin">
                    <a className="nav-link align-middle px-0 text-white">
                      <i className="fs-4 bi-house" />{" "}
                      <span className="ms-1 d-none d-sm-inline">Home</span>
                    </a>
                  </Link>
                </li>
                <li>
                  <a
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-speedometer2" />{" "}
                    <span className="ms-1 d-none d-sm-inline">Identitas</span>{" "}
                  </a>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <Link href="/admin/datadosen">
                        <a className="nav-link px-0 text-white">
                          {""}
                          <span className="d-none d-sm-inline">DATA DOSEN</span>
                          {""}
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/admin/tambahdosen">
                        <a href="#" className="nav-link px-0 text-white">
                          {" "}
                          <span className="d-none d-sm-inline">
                            Tambah DOSEN
                          </span>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle text-white "
                  >
                    <i className="fs-4 bi-bootstrap" />{" "}
                    <span className="ms-1 d-none d-sm-inline">Riwayat</span>
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu2"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <Link href="/admin/dataRiwayat">
                      <a href="#" className="nav-link px-0 text-white">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Data Riwayat Pendidikan
                        </span>
                      </a>
                      </Link>
                    </li>
                    <li>
                     <Link href="/admin/tambahRiwayat">
                     <a href="#" className="nav-link px-0 text-white">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Tambah Riwayat Pendidikan
                        </span>
                      </a>
                     </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle text-white"
                  >
                    <i className="fs-4 bi-grid" />{" "}
                    <span className="ms-1 d-none d-sm-inline">Pelatihan</span>{" "}
                  </a>
                  <ul
                    className="collapse nav flex-column ms-1"
                    id="submenu3"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                     <Link href="/admin/dataPelatihan">
                     <a href="#" className="nav-link px-0 text-white">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Data Pelatihan
                        </span>
                      </a>
                     </Link>
                    </li>
                    <li>
                      <Link href="/admin/tambahPelatihan">
                      <a href="#" className="nav-link px-0 text-white">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Tambah DataPelatihan
                        </span>
                      </a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/admin/datapelatihanbynidn">
                      <a href="#" className="nav-link px-0 text-white">
                        {" "}
                        <span className="d-none d-sm-inline">
                          Data pelatihan dengan nama
                        </span>
                      </a>
                      </Link>
                    </li> */}
                    <li className="w-100">
                     <Link href="/admin/dataPelatihan">
                     <a href="#" className="nav-link px-0 text-white">
                        {" "}
                        <span className="d-none d-sm-inline">
                        
                        </span>
                      </a>
                     </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="hugenerd"
                    width={30}
                    height={30}
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">admin</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col py-3">{children}</div>
        </div>
      </div>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
        crossOrigin="anonymous"
      ></Script>
    </div>
  );
};

export default SideBars;
