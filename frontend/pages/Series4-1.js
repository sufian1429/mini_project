import Head from "next/head";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home({ token }) {
  const addProducts = async (name, numberproduct) => {
    let product = await axios.post(
      `${config.URL}/products`,

      { name, numberproduct }
    );
    setProducts(product.data);
  };
  const CodeName = " นาฬิกา apple watch series 4";
  const copyText = () => {
    navigator.clipboard.writeText(CodeName);
  };
  const style = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 10px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
  };
  return (
    <Layout>
      <div className={styles.header}>
        <Navbar />
      </div>
      <Head>
        <title>First Page</title>
      </Head>
      <div className={styles.container}>
        <h3> Product detail </h3>
        <Image
          className={styles.immage}
          src="/Series4.jpg"
          alt="my picture"
          width={200}
          height={200}
        />
        <h3>
          {" "}
          นาฬิกา apple watch series 4{" "}
          <button onClick={copyText}> Copy </button>
        </h3>
        ชื่อแบรนด์ : apple <br></br>
        รุ่น : series 4 <br></br>
        สี : Black/white<br></br>
        ขนาดสินค้า : 45x38x10.7 cm <br></br>
        น้ำหนัก : 0.1 kg <br></br>
        การรับประกัน : 2 Years Warranty<br></br>
        <br></br>
        <div style={style}>
          <a href="/products_4" className={styles.card}>
            <h3> To cart </h3>
          </a>
        </div>
      </div>
      <br></br>
    </Layout>
  );
}

export function getServerSideProps({ req, res }) {
  // console.log("token from cookie: ",cookie.get("token"))
  // console.log('req: ', req.headers)
  return { props: { token: req.cookies.token || "" } };
}
